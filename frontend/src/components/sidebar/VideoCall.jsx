import React from "react";
import { BiLogOut, BiVideo } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const VideoCall = () => {
  const navigate = useNavigate();
  function handleVideoCall() {
    // navigate(<HomeVideo />);
    window.open("/homeVideo", "_blank");
  }
  return (
    <div className="mt-auto">
      <BiVideo
        size={24}
        style={{ marginRight: 8 }}
        className=" w-6 h-6 text-white cursor-pointer"
        onClick={handleVideoCall}
      />
    </div>
  );
};

export default VideoCall;
