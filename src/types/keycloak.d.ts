declare module '@relaxdays/keycloak' {
  interface KeycloakTokenParsed {
    given_name: string;
    family_name: string;
    name: string;
    locale: string;
  }
}

export {};
