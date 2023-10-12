import React from "react";

export default function Tabs ({ tabs, activeTab, changeTab }){
  return(
    <>
  <div className="tabs">
    {tabs.map((tab, index) => (
      <div
        key={index}
        className={activeTab === index ? "tab active" : "tab"}
        onClick={() => changeTab(index)}
      >
        {tab}
      </div>
    ))}
  </div>
  </>
);
    }
