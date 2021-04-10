import React from "react";
import { useRouter } from "next/router";

import { getFilteredEvents, DateFilter } from "../../dummy-data";
import { EventList } from "../../components/events";

const EventsFilter = () => {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const year = Number(filterData[0]);
  const month = Number(filterData[1]);

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2031 ||
    year < 2020 ||
    month > 12 ||
    month < 1
  ) {
    return <p className="center">Invalid filter params</p>;
  }

  const dateFilter: DateFilter = {
    year,
    month,
  };
  const events = getFilteredEvents(dateFilter);

  return <EventList items={events} />;
};

export default EventsFilter;
