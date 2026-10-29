// The catalog blurb picker.
//
// A catalog entry carries the original English `description` plus an optional
// `description_tr` (the Turkish copy the catalogue ships). Web reads the raw
// snake_case field from the API; the desktop maps it to `descriptionTr` at the
// gateway boundary, the dashboard does not, so both spellings are accepted.
import { useI18n } from "@/i18n";

export interface CatalogDescriptionSource {
  description?: string | null;
  descriptionTr?: string | null;
  description_tr?: string | null;
}

/** The blurb for one catalog entry, in the given UI locale. */
export function catalogDescription(
  entry: CatalogDescriptionSource | null | undefined,
  locale: string,
): string {
  if (!entry) return "";
  if (locale === "tr") {
    const localized = entry.descriptionTr ?? entry.description_tr;
    if (typeof localized === "string" && localized.trim()) return localized;
  }
  return entry.description ?? "";
}

/** Hook form, for components that already sit under the I18n provider. */
export function useCatalogDescription(
  entry: CatalogDescriptionSource | null | undefined,
): string {
  const { locale } = useI18n();
  return catalogDescription(entry, locale);
}
