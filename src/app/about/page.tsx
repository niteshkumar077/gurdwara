import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Gurdwara Sahib Switzerland",
  description: "Learn about the history, community, and values of Gurdwara Sahib Switzerland in Langenthal.",
};

export default function AboutPage() {
  return <AboutClient />;
}
