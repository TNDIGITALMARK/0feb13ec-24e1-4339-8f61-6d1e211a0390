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

      
        {/* PHOENIX_EDITOR_INJECTION_START */}
        {(process.env.NODE_ENV === 'development' ||
          process.env.NEXT_PUBLIC_ENABLE_PHOENIX_EDITOR === 'true') && (
          <>
            <link rel="stylesheet" href="/phoenix-editor/helper.css?v=1761079364634" />
            <script
              src="/phoenix-editor/sourceMapTracker.js?v=1761079364634"
              data-phoenix-sourcemap="true"
              defer
            />
            <script
              src="/phoenix-editor/helper.js?v=1761079364634"
              data-phoenix-enabled="true"
              defer
            />
            <script
              src="/phoenix-editor/visualEditExtension.js?v=1761079364634"
              data-phoenix-visual-edit="true"
              defer
            />
            <script
              src="/phoenix-editor/contextIntegration.js?v=1761079364634"
              data-phoenix-context="true"
              defer
            />
            <script
              src="/phoenix-editor/inlineTextEditor.js?v=1761079364634"
              data-phoenix-text-edit="true"
              defer
            />
          </>
        )}
        {/* PHOENIX_EDITOR_INJECTION_END */}
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
