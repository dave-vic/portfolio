import type { CaseData } from "@/content/cases/types";
import Hero from "./Hero";
import Overview from "./Overview";
import Problem from "./Problem";
import Journey from "./Journey";
import UpClose from "./UpClose";
import Decisions from "./Decisions";
import More from "./More";
import Outcome from "./Outcome";
import Next from "./Next";
import Motion from "./Motion";
import AutoMotion from "./AutoMotion";

/** the shared case-study template: each section renders only when the case has it */
export default function CaseStudy({ c }: { c: CaseData }) {
  return (
    <Motion>
      <AutoMotion>
      <Hero c={c} />
      <Overview c={c} />
      {c.problem && <Problem c={c} />}
      {c.journey && <Journey c={c} />}
      {c.upclose && <UpClose c={c} />}
      {c.decisions && <Decisions c={c} />}
      <More c={c} />
      {c.outcome && <Outcome c={c} />}
      <Next c={c} />
      </AutoMotion>
    </Motion>
  );
}
