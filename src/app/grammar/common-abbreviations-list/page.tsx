"use client";
import React from "react";
import Link from "next/link";

export default function CommonAbbreviationsListPage() {
  const abbreviations = [
    { abbr: "Dr.", full: "Doctor" },
    { abbr: "Mr.", full: "Mister" },
    { abbr: "Mrs.", full: "Mistress (married woman)" },
    { abbr: "Ms.", full: "Miss or Ms. (woman)" },
    { abbr: "St.", full: "Street or Saint" },
    { abbr: "Ave.", full: "Avenue" },
    { abbr: "Rd.", full: "Road" },
    { abbr: "Blvd.", full: "Boulevard" },
    { abbr: "Jan.", full: "January" },
    { abbr: "Feb.", full: "February" },
    { abbr: "Mar.", full: "March" },
    { abbr: "Apr.", full: "April" },
    { abbr: "Aug.", full: "August" },
    { abbr: "Sept.", full: "September" },
    { abbr: "Oct.", full: "October" },
    { abbr: "Nov.", full: "November" },
    { abbr: "Dec.", full: "December" },
    { abbr: "etc.", full: "et cetera (and so on)" },
    { abbr: "e.g.", full: "for example" },
    { abbr: "i.e.", full: "that is" },
    { abbr: "vs.", full: "versus" },
    { abbr: "No.", full: "Number" },
    { abbr: "min.", full: "minute" },
    { abbr: "hr.", full: "hour" },
    { abbr: "kg", full: "kilogram" },
    { abbr: "cm", full: "centimeter" },
    { abbr: "km", full: "kilometer" },
    { abbr: "lb.", full: "pound" },
    { abbr: "oz.", full: "ounce" }
  ];
  const examples = [
    "<b>Dr.</b> Smith is my doctor.",
    "We live on Main <b>St.</b>",
    "My birthday is in <b>Jan.</b>",
    "The meeting is at 3 <b>p.m.</b>",
    "She bought 2 <b>kg</b> of apples.",
    "The movie lasts 90 <b>min.</b>",
    "The address is 123 Oak <b>Ave.</b>",
    "The answer is in <b>etc.</b>",
    "The score was 3 <b>vs.</b> 2.",
    "The recipe calls for 8 <b>oz.</b> of cheese."
  ];
  const worksheet = [
    { q: "The doctor is called ___.", a: "Dr." },
    { q: "We live on Oak ___.", a: "Ave." },
    { q: "The meeting is in ___. (January)", a: "Jan." },
    { q: "The answer is in ___. (and so on)", a: "etc." },
    { q: "The score was 2 ___ 1.", a: "vs." }
  ];
  return (
    <div className="min-h-screen bg-blue-50 py-8">
      <main className="max-w-3xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-10">
          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-blue-700">Common Abbreviations List</h1>
            <p className="text-lg text-gray-700 mb-2">
              <b>What are abbreviations?</b> Abbreviations are short forms of words or phrases. They help us write and speak more quickly and clearly.
            </p>
            <p className="text-blue-700 font-semibold">Abbreviations are everywhere—in addresses, dates, and everyday language!</p>
          </header>

          {/* List of Abbreviations */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Common Abbreviations</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
              {abbreviations.map((a) => (
                <div key={a.abbr} className="bg-blue-100 text-blue-800 px-3 py-2 rounded shadow-sm text-sm font-semibold flex flex-col"><span>{a.abbr}</span><span className="text-xs text-blue-600">{a.full}</span></div>
              ))}
            </div>
          </section>

          {/* Example Sentences */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Examples</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              {examples.map((ex, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: ex }} />
              ))}
            </ul>
          </section>

          {/* Worksheet Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-blue-700">Worksheet: Fill in the Blank</h2>
            <ol className="list-decimal ml-6 text-gray-700 mb-2">
              {worksheet.map((w, i) => (
                <li key={i}>{w.q}</li>
              ))}
            </ol>
            <details className="bg-gray-50 rounded p-2 text-sm cursor-pointer">
              <summary className="font-semibold text-blue-700">Show Answers</summary>
              <ul className="list-disc ml-6 mt-2">
                {worksheet.map((w, i) => (
                  <li key={i}><b>Q{i + 1}:</b> {w.a}</li>
                ))}
              </ul>
            </details>
          </section>

          {/* Tips Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-blue-700">Tips for Using Abbreviations</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Use abbreviations in addresses, dates, and measurements.</li>
              <li>Always use a period if the abbreviation is a shortened word (e.g., Dr., St.).</li>
              <li>Some abbreviations (like kg, cm) do not use a period.</li>
            </ul>
          </section>

          {/* More Resources Section */}
          <section>
            <h2 className="text-2xl font-bold mb-2 text-blue-700">More Resources</h2>
            <ul className="list-disc ml-6 text-gray-700 text-base">
              <li>Learn about <Link href="/grammar/common-acronyms-list" className="text-blue-700 underline hover:text-blue-900">acronyms</Link>, <Link href="/grammar/noun-examples" className="text-blue-700 underline hover:text-blue-900">nouns</Link>, and <Link href="/grammar/parts-of-speech" className="text-blue-700 underline hover:text-blue-900">parts of speech</Link>.</li>
              <li>Try more <Link href="/grammar/common-nouns" className="text-blue-700 underline hover:text-blue-900">common nouns</Link> or <Link href="/grammar/country-abbreviations" className="text-blue-700 underline hover:text-blue-900">country abbreviations</Link>.</li>
              <li>Practice with <Link href="/grammar/figurative-language" className="text-blue-700 underline hover:text-blue-900">figurative language</Link> and <Link href="/grammar/reading-comprehension" className="text-blue-700 underline hover:text-blue-900">reading comprehension</Link>.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
} 