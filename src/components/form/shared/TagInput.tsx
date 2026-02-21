"use client";

import { useState, KeyboardEvent } from "react";

interface Props {
  tags: string[];
  onAdd: (tag: string) => void;
  onRemove: (tag: string) => void;
  placeholder?: string;
  suggestions?: string[];
}

export default function TagInput({
  tags,
  onAdd,
  onRemove,
  placeholder = "기술명 입력 후 Enter",
  suggestions = [],
}: Props) {
  const [input, setInput] = useState("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === "Enter" || e.key === ",") && input.trim()) {
      e.preventDefault();
      onAdd(input.trim());
      setInput("");
    }
    if (e.key === "Backspace" && !input && tags.length > 0) {
      onRemove(tags[tags.length - 1]);
    }
  };

  const filteredSuggestions = suggestions.filter(
    (s) =>
      !tags.includes(s) &&
      s.toLowerCase().includes(input.toLowerCase()) &&
      input.length > 0
  );

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          padding: tags.length > 0 ? "0 0 10px" : 0,
        }}
      >
        {tags.map((tag) => (
          <span key={tag} className="tag-chip">
            {tag}
            <button
              onClick={() => onRemove(tag)}
              style={{
                background: "none",
                border: "none",
                color: "#0064FF",
                cursor: "pointer",
                padding: 0,
                fontSize: 14,
                lineHeight: 1,
                fontWeight: 700,
              }}
            >
              x
            </button>
          </span>
        ))}
      </div>
      <input
        className="input-base"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        style={{ fontSize: 14, padding: "10px 16px" }}
      />
      {filteredSuggestions.length > 0 && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            marginTop: 8,
          }}
        >
          {filteredSuggestions.slice(0, 6).map((s) => (
            <button
              key={s}
              onClick={() => {
                onAdd(s);
                setInput("");
              }}
              style={{
                padding: "4px 12px",
                borderRadius: 100,
                border: "1px dashed #D1D5DB",
                background: "transparent",
                color: "#6B7280",
                fontSize: 13,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#0064FF";
                e.currentTarget.style.color = "#0064FF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#D1D5DB";
                e.currentTarget.style.color = "#6B7280";
              }}
            >
              + {s}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
