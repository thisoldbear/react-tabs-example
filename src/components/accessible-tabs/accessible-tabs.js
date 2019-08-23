import React from "react";
import Tabs from "react-accessible-tabs";

import "./accessible-tabs.scss";

const AccessibleTabs = ({ tabContent }) => <Tabs data={tabContent} />;

export default AccessibleTabs;
