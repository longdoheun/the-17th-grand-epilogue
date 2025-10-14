import React from "react";
import AppLayout from "@/Layout/AppLayout";
import Location from "@/components/Location/Location";
import Program from "@/components/Info/Program";

export default function InfoLayout() {
  return (
    <div className="location-con">
      <AppLayout.Round>
        <Program />
        <Location />
      </AppLayout.Round>
    </div>
  );
}
