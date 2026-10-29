import type { PluginUpdateTranslations } from './types_plugin_update'

/** Copy for updating an installed plugin (Plugins tab): catalog re-pin consent and the security-scan override. */
export const trPluginUpdate: PluginUpdateTranslations = {
  folderAccess: {
    title: 'Klasör erişimi',
    hint: (name: string) => `${name} bu klasörlerdeki dosyaları okuyup değiştirebilir. İzni geri almak hemen etkili olur.`,
    revoke: 'Geri alın',
    revokeLabel: (path: string) => `${path} erişimini geri alın`,
    revoked: (name: string, path: string) => `${name} artık ${path} kullanamaz.`,
    revokeFailed: (name: string) => `${name} için klasör erişimi geri alınamadı`,
    pickerTitle: (name: string) => `${name} için bir klasör seçin`,
    pickerButton: 'Erişime izin ver',
    refusedProtected: (name: string) =>
      `${name} bu klasörü kullanamaz: içinde Hermes ayarları, anahtarlar veya eklenti verileri var. Bunları içermeyen bir klasör seçin.`,
    loadFailed: (name: string) => `${name} ile paylaşılan klasörler yüklenemedi.`
  },
  updateToPin: (sha: string) => `${sha} sürümüne güncelleyin`,
  updateFailed: (name: string) => `${name} güncellenemedi`,
  updated: (name: string) => `${name} güncel katalog sabitlemesine güncellendi. Uygulamak için ağ geçidini yeniden başlatın.`,
  updateConsentTitle: (name: string) => `${name} daha fazla izin istiyor`,
  updateConsentBody: (name: string, sha: string) =>
    `${name} eklentisinin yeni katalog sabitlemesi (${sha}), kurulu sürümde olmayan yüzeyler ekliyor. Yalnızca onlara güveniyorsanız uygulayın:`,
  updateConsentConfirm: 'Güncellemeyi uygula',
  updateScanTitle: (name: string) => `Güvenlik taraması ${name} için uyarı verdi`,
  updateScanBody: (name: string, count: number) =>
    `${name} güncellemesi dikkat gerektiren bir sonuç aldı (${count} bulgu). Her güncelleme taranır. Yalnızca kaynağa güveniyorsanız uygulayın:`,
  updateScanMore: (count: number) => `+ ${count} tane daha`,
  updateScanConfirm: 'Yine de güncelle',
  updateScanBlocked: (name: string) =>
    `Güvenlik taraması ${name} güncellemesini engelledi (tehlikeli sonuç). Bu karar geçersiz kılınamaz.`,
  updatedGit: (name: string) => `${name} son commit’e güncellendi.`
}
