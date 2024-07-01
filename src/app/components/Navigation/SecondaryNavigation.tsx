import clsx from "clsx";
import styles from "./navigation.module.scss";
const SecondaryNavigation = ({
  tabs,
  activeTab,
  setActiveTab,
}: {
  tabs: Array<{ title: string }>;
  activeTab: string;
  setActiveTab: React.Dispatch<string>;
}) => {
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
    </div>
  );
};

export default SecondaryNavigation;
