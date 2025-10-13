import { Cinzel } from "next/font/google";

// 폰트 정의
const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cinzel", // CSS 변수로 사용하기 위해 정의
});

export const fontClasses = cinzel.variable;
