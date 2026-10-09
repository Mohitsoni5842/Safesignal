import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
const defaultJourney = {
  dest: "Central Library",
  time: "18:30",
  cname: "Alex",
  cemail: "alex@example.com",
  startedAt: Date.now(),
};

function loadJourney() {
  try {
    const saved = localStorage.getItem("activeJourney");
    return saved ? { ...defaultJourney, ...JSON.parse(saved) } : defaultJourney;
  } catch {
    return defaultJourney;
  }
}

export default function App() {
  const [journey, setJourney] = useState(loadJourney);
  const [status, setStatus] = useState("safe");
  const [activity, setActivity] = useState("Journey started");

  const saveJourney = (nextJourney) => {
    const updatedJourney = { ...nextJourney, startedAt: Date.now() };
    localStorage.setItem("activeJourney", JSON.stringify(updatedJourney));
    setJourney(updatedJourney);
    setStatus("safe");
    setActivity("Journey started");
  };

  const updateStatus = (nextStatus) => {
    setStatus(nextStatus);
    setActivity(
      nextStatus === "safe"
        ? "Checked in as safe"
        : nextStatus === "delayed"
          ? "Journey marked as delayed"
          : "Assistance requested (simulated)",
    );
  };

  return (
    <div className="min-h-screen bg-[#f3f7ff] text-slate-900">
      <Header />
      <HeroSection
        journey={journey}
        status={status}
        activity={activity}
        onCreate={saveJourney}
        onStatusChange={updateStatus}

      />
      <Footer />
    </div>
  );
}
