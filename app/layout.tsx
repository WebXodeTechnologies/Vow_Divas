import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./provider";

export const metadata: Metadata = {
  title: "Vow Divas | Enthuse the Beauty Within",
  icons: [
    { rel: "icon", url: "/VowDivalogo.svg", sizes: "64x64" },
    { rel: "apple-touch-icon", url: "/VowDivalogo.svg", sizes: "180x180" },
    { rel: "shortcut icon", url: "/VowDivalogo.svg", sizes: "512x512" },
  ],
  description:
    "Vow Divas is a premium makeup artistry brand that enhances your beauty with elegance and style. Experience luxury makeup services for every occasion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="white"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
