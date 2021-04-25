import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

import {
  EventSummary,
  EventLogistics,
  EventContent,
} from "../../components/eventDetail";
import { getEvent } from "../../utils/apiUtils";
import { getFeaturedEvents } from "../../utils/apiUtils";

const EventPage = ({ event }) => {
  if (!event) return <p>Event not found</p>;

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default EventPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const { eventId } = context.params;
  const event = await getEvent(Array.isArray(eventId) ? eventId[0] : eventId);

  return {
    props: { event },
    revalidate: 300,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return { paths, fallback: true };
};
