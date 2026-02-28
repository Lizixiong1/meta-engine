import { FC, ReactNode, useEffect } from "react";
import useUpdate from "../hooks/useUpdate";
import { FORCE_UPDATE_KEY, Model } from "@meta-engine/core";

interface FieldProps {
  render: () => ReactNode;
  model: Model;
}

const Field: FC<FieldProps> = ({ model, render }) => {
  const forceUpdate = useUpdate();

  useEffect(() => {
    model.register(FORCE_UPDATE_KEY, forceUpdate);
  }, []);

  return render();
};

export default Field;
