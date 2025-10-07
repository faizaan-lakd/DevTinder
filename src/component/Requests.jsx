import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/requestSlice";
import UserCard from "./UserCard";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequests(res?.data?.data));
    } catch (err) {
      // TODO add error page.
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) {
    return;
  } else if (requests.length === 0) {
    return <h1 className="text-bold text-xl m-10">No requests found.</h1>;
  }

  return (
    <div className="text-center justify-center mt-5 mb-10 flex  flex-col items-center">
      <h1 className="text-bold text-2xl mb-5">Requests</h1>
      {requests.map((request) => {
        return (
          <UserCard
            user={request.fromUserId}
            key={request.fromUserId._id}
            type={2}
          />
        );
      })}
    </div>
  );
};

export default Requests;
