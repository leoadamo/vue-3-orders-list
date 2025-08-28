// ICONS
import AppIconsPerson from "~icons/app-icons/person";
import AppIconsEmail from "~icons/app-icons/email";
import AppIconsPhone from "~icons/app-icons/phone";
import AppIconsFax from "~icons/app-icons/fax";
import AppIconsCard from "~icons/app-icons/card";
import AppIconsEye from "~icons/app-icons/eye";
import AppIconsLocation from "~icons/app-icons/location";

// TYPES
import type { DefineComponent } from "vue";
import type { Icons } from "@/types/icons";

/**
 * Map of icons for contact types.
 */
const ICON_MAP: Record<keyof Icons, DefineComponent<object, object, unknown>> = {
  person: AppIconsPerson,
  email: AppIconsEmail,
  phone: AppIconsPhone,
  fax: AppIconsFax,
  card: AppIconsCard,
  eye: AppIconsEye,
  location: AppIconsLocation,
};

export { ICON_MAP };
