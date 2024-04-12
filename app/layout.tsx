import "./globals.css";
import * as stylex from "@stylexjs/stylex";
import TopNavigation from "@/components/TopNavigation/TopNavigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html {...stylex.props(styles.html, styles.reset)} lang="en">
      <body {...stylex.props(styles.reset, styles.body)}>
        <TopNavigation />
        <main>{children}</main>
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
});
