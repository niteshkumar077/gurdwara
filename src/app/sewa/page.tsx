import { Metadata } from "next";
import SewaClient from "./SewaClient";

export const metadata: Metadata = {
  title: "Sewa & Services | Gurdwara Sahib Switzerland",
  description: "Discover selfless service opportunities including Langar, Akhand Path, and community samagams.",
};

export default function SewaPage() {
  return <SewaClient />;
}
