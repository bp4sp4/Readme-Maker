"use client";

import { useState, useRef, useEffect, ReactNode } from "react";

interface Props {
  title: string;
  icon: string;
  description: string;
  defaultOpen?: boolean;
  children: ReactNode;
}

export default function SectionCard({
  title,
  icon,
  description,
  defaultOpen = true,
  children,
}: Props) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | "auto">(defaultOpen ? "auto" : 0);

  useEffect(() => {
    if (!contentRef.current) return;
    if (isOpen) {
      const h = contentRef.current.scrollHeight;
      setHeight(h);
      // After transition, set to auto so it can grow dynamically
      const timer = setTimeout(() => setHeight("auto"), 260);
      return () => clearTimeout(timer);
    } else {
      // First set explicit height, then collapse
      setHeight(contentRef.current.scrollHeight);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setHeight(0));
      });
    }
  }, [isOpen]);

  return (
    <div className="card" style={{ padding: 0, overflow: "hidden" }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "24px 28px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 22 }}>{icon}</span>
          <div>
            <h3 className="section-title" style={{ fontSize: 18 }}>
              {title}
            </h3>
            <p className="section-desc">{description}</p>
          </div>
        </div>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.25s ease",
            flexShrink: 0,
          }}
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="#9CA3AF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        ref={contentRef}
        style={{
          overflow: "hidden",
          transition: "max-height 0.25s ease, opacity 0.2s ease",
          maxHeight: height === "auto" ? "none" : height,
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div
          style={{
            padding: "0 28px 28px",
            borderTop: "1px solid #F2F3F5",
            paddingTop: 24,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
