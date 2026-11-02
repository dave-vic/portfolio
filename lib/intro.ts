"use client";
import { useEffect, useState } from "react";

/** The home loader announces when it hands over, so the hero can start its own entrance. */
const EVT = "dd:intro-done";

export const introSeen = () => {
  if (typeof document === "undefined") return false;
  return document.documentElement.dataset.intro === "seen";
};

export function finishIntro() {
  document.documentElement.dataset.intro = "seen";
  try { sessionStorage.setItem("dd-intro", "1"); } catch {}
  window.dispatchEvent(new Event(EVT));
}

/** true once the loader has handed over (or straight away when it is skipped) */
export function useIntroDone() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (introSeen() || !document.getElementById("dd-loader")) { setDone(true); return; }
    const on = () => setDone(true);
    window.addEventListener(EVT, on);
    return () => window.removeEventListener(EVT, on);
  }, []);
  return done;
}
