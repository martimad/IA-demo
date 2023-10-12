import "./styles.css";
import React, { useState } from "react";
import Tabs from "./components/Tabs";
import Content from "./components/Content";

export default function App() {
  
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Tab1", "Tab 2", "Tab 3"];
  const content = [
    [
      {
        title: "Test Card",
        text: "Text to show up next to link",
        link: "https://example.com/card1"
      },
      {
        title: "Card 2",
        text: "Description for Card 2",
        link: "https://example.com/card2"
      }
    ],
    [
      {
        title: "Card 3",
        text: "Description for Card 3",
        link: "https://example.com/card3"
      },
      {
        title: "Card 4",
        text: "Description for Card 4",
        link: "https://example.com/card4"
      }
    ],
    [
      {
        title: "Card 5",
        text: "Description for Card 5",
        link: "https://example.com/card5"
      }
    ]
  ];

  return (
    <>
    <div className="App">
      <div className="sidebar">
        <Tabs tabs={tabs} activeTab={activeTab} changeTab={setActiveTab} />
      </div>
      <Content content={content[activeTab]} />
    </div>
    </>
  );
}