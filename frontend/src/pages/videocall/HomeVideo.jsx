import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeVideo = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function handleJoin() {
    if (input.trim() === "") {
      const newRoomId = Math.random().toString(36).substring(2, 10);
      navigate(`/room/${newRoomId}`);
    } else {
      navigate(`/room/${input}`);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      {/* <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-yellow-300 to-green-400">
        Video Meet
      </h1> */}
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-yellow-300 to-green-400 animate-pulse">
        Video Meet
      </h1>

      <input
        className="input input-bordered  px-4 py-2"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter room iId"
      />
      <div className="flex gap-2">
        <button onClick={handleJoin} className="btn border border-primary">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default HomeVideo;
