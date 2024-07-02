"use client"
import clsx from "clsx";
import styles from "./navigation.module.scss";
import React, { useState } from "react";
const SecondaryNavigation = ({
  tabs,
  componentMap = new Map([["1", <></>]]),
}: {
  tabs: Array<{ title: string }>;
  componentMap: Map<string, React.ReactElement>;
}) => {
  const [activeTab, setActiveTab] = useState<string>("Category name1");
  return (
    <div className={styles["navbar-container"]}>
      <ul id="controlled-tab-example" className={styles["customTabs"]}>
        {tabs.map((menu, index) => (
          <li
            key={`${menu.title}${index + 1}`}
            title={`${menu.title}${index + 1}`}
            role="button"
            className={clsx(styles["nav-link"], {
              [styles["nav-link-active"]]:
                activeTab.trim() ==
                `
                    ${menu.title}${index + 1}
                  `.trim(),
            })}
            onClick={(e) => {
              setActiveTab((e.target as EventTarget & { title: string }).title);
            }}
          >
            {menu.title}
          </li>
        ))}
      </ul>
      {activeTab && componentMap && componentMap.get(activeTab)}
    </div>
  );
};

export default SecondaryNavigation;
