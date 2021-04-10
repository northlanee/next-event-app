import React from "react";
import { useRouter } from "next/router";

import { getEventById } from "../../dummy-data";
import {
  EventSummary,
  EventLogistics,
  EventContent,
} from "../../components/eventDetail";

const EventPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId as string;

  const event = getEventById(eventId);
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
