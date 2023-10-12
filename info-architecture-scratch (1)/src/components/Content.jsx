import React from "react";
import Card from "./card";

export default function Content({ content }) {
  return (
    <>
      <div className="content">
        {content.map((card, index) => (
          <Card key={index} title={Card.title} link={card.link} />
        ))}
      </div>
    </>
  );
}
