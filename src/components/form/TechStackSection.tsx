"use client";

import { TechCategory } from "@/types";
import SectionCard from "./shared/SectionCard";
import TagInput from "./shared/TagInput";

const SUGGESTIONS: Record<string, string[]> = {
  Frontend: ["React", "Next.js", "TypeScript", "Vue.js", "Svelte", "Tailwind CSS", "SCSS", "Redux", "Zustand", "Recoil"],
  Backend: ["Node.js", "Express", "NestJS", "Spring Boot", "Django", "FastAPI", "Go", "Rust"],
  Database: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase", "Firebase", "Prisma"],
  DevOps: ["Docker", "AWS", "Vercel", "GitHub Actions", "Nginx", "Kubernetes", "Terraform"],
};

interface Props {
  techStack: TechCategory[];
  addCategory: () => void;
  removeCategory: (id: string) => void;
  renameCategory: (id: string, name: string) => void;
  addTagToCategory: (categoryId: string, tag: string) => void;
  removeTagFromCategory: (categoryId: string, tag: string) => void;
}

export default function TechStackSection({
  techStack,
  addCategory,
  removeCategory,
  renameCategory,
  addTagToCategory,
  removeTagFromCategory,
}: Props) {
  return (
    <SectionCard
      title="기술 스택"
      icon="&#128736;"
      description="카테고리별로 사용한 기술을 추가하세요"
      defaultOpen={true}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {techStack.map((category) => (
          <div
            key={category.id}
            style={{
              padding: 16,
              background: "#F9FAFB",
              borderRadius: 16,
              border: "1px solid #F2F3F5",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 12,
              }}
            >
              <input
                value={category.name}
                onChange={(e) => renameCategory(category.id, e.target.value)}
                style={{
                  background: "transparent",
                  border: "none",
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#333D4B",
                  padding: "4px 0",
                  width: 200,
                }}
              />
              {category.tags.length === 0 && (
                <button
                  onClick={() => removeCategory(category.id)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#D1D5DB",
                    cursor: "pointer",
                    fontSize: 18,
                    padding: "2px 6px",
                    borderRadius: 8,
                    transition: "color 0.15s",
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
            </div>
            <TagInput
              tags={category.tags}
              onAdd={(tag) => addTagToCategory(category.id, tag)}
              onRemove={(tag) => removeTagFromCategory(category.id, tag)}
              suggestions={SUGGESTIONS[category.name] || []}
            />
          </div>
        ))}

        {techStack.length < 8 && (
          <button
            onClick={addCategory}
            className="btn-ghost"
            style={{ alignSelf: "flex-start" }}
          >
            + 카테고리 추가
          </button>
        )}
      </div>
    </SectionCard>
  );
}
