import { useState } from "react";
import QuoteCard from "./components/QuoteCard";
import quotes from "./data/quotes"; 

export default function App() {
  const colors = ["#EF4444", "#10B981", "#3B82F6", "#8B5CF6", "#F59E0B"];
  
  const randomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];
  const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

  const [quote, setQuote] = useState(randomQuote());
  const [color, setColor] = useState(randomColor());

  const handleClick = () => {
    setQuote(randomQuote());
    setColor(randomColor());
  };

  return (
    <QuoteCard quote={quote} color={color} onClick={handleClick} />
  );
}


