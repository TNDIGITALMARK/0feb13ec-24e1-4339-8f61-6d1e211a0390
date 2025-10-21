import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryProvider } from "@/components/query-provider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  variable: "--font-primary",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "LuckyGen - Ultimate Lottery Number Generator",
  description: "Generate random lottery numbers, track your encounters, and analyze patterns with our intelligent lottery companion system.",
  keywords: ["lottery", "number generator", "powerball", "mega millions", "lottery tracker"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>

      </head>
      <body
        className={`${poppins.variable} antialiased`}
      >
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider>
              {children}
              <Toaster />
              <Sonner />
            </TooltipProvider>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
