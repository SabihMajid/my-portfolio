import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000"),

	title: {
		template: "%s | hiba Portfolio",
		default: "hiba Portfolio",
	},
	authors: {
		name: "chensokheng",
	},

	description:
		"Based in Pakistan I am a Next.js developer skilled in typescript, Phyton and React.I build high-quality web applications. Let's connect!",
	openGraph: {
		title: "hiba Portfolio",
		description:
			"Based in Pakistan I am a Next.js developer skilled in typescript, Phyton and React.I build high-quality web applications. Let's connect!",
		url: "http://localhost:3000",
		siteName: "hiba Portfolio",
		images: "https://www.facebook.com/profile.php?id=100009395642095",
		type: "website",
	},
	keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}><ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider></body>
    </html>
  );
}
