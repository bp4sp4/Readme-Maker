"use client";

import { useState, useEffect } from "react";
import styles from "./HeroSection.module.css";

const rotatingTexts = [
  "README.md",
  "작성하기 어려운",
  "당신을 위해",
  "준비했습니다.",
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % rotatingTexts.length);
        setIsVisible(true);
      }, 400);
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.hero_inner}>
        <h1 className={`${styles.hero_title} fade-in-up fade-in-up-1`}>
          Readme{" "}
          <span className={styles.hero_title_accent}>Maker</span>
        </h1>

        <div className={`${styles.hero_rotating} fade-in-up fade-in-up-2`}>
          <p
            className={`${styles.hero_rotating_text} ${
              isVisible
                ? styles.hero_rotating_text__visible
                : styles.hero_rotating_text__hidden
            }`}
          >
            {rotatingTexts[currentIndex]}
          </p>
        </div>

        <div className={`${styles.hero_desc} fade-in-up fade-in-up-3`}>
          <p className={styles.hero_desc_text}>
            템플릿을 고르고, 내 프로젝트에 맞게 수정하면 끝.
            <br />
            복사 한 번이면 GitHub에 바로 올릴 수 있어요.
          </p>
        </div>
      </div>
    </section>
  );
}
