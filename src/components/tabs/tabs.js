import React from "react";
import { Tab, Tabs as ReactTabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Tabs = ({ tabContent }) => (
  <ReactTabs>
    <TabList>
      {tabContent.map(({ label }) => (
        <Tab>{label}</Tab>
      ))}
    </TabList>
    {tabContent.map(({ content }) => (
      <TabPanel>{content}</TabPanel>
    ))}
  </ReactTabs>
);

export default Tabs;
