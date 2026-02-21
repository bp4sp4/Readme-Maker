"use client";

import { useState } from "react";
import { ChallengeItem } from "@/types";
import SectionCard from "./shared/SectionCard";

interface Props {
  challenges: ChallengeItem[];
  addChallenge: () => void;
  removeChallenge: (id: string) => void;
  updateChallenge: (id: string, field: keyof ChallengeItem, value: string) => void;
}

function ChallengeCard({
  item,
  index,
  onRemove,
  onUpdate,
  canRemove,
}: {
  item: ChallengeItem;
  index: number;
  onRemove: () => void;
  onUpdate: (field: keyof ChallengeItem, value: string) => void;
  canRemove: boolean;
}) {
  const [isOpen, setIsOpen] = useState(true);
  const title =
    item.challenge.trim().slice(0, 30) || `도전과제 ${index + 1}`;

  return (
    <div
      style={{
        border: "1px solid #F2F3F5",
        borderRadius: 16,
        overflow: "hidden",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 20px",
          background: "#F9FAFB",
          cursor: "pointer",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span style={{ fontSize: 14, fontWeight: 600, color: "#333D4B" }}>
          {index + 1}. {title}
          {item.challenge.trim().length > 30 ? "..." : ""}
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {canRemove && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onRemove();
              }}
              style={{
                background: "none",
                border: "none",
                color: "#D1D5DB",
                cursor: "pointer",
                fontSize: 16,
                padding: "2px 6px",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#EF4444")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#D1D5DB")
              }
            >
              x
            </button>
          )}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease",
            }}
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="#9CA3AF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {isOpen && (
        <div
          style={{
            padding: 20,
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <div>
            <label style={labelStyle}>어떤 문제가 있었나요?</label>
            <textarea
              className="input-base"
              value={item.challenge}
              onChange={(e) => onUpdate("challenge", e.target.value)}
              placeholder="ex. 대량 데이터 렌더링 시 성능 저하가 발생했습니다"
              rows={3}
              style={{ resize: "vertical" }}
            />
          </div>
          <div>
            <label style={labelStyle}>어떻게 해결했나요?</label>
            <textarea
              className="input-base"
              value={item.solution}
              onChange={(e) => onUpdate("solution", e.target.value)}
              placeholder="ex. React.memo와 가상 스크롤을 적용하여 렌더링 최적화를 진행했습니다"
              rows={3}
              style={{ resize: "vertical" }}
            />
          </div>
          <div>
            <label style={labelStyle}>배운 점 (선택)</label>
            <input
              className="input-base"
              value={item.learning}
              onChange={(e) => onUpdate("learning", e.target.value)}
              placeholder="ex. 성능 최적화 패턴과 프로파일링 도구 활용법을 익혔습니다"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default function ChallengesSection({
  challenges,
  addChallenge,
  removeChallenge,
  updateChallenge,
}: Props) {
  return (
    <SectionCard
      title="도전과제 및 해결책"
      icon="&#128161;"
      description="프로젝트에서 겪은 기술적 도전과 해결 과정을 기록하세요"
      defaultOpen={true}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {challenges.map((item, index) => (
          <ChallengeCard
            key={item.id}
            item={item}
            index={index}
            onRemove={() => removeChallenge(item.id)}
            onUpdate={(field, value) => updateChallenge(item.id, field, value)}
            canRemove={challenges.length > 1}
          />
        ))}

        {challenges.length < 5 && (
          <button
            onClick={addChallenge}
            className="btn-ghost"
            style={{ alignSelf: "flex-start" }}
          >
            + 도전과제 추가
          </button>
        )}
      </div>
    </SectionCard>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 13,
  fontWeight: 600,
  color: "#6B7280",
  marginBottom: 6,
};
