"use client";

interface Props {
  markdown: string;
  projectName: string;
}

export default function DownloadButton({ markdown, projectName }: Props) {
  const handleDownload = () => {
    const blob = new Blob([markdown], {
      type: "text/markdown;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${projectName || "README"}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleDownload}
      disabled={!markdown.trim()}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "12px 20px",
        background: "#191F28",
        color: "#ffffff",
        borderRadius: 14,
        fontSize: 14,
        fontWeight: 700,
        border: "none",
        cursor: markdown.trim() ? "pointer" : "not-allowed",
        transition: "all 0.2s ease",
        opacity: markdown.trim() ? 1 : 0.4,
      }}
      onMouseEnter={(e) => {
        if (markdown.trim()) {
          e.currentTarget.style.background = "#333D4B";
          e.currentTarget.style.transform = "translateY(-1px)";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#191F28";
        e.currentTarget.style.transform = "none";
      }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M8 2V10M8 10L5 7M8 10L11 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 12H13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      다운로드
    </button>
  );
}
