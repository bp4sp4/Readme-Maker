"use client";

import { useState } from "react";
import { usePortfolioForm } from "@/hooks/useReadmeForm";
import HeroSection from "@/components/HeroSection";
import ReadmeForm from "@/components/ReadmeForm";
import MarkdownPreview from "@/components/preview/MarkdownPreview";
import CopyButton from "@/components/preview/CopyButton";
import DownloadButton from "@/components/preview/DownloadButton";

function RawEditor({
  markdown,
  onChange,
  isEdited,
}: {
  markdown: string;
  onChange: (v: string) => void;
  isEdited: boolean;
}) {
  return (
    <div style={{ position: "relative", height: "100%" }}>
      {isEdited && (
        <span
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            fontSize: 11,
            fontWeight: 600,
            color: "#F59E0B",
            background: "#FFFBEB",
            padding: "2px 10px",
            borderRadius: 100,
          }}
        >
          직접 수정됨
        </span>
      )}
      <textarea
        value={markdown}
        onChange={(e) => onChange(e.target.value)}
        placeholder="프로젝트 정보를 입력하면 여기에 마크다운이 표시됩니다."
        spellCheck={false}
        style={{
          width: "100%",
          height: "100%",
          minHeight: 400,
          fontSize: 13,
          color: "#4E5968",
          fontFamily: "'Fira Code', 'JetBrains Mono', Consolas, monospace",
          whiteSpace: "pre-wrap",
          lineHeight: 1.7,
          margin: 0,
          padding: 0,
          border: "none",
          outline: "none",
          background: "transparent",
          resize: "none",
        }}
      />
    </div>
  );
}

export default function Home() {
  const formHook = usePortfolioForm();
  const [showRaw, setShowRaw] = useState(false);
  const [mobilePreview, setMobilePreview] = useState(false);

  return (
    <main style={{ minHeight: "100vh", background: "#F7F8FA" }}>
      <HeroSection />

      <div
        id="form"
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "40px 32px 80px",
        }}
      >
        <div className="main-grid">
          {/* Left: Form */}
          <div>
            <ReadmeForm {...formHook} />
          </div>

          {/* Right: Preview - sticky (desktop) */}
          <div className="preview-panel fade-in-up fade-in-up-2">
            <div
              style={{
                background: "#ffffff",
                borderRadius: 24,
                border: "1px solid #F2F3F5",
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)",
                display: "flex",
                flexDirection: "column",
                maxHeight: "calc(100vh - 48px)",
              }}
            >
              {/* Preview Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 28px",
                  borderBottom: "1px solid #F2F3F5",
                  flexShrink: 0,
                  flexWrap: "wrap",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                  }}
                >
                  <h2
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#191F28",
                    }}
                  >
                    미리보기
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      background: "#F2F3F5",
                      borderRadius: 10,
                      padding: 3,
                    }}
                  >
                    <button
                      onClick={() => setShowRaw(false)}
                      className={
                        !showRaw
                          ? "preview-tab preview-tab-active"
                          : "preview-tab preview-tab-inactive"
                      }
                    >
                      Preview
                    </button>
                    <button
                      onClick={() => setShowRaw(true)}
                      className={
                        showRaw
                          ? "preview-tab preview-tab-active"
                          : "preview-tab preview-tab-inactive"
                      }
                    >
                      Raw
                    </button>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <CopyButton markdown={formHook.markdown} />
                  <DownloadButton
                    markdown={formHook.markdown}
                    projectName={formHook.formData.overview.projectName}
                  />
                </div>
              </div>

              {/* Preview Content */}
              <div style={{ padding: 28, overflowY: "auto", flex: 1 }}>
                {showRaw ? (
                  <RawEditor
                    markdown={formHook.markdown}
                    onChange={formHook.setMarkdownDirect}
                    isEdited={formHook.isEdited}
                  />
                ) : (
                  <MarkdownPreview markdown={formHook.markdown} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile preview toggle */}
      <div className="mobile-preview-toggle">
        <button
          onClick={() => setMobilePreview(true)}
          className="btn-primary"
          style={{ width: "100%", justifyContent: "center", borderRadius: 0, padding: "16px 0" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 4C2 3.45 2.45 3 3 3H13C13.55 3 14 3.45 14 4V12C14 12.55 13.55 13 13 13H3C2.45 13 2 12.55 2 12V4Z" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M5 7L7 9L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 11H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          미리보기 열기
        </button>
      </div>

      {/* Mobile preview overlay */}
      {mobilePreview && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "#ffffff",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 20px",
              borderBottom: "1px solid #F2F3F5",
              flexShrink: 0,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <h2 style={{ fontSize: 16, fontWeight: 700, color: "#191F28" }}>
                미리보기
              </h2>
              <div
                style={{
                  display: "flex",
                  background: "#F2F3F5",
                  borderRadius: 10,
                  padding: 3,
                }}
              >
                <button
                  onClick={() => setShowRaw(false)}
                  className={
                    !showRaw
                      ? "preview-tab preview-tab-active"
                      : "preview-tab preview-tab-inactive"
                  }
                >
                  Preview
                </button>
                <button
                  onClick={() => setShowRaw(true)}
                  className={
                    showRaw
                      ? "preview-tab preview-tab-active"
                      : "preview-tab preview-tab-inactive"
                  }
                >
                  Raw
                </button>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <CopyButton markdown={formHook.markdown} />
              <button
                onClick={() => setMobilePreview(false)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: 24,
                  color: "#6B7280",
                  cursor: "pointer",
                  padding: "4px 8px",
                }}
              >
                x
              </button>
            </div>
          </div>
          <div style={{ flex: 1, overflowY: "auto", padding: 20 }}>
            {showRaw ? (
              <RawEditor
                markdown={formHook.markdown}
                onChange={formHook.setMarkdownDirect}
                isEdited={formHook.isEdited}
              />
            ) : (
              <MarkdownPreview markdown={formHook.markdown} />
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #F2F3F5", background: "#ffffff" }}>
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "32px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div>
            <p style={{ fontSize: 14, fontWeight: 600, color: "#333D4B", marginBottom: 2 }}>
              Portfolio README Generator
            </p>
            <p style={{ fontSize: 12, color: "#AEB5BC", margin: 0 }}>
              채용 담당자가 주목하는 포트폴리오 README.md를 빠르게 만들어보세요.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ fontSize: 12, color: "#D1D5DB" }}>
              Built with Next.js &middot; React &middot; TypeScript
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
