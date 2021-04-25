import { DummyEvent, DateFilter } from "../sharedTypes";
import { resToEvents, resToEvent } from "./responseToEvent";

export const getAllEvents = async (): Promise<DummyEvent[]> => {
  const eventsData = await fetch(
    "https://next-event-app-fbf5e-default-rtdb.europe-west1.firebasedatabase.app/events.json"
  );
  const rawEvents = await eventsData.json();
  const allEvents = resToEvents(rawEvents);
  return allEvents;
};

export const getFeaturedEvents = async (): Promise<DummyEvent[]> => {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
};

export const getEvent = async (eventId: string): Promise<DummyEvent> => {
  const res = await fetch(
    `https://next-event-app-fbf5e-default-rtdb.europe-west1.firebasedatabase.app/events/${eventId}.json`
  );
  const rawEvent = await res.json();
  return resToEvent(eventId, rawEvent);
};

export const getFilteredEvents = async (
  dateFilter: DateFilter
): Promise<DummyEvent[]> => {
  const { year, month } = dateFilter;

  const events = await getAllEvents();
  return events.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });
};
