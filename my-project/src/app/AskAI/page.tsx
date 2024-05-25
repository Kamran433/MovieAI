"use client";
import React, { ChangeEvent, useState, useEffect } from "react";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Navbar from "../../../components/Navbar";
import { openai } from "../../../utils/openai"; // Assuming you have properly configured this import

// Existing imports and component definition...

const AskAI = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false); // State to track if speech recognition is active
  const [isTypingEnabled, setIsTypingEnabled] = useState(false);
  const [typedText, setTypedText] = useState(""); // State to track if manual typing is enabled
  const { transcript, resetTranscript } = useSpeechRecognition();
  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
    setIsListening(true);
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    setIsListening(false);
  };

  const handleTypingToggle = () => {
    setIsTypingEnabled(!isTypingEnabled);
    if (isListening) {
      stopListening();
    }
  };

  const handleGoButtonClick = async () => {
    setIsLoading(true);
    try {
      const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `What is the name of the movie whose story is ${transcript}?`,
          },
        ],
      });
      console.log(chatCompletion.choices[0].message.content);
    } catch (error) {
      console.error("Error in handleGoButtonClick:", error);
    } finally {
      setIsLoading(false);
      resetTranscript();
    }
  };

  const handleClearButtonClick = () => {
    resetTranscript();
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (isListening) {
      stopListening();
    }
    const typedText = event.target.value;
    setTypedText(typedText); // Update typed text state
  };

  return (
    <>
      <Navbar />
      <div className="jagga z-10 flex flex-col items-center justify-center min-h-screen">
        <div className="Container z-20 mt-11 text-center">
          <div
            className="bg-gray-200 rounded-lg p-4 mb-4"
            style={{ height: "300px", width: "800px", overflowY: "auto" }}
          >
            <textarea
              className="w-full h-full bg-transparent resize-none outline-none"
              placeholder="So tell me the plot..."
              value={isTypingEnabled ? typedText : transcript}
              onChange={handleChange}
              readOnly={!isTypingEnabled}
            />
          </div>
          <div className="flex justify-center space-x-4">
            <button
              className={`${
                isListening ? "bg-green-500" : "bg-gray-500"
              } hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center`}
              onClick={isListening ? stopListening : startListening}
            >
              {isListening ? "Listening..." : "Listen"}
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center"
              onClick={handleClearButtonClick}
            >
              Clear
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex items-center"
              onClick={handleTypingToggle}
            >
              {isTypingEnabled ? "Disable Typing" : "Enable Typing"}
            </button>
          </div>
          <div className="flex justify-center mt-4">
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleGoButtonClick}
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Go!"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AskAI;
