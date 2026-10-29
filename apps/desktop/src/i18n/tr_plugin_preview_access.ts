import type { PluginPreviewAccessTranslations } from './types_plugin_preview_access'

/** Copy for the preview-script consent prompt and the per-plugin grant list (Capabilities › Plugins). */
export const trPluginPreviewAccess: PluginPreviewAccessTranslations = {
  previewScriptPromptTitle: (plugin: string) => `${plugin} bu sayfada betik çalıştırsın mı?`,
  previewScriptPromptBody: (plugin: string, origin: string) =>
    `${plugin}, ${origin} adresindeki önizleme tarayıcısında JavaScript çalıştırmak istiyor.`,
  previewScriptPromptRisk:
    'Betikler o sitedeki her şeyi okuyup değiştirebilir; orada giriş yaptığınız hesapların sayfaları da buna dahil.',
  previewScriptPromptRevokeHint:
    'Yalnızca bu site için geçerlidir. Yetenekler ▸ Eklentiler bölümünden izni geri alabilirsiniz.',
  previewScriptAllow: 'Bu sitede izin ver',
  previewScriptDeny: 'İzin verme',
  previewScriptAccessLabel: 'Sayfa betikleri',
  previewScriptAccessNone: 'Bir sayfada betik çalıştırmadan önce sorar',
  previewScriptRevoke: (origin: string) => `${origin} erişimini geri alın`,
  previewScriptRevoked: (plugin: string, origin: string) => `${plugin} artık ${origin} üzerinde betik çalıştıramaz.`,
  previewScriptRevokeUnsaved: (plugin: string, origin: string) =>
    `Bu değişiklik kaydedilemedi, bu yüzden yalnızca Hermes yeniden başlayana kadar geçerli. ${plugin} şimdilik ${origin} üzerinde engelli.`
}
