/**
 * Fully typed Vue 3 declaration for vue-axe@next
 * Avoids 'any', leverages axe-core and Vue 3 types
 */
declare module "vue-axe" {
  import type { Plugin, DefineComponent } from "vue";
  import type { RunOptions, Spec, Result } from "axe-core";

  /** Options accepted by VueAxe plugin */
  export interface VueAxeOptions {
    /** Run axe automatically on mount */
    auto?: boolean;

    /** axe-core configuration object (rules, checks, etc.) */
    config?: Partial<Spec>;

    /** Options passed to axe.run() */
    runOptions?: Partial<RunOptions>;

    /** Additional axe-core plugins */
    plugins?: Array<Plugin | object>;

    /** Delay before running axe in milliseconds */
    delay?: number;
  }

  /**
   * VueAxe plugin for Vue 3
   * Usage: app.use(VueAxe, options)
   */
  const VueAxe: Plugin<VueAxeOptions>;

  /**
   * Props for VueAxePopup component
   */
  export interface VueAxePopupProps {
    /** Optional delay before rendering popup (ms) */
    delay?: number;

    /** Optional inline styles */
    style?: Partial<CSSStyleDeclaration>;

    /** Optional CSS class name */
    className?: string;

    /** Optional function to filter which results appear in the popup */
    filterResults?: (results: Result[]) => Result[];
  }

  /**
   * VueAxePopup component
   * Render inside root component for real-time accessibility feedback
   */
  export const VueAxePopup: DefineComponent<VueAxePopupProps, object, object>;

  export default VueAxe;
}
