import React from "react";

import styles from "./LogisticsItem.module.css";

interface LogisticsItemProps {
  icon: React.FC;
  children: React.ReactNode;
}

const LogisticsItem: React.FC<LogisticsItemProps> = ({
  icon: Icon,
  children,
}) => {
  return (
    <li className={styles.item}>
      <span className={styles.icon}>
        <Icon />
      </span>
      <span className={styles.content}>{children}</span>
    </li>
  );
};

export default LogisticsItem;
