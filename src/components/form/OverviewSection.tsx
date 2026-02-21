"use client";

import { OverviewData } from "@/types";
import SectionCard from "./shared/SectionCard";

interface Props {
  overview: OverviewData;
  updateOverview: (field: keyof OverviewData, value: string) => void;
}

export default function OverviewSection({ overview, updateOverview }: Props) {
  return (
    <SectionCard
      title="프로젝트 개요"
      icon="&#128196;"
      description="프로젝트의 기본 정보와 배경을 입력하세요"
      defaultOpen={true}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Row 1: 프로젝트 이름 + 한 줄 소개 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div>
            <label style={labelStyle}>
              프로젝트 이름 <span style={{ color: "#EF4444" }}>*</span>
            </label>
            <input
              className="input-base"
              value={overview.projectName}
              onChange={(e) => updateOverview("projectName", e.target.value)}
              placeholder="ex. TaskFlow"
              style={
                !overview.projectName.trim()
                  ? { borderColor: "#F59E0B", background: "#FFFBEB" }
                  : undefined
              }
            />
          </div>
          <div>
            <label style={labelStyle}>한 줄 소개</label>
            <input
              className="input-base"
              value={overview.tagline}
              onChange={(e) => updateOverview("tagline", e.target.value)}
              placeholder="ex. 실시간 협업 프로젝트 관리 도구"
            />
          </div>
        </div>

        {/* Row 2: 역할 + 기간 + 팀 구성 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
          <div>
            <label style={labelStyle}>담당 역할</label>
            <input
              className="input-base"
              value={overview.role}
              onChange={(e) => updateOverview("role", e.target.value)}
              placeholder="ex. 풀스택 개발"
            />
          </div>
          <div>
            <label style={labelStyle}>개발 기간</label>
            <input
              className="input-base"
              value={overview.duration}
              onChange={(e) => updateOverview("duration", e.target.value)}
              placeholder="ex. 2024.03 ~ 2024.06"
            />
          </div>
          <div>
            <label style={labelStyle}>팀 구성</label>
            <input
              className="input-base"
              value={overview.teamSize}
              onChange={(e) => updateOverview("teamSize", e.target.value)}
              placeholder="ex. 3인 팀"
            />
          </div>
        </div>

        {/* Row 3: 프로젝트 배경 */}
        <div>
          <label style={labelStyle}>프로젝트 배경 / 문제 정의</label>
          <textarea
            className="input-base"
            value={overview.background}
            onChange={(e) => updateOverview("background", e.target.value)}
            placeholder="어떤 문제를 해결하려 했는지, 프로젝트를 시작한 계기를 간단히 작성하세요"
            rows={4}
            style={{ resize: "vertical" }}
          />
        </div>

        {/* Row 4: URLs */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div>
            <label style={labelStyle}>배포 URL</label>
            <input
              className="input-base"
              value={overview.projectUrl}
              onChange={(e) => updateOverview("projectUrl", e.target.value)}
              placeholder="https://example.com"
            />
          </div>
          <div>
            <label style={labelStyle}>GitHub URL</label>
            <input
              className="input-base"
              value={overview.githubUrl}
              onChange={(e) => updateOverview("githubUrl", e.target.value)}
              placeholder="https://github.com/user/repo"
            />
          </div>
        </div>
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
