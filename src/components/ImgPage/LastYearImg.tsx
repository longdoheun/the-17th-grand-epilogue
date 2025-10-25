import AppLayout from "@/Layout/AppLayout";
import "@/styles/ImgPage/ImgPage.css";
import React from "react";
import Photo from "./Photo";
import Catering from "@/components/Info/Catering";
import PhotoBooth from "@/components/Info/PhotoBooth";

export default function LastYearImgPage() {
  return (
    <div className="last-img-con">
      <AppLayout.Main>
        <div className="last-img-title">Photos from 2024 GE:pilogue</div>
        <section className="last-img-inner-con">
          <Photo url={"/static/image/ge1.jpeg"} alt={""} />
          <Photo url={"/static/image/ge2.jpeg"} alt={""} />
          <Photo url={"/static/image/ge3.jpeg"} alt={""} />
          <Photo url={"/static/image/ge4.jpeg"} alt={""} />
        </section>
      </AppLayout.Main>
      <AppLayout.Highlight>
        <Catering />
        <PhotoBooth />
      </AppLayout.Highlight>
    </div>
  );
}
