import { Metadata } from "next";
import ScheduleClient from "./ScheduleClient";

export const metadata: Metadata = {
  title: "Diwan Schedule | Gurdwara Sahib Switzerland",
  description: "View the daily and weekly Diwan schedules, special programs, and kirtan timings.",
};

export default function SchedulePage() {
  return <ScheduleClient />;
}
