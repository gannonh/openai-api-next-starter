import Head from "next/head";
import { useState, useRef, useEffect } from "react";
import hljs from "highlight.js";

export default function Home() {
  // Create a ref for the div element
  const textDivRef = useRef(null);

  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(false);

  // Add a click event listener to the copy icon that copies the text in the div to the clipboard when clicked
  useEffect(() => {
    const copyIcon = document.querySelector(".copy-icon");
    if (!copyIcon) return;
    copyIcon.addEventListener("click", () => {
      const textDiv = textDivRef.current;
      const text = textDiv.textContent;

      // Create a hidden textarea element
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);

      // Select the text in the textarea
      textArea.select();

      // Copy the text to the clipboard
      document.execCommand("copy");

      // Remove the textarea element
      document.body.removeChild(textArea);
    });
  }, []); // Run this only once

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ animal: animalInput }),
    });
    const data = await response.json();
    console.log("data", data);
    console.log("data.result", data.result);

    let rawResult = data.result;

    console.log("rawResult");

    const hljsResult = hljs.highlightAuto(rawResult).value;

    setResult(hljsResult);
    setAnimalInput("");
    setIsLoading(false);
  }

  return (
    <div>
      <Head>
        <title>training exp</title>
      </Head>

      <main
        className="flex flex-col 
                    items-center justify-center m-20"
      >
        <h3 className="text-slate-900 text-xl mb-3">
          Product Review Generator
        </h3>
        <p className="text-slate-700 text-lg mb-3">
          Open AI starter app to generate product reviews
        </p>
        <form onSubmit={onSubmit}>
          <input
            className="text-sm text-gray-base w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-gray-200 rounded mb-2"
                              
            type="text"
            name="animal"
            placeholder="Enter a product name"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />

          <button
            className="text-sm w-full bg-fuchsia-600 h-7 text-white
                              rounded-2xl mb-10"
            type="submit"
          >
            Generate article
          </button>
        </form>
        {isLoading ? (
          <p>Loading... Be patient.. may take 30s+</p>
        ) : result ? (
          <div className="relative w-2/4 ">
            <div
              ref={textDivRef}
              className="rounded-md border-spacing-2 border-slate-900 bg-slate-100 break-words max-w-500 overflow-x-auto  "
            >
              <pre className="">
                <code
                  className=""
                  dangerouslySetInnerHTML={{ __html: result }}
                />
              </pre>
            </div>
            <span className="absolute top-0 right-0 mt-2 mr-2 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-copy"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <rect x="8" y="8" width="12" height="12" rx="2"></rect>
                <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
              </svg>
            </span>
          </div>
        ) : null}
      </main>
    </div>
  );
}

{
  /* 
<div dangerouslySetInnerHTML={{ __html: result }} />

  <pre>
      <code dangerouslySetInnerHTML={{ __html: result }} />
    </pre>

<div>{result}</div>

<pre><code>{result}</code></pre>  

*/
}
