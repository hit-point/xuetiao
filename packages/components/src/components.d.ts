import * as components from './index';
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    HpButton: typeof components.Button;
    HpIcon: typeof components.Icon;
  }
}
export {};