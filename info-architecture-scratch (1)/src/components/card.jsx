import React from "react";

export default function Card({ title, text, link }) {
  return (
    <>
      <div className="card">
        <h3>{title}</h3>
        <p>{text}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Click to visit the website
        </a>
      </div>
    </>
  );
}
