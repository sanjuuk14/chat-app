import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

import { useParams } from "react-router-dom";

const VideoRoom = () => {
  let { roomId } = useParams();

  const myMeeting = async (element) => {
    const appID = 1250097066;
    const serverSecret = "6186e8a5157fc33be19b7e90a41ca6c6";

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "Please type your name!"
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      turnOnMicrophoneWhenJoining: false,
      turnOnCameraWhenJoining: false,
      container: element,
      sharedLinks: [
        {
          name: "Copy link",
          // url: `http://localhost:3000/room/${roomId}`,
          url: `${window.location.origin}/room/${roomId}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });
  };
  return (
    <div>
      <div style={{ width: "100vw", height: "100vh" }} ref={myMeeting} />
    </div>
  );
};

export default VideoRoom;
