import { en } from "@/i18n/en";
import type { Translations } from "@/i18n/types";

/**
 * A page's copy section, resolved over the English catalog.
 *
 * The catalog types describe a PARTIAL locale: every section and most fields are
 * optional, because a translation may lag the English text. Resolving the section
 * once, here, keeps the render path free of one `?.`/`??` per string — each of
 * those is a branch, and the code-health ratchet counts them.
 *
 * The English catalog uses `satisfies` rather than a type annotation, so
 * `typeof en` is the literal catalog type: every field is required and a missing
 * translation resolves to the English text instead of `undefined`.
 */
export function pageCopy<K extends keyof typeof en>(t: Translations, key: K): (typeof en)[K] {
  return (t[key] ?? en[key]) as (typeof en)[K];
}
