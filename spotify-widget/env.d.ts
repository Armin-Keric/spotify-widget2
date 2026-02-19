/// <reference types="vite/client" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_KEY: string
    readonly VITE_SHARED_SECRET: string
    readonly VITE_USER_NAME: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}