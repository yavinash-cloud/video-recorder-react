import "./App.css";
import { useState, useRef } from "react";
import VideoRecorder from "../src/components/VideoRecorder";

const App = () => {
  let [recordOption, setRecordOption] = useState("video");
  return (
    <div>
      <h1 className="font-bold text-2xl text-violet-500 uppercase">
        Video Recorder using React
      </h1>
      <div>
        <VideoRecorder />
      </div>
    </div>
  );
};
export default App;
