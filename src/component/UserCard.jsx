import React from "react";

const UserCard = ({ user, type, onButtonClick, requestId }) => {
  const { _id, firstName, lastName, photoUrl, age, gender, about } = user;

  return (
    <div className="card bg-base-200 w-96 shadow-sm mb-10">
      <figure>
        <img src={photoUrl} alt="User profile image" />
      </figure>
      <div className="card-body text-start">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + ", " + gender}</p>}
        <p>{about}</p>
        {type == 1 && (
          <div className="card-actions justify-between my-4 pt-2">
            <button
              className="btn btn-primary"
              onClick={() => onButtonClick("ignored", _id)}
            >
              Ignore
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => onButtonClick("interested", _id)}
            >
              Interested
            </button>
          </div>
        )}
        {type == 2 && (
          <div className="card-actions justify-between my-4 pt-2">
            <button
              className="btn btn-primary"
              onClick={() => onButtonClick("rejected", requestId)}
            >
              Reject
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => onButtonClick("accepted", requestId)}
            >
              Accept
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
