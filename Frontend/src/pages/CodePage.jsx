import React, { useEffect, useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import { axiosInstance } from "../lib/axios.js";
import Navbar from "../components/Navbar.jsx";
import { ChevronDown } from "lucide-react";
import toast from "react-hot-toast";

const CodePage = () => {
  const reviewResultRef = useRef(null);

  const [code, setCode] = useState(`function sum() {
  return 1 + 1;
}`);
  const [review, setReview] = useState("");
  const [showArrow, setShowArrow] = useState(false);
  const [arrowDisabled, setArrowDisabled] = useState(false);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  const { mutate: codeMutation, isPending } = useMutation({
    mutationFn: async () => {
      const res = await axiosInstance.post("/ai/get-review", {
        prompt: code,
      });
      return res.data;
    },
    onSuccess: (data) => {
      toast.success("Reviewed Successfully");
      setReview(data);
      setShowArrow(true);
      setArrowDisabled(false);
    },
    onError: () => {
      toast.error("Review failed");
    },
  });

  const handleReview = (e) => {
    e.preventDefault();
    setShowArrow(false);
    setArrowDisabled(false);
    setReview("");

    codeMutation();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 min-h-screen">
          <div className="min-h-screen bg-slate-600">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={12}
              style={{
                fontFamily: '"Fira Code", monospace',
                fontSize: 16,
                minHeight: "100%",
              }}
            />
          </div>

          <button
            onClick={handleReview}
            disabled={isPending}
            className="w-full sticky bottom-0 px-3 py-2 font-semibold 
                       bg-gradient-to-r from-indigo-600 to-cyan-400 
                       hover:from-indigo-500 hover:to-cyan-300 
                       disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isPending ? "Reviewing..." : "Review"}
          </button>
        </div>

        <div
          ref={reviewResultRef}
          className="w-full md:w-1/2 min-h-screen bg-slate-800 
                     text-white p-4 tracking-wide"
        >
          <Markdown rehypePlugins={[rehypeHighlight]}>
            {review || "Review output will appear here..."}
          </Markdown>
        </div>
      </main>


      {showArrow && !arrowDisabled && (
        <button
          onClick={() => {
            reviewResultRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            setArrowDisabled(true);
          }}
          className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2
                     bg-slate-800 text-white p-3 rounded-full shadow-lg
                     animate-bounce z-50"
          aria-label="Scroll to review"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default CodePage;