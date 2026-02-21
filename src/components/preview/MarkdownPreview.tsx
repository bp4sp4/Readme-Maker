"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  markdown: string;
}

export default function MarkdownPreview({ markdown }: Props) {
  if (!markdown.trim()) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "64px 0", color: "#D1D5DB" }}>
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" style={{ marginBottom: 16, opacity: 0.5 }}>
          <rect x="8" y="12" width="40" height="32" rx="6" stroke="currentColor" strokeWidth="2" />
          <path d="M18 24V34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M18 24L23 29L18 34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 24V34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M28 24L33 34L38 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M38 24V34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        <p style={{ fontSize: 15, color: "#AEB5BC", lineHeight: 1.6, textAlign: "center" }}>
          왼쪽에서 프로젝트 정보를 입력하면
          <br />
          여기에 미리보기가 표시됩니다
        </p>
      </div>
    );
  }

  return (
    <div className="markdown-preview">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
}
