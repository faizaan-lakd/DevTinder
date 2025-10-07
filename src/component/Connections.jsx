import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import UserCard from "./UserCard";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res?.data));
    } catch (err) {
      // TODO add error page.
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) {
    return;
  } else if (connections.length === 0) {
    return <h1 className="text-bold text-2xl">No connections found.</h1>;
  }

  return (
    <div className="text-center justify-center mt-5 mb-10 flex  flex-col items-center">
      <h1 className="text-bold text-2xl mb-5">Connections</h1>
      {connections.map((connection) => {
        return <UserCard user={connection} type={0} key={connection._id} />;
      })}
    </div>
  );
};

export default Connections;
