import type { ReactNode } from "react";
import "../globals.css";

type Props = Readonly<{
  children: ReactNode;
}>;

export default function RootIndexLayout({ children }: Props) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
