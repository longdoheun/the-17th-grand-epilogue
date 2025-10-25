import React from "react";
import "@/styles/Location/Location.css";
import Image from "next/image";

const information =
  "2025 GE:pilogue를 찾아주신 모든 분들을 위해 풍성한 메뉴로 구성된 뷔페 음식과 와인, 칵테일을 준비했습니다. 동문들과 함께 자유롭게 즐기시어 특별한 인연을 만드시기 바랍니다.";

export default function Catering() {
  return (
    //contents-cover를 사용해서 좌우 패딩을 주고. layout에서 상하패딩을 줌.
    <div className="contents-cover">
      <div className="info-cover">
        <section className="location-map">
          <div className="info-img">
            <Image
              style={{ objectFit: "cover" }}
              fill
              src={"/static/image/catering.jpeg"}
              alt={"케이터링"}
            />
          </div>
        </section>
      </div>
      <section className="info-name">
        <div className="location-name-main">Catering</div>
        <div className="location-name-sub">{information}</div>
      </section>
    </div>
  );
}
