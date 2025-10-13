import { childrenProps } from "@/types/childrenProps";
import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import Script from "next/script";
import { KAKAO_API_KEY } from "@/lib/Config";
import "../../public/static/fonts/fonts.css";
import "./globals.css";
import Recoil from "@/Layout/Recoil";
import Background from "@/components/WavyLine/Background";
import { fontClasses } from "@/Layout/fonts";

const SourceSerif = Source_Serif_4({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  title: "The 17th Grand Epilogue",
  description:
    "성균관대학교 글로벌경제학과 17주년게필로그 행사에 여러분을 모십니다.",
  openGraph: {
    type: "website",
    url: "https://the-17th-grand-epilogue.vercel.app/",
    title: "The 17th Grand Epilogue",
    description:
      "성균관대학교 글로벌경제학과 17주년게필로그 행사에 여러분을 모십니다.",
    siteName: "Grand Epilogue",
    images: [
      {
        url: "/static/image/og-image.png",
      },
    ],
  },
};

export default function RootLayout({ children }: childrenProps) {
  return (
    <html lang="en" className={fontClasses}>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&autoload=false`}
        // strategy="beforeInteractive"
      />
      <body className={SourceSerif.className}>
        <Recoil>
          <Background />
          {children}
        </Recoil>
      </body>
    </html>
  );
}
