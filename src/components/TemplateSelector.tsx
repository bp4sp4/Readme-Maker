"use client";

import { useState } from "react";
import { Template } from "@/lib/templates";

interface Props {
  templates: Template[];
  onSelect: (template: Template) => void;
}

export default function TemplateSelector({ templates, onSelect }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [applied, setApplied] = useState(false);

  const handleClick = (template: Template) => {
    setActiveId(template.id);
    onSelect(template);
    setApplied(true);
    setTimeout(() => setApplied(false), 1500);
  };

  return (
    <div
      className="fade-in-up fade-in-up-1"
      style={{
        background: "#ffffff",
        borderRadius: 24,
        border: "1px solid #F2F3F5",
        boxShadow:
          "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)",
        padding: "24px 28px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <div>
          <h3
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: "#191F28",
              marginBottom: 4,
            }}
          >
            템플릿으로 시작하기
          </h3>
          <p style={{ fontSize: 13, color: "#8B95A1", margin: 0 }}>
            프로젝트 유형을 선택하면 예시가 채워집니다
          </p>
        </div>
        {applied && activeId && (
          <span
            className="toast-enter"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "6px 14px",
              background: "#ECFDF5",
              color: "#059669",
              borderRadius: 100,
              fontSize: 12,
              fontWeight: 700,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            적용됨
          </span>
        )}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 10,
        }}
      >
        {templates.map((t) => {
          const isActive = activeId === t.id;
          return (
            <button
              key={t.id}
              onClick={() => handleClick(t)}
              className="template-card"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
                padding: "14px 8px",
                borderRadius: 14,
                border: isActive
                  ? "2px solid #0064FF"
                  : "1.5px solid #F2F3F5",
                background: isActive ? "#EFF6FF" : "#FAFBFC",
                cursor: "pointer",
                position: "relative",
              }}
            >
              {isActive && (
                <div
                  style={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    background: "#0064FF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5.5L4 7.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
              <span style={{ fontSize: 22 }}>{t.emoji}</span>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: isActive ? "#2563EB" : "#374151",
                }}
              >
                {t.label}
              </span>
              <span
                style={{
                  fontSize: 11,
                  color: "#8B95A1",
                  textAlign: "center",
                  lineHeight: 1.3,
                }}
              >
                {t.description}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
