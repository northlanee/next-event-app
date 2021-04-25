import { DummyEvent } from "../sharedTypes";

export const resToEvents = (rawEvents: object): DummyEvent[] => {
  const events: DummyEvent[] = [];

  for (let key in rawEvents) {
    events.push(resToEvent(key, rawEvents[key]));
  }

  return events;
};

export const resToEvent = (key: string, rawEvent): DummyEvent => ({
  id: key,
  title: rawEvent.title,
  description: rawEvent.description,
  location: rawEvent.location,
  date: rawEvent.date,
  image: rawEvent.image,
  isFeatured: rawEvent.isFeatured,
});
