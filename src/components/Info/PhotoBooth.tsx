import React from "react";
import "@/styles/Location/Location.css";
import Image from "next/image";

const info =
  "동문, 교수님들과 함께 추억을 남기실 수 있도록 작은 포토 부스를 마련하였습니다. 이번 GE:pilogue에서만 만나볼 수 있는 특별한 프레임도 준비되어 있으니 특별한 사진을 남기고 가시는 건 어떨까요?";
export default function PhotoBooth() {
  return (
    //contents-cover를 사용해서 좌우 패딩을 주고. layout에서 상하패딩을 줌.
    <div className="contents-cover">
      <div className="info-cover">
        <section className="location-map">
          <div className="info-img">
            <Image
              style={{ objectFit: "cover" }}
              fill
              src={"/static/image/photoFrame.png"}
              alt={"포토부스"}
            />
          </div>
        </section>
      </div>
      <section className="info-name">
        <div className="location-name-main">Photo Booth</div>
        <div className="location-name-sub">{info}</div>
      </section>
    </div>
  );
}
