import React from "react";

interface ProgramListProps {
  content: string;
  time: string;
}
export default function ProgramList({ content, time }: ProgramListProps) {
  return (
    <section className="program-list">
      <div className="program-content">{content}</div>
      <div className="program-time">{time}</div>
    </section>
  );
}
