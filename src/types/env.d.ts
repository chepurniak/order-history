interface ImportMeta {
  readonly env: {
    readonly VITE_API_BASE_URL: string;
    readonly BASE_URL: string;
    readonly DEV: boolean;
    readonly MODE: string;
    readonly PROD: boolean;
    readonly VITE_ENV: string;
    readonly VITE_KEYCLOAK_CLIENT: string;
    readonly VITE_KEYCLOAK_REALM: string;
    readonly VITE_KEYCLOAK_URL: string;
    readonly VITE_API_DOCUMENTS_API_BASE_URL: string;
    readonly VITE_API_RETOURE_BASE_URL: string;
    readonly VITE_APP_BASE_URL: string;
    readonly VITE_ELK_API_KEY: string;
  };
}
