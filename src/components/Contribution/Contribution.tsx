import React from "react";
import "@/styles/Layout/Contribution.css";

interface ContributionProps {
  title: string;
  list: string[];
}

export default function Contribution({ title, list }: ContributionProps) {
  return (
    <div className="contricon">
      <div className="contri-title"> {title}</div>
      <section className="names">
        {list.map((name, idx) => (
          <div key={idx} className="each-name">
            {name}
          </div>
        ))}
      </section>
    </div>
  );
}
