import React, { use, useContext } from "react";
import { useParams } from "react-router";
import callimg from "../../assets/call.png";
import textimg from "../../assets/text.png";
import videoimg from "../../assets/video.png";
import { MdDelete } from "react-icons/md";
import { TimelineContext } from "../../context/Context";
import { toast } from "react-toastify";
const friendsPromise = fetch("/data.json").then((res) => res.json());

const FriendDetise = () => {
  const { id } = useParams();
  // console.log(id, "id");
  const friends = use(friendsPromise);
  // console.log(friends, "friends");
  const expectedFriend = friends.find((friend) => friend.id == id);
  // console.log(expectedFriend, "expectedFriend");
  const { setTimelineData } = useContext(TimelineContext);

  const handleAddData = (type, friendDetails) => {
    const newData = {
      id: Date.now(),
      type: type,
      name: friendDetails.name,
      date: new Date().toISOString().split("T")[0],
    };

    setTimelineData((prev) => [...prev, newData]);
    console.log(newData);

    toast.success(`${type} done`);
  };

  return (
    <div className="p-5 md:p-10 lg:p-20 flex flex-col lg:flex-row gap-10">
      <div className="w-[40%] bg-base-300 p-10 shadow-xl ">
        <div className="flex justify-center  ">
          <img
            src={expectedFriend.picture}
            alt=""
            className="w-40 h-40 rounded-full items-center"
          />
        </div>
        <h2 className="text-3xl font-bold mb-5">{expectedFriend.name}</h2>
        <div className="flex gap-3 flex-wrap">
          {expectedFriend.tags.map((tag, index) => (
            <div key={index} className="badge badge-accent mb-3">
              {tag}
            </div>
          ))}
        </div>

        <div
          className={`badge badge-outline text-white ${
            expectedFriend.status === "overdue"
              ? "bg-amber-400"
              : expectedFriend.status === "on-track"
                ? "bg-green-600"
                : "bg-amber-800"
          }`}
        >
          {expectedFriend.status}
        </div>
        <p className="">{expectedFriend.bio}</p>
        <h2> Email:{expectedFriend.email}</h2>
        <div className="mt-5">
          <h2>
            <button className="btn  bg-base-200 text-center text-nowrap  py-10 px-50 font-semibold mt-5">
              Snooze 2 weeks
            </button>
          </h2>

          <h2>
            <button
              className=" btn btn-w-full bg-base-200 text-center text-xl py-10 px-50
         font-semibold mt-5"
            >
              Archive
            </button>
          </h2>

          <h2 className="">
            <button
              className="btn btn-w-full bg-base-200 text-center py-10 px-50 text-red-600 font-semibold
         mt-5 "
            >
              <MdDelete /> Delete
            </button>
          </h2>
        </div>
      </div>

      <div className="w-[60%]">
        <div className="grid grid-cols-3 justify-center items-center gap-7 pl-10 mb-20 ">
          <div className="bg-base-300 shadow-xl p-10">
            <h2 className="text-xl font-bold text-center">62</h2>
            <h2 className="font-semibold">days since cont actd</h2>
          </div>
          <div className="bg-base-300 shadow-xl p-10">
            <h2 className="text-3xl font-bold text-center">30</h2>
            <h2 className="font-semibold text-center ">Goal(Day)</h2>
          </div>
          <div className="bg-base-300 shadow-xl p-10">
            <h2 className="text-2xl font-bold text-center">
              {expectedFriend.next_due_date}
            </h2>

            <h2 className="font-semibold text-center">next due date</h2>
          </div>
        </div>

        <div className="flex justify-between gap-10 bg-base-300 shadow-xl p-10 m-10  w-full mb-20">
          <div className="">
            <h2 className="text-xl font-bold">Relation Goal</h2>
            <h2>connect ever 30 days</h2>
          </div>
          <div>
            <button className="btn px-10 btn-error">Edit</button>
          </div>
        </div>

        <div className="bg-base-100 w-full ml-10 shadow-xl py-7">
          <h2 className="text-2xl">Quick Check-In</h2>
          <div className="flex justify-between gap-3 my-10">
            <button
              onClick={() => handleAddData("Voice Call", expectedFriend)}
              className="btn py-20 px-20"
            >
              {" "}
              <img src={callimg} alt="" />
              <br />
              Call
            </button>

            <button
              onClick={() => handleAddData("Text message", expectedFriend)}
              className="btn py-20 px-20"
            >
              {" "}
              <img src={textimg} alt="" className="" />
              <h2>Text</h2>
            </button>

            <button
              onClick={() => handleAddData("video call", expectedFriend)}
              className="btn py-20 px-20"
            >
              <img src={videoimg} alt="" className="" />
              <h2>video</h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetise;
