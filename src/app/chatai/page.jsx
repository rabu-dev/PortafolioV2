"use client";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

// Función para obtener la respuesta de Gemini
async function getGeminiResponse(message) {
  try {
    const API_KEY = "AIzaSyBL3rVkBQ5cYfoTjhwKLG056ZdzjeM1TF0"; // Use environment variable
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent?key=${API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: message, // Your prompt here
              },
            ],
          },
        ],
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.candidates[0].content.parts[0].text; // Adjust this based on the actual response structure
  } catch (error) {
    console.error('Error fetching response from Gemini:', error.response ? error.response.data : error.message);
    return 'Hubo un error al procesar tu solicitud.';
  }
}

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!message.trim()) return;

    try {
      setIsLoading(true);
      setChatHistory(prev => [...prev, { role: 'user', content: message }]);

      // Llama a la función getGeminiResponse en lugar de fetch
      const geminiResponse = await getGeminiResponse(message);

      if (!geminiResponse) {
        throw new Error("No se recibió una respuesta de Gemini.");
      }

      setChatHistory(prev => [...prev, { 
        role: 'model', 
        content: geminiResponse 
      }]);
      
      setMessage("");
    } catch (error) {
      console.error('Error:', error);
      setChatHistory(prev => [...prev, { 
        role: 'error', 
        content: 'Lo siento, hubo un error al conectar con Gemini. Por favor, intenta de nuevo.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const formatMessage = (msg) => {
    const isUser = msg.role === 'user';
    return (
      <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
        <div className={`max-w-[80%] p-3 rounded-lg ${
          isUser 
            ? 'bg-blue-500 text-white rounded-br-none' 
            : msg.role === 'error' 
              ? 'bg-red-100 text-red-700'
              : 'bg-gray-100 text-gray-800 rounded-bl-none'
        }`}>
          {msg.content}
        </div>
      </div>
    );
  };

  return (
  <div className="h-screen flex flex-col justify-center items-center bg-[#1a1d23] p-4">
  <div className="w-full max-w-2xl flex flex-col h-[600px] bg-[#2f343a] rounded-lg shadow-md">
    <div className="flex-1 overflow-y-auto p-4">
      {chatHistory.map((msg, index) => (
        <div key={index}>
          {formatMessage(msg)}
        </div>
      ))}
      <div ref={bottomRef} />
    </div>

    <form onSubmit={handleSubmit} className="p-4 border-t border-[#3b3f4e]">
      <div className="flex gap-2">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escribe tu mensaje aquí..."
          className="flex-1 p-2 bg-[#3b3f4e] text-[#d9d9d9] border border-[#3b3f4e] rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#66d9ef]"
          rows={2}
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !message.trim()}
          className="px-4 py-2 bg-[#66d9ef] text-[#1a1d23] rounded-lg hover:bg-[#3bc9db] disabled:bg-[#3b3f4e] disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? 'Enviando...' : 'Enviar'}
        </button>
      </div>
    </form>
  </div>
</div>
  );
}
