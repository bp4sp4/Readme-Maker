import { PortfolioReadmeData } from "@/types";
import { getTechBadgeUrl } from "./techBadges";

function generateOverview(data: PortfolioReadmeData): string {
  const lines: string[] = [];
  const { overview } = data;

  lines.push(`# ${overview.projectName || "프로젝트 이름"}`);
  lines.push("");

  if (overview.tagline) {
    lines.push(`> ${overview.tagline}`);
    lines.push("");
  }

  if (overview.background) {
    lines.push("## 프로젝트 개요");
    lines.push("");
    lines.push(overview.background);
    lines.push("");
  }

  const infoRows: string[] = [];
  if (overview.role) infoRows.push(`| 담당 역할 | ${overview.role} |`);
  if (overview.duration) infoRows.push(`| 개발 기간 | ${overview.duration} |`);
  if (overview.teamSize) infoRows.push(`| 팀 구성 | ${overview.teamSize} |`);

  const links: string[] = [];
  if (overview.projectUrl) links.push(`[배포 링크](${overview.projectUrl})`);
  if (overview.githubUrl) links.push(`[GitHub](${overview.githubUrl})`);
  if (links.length > 0) infoRows.push(`| 링크 | ${links.join(" / ")} |`);

  if (infoRows.length > 0) {
    lines.push("| 항목 | 내용 |");
    lines.push("|------|------|");
    lines.push(...infoRows);
    lines.push("");
  }

  return lines.join("\n");
}

function generateTechStack(data: PortfolioReadmeData): string {
  const lines: string[] = [];
  const filledCategories = data.techStack.filter((c) => c.tags.length > 0);

  if (filledCategories.length === 0) return "";

  lines.push("## 기술 스택");
  lines.push("");

  for (const category of filledCategories) {
    lines.push(`### ${category.name}`);
    lines.push("");

    const badges = category.tags.map((t) => {
      const url = getTechBadgeUrl(t);
      return url ? `![${t}](${url})` : `\`${t}\``;
    });
    lines.push(badges.join(" "));
    lines.push("");
  }

  return lines.join("\n");
}

function generateChallenges(data: PortfolioReadmeData): string {
  const lines: string[] = [];
  const filled = data.challenges.filter(
    (c) => c.challenge.trim() || c.solution.trim()
  );

  if (filled.length === 0) return "";

  lines.push("## 도전과제 및 해결책");
  lines.push("");

  filled.forEach((item, index) => {
    const title =
      item.challenge.trim().slice(0, 50) || `도전과제 ${index + 1}`;
    lines.push(`### ${index + 1}. ${title}`);
    lines.push("");

    if (item.challenge.trim()) {
      lines.push(`**문제:** ${item.challenge.trim()}`);
      lines.push("");
    }

    if (item.solution.trim()) {
      lines.push(`**해결:** ${item.solution.trim()}`);
      lines.push("");
    }

    if (item.learning.trim()) {
      lines.push(`**배운 점:** ${item.learning.trim()}`);
      lines.push("");
    }
  });

  return lines.join("\n");
}

function generateAchievements(data: PortfolioReadmeData): string {
  const lines: string[] = [];
  const { metrics, achievements, imageUrls } = data.achievements;

  const filledMetrics = metrics.filter((m) => m.metric.trim() || m.value.trim());
  const filledAchievements = achievements.filter((a) => a.text.trim());
  const filledImages = imageUrls.filter((u) => u.trim());

  if (
    filledMetrics.length === 0 &&
    filledAchievements.length === 0 &&
    filledImages.length === 0
  )
    return "";

  lines.push("## 결과 및 성과");
  lines.push("");

  if (filledMetrics.length > 0) {
    lines.push("### 주요 지표");
    lines.push("");
    lines.push("| 지표 | 수치 | 설명 |");
    lines.push("|------|------|------|");
    for (const m of filledMetrics) {
      lines.push(`| ${m.metric} | ${m.value} | ${m.description} |`);
    }
    lines.push("");
  }

  if (filledAchievements.length > 0) {
    lines.push("### 주요 성과");
    lines.push("");
    for (const a of filledAchievements) {
      lines.push(`- ${a.text}`);
    }
    lines.push("");
  }

  if (filledImages.length > 0) {
    lines.push("### 스크린샷");
    lines.push("");
    for (const url of filledImages) {
      lines.push(`![스크린샷](${url})`);
      lines.push("");
    }
  }

  return lines.join("\n");
}

export function generateMarkdown(data: PortfolioReadmeData): string {
  const sections = [
    generateOverview(data),
    generateTechStack(data),
    generateChallenges(data),
    generateAchievements(data),
  ].filter((s) => s.trim());

  return sections.join("\n---\n\n");
}
