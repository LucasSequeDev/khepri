import { Engine, TopLevelCondition } from "json-rules-engine";
import { useEffect, useState } from "react";

import { State } from "../components/khepri";

export const useRulesEngine = (
  conditions: TopLevelCondition | undefined,
  state: State
) => {
  const [canRender, setCanRender] = useState(true);

  useEffect(() => {
    if (!conditions) {
      setCanRender(true);
      return;
    }

    const engine = new Engine();
    engine.addRule({
      conditions,
      event: { type: "render", params: { allowed: true } },
    });

    engine.run(state).then(({ events }) => {
      console.log("events", events);
      setCanRender(events.length > 0);
    });
  }, [conditions, state]);

  return canRender;
};
