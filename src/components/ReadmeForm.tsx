"use client";

import { usePortfolioForm } from "@/hooks/useReadmeForm";
import { templates } from "@/lib/templates";
import TemplateSelector from "./TemplateSelector";
import ProgressBar from "./ProgressBar";
import OverviewSection from "./form/OverviewSection";
import TechStackSection from "./form/TechStackSection";
import ChallengesSection from "./form/ChallengesSection";
import AchievementsSection from "./form/AchievementsSection";

type FormHook = ReturnType<typeof usePortfolioForm>;

interface Props {
  formData: FormHook["formData"];
  updateOverview: FormHook["updateOverview"];
  addCategory: FormHook["addCategory"];
  removeCategory: FormHook["removeCategory"];
  renameCategory: FormHook["renameCategory"];
  addTagToCategory: FormHook["addTagToCategory"];
  removeTagFromCategory: FormHook["removeTagFromCategory"];
  addChallenge: FormHook["addChallenge"];
  removeChallenge: FormHook["removeChallenge"];
  updateChallenge: FormHook["updateChallenge"];
  addMetric: FormHook["addMetric"];
  removeMetric: FormHook["removeMetric"];
  updateMetric: FormHook["updateMetric"];
  addAchievement: FormHook["addAchievement"];
  removeAchievement: FormHook["removeAchievement"];
  updateAchievement: FormHook["updateAchievement"];
  addImageUrl: FormHook["addImageUrl"];
  removeImageUrl: FormHook["removeImageUrl"];
  updateImageUrl: FormHook["updateImageUrl"];
  applyTemplate: FormHook["applyTemplate"];
  reset: FormHook["reset"];
}

export default function ReadmeForm(props: Props) {
  const { formData } = props;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <TemplateSelector
        templates={templates}
        onSelect={props.applyTemplate}
      />
      <ProgressBar formData={formData} />
      <div className="fade-in-up fade-in-up-3">
        <OverviewSection
          overview={formData.overview}
          updateOverview={props.updateOverview}
        />
      </div>
      <div className="fade-in-up fade-in-up-3">
        <TechStackSection
          techStack={formData.techStack}
          addCategory={props.addCategory}
          removeCategory={props.removeCategory}
          renameCategory={props.renameCategory}
          addTagToCategory={props.addTagToCategory}
          removeTagFromCategory={props.removeTagFromCategory}
        />
      </div>
      <div className="fade-in-up fade-in-up-4">
        <ChallengesSection
          challenges={formData.challenges}
          addChallenge={props.addChallenge}
          removeChallenge={props.removeChallenge}
          updateChallenge={props.updateChallenge}
        />
      </div>
      <div className="fade-in-up fade-in-up-5">
        <AchievementsSection
          achievements={formData.achievements}
          addMetric={props.addMetric}
          removeMetric={props.removeMetric}
          updateMetric={props.updateMetric}
          addAchievement={props.addAchievement}
          removeAchievement={props.removeAchievement}
          updateAchievement={props.updateAchievement}
          addImageUrl={props.addImageUrl}
          removeImageUrl={props.removeImageUrl}
          updateImageUrl={props.updateImageUrl}
        />
      </div>

      <div className="fade-in-up fade-in-up-5">
        <button
          onClick={props.reset}
          style={{
            width: "100%",
            padding: "16px 0",
            borderRadius: 16,
            border: "1.5px solid #E5E8EB",
            background: "transparent",
            color: "#AEB5BC",
            fontSize: 15,
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#D1D5DB";
            e.currentTarget.style.color = "#6B7280";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#E5E8EB";
            e.currentTarget.style.color = "#AEB5BC";
          }}
        >
          초기화
        </button>
      </div>
    </div>
  );
}
