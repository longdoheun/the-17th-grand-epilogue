import AppLayout from "@/Layout/AppLayout";
import "@/styles/ImgPage/ImgPage.css";
import React from "react";
import Photo from "./Photo";

export default function ImgPage() {
  return (
    <div className="img-con">
      <AppLayout.Main>
        <div className="img-title">2025 Global Economics</div>
        <section className="img-inner-con">
          <Photo
            url={"/static/image/sajae.jpg"}
            alt={"2025 사제동행 in 수원"}
          />
          <Photo
            url={"/static/image/geLea.jpg"}
            alt={"글로벌경제X글로벌리더 체육대회 '제리전'"}
          />
          <Photo url={"/static/image/saeteo.jpg"} alt={"새내기새로배움터"} />
          <Photo url={"/static/image/OT.jpg"} alt={"신입생 OT"} />
          <Photo url={"/static/image/page.jpg"} alt={"진로간담회 next pa:GE"} />
          <Photo url={"/static/image/MT.jpg"} alt={"25학번 MT"} />
        </section>
      </AppLayout.Main>
    </div>
  );
}
