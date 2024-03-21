import "./globals.css";
import Link from 'next/link';
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import { EXAMPLE_PATH, CMS_NAME } from "@/lib/constants";

export const metadata = {
  title: `Next.js and ${CMS_NAME} Example`,
  description: `This is a blog built with Next.js and ${CMS_NAME}.`,
};

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

function Header() {
  return (
    <header className="sticky z-50 top-0 bg-neutral-50/50 backdrop-blur w-full shadow-md">
      <div className="container mx-auto px-3">
        <div className="py-4 lg:py-6 flex flex-col lg:flex-row items-center">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <Link
              href="/"
              className="pt-2"
            >
              <img src='logo-long.svg' alt="Back to homepage" className="h-14"></img>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <div className="container mx-auto px-5">
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Built with Next.js.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://nextjs.org/docs"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Read Documentation
            </a>
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.variable + " " + dmSerifDisplay.variable}>
      <body>
      <Header />
        <section className="min-h-screen">
          <main>{children}</main>
        </section>
      </body>
    </html>
  );
}
