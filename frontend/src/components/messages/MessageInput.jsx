import { useState, useEffect } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import Sentiment from "sentiment";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const sentiment = new Sentiment();
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState();

  useEffect(() => {
    const tempResult = sentiment.analyze(message);
    setResult(tempResult);
  }, [message]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-3 end-0 flex item-center pe-3"
        >
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
      <div className="App-header">
        <p className="icon ">
          {result?.score === 0 ? "😐" : result?.score < 0 ? "😞" : "🙂"}{" "}
          {result?.negative.map((item, index) => (
            <span className="negative text-red-600">{item + ","}</span>
          ))}{" "}
          {result?.positive.map((item, index) => (
            <span className="positive text-green-500">{item + ","}</span>
          ))}
        </p>

        {/* <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        /> */}
      </div>
    </form>
  );
};

export default MessageInput;
