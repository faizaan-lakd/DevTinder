import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { addFeed, removeUserFromFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data?.data));
    } catch (err) {
      // TODO add error page.
    }
  };

  const handleSendRequest = async (status, userId) => {
    try {
      await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      // TODO add error page.
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (!feed) {
    return;
  } else if (feed.length === 0) {
    return (
      <h1 className="text-bold text-xl text-center m-10">
        No new users found.
      </h1>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-[80vh] mt-5 my-16">
      <UserCard
        user={feed[0]}
        type={1}
        key={feed[0]._id}
        onButtonClick={handleSendRequest}
      />
    </div>
  );
};

export default Feed;
