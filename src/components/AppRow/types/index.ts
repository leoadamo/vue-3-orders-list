// TYPES
import type { ContactTypes } from "@/types/order";
import type { Icons } from "@/types/icons";

export interface AppRowProps {
  type: "raw" | ContactTypes;
  icon: keyof Icons;
  content: string;
}
