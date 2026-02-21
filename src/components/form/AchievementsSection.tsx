"use client";

import { AchievementsData, MetricItem, AchievementItem } from "@/types";
import SectionCard from "./shared/SectionCard";

interface Props {
  achievements: AchievementsData;
  addMetric: () => void;
  removeMetric: (id: string) => void;
  updateMetric: (id: string, field: keyof MetricItem, value: string) => void;
  addAchievement: () => void;
  removeAchievement: (id: string) => void;
  updateAchievement: (id: string, field: keyof AchievementItem, value: string) => void;
  addImageUrl: () => void;
  removeImageUrl: (index: number) => void;
  updateImageUrl: (index: number, value: string) => void;
}

export default function AchievementsSection({
  achievements,
  addMetric,
  removeMetric,
  updateMetric,
  addAchievement,
  removeAchievement,
  updateAchievement,
  addImageUrl,
  removeImageUrl,
  updateImageUrl,
}: Props) {
  return (
    <SectionCard
      title="결과 및 성과"
      icon="&#127942;"
      description="프로젝트의 성과를 수치와 함께 정리하세요"
      defaultOpen={true}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {/* Part A: 수치 성과 */}
        <div>
          <h4 style={subTitleStyle}>수치 성과</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {achievements.metrics.map((m) => (
              <div
                key={m.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 2fr auto",
                  gap: 8,
                  alignItems: "center",
                }}
              >
                <input
                  className="input-base"
                  value={m.metric}
                  onChange={(e) => updateMetric(m.id, "metric", e.target.value)}
                  placeholder="지표명"
                  style={compactInput}
                />
                <input
                  className="input-base"
                  value={m.value}
                  onChange={(e) => updateMetric(m.id, "value", e.target.value)}
                  placeholder="수치"
                  style={compactInput}
                />
                <input
                  className="input-base"
                  value={m.description}
                  onChange={(e) =>
                    updateMetric(m.id, "description", e.target.value)
                  }
                  placeholder="설명 (ex. Lighthouse 60 → 98)"
                  style={compactInput}
                />
                <button
                  onClick={() => removeMetric(m.id)}
                  style={removeBtn}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#EF4444")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#D1D5DB")
                  }
                >
                  x
                </button>
              </div>
            ))}
            <button
              onClick={addMetric}
              className="btn-ghost"
              style={{ alignSelf: "flex-start", fontSize: 13 }}
            >
              + 지표 추가
            </button>
          </div>
        </div>

        {/* Part B: 서술형 성과 */}
        <div>
          <h4 style={subTitleStyle}>주요 성과</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {achievements.achievements.map((a) => (
              <div
                key={a.id}
                style={{
                  display: "flex",
                  gap: 8,
                  alignItems: "center",
                }}
              >
                <input
                  className="input-base"
                  value={a.text}
                  onChange={(e) =>
                    updateAchievement(a.id, "text", e.target.value)
                  }
                  placeholder="ex. 사내 해커톤 1위 수상"
                  style={compactInput}
                />
                <button
                  onClick={() => removeAchievement(a.id)}
                  style={removeBtn}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#EF4444")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#D1D5DB")
                  }
                >
                  x
                </button>
              </div>
            ))}
            <button
              onClick={addAchievement}
              className="btn-ghost"
              style={{ alignSelf: "flex-start", fontSize: 13 }}
            >
              + 성과 추가
            </button>
          </div>
        </div>

        {/* Part C: 스크린샷 */}
        <div>
          <h4 style={subTitleStyle}>스크린샷 URL</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {achievements.imageUrls.map((url, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  gap: 8,
                  alignItems: "center",
                }}
              >
                <input
                  className="input-base"
                  value={url}
                  onChange={(e) => updateImageUrl(index, e.target.value)}
                  placeholder="https://example.com/screenshot.png"
                  style={compactInput}
                />
                <button
                  onClick={() => removeImageUrl(index)}
                  style={removeBtn}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#EF4444")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#D1D5DB")
                  }
                >
                  x
                </button>
              </div>
            ))}
            {achievements.imageUrls.length < 5 && (
              <button
                onClick={addImageUrl}
                className="btn-ghost"
                style={{ alignSelf: "flex-start", fontSize: 13 }}
              >
                + 이미지 추가
              </button>
            )}
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

const subTitleStyle: React.CSSProperties = {
  fontSize: 14,
  fontWeight: 700,
  color: "#333D4B",
  marginBottom: 10,
};

const compactInput: React.CSSProperties = {
  fontSize: 14,
  padding: "10px 14px",
};

const removeBtn: React.CSSProperties = {
  background: "none",
  border: "none",
  color: "#D1D5DB",
  cursor: "pointer",
  fontSize: 18,
  padding: "4px 8px",
  flexShrink: 0,
};
