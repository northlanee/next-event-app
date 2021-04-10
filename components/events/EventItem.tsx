import React from "react";

import { Button } from "../ui";
import { DateIcon, AddressIcon, ArrowRightIcon } from "../icons";
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
            <DateIcon />
            <time>{convertedDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{convertedAddress}</address>
          </div>
        </div>

        <div className={styles.actions}>
          <Button link={`/events/${id}`}>
            <span>Explore event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
