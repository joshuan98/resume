import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Manages scroll state for a row element
 */
export const useScrollState = () => {
  const [scrollState, setScrollState] = useState<
    Record<string, { canScrollLeft: boolean; canScrollRight: boolean }>
  >({});
  const rowRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const updateRowState = useCallback((title: string) => {
    const el = rowRefs.current[title];
    if (!el) {
      return;
    }

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const canScrollLeft = scrollLeft > 8;
    const canScrollRight = scrollLeft + clientWidth < scrollWidth - 8;

    setScrollState((prev) => {
      const prevState = prev[title];
      if (
        prevState &&
        prevState.canScrollLeft === canScrollLeft &&
        prevState.canScrollRight === canScrollRight
      ) {
        return prev;
      }

      return {
        ...prev,
        [title]: { canScrollLeft, canScrollRight },
      };
    });
  }, []);

  const scrollRow = useCallback((title: string, direction: "left" | "right") => {
    const el = rowRefs.current[title];
    if (!el) {
      return;
    }

    const distance = Math.max(el.clientWidth * 0.85, 320);
    const delta = direction === "left" ? -distance : distance;
    el.scrollBy({ left: delta, behavior: "smooth" });
  }, []);

  return {
    scrollState,
    rowRefs,
    updateRowState,
    scrollRow,
  };
};

/**
 * Manages dialog/modal state for item details
 */
export const useDialog = <T,>() => {
  const [activeItem, setActiveItem] = useState<T | null>(null);

  const openDialog = useCallback((item: T) => {
    setActiveItem(item);
  }, []);

  const closeDialog = useCallback(() => {
    setActiveItem(null);
  }, []);

  const isOpen = Boolean(activeItem);

  // Handle escape key
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeDialog();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, closeDialog]);

  // Prevent body scroll when dialog is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return {
    activeItem,
    openDialog,
    closeDialog,
    isOpen,
  };
};

/**
 * Manages skill bar animation readiness
 */
export const useSkillBars = () => {
  const [barsReady, setBarsReady] = useState(false);

  useEffect(() => {
    setBarsReady(true);
  }, []);

  return barsReady;
};
