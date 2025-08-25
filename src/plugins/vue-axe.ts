import type { App } from "vue";

async function install(app: App) {
  if (import.meta.env.PROD) return;

  const { default: VueAxe, VueAxePopup } = await import("vue-axe");
  const { h, Fragment } = await import("vue");

  // Add the popup for real-time a11y checks
  app.component("VueAxePopupWrapper", {
    render() {
      return h(Fragment, [h(VueAxePopup)]);
    },
  });

  app.use(VueAxe, {});
}

export default {
  install,
};
