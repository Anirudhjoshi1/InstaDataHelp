import React, { useState, useEffect } from "react";
import SalesPersonSidebar from "../../SideBar/SalesPersonSidebar";
import annyang from "annyang";
import "./TestSkill.css";

const TestSkill = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [listeningIndicator, setListeningIndicator] = useState(false);
  const [testStarted, setTestStarted] = useState(false);

  const [buttonsState, setButtonsState] = useState({
    startEnabled: false,
    stopEnabled: false,
    submitEnabled: false
  });

  useEffect(() => {
    if (annyang) {
      annyang.addCallback("result", function (phrases) {
        setUserMessage((prev) => prev + " " + phrases[0]);
      });

      annyang.addCallback("start", function () {
        console.log("🎤 Speech recognition started...");
        setListeningIndicator(true);
      });

      annyang.addCallback("end", function () {
        console.log("⏹️ Speech recognition ended.");
        setIsRecording(false);
        setListeningIndicator(false);
      });
    } else {
      console.error("🚨 Annyang.js is not supported in this browser.");
    }
  }, []);

  const startTalking = () => {
    if (annyang) {
      setIsRecording(true);
      annyang.start();
      setButtonsState({
        startEnabled: true,
        stopEnabled: true,
        submitEnabled: true
      });
    } else {
      alert("❌ Speech Recognition is not supported in this browser.");
    }
  };

  const stopTalking = () => {
    if (annyang) {
      annyang.abort();
    }
    setIsRecording(false);
    setListeningIndicator(false);
  };

  const submitAnswer = () => {
    if (userMessage.trim() !== "") {
      sendMessageToAPI(userMessage);
      setUserMessage(""); // Clear input after submission
    }
  };

  const sendMessageToAPI = async (message) => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://101.53.149.101/api/v1/workspace/tata-nexon-updated/thread/5be7a317-e8b3-4571-b8aa-5becf3b7a848/chat",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: "Bearer H56YD1H-4QDMHFX-QZN558T-3EV4Y03",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message, mode: "query", userId: 1 }),
        }
      );

      const data = await response.json();
      setChatMessages([
        ...chatMessages,
        { sender: "You", text: message },
        {
          sender: "Evaluator",
          text: data.textResponse || "No response from API.",
        },
      ]);
    } catch (error) {
      console.error("Error:", error);
    }

    setIsLoading(false);
  };

  const startTest = () => {
    sendMessageToAPI("hi");
    setIsLoading(true);
    setTestStarted(true);

    // After test starts, only Start Talking should be enabled
    setButtonsState({
      startEnabled: true,
      stopEnabled: false,
      submitEnabled: false
    });
  };

  return (
    <div className="test-container">
      <SalesPersonSidebar />
      <div className="test-content">
        <h2>Nexon Sales Trainer</h2>

        {/* 🎤 Listening Indicator */}
        {listeningIndicator && (
          <div className="listening-indicator">🎤 Listening... Speak Now</div>
        )}

        {/* 📝 Chat Screen */}
        <div className="chat-screen">
          {chatMessages.map((msg, index) => (
            <div
              key={index}
              className={`chat-message ${msg.sender.toLowerCase()}`}
            >
              <strong>{msg.sender}: </strong> {msg.text}
            </div>
          ))}
          {isLoading && (
            <div className="loading-container">
              <div className="loader"></div>
              <p>Processing...</p>
            </div>
          )}
        </div>

        {/* 📝 Real-Time Speech Input */}
        <textarea
          className="text-input"
          placeholder="You can also type here"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          disabled={!testStarted}
        ></textarea>

        {/* 🎛️ Buttons */}
        <div className="buttons-container">
          {!testStarted && (
            <button className="button-82-pushable" onClick={startTest}>
              <span className="button-82-shadow"></span>
              <span className="button-82-edge"></span>
              <span className="button-82-front text">🚀 Test My Skill</span>
            </button>
          )}

          {testStarted && (
            <>
              <button
                className={`button-82-pushable ${!buttonsState.startEnabled ? "disabled-button" : ""}`}
                onClick={startTalking}
                disabled={!buttonsState.startEnabled}
              >
                <span className="button-82-shadow"></span>
                <span className="button-82-edge"></span>
                <span className="button-82-front text">🎤 Start Talking</span>
              </button>

              <button
                className={`button-82-pushable ${!buttonsState.stopEnabled ? "disabled-button" : ""}`}
                onClick={stopTalking}
                disabled={!buttonsState.stopEnabled}
              >
                <span className="button-82-shadow"></span>
                <span className="button-82-edge"></span>
                <span className="button-82-front text">🛑 Stop Talking</span>
              </button>

              <button
                className={`button-82-pushable ${!buttonsState.submitEnabled ? "disabled-button" : ""}`}
                onClick={submitAnswer}
                disabled={!buttonsState.submitEnabled}
              >
                <span className="button-82-shadow"></span>
                <span className="button-82-edge"></span>
                <span className="button-82-front text">✅ Submit</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestSkill;
