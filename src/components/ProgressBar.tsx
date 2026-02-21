"use client";

import { PortfolioReadmeData } from "@/types";

interface Props {
  formData: PortfolioReadmeData;
}

function calcProgress(data: PortfolioReadmeData): { filled: number; total: number } {
  let filled = 0;
  const total = 4;

  // 1. Overview: 프로젝트 이름만 있어도 OK
  if (data.overview.projectName.trim()) filled++;

  // 2. Tech Stack: 아무 태그나 하나 있으면
  if (data.techStack.some((c) => c.tags.length > 0)) filled++;

  // 3. Challenges: 첫 번째에 내용이 있으면
  if (data.challenges.some((c) => c.challenge.trim() || c.solution.trim())) filled++;

  // 4. Achievements: 지표나 성과 중 하나라도 있으면
  if (
    data.achievements.metrics.some((m) => m.metric.trim()) ||
    data.achievements.achievements.some((a) => a.text.trim())
  )
    filled++;

  return { filled, total };
}

export default function ProgressBar({ formData }: Props) {
  const { filled, total } = calcProgress(formData);
  const pct = Math.round((filled / total) * 100);

  const labels = ["개요", "기술 스택", "도전과제", "성과"];

  return (
    <div
      className="fade-in-up fade-in-up-2"
      style={{
        background: "#ffffff",
        borderRadius: 16,
        border: "1px solid #F2F3F5",
        padding: "16px 24px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <span style={{ fontSize: 13, fontWeight: 600, color: "#6B7280" }}>
          작성 진행률
        </span>
        <span
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: pct === 100 ? "#059669" : "#0064FF",
          }}
        >
          {filled}/{total} 완료
        </span>
      </div>
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{
            width: `${pct}%`,
            background:
              pct === 100
                ? "linear-gradient(90deg, #059669, #34D399)"
                : undefined,
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          gap: 6,
          marginTop: 10,
          flexWrap: "wrap",
        }}
      >
        {labels.map((label, i) => {
          const done =
            i === 0
              ? !!formData.overview.projectName.trim()
              : i === 1
                ? formData.techStack.some((c) => c.tags.length > 0)
                : i === 2
                  ? formData.challenges.some(
                      (c) => c.challenge.trim() || c.solution.trim()
                    )
                  : formData.achievements.metrics.some((m) => m.metric.trim()) ||
                    formData.achievements.achievements.some((a) => a.text.trim());
          return (
            <span
              key={label}
              style={{
                fontSize: 11,
                fontWeight: 600,
                padding: "3px 10px",
                borderRadius: 100,
                background: done ? "#ECFDF5" : "#F7F8FA",
                color: done ? "#059669" : "#AEB5BC",
                transition: "all 0.3s ease",
              }}
            >
              {done ? "\u2713 " : ""}
              {label}
            </span>
          );
        })}
      </div>
    </div>
  );
}
