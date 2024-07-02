"use client";
import clsx from "clsx";
import styles from "./navigation.module.scss";
import React, { useState } from "react";

/**
 * SecondaryNavigation component renders a tabbed navigation interface.
 *
 * @param {Array<{ title: string }>} tabs - Array of tabs, each with a title.
 * @param {Map<string, React.ReactElement>} componentMap - Map of tab titles to their corresponding components.
 * @returns {JSX.Element} The rendered SecondaryNavigation component.
 */
const SecondaryNavigation: React.FC<{
  tabs: Array<{ title: string }>;
  componentMap: Map<string, React.ReactElement>;
}> = ({ tabs, componentMap = new Map([["1", <></>]]) }) => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState<string>("Category name1");

  return (
    <div className={styles["navbar-container"]}>
      {/* Tab Navigation List */}
      <ul id="controlled-tab-example" className={styles["customTabs"]}>
        {tabs.map((menu, index) => (
          <li
            key={`${menu.title}${index + 1}`}
            title={`${menu.title}${index + 1}`}
            role="button"
            className={clsx(styles["nav-link"], {
              [styles["nav-link-active"]]:
                activeTab.trim() === `${menu.title}${index + 1}`.trim(),
            })}
            onClick={(e) => {
              // Update the active tab on click
              setActiveTab((e.target as EventTarget & { title: string }).title);
            }}
          >
            {menu.title}
          </li>
        ))}
      </ul>
      {/* Render the component corresponding to the active tab */}
      {activeTab && componentMap && componentMap.get(activeTab)}
    </div>
  );
};

export default SecondaryNavigation;
