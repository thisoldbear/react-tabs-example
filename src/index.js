import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Heading from "./components/heading/heading";
import Tabs from "./components/tabs/tabs";
import AccessibleTabs from "./components/accessible-tabs/accessible-tabs";
import BootstrapTabs from "./components/bootstrap-tabs/bootstrap-tabs";

function App() {
  const tabContent = [
    {
      label: "Tab 1",
      content: <Heading text="Tab Content 1" />
    },
    {
      label: "Tab 2",
      content: <Heading text="Tab Content 2" />
    }
  ];

  return (
    <div className="App">
      <Tabs tabContent={tabContent} />
      <AccessibleTabs tabContent={tabContent} />
      <BootstrapTabs tabContent={tabContent} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
