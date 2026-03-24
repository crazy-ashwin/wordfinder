import type { Metadata } from "next";
import EGFRCalculator from "./EGPRCalculator";

export const metadata: Metadata = {
  title: "eGFR Calculator | Find Word Finder",
  description: "Estimate Glomerular Filtration Rate using the latest CKD-EPI equations. Perfect for kidney function and renal health. Enter your creatinine level and get instant results.",
  keywords: "eGFR calculator, CKD-EPI equations, kidney function, renal function, glomerular filtration rate",
  alternates: {
    canonical: "/eGFR-Calculator",
  },
};

export default function Page() {
  return <EGFRCalculator />;
}