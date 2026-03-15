import { Metadata } from "next";
import EducationClient from "./EducationClient";

export const metadata: Metadata = {
  title: "Education | Gurdwara Sahib Switzerland",
  description: "Explore our Gurmat School, Punjabi classes, and annual youth camps fostering Sikh values.",
};

export default function EducationPage() {
  return <EducationClient />;
}
