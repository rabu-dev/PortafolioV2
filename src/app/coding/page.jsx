"use client";
import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { python } from "@codemirror/lang-python";
import { rust } from "@codemirror/lang-rust";
import { autocompletion } from "@codemirror/autocomplete";

import { oneDark } from "@codemirror/theme-one-dark";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { githubLight } from "@uiw/codemirror-theme-github";
import NavBar from "../Navbar";
import Footer from "../Footer";

export default function Coding() {
  const [tabs, setTabs] = useState([
    { id: 1, name: "Archivo1.js", language: "javascript", content: "// Escribe tu código aquí" },
  ]);
  const [language, setLanguage] = useState("javascript"); 
  const [activeTab, setActiveTab] = useState(1);
  const [theme, setTheme] = useState(oneDark);
  const [fontSize, setFontSize] = useState(16);
  const [tabSize, setTabSize] = useState(2);
  const [lineNumbers, setLineNumbers] = useState(true);
const [wordWrap, setWordWrap] = useState(false);
  const getLanguageExtension = (language) => {
    switch (language) {
      case "javascript":
        return javascript();
      case "html":
        return html();
      case "css":
        return css();
      case "python":
        return python();
      case "rust":
        return rust();
      default:
        return javascript();
    }
  };

  const handleTabChange = (id) => setActiveTab(id);

  const addNewTab = () => {
    const newTab = {
      id: Date.now(),
      name: `Archivo${tabs.length + 1}.js`,
      language: "javascript",
      content: "// Nuevo archivo",
    };
    setTabs([...tabs, newTab]);
    setActiveTab(newTab.id);
  };

  const removeTab = (id) => {
    setTabs(tabs.filter(tab => tab.id !== id));
    if (activeTab === id && tabs.length > 1) {
      setActiveTab(tabs[0].id);
    }
  };

  const updateContent = (newContent) => {
    setTabs(tabs.map(tab =>
      tab.id === activeTab ? { ...tab, content: newContent } : tab
    ));
  };

  const activeFile = tabs.find(tab => tab.id === activeTab);

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-8">
        <NavBar />
        <h1 className="text-3xl font-bold mt-8 mb-4">Editor de Código</h1>
        <div className="mb-4 flex gap-4">
  <select
    value={language}
    onChange={(e) => setLanguage(e.target.value)}
    className="px-2 py-1 bg-gray-700 rounded"
  >
    <option value="javascript">JavaScript</option>
    <option value="html">HTML</option>
    <option value="css">CSS</option>
    <option value="python">Python</option>
    <option value="rust">Rust</option>
    <option value="java">Java</option>
    <option value="csharp">C#</option>
    <option value="swift">Swift</option>
  </select>
  
  <select
    value={theme}
    onChange={(e) => {
      const selectedTheme = e.target.value;
      setTheme(
        selectedTheme === "oneDark" ? oneDark :
        selectedTheme === "dracula" ? dracula :
        selectedTheme === "githubLight" ? githubLight :
        selectedTheme === "material" ? material :
        selectedTheme === "monokai" ? monokai :
        selectedTheme === "nord" ? nord :
        githubLight
      );
    }}
    className="px-2 py-1 bg-gray-700 rounded"
  >
    <option value="oneDark">One Dark</option>
    <option value="dracula">Dracula</option>
    <option value="githubLight">GitHub Light</option>
    <option value="material">Material</option>
    <option value="monokai">Monokai</option>
    <option value="nord">Nord</option>
  </select>

  <input
    type="number"
    value={fontSize}
    onChange={(e) => setFontSize(Number(e.target.value))}
    className="px-2 py-1 w-20 bg-gray-700 rounded text-center"
    min="10"
    max="24"
  />

  <input
    type="number"
    value={tabSize}
    onChange={(e) => setTabSize(Number(e.target.value))}
    className="px-2 py-1 w-20 bg-gray-700 rounded text-center"
    min="2"
    max="8"
  />

  <input
    type="checkbox"
    checked={lineNumbers}
    onChange={(e) => setLineNumbers(e.target.checked)}
    className="px-2 py-1 bg-gray-700 rounded"
  />
  <label className="px-2 py-1">Números de línea</label>

  <input
    type="checkbox"
    checked={wordWrap}
    onChange={(e) => setWordWrap(e.target.checked)}
    className="px-2 py-1 bg-gray-700 rounded"
  />
  <label className="px-2 py-1">Ajuste de palabras</label>
</div>
        <div className="flex space-x-2 ">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`px-4 py-2 rounded-t-lg font-medium ${
                tab.id === activeTab ? "bg-gray-700" : "bg-gray-600"
              }`}
            >
              {tab.name}
              {tabs.length > 1 && (
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    removeTab(tab.id);
                  }}
                  className="ml-2 text-red-500 cursor-pointer"
                >
                  &times;
                </span>
              )}
            </button>
          ))}
          <button
            onClick={addNewTab}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-t-lg font-medium"
          >
            + Añadir Archivo
          </button>
        </div>

        {activeFile && (
          <div className="w-full max-w-4xl shadow-lg border border-gray-700 rounded-lg overflow-hidden">
            <CodeMirror
              value={activeFile.content}
              height="70vh"
              extensions={[
                getLanguageExtension(activeFile.language),
                autocompletion(),
              ]}
              theme={theme}
              onChange={(value) => updateContent(value)}
              style={{ fontSize: `${fontSize}px` }}
              className="rounded-lg"
            />
          </div>
        )}

        <div className="mb-4 flex gap-4 flex-wrap justify-center">
          <button
            onClick={() => {
              const blob = new Blob([activeFile.content], { type: "text/plain" });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = activeFile.name;
              a.click();
              URL.revokeObjectURL(url);
            }}
            className="mt-4 mb-4 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium"
          >
            Descargar Código
          </button>

          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              const reader = new FileReader();
              reader.onload = (event) => {
                setTabs(tabs.map(tab =>
                  tab.id === activeTab ? { ...tab, content: event.target.result } : tab
                ));
              };
              reader.readAsText(file);
            }}
            className="px-2 py-1 bg-gray-700 rounded"
          />
          <label className="px-2 py-1" htmlFor="fileInput">Abrir Archivo</label>
        </div>

        <Footer />
      </div>
    </>
  );
}
