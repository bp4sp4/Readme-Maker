"use client";

import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import {
  PortfolioReadmeData,
  OverviewData,
  TechCategory,
  ChallengeItem,
  MetricItem,
  AchievementItem,
} from "@/types";
import { generateMarkdown } from "@/lib/generateMarkdown";
import { Template } from "@/lib/templates";

let _id = 0;
function uid(): string {
  return `_${++_id}_${Date.now()}`;
}

const defaultCategories: TechCategory[] = [
  { id: uid(), name: "Frontend", tags: [] },
  { id: uid(), name: "Backend", tags: [] },
  { id: uid(), name: "Database", tags: [] },
  { id: uid(), name: "DevOps", tags: [] },
  { id: uid(), name: "기타", tags: [] },
];

const initialState: PortfolioReadmeData = {
  overview: {
    projectName: "",
    tagline: "",
    background: "",
    role: "",
    duration: "",
    teamSize: "",
    projectUrl: "",
    githubUrl: "",
  },
  techStack: defaultCategories.map((c) => ({ ...c, tags: [...c.tags] })),
  challenges: [{ id: uid(), challenge: "", solution: "", learning: "" }],
  achievements: {
    metrics: [],
    achievements: [],
    imageUrls: [],
  },
};

export function usePortfolioForm() {
  const [formData, setFormData] = useState<PortfolioReadmeData>(initialState);

  const generated = useMemo(() => generateMarkdown(formData), [formData]);

  // Raw 편집 시 override, 왼쪽 폼 변경 시 자동으로 generated로 복귀
  const [markdownOverride, setMarkdownOverride] = useState<string | null>(null);
  const prevGeneratedRef = useRef(generated);

  useEffect(() => {
    if (prevGeneratedRef.current !== generated) {
      // 폼에서 뭔가 바뀜 -> override 해제
      setMarkdownOverride(null);
      prevGeneratedRef.current = generated;
    }
  }, [generated]);

  const markdown = markdownOverride ?? generated;

  const setMarkdownDirect = useCallback((value: string) => {
    setMarkdownOverride(value);
  }, []);

  // Overview
  const updateOverview = useCallback(
    (field: keyof OverviewData, value: string) => {
      setFormData((prev) => ({
        ...prev,
        overview: { ...prev.overview, [field]: value },
      }));
    },
    []
  );

  // Tech Stack
  const addCategory = useCallback(() => {
    setFormData((prev) => ({
      ...prev,
      techStack: [
        ...prev.techStack,
        { id: uid(), name: "새 카테고리", tags: [] },
      ],
    }));
  }, []);

  const removeCategory = useCallback((id: string) => {
    setFormData((prev) => ({
      ...prev,
      techStack: prev.techStack.filter((c) => c.id !== id),
    }));
  }, []);

  const renameCategory = useCallback((id: string, name: string) => {
    setFormData((prev) => ({
      ...prev,
      techStack: prev.techStack.map((c) =>
        c.id === id ? { ...c, name } : c
      ),
    }));
  }, []);

  const addTagToCategory = useCallback((categoryId: string, tag: string) => {
    const trimmed = tag.trim();
    if (!trimmed) return;
    setFormData((prev) => ({
      ...prev,
      techStack: prev.techStack.map((c) =>
        c.id === categoryId && !c.tags.includes(trimmed)
          ? { ...c, tags: [...c.tags, trimmed] }
          : c
      ),
    }));
  }, []);

  const removeTagFromCategory = useCallback(
    (categoryId: string, tag: string) => {
      setFormData((prev) => ({
        ...prev,
        techStack: prev.techStack.map((c) =>
          c.id === categoryId
            ? { ...c, tags: c.tags.filter((t) => t !== tag) }
            : c
        ),
      }));
    },
    []
  );

  // Challenges
  const addChallenge = useCallback(() => {
    setFormData((prev) => ({
      ...prev,
      challenges: [
        ...prev.challenges,
        { id: uid(), challenge: "", solution: "", learning: "" },
      ],
    }));
  }, []);

  const removeChallenge = useCallback((id: string) => {
    setFormData((prev) => ({
      ...prev,
      challenges: prev.challenges.filter((c) => c.id !== id),
    }));
  }, []);

  const updateChallenge = useCallback(
    (id: string, field: keyof ChallengeItem, value: string) => {
      setFormData((prev) => ({
        ...prev,
        challenges: prev.challenges.map((c) =>
          c.id === id ? { ...c, [field]: value } : c
        ),
      }));
    },
    []
  );

  // Metrics
  const addMetric = useCallback(() => {
    setFormData((prev) => ({
      ...prev,
      achievements: {
        ...prev.achievements,
        metrics: [
          ...prev.achievements.metrics,
          { id: uid(), metric: "", value: "", description: "" },
        ],
      },
    }));
  }, []);

  const removeMetric = useCallback((id: string) => {
    setFormData((prev) => ({
      ...prev,
      achievements: {
        ...prev.achievements,
        metrics: prev.achievements.metrics.filter((m) => m.id !== id),
      },
    }));
  }, []);

  const updateMetric = useCallback(
    (id: string, field: keyof MetricItem, value: string) => {
      setFormData((prev) => ({
        ...prev,
        achievements: {
          ...prev.achievements,
          metrics: prev.achievements.metrics.map((m) =>
            m.id === id ? { ...m, [field]: value } : m
          ),
        },
      }));
    },
    []
  );

  // Achievements
  const addAchievement = useCallback(() => {
    setFormData((prev) => ({
      ...prev,
      achievements: {
        ...prev.achievements,
        achievements: [
          ...prev.achievements.achievements,
          { id: uid(), text: "" },
        ],
      },
    }));
  }, []);

  const removeAchievement = useCallback((id: string) => {
    setFormData((prev) => ({
      ...prev,
      achievements: {
        ...prev.achievements,
        achievements: prev.achievements.achievements.filter(
          (a) => a.id !== id
        ),
      },
    }));
  }, []);

  const updateAchievement = useCallback(
    (id: string, field: keyof AchievementItem, value: string) => {
      setFormData((prev) => ({
        ...prev,
        achievements: {
          ...prev.achievements,
          achievements: prev.achievements.achievements.map((a) =>
            a.id === id ? { ...a, [field]: value } : a
          ),
        },
      }));
    },
    []
  );

  // Image URLs
  const addImageUrl = useCallback(() => {
    setFormData((prev) => ({
      ...prev,
      achievements: {
        ...prev.achievements,
        imageUrls: [...prev.achievements.imageUrls, ""],
      },
    }));
  }, []);

  const removeImageUrl = useCallback((index: number) => {
    setFormData((prev) => ({
      ...prev,
      achievements: {
        ...prev.achievements,
        imageUrls: prev.achievements.imageUrls.filter((_, i) => i !== index),
      },
    }));
  }, []);

  const updateImageUrl = useCallback((index: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      achievements: {
        ...prev.achievements,
        imageUrls: prev.achievements.imageUrls.map((u, i) =>
          i === index ? value : u
        ),
      },
    }));
  }, []);

  // Apply template
  const applyTemplate = useCallback((template: Template) => {
    const { data } = template;

    // 기존 카테고리 이름 목록에 매핑 + 템플릿에만 있는 카테고리 추가
    const categoryNames = [
      "Frontend",
      "Backend",
      "Database",
      "DevOps",
      "기타",
    ];
    const techStack: TechCategory[] = categoryNames.map((name) => ({
      id: uid(),
      name,
      tags: data.techStack[name] ?? [],
    }));

    // 템플릿에 기본 5개에 없는 카테고리가 있다면 추가
    for (const [name, tags] of Object.entries(data.techStack)) {
      if (!categoryNames.includes(name) && tags.length > 0) {
        techStack.push({ id: uid(), name, tags });
      }
    }

    setFormData({
      overview: { ...data.overview },
      techStack,
      challenges: data.challenges.map((c) => ({ ...c, id: uid() })),
      achievements: {
        metrics: data.achievements.metrics.map((m) => ({ ...m, id: uid() })),
        achievements: data.achievements.achievements.map((a) => ({
          ...a,
          id: uid(),
        })),
        imageUrls: [...data.achievements.imageUrls],
      },
    });
  }, []);

  // Reset
  const reset = useCallback(() => {
    _id = 0;
    setFormData({
      ...initialState,
      techStack: defaultCategories.map((c) => ({
        ...c,
        id: uid(),
        tags: [],
      })),
      challenges: [{ id: uid(), challenge: "", solution: "", learning: "" }],
    });
  }, []);

  return {
    formData,
    markdown,
    updateOverview,
    addCategory,
    removeCategory,
    renameCategory,
    addTagToCategory,
    removeTagFromCategory,
    addChallenge,
    removeChallenge,
    updateChallenge,
    addMetric,
    removeMetric,
    updateMetric,
    addAchievement,
    removeAchievement,
    updateAchievement,
    addImageUrl,
    removeImageUrl,
    updateImageUrl,
    applyTemplate,
    setMarkdownDirect,
    isEdited: markdownOverride !== null,
    reset,
  };
}
