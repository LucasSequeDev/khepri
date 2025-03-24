import { TopLevelCondition } from "json-rules-engine";
import { ReactNode } from "react";

import { useRulesEngine } from "../hook/useRulesEngine";
import { State } from "./khepri";

interface ConditionalRendererProps {
  conditions?: TopLevelCondition;
  state: State;
  children: ReactNode;
}

export const ConditionalRenderer = ({
  conditions,
  state,
  children,
}: ConditionalRendererProps) => {
  const canRender = useRulesEngine(conditions, state);

  return canRender ? <>{children}</> : null;
};
