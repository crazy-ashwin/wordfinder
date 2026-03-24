'use client';
import { useEffect } from "react";

interface AdSenseProps {
  adSlot: string;
  style?: React.CSSProperties;
  format?: string;
}

export default function AdSense({ adSlot, style, format = "auto" }: AdSenseProps) {
  useEffect(() => {
    try {
    // @ts-expect-error: TypeScript doesn't recognize the window.adsbygoogle property, but it's provided by Google AdSense
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle mx-auto my-3"
      style={{ display: "block", ...(style || {}) }}
      data-ad-client="ca-pub-2320541206058096" 
      data-ad-slot={adSlot}
      data-ad-format={format}
      data-full-width-responsive="true"
    ></ins>
  );
}
