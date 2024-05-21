"use client";
import React from "react";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Navbar from "../../../components/Navbar";

const AskAI = () => {
  const { transcript, browserSupportsSpeechRecognition, resetTranscript } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  };

  return (
    <>
      <Navbar />
      <div className="jagga z-10 flex flex-col items-center justify-center min-h-screen ">
        {/* Assuming Navbar component centers itself */}
        <div className="Container z-20 mt-11 text-center">
          <div
            className="bg-gray-200 rounded-lg p-4 mb-4"
            style={{ height: "300px", width: "800px", overflowY: "auto" }}
          >
            {/* Assuming 'transcript' is a string containing transcript text */}
            <textarea
              className="w-full h-full bg-transparent resize-none outline-none"
              placeholder="So tell me the plot..."
              value={transcript}
              readOnly
            />
          </div>
          <div className="flex justify-center space-x-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
              onClick={startListening}
            >
              Start Listening
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center"
              onClick={SpeechRecognition.stopListening}
            >
              Stop Listening
            </button>
          </div>
          <div className="flex justify-center mt-4">
            {/* Placing the search button in the middle */}
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={SpeechRecognition.abortListening}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AskAI;
