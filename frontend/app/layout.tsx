import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CakeNotes",
  description:
    "an all-in-one collaborative notetaking, coding, and whiteboarding tool",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/CakeNotesDark.png",
        href: "/CakeNotesDark.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/CakeNotesDark.png",
        href: "/CakeNotesDark.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="cakenotes-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
