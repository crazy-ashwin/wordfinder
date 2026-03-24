import type { Metadata } from "next";
import EncodeDecodePage from "./EncodeDecode";

export const metadata: Metadata = {
  title: "Encode/Decode Tools | Find Word Finder",
  description: "Advanced HTML, text, and JavaScript encoding/decoding utilities for protecting your source code with military-grade obfuscation. Perfect for developers and programmers. Enter your text and get instant results.",
  keywords: "encode/decode, html, text, javascript, encoding, decoding, obfuscation",
  alternates: {
    canonical: "/encode-decode",
  },
};

export default function Page() {
  return <EncodeDecodePage />;
}