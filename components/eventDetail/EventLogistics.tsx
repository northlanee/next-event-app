import React from "react";

import { DateIcon, AddressIcon } from "../icons";
import LogisticsItem from "./LogisticsItem";
import styles from "./EventLogistics.module.css";

interface EventLogisticsProps {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
}

const EventLogistics: React.FC<EventLogisticsProps> = ({
  date,
  address,
  image,
  imageAlt,
}) => {
  const convertedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const convertedAddress = address.replace(", ", "\n");

  return (
    <section className={styles.logistics}>
      <div className={styles.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={styles.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{convertedDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{convertedAddress}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
};

export default EventLogistics;
