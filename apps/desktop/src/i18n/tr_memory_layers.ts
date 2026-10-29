import type { MemoryLayersTranslations } from './types_memory_layers'

// Settings > Memory & Context and Command Center > Maintenance (#145175).
export const trMemoryLayers: MemoryLayersTranslations = {
  activeProvider: 'Etkin bellek sağlayıcısı',
  selectedProvider: 'Seçili bellek sağlayıcısı',
  selectedDesc: current => `Henüz etkin değil: bu seçim kaydedilene kadar oturumlar ${current} kullanmaya devam eder.`,
  builtinMemory: 'yalnızca yerleşik bellek',
  noProvider: 'Yok — yalnızca yerleşik bellek',
  noProviderDesc:
    'Hermes yalnızca aşağıdaki yerleşik katmanı kullanır. Harici bir sağlayıcı eklemek için Ayarlar › Bellek ve Bağlam bölümünden birini seçin.',
  providerDesc: name => `${name}, yerleşik katmanın üzerine her oturuma kendi hatırlamasını ekler.`,
  providerNotReadyDesc: name =>
    `${name} kayıtlı sağlayıcıdır ama hazır olana kadar hatırlama eklemez. Yerleşik katman her iki durumda da çalışır.`,
  providerUnknownDesc: name => `${name} kayıtlı sağlayıcıdır; Hermes hazır olup olmadığını okuyamadı.`,
  statusUnavailable: 'Bellek durumu alınamadı',
  statusUnavailableDesc: 'Hangi bellek sağlayıcısının etkin olduğu veya hazır olup olmadığı okunamadı.',
  retry: 'Yeniden deneyin',
  status: {
    ready: 'hazır',
    needs_config: 'kurulum gerekiyor',
    unavailable: 'kullanılamıyor',
    missing: 'kurulu değil'
  },
  builtinLayer: 'Yerleşik katman',
  onByDefault: 'Varsayılan olarak açık',
  on: 'Açık',
  off: 'Kapalı',
  onlyFile: file => `yalnızca ${file}`,
  builtinDesc:
    'MEMORY.md ve USER.md, Hermes’in kendi belleğidir ve harici bir sağlayıcıdan bağımsızdır. İkisi de varsayılan olarak oturumlara yüklenir; Bellek ve Bağlam bölümündeki bellek ve kullanıcı profili anahtarları her birini ayrı ayrı kapatır. Bir sağlayıcı bu katmana ekleme yapar; onu asla değiştirmez.'
}
