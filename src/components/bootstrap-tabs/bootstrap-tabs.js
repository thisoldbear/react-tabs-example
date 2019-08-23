import React from "react";
import { Tabs, Tab } from "react-bootstrap-tabs";
import "./bootstrap-tabs.scss";

const BootstrapTabs = ({ tabContent }) => (
  <Tabs>
    {tabContent.map(({ label, content }) => (
      <Tab label={label}>{content}</Tab>
    ))}
  </Tabs>
);

export default BootstrapTabs;
