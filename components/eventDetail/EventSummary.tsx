import React from "react";
import styles from "./EventSummary.module.css";

interface EventSummaryProps {
  title: string;
}

const EventSummary: React.FC<EventSummaryProps> = ({ title }) => {
  return (
    <section className={styles.summary}>
      <h1>{title}</h1>
    </section>
  );
};

export default EventSummary;
