import { ConjunctiveNormalForm } from '@relaxdays/keycloak';

declare module 'vue-router' {
  interface RouteMeta {
    roles?: ConjunctiveNormalForm;
    title?: string;
    back?: string;
  }
}
