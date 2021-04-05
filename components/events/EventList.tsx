import React from "react";

import { DummyEvent } from "../../dummy-data";
import EventItem from "./EventItem";
import styles from "./EventList.module.css";

interface EventListProps {
  items: DummyEvent[];
}

const EventList: React.FC<EventListProps> = ({ items }) => {
  const renderEvents = () =>
    items.map((event) => <EventItem key={event.id} item={event} />);

  return <ul className={styles.list}>{renderEvents()}</ul>;
};

export default EventList;
