import React from "react";
import { withRoomConsumer } from "../../Context";
import Loading from "../Loading";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import Footer from "../Footer"

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
      <Footer/>
    </>
  );
}

export default withRoomConsumer(RoomContainer);
