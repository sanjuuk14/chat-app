import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import VideoCall from "./VideoCall";

const Sidebar = () => {
  return (
    <div className="   border-r border-s-slate-500 p-3  flex flex-col">
      <SearchInput />
      <div className=" divider px-3"></div>
      <Conversations />

      <div className="d-flex flex justify-between">
        <div className="text-black">
          Logout
          <LogoutButton />
        </div>

        <div className="text-black">
          Video
          <VideoCall />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
