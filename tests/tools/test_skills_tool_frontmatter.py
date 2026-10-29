"""Tests for ``agent.skill_utils.strip_description_tr`` — the model-facing frontmatter projection.

``description_tr`` is the Turkish copy of a skill's description: a UI-only field.
The model-facing skill content must not carry it, and the served text must be
byte-identical to the file as it was BEFORE the translation was added.
"""

import json

from agent.skill_utils import parse_frontmatter, strip_description_tr


def test_removes_the_top_level_key_line():
    content = (
        "---\n"
        "name: demo\n"
        "description: English.\n"
        "description_tr: 'Turkce.'\n"
        "version: 1.0.0\n"
        "---\n"
        "\n"
        "Body.\n"
    )
    assert strip_description_tr(content) == (
        "---\n"
        "name: demo\n"
        "description: English.\n"
        "version: 1.0.0\n"
        "---\n"
        "\n"
        "Body.\n"
    )


def test_keeps_every_other_frontmatter_field():
    content = (
        "---\n"
        "name: demo\n"
        "description: English.\n"
        "description_tr: 'Turkce.'\n"
        "version: 2.2.1\n"
        "author: Someone\n"
        "license: MIT\n"
        "metadata:\n"
        "  hermes:\n"
        "    tags: [a, b]\n"
        "---\n"
        "Body.\n"
    )
    result = strip_description_tr(content)
    assert "description_tr" not in result
    for kept in ("name: demo", "description: English.", "version: 2.2.1",
                 "author: Someone", "license: MIT", "metadata:", "tags: [a, b]"):
        assert kept in result


def test_body_mentions_are_untouched():
    content = (
        "---\n"
        "name: demo\n"
        "description_tr: 'Turkce.'\n"
        "---\n"
        "The description_tr field is a UI-only copy.\n"
    )
    result = strip_description_tr(content)
    assert "The description_tr field is a UI-only copy." in result
    assert "description_tr:" not in result


def test_content_without_the_key_is_returned_unchanged():
    content = "---\nname: demo\ndescription: English.\n---\n\nBody.\n"
    assert strip_description_tr(content) == content


def test_content_without_frontmatter_is_returned_unchanged():
    content = "Just a body mentioning description_tr in prose.\n"
    assert strip_description_tr(content) == content


def test_unclosed_frontmatter_is_returned_unchanged():
    content = "---\nname: demo\ndescription_tr: 'Turkce.'\n"
    assert strip_description_tr(content) == content


def test_a_nested_description_tr_key_survives():
    """A nested key belongs to a sub-mapping, not to the top-level description."""
    content = (
        "---\n"
        "name: demo\n"
        "metadata:\n"
        "  hermes:\n"
        "    description_tr: 'Ic aciklama.'\n"
        "---\n"
        "Body.\n"
    )
    assert strip_description_tr(content) == content


def test_a_similarly_named_key_survives():
    content = (
        "---\n"
        "name: demo\n"
        "description_tr_extra: keep me\n"
        "my_description_tr: keep me too\n"
        "---\n"
        "Body.\n"
    )
    assert strip_description_tr(content) == content


def test_a_block_scalar_value_goes_with_its_key():
    content = (
        "---\n"
        "name: demo\n"
        "description: English.\n"
        "description_tr: |\n"
        "  Turkce aciklama.\n"
        "  Ikinci satir.\n"
        "version: 1.0.0\n"
        "---\n"
        "Body.\n"
    )
    result = strip_description_tr(content)
    assert "description_tr" not in result
    assert "Turkce aciklama." not in result
    assert "Ikinci satir." not in result
    assert "version: 1.0.0" in result


def test_a_quoted_key_is_recognised():
    content = (
        "---\n"
        "name: demo\n"
        "'description_tr': 'Turkce.'\n"
        "version: 1.0.0\n"
        "---\n"
        "Body.\n"
    )
    result = strip_description_tr(content)
    assert "description_tr" not in result
    assert "version: 1.0.0" in result


def test_a_bom_prefixed_file_keeps_its_bom():
    content = "\ufeff---\nname: demo\ndescription_tr: 'Turkce.'\n---\nBody.\n"
    result = strip_description_tr(content)
    assert result.startswith("\ufeff---")
    assert "description_tr" not in result


def test_the_result_still_parses_as_frontmatter():
    """The projected text is still a valid SKILL.md frontmatter block."""
    content = (
        "---\n"
        "name: demo\n"
        "description: English.\n"
        "description_tr: 'Turkce.'\n"
        "version: 1.0.0\n"
        "---\n"
        "Body.\n"
    )
    frontmatter, body = parse_frontmatter(strip_description_tr(content))
    assert frontmatter["name"] == "demo"
    assert frontmatter["description"] == "English."
    assert frontmatter["version"] == "1.0.0"
    assert "description_tr" not in frontmatter
    assert "Body." in body


def test_skill_view_never_serves_the_turkish_copy(tmp_path, monkeypatch):
    """The tool result joins the transcript: it must not carry the UI-only field."""
    from tools import skills_tool

    skill_dir = tmp_path / "demo"
    skill_dir.mkdir()
    (skill_dir / "SKILL.md").write_text(
        "---\n"
        "name: demo\n"
        "description: English description.\n"
        "description_tr: 'Turkce aciklama.'\n"
        "---\n"
        "\n"
        "Body text.\n",
        encoding="utf-8",
    )
    monkeypatch.setattr(skills_tool, "skill_search_dirs", lambda: ([("user", skill_dir.parent)], skill_dir.parent))

    payload = json.loads(skills_tool.skill_view("demo"))

    assert payload["success"] is True
    assert "description_tr" not in payload["content"]
    assert "Turkce aciklama." not in payload["content"]
    assert "Body text." in payload["content"]
