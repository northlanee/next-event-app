import React from "react";
import { GetStaticProps } from "next";

import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../utils/apiUtils";

const HomePage = ({ events }) => {
  return (
    <div>
      <EventList items={events} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const events = await getFeaturedEvents();

  return {
    props: { events },
    revalidate: 1800,
  };
};

export default HomePage;
