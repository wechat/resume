/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare interface Window {
  fetch: any
}

declare interface ObjectType {
  [key: string]: any
}

declare interface IRequestOptions {
  url: string
  method: string
  param?: any
  data?: any
  headers?: ObjectType
  withCredentials?: boolean
}
