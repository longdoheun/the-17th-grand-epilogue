import React from "react";
import Link from "next/link";
import SquareBtn from "@/Layout/SquareBtn";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  return (
    <div id="form" className="main-page-info">
      <div className="main-subtext">2025년 11월 28일 금요일 19:00 ~ 21:30</div>
      <div className="main-subtext">
        성균관대학교 600주년 기념관 5층 조병두홀
      </div>
      <section className="sign-up">
        <SquareBtn
          context="졸업생 신청"
          onClickEvent={() =>
            router.push("https://forms.gle/d8TER72UeJTP6iu66")
          }
        />
        <SquareBtn
          context="재학생 신청"
          onClickEvent={() =>
            router.push("https://forms.gle/r9jrgJxuetEBMB8p8")
          }
        />
      </section>
    </div>
  );
}
