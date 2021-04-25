import React from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

import { EventList } from "../../components/events";
import { getFilteredEvents } from "../../utils/apiUtils";
import { DateFilter } from "../../sharedTypes";

const EventsFilter = ({ hasError = false, events }) => {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  if (hasError) {
    return <p className="center">Invalid filter params</p>;
  }

  return <EventList items={events} />;
};

export default EventsFilter;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const filterData = params.slug;

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
    return { props: { hasError: true } };
  }

  const dateFilter: DateFilter = {
    year,
    month,
  };

  const events = await getFilteredEvents(dateFilter);

  return {
    props: { events },
  };
};
