// This page only renders when the app is built statically (output: 'export')
import { redirect } from "~/i18n/routing";

export default function RootPage() {
  redirect({ href: "./", locale: "en" });
}
