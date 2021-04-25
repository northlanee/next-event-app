import React from "react";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";

import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { getAllEvents } from "../../utils/apiUtils";

const EventsPage = ({ events }) => {
  const router = useRouter();

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

export const getStaticProps: GetStaticProps = async () => {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
    revalidate: 60,
  };
};
