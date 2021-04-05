import React from "react";
import Link from "next/link";

import { DummyEvent } from "../../dummy-data";
import styles from "./EventItem.module.css";

interface EventListProps {
  item: DummyEvent;
}

const EventItem: React.FC<EventListProps> = ({ item }) => {
  const { id, image, title, date, location } = item;

  const convertedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const convertedAddress = location.replace(", ", "\n");

  return (
    <li className={styles.item}>
      <img src={"/" + image} alt={title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <time>{convertedDate}</time>
          </div>
          <div className={styles.address}>
            <address>{convertedAddress}</address>
          </div>
        </div>

        <div className={styles.actions}>
          <Link href={`/events/${id}`}>Explore event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
