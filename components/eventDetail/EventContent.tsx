import React from "react";

import styles from "./EventContent.module.css";

interface EventContentProps {
  children: React.ReactNode;
}

const EventContent: React.FC<EventContentProps> = ({ children }) => {
  return <section className={styles.content}>{children}</section>;
};

export default EventContent;
