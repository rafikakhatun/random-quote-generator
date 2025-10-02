/* eslint-disable react/prop-types */
export default function QuoteCard({ quote, color, onClick }) {
  return (
    <div 
      className="flex flex-col items-center justify-center h-screen transition-colors duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="bg-white shadow-xl rounded-2xl p-6 max-w-md text-center">
        <p className="text-xl font-semibold mb-4">"{quote.text}"</p>
        <p className="text-gray-500 mb-6">- {quote.author}</p>
        <button 
          onClick={onClick}
          className="px-6 py-2 rounded-xl text-white font-bold shadow-md"
          style={{ backgroundColor: color }}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}
