import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const AllFriend = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold p-8">Your Friends</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 m-10">
        {friends.map((friend) => (
          <Link
            key={friend.id}
            to={`/friendDeties/${friend.id}`}
            className="card bg-base-100 shadow-sm"
          >
            <figure>
              <img
                className="w-40 h-40 rounded-full"
                src={friend.picture}
                alt={friend.name}
              />
            </figure>

            <div className="card-body justify-center">
              <h2 className="card-title text-center">{friend.name}</h2>

              <p className="font-bold">
                {friend.days_since_contact} Day Ago
              </p>

              <div className="flex gap-3 flex-wrap">
                {friend.tags.map((tag, index) => (
                  <div key={index} className="badge badge-accent">
                    {tag}
                  </div>
                ))}
              </div>

              <div className="card-actions justify-center flex-col-reverse">
                <div
                  className={`badge badge-outline text-white ${
                    friend.status === "overdue"
                      ? "bg-amber-400"
                      : friend.status === "on-track"
                      ? "bg-green-600"
                      : "bg-amber-800"
                  }`}
                >
                  {friend.status}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllFriend;