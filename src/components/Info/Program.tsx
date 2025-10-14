import React from "react";
import "@/styles/Layout/Info.css";
import ProgramList from "./ProgramList";

export default function Program() {
  return (
    <div className="contents-cover">
      <section className="location-name">
        <div className="location-name-main">Program</div>
        <div className="location-name-sub">GE:pilogue 교류의 장에서는</div>
        <div className="location-name-sub">
          주류와 다양한 먹거리가 제공됩니다.
        </div>
      </section>
      <div className="program-cover">
        <ProgramList
          content={"1. 행사장 입장 및 포토부스 이용"}
          time={"19:00-19:30"}
        />
        <ProgramList content={"2. 개회식"} time={"19:30-19:40"} />
        <ProgramList content={"3. GE:pilogue 교류의 장"} time={"19:40-20:40"} />
        <ProgramList content={"4. 선후배 네트워킹"} time={"20:40-21:20"} />
        <ProgramList content={"5. 폐회식"} time={"21:20-21:30"} />
      </div>
    </div>
  );
}
