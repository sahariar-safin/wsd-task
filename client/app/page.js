'use client';

import  AnalyticsCard from "@/components/AnalyticsCard";
import TextForm from "@/components/TextForm";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(null);
  const [characterCount, setCharacterCount] = useState(null);
  const [sentenceCount, setSentenceCount] = useState(null);
  const [paragraphCount, setParagraphCount] = useState(null);
  const [longestWord, setLongestWord] = useState(null);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await handleAnalyze("word-count", setWordCount);
      await handleAnalyze("character-count", setCharacterCount);
      await handleAnalyze("sentence-count", setSentenceCount);
      await handleAnalyze("paragraph-count", setParagraphCount);
      await handleAnalyze("longest-word", setLongestWord);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }

  const handleAnalyze = async (url, setFunction) => {
    try {
      const response = await axios.post(`http://localhost:8000/api/text/${url}`, { text });
      setFunction(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="">
      {/* an input box with button */}
      <div className='flex flex-col p-5 gap-3'>
        <textarea onChange={(e) => setText(e.target.value)} id="text" rows="4" cols="50" className='border p-2' placeholder="Enter text here"></textarea>
        <button onClick={handleSubmit} className='p-2 bg-slate-600 text-cyan-50 border' id="submit">Submit</button>
      </div>
      <div className=" flex flex-1 flex-wrap gap-5 ">
        { isLoading && <p>Loading...</p> }
        { wordCount && <AnalyticsCard title="Total word count" description={wordCount} /> }
        { characterCount && <AnalyticsCard title="Total character count" description={characterCount} /> }
        { sentenceCount && <AnalyticsCard title="Total sentence count" description={sentenceCount} /> }
        { paragraphCount && <AnalyticsCard title="Total paragraph count" description={paragraphCount} /> }
        { longestWord && <AnalyticsCard title="Longest word" description={longestWord} /> }
      </div>
    </main>
  );
}