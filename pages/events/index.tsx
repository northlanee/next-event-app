import React from "react";
import { useRouter } from "next/router";

import EventList from "../../components/events/EventList";
import { getAllEvents } from "../../dummy-data";
import EventsSearch from "../../components/events/EventsSearch";

const EventsPage = () => {
  const router = useRouter();
  const events = getAllEvents();

  const onSearch = (year: string, month: string) => {
    const path = `/events/${year}/${month}`;

    router.push(path);
  };

  return (
    <>
      <EventsSearch onSearch={onSearch} />
      <EventList items={events} />
    </>
  );
};

export default EventsPage;
