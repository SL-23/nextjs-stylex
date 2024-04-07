/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 */

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
      <body {...stylex.props(styles.reset, styles.body)}>{children}</body>
    </html>
  );
}

const styles = stylex.create({
  html: {
    colorScheme: "light dark",
  },
  reset: {
    minHeight: "100%",
    margin: 0,
    padding: 0,
  },
  body: {
    color: `rgba(${$.foregroundR}, ${$.foregroundG}, ${$.foregroundB}, 1)`,
    backgroundImage: {
      default: "linear-gradient(to bottom, rgb(214, 219, 220), white)",
    },
  },
});
