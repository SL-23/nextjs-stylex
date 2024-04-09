"use client";
import "./globals.css";
import { globalTokens as $ } from "@/app/globalTokens.stylex";
import * as stylex from "@stylexjs/stylex";
import TopNavigation from "@/components/TopNavigation/TopNavigation";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const isHomePage = pathName === "/";

  return (
    <html {...stylex.props(styles.html, styles.reset)} lang="en">
      <body {...stylex.props(styles.reset, styles.body)}>
        <TopNavigation />
        <main {...stylex.props(!isHomePage && styles.applyLayoutPadding)}>
          {children}
        </main>
      </body>
    </html>
  );
}

const styles = stylex.create({
  html: {
    colorScheme: "light dark",
  },
  reset: {
    fontFamily: "Cormorant Garamond, serif",
    color: "black",
    minHeight: "100%",
    margin: 0,
    padding: 0,
  },
  body: {
    backgroundColor: "white",
  },
  applyLayoutPadding: {
    padding: "4rem 1rem",
  },
});
