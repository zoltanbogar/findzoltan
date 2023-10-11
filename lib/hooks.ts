import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";
import { event } from "nextjs-google-analytics";

export function useSectionInView(sectionName: SectionName, threshold = 1) {
  const { ref, inView } = useInView({
    trackVisibility: true,
    delay: 100,
    threshold: 0.15,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
      event("scroll_action", {
        category: "Scroll",
        label: sectionName,
      });
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}