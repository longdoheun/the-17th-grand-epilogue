"use client";
import AppLayout from "@/Layout/AppLayout";
import Footer from "@/Layout/Footer";
import Header from "@/Layout/Header";
import Contribution from "@/components/Contribution/Contribution";
import Information from "@/components/Invitation/Information";
import { MOVIE, INFORMATION, PHOTO } from "@/lib/InformationText";

export default function About() {
  return (
    <>
      <AppLayout.Scene>
        <Header />
        <Information title={"케이터링"} context={INFORMATION} />
        <Information title={"영상제"} context={MOVIE} />
        <Information title={"포토부스"} context={PHOTO} />
        <section className="info-con">
          <AppLayout.Theme>
            <div className="incon-title">GE:pilogue를 위해 힘써주신 분들</div>
            <section className="contrid">
              <Contribution
                title="회장단"
                list={["정회장 24 손창우", "부회장 24 호원준"]}
              />
              <Contribution
                title="문화부"
                list={[
                  "부장 24 김지안",
                  "차장 24 김수민",
                  "부원 25 유준우",
                  "부원 25 이동민",
                  "부원 25 정다현",
                ]}
              />
              <Contribution
                title="운영부"
                list={[
                  "부장 24 김혜민",
                  "차장 24 황지원",
                  "부원 25 박수빈",
                  "부원 25 임동혁",
                  "부원 25 장서연",
                ]}
              />
              <Contribution
                title="홍보부"
                list={[
                  "부장 24 김도연",
                  "차장 24 김승주",
                  "차장 24 박하준",
                  "부원 25 고해령",
                  "부원 25 김태희",
                  "부원 25 최윤서",
                ]}
              />
              <Contribution
                title="재정부"
                list={[
                  "부장 24 김채현",
                  "차장 24 정의헌",
                  "부원 25 박소현",
                  "부원 25 임정효",
                ]}
              />
              <Contribution
                title="그리고..."
                list={[
                  "이밖에 게필로그에 참석하여 이 자리를 빛내주신 모든분들께 감사 인사를 전합니다.",
                ]}
              />
            </section>
          </AppLayout.Theme>
        </section>
      </AppLayout.Scene>
    </>
  );
}
