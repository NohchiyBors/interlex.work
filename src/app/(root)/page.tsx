import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { baseUrl } from "@/lib/i18n";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
};

export default function IndexPage() {
  redirect("/en");
}
