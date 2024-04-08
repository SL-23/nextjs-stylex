import "./globals.css";
import { globalTokens as $ } from "@/app/globalTokens.stylex";
import * as stylex from "@stylexjs/stylex";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html {...stylex.props(styles.html, styles.reset)} lang="en">
      {/* <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Figtree:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&display=swap')
      </style> */}
      <body {...stylex.props(styles.reset, styles.body)}>{children}</body>
    </html>
  );
}

const styles = stylex.create({
  html: {
    colorScheme: "light dark",
  },
  reset: {
    fontFamily: "Cormorant Garamond, serif",
    minHeight: "100%",
    margin: 0,
    padding: 0,
  },
  body: {
    backgroundColor: "white",
  },
});
