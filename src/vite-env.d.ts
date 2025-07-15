/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_GITHUB_URL: string
  readonly VITE_TELEGRAM_URL: string
  readonly VITE_EMAIL_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
