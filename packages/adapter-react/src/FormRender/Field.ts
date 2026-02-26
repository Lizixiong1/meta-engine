import {
  Component,
  ComponentType,
  createElement,
  FC,
  Fragment,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import useUpdate from "../hooks/useUpdate";
import { FORCE_UPDATE_KEY, ValidationResult } from "@meta-engine/core";

interface FieldProps {
  children?: ReactNode;
  fieldCtx: any;
}

function useFieldBinding(props: FieldProps) {
  const { fieldCtx, ...otherProps } = props;
  const forceUpdate = useUpdate();
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    isValid: true,
  });
  useEffect(() => {
    fieldCtx.register(forceUpdate);
  }, []);

  const onChange = useCallback((newValue: any) => {
    fieldCtx.onChange?.(newValue);
    validate(newValue);
  }, []);

  const validate = async (newValue: any) => {
    // if (fieldCtx.validate) {
    //   const result = await fieldCtx.validate(newValue);
    //   setValidationResult(result);
    // } else {
    //   setValidationResult({ isValid: true });
    // }
  };

  return {
    value: fieldCtx.value ?? "",
    onChange,
    validationResult,
    visible: fieldCtx.visible,
    ...otherProps,
  };
}

const Field: FC<FieldProps> = ({ children, ...props }) => {
  // const { validationResult, visible, ...otherProps } = useFieldBinding(props);

  console.log(props);

  const forceUpdate = useUpdate();

  useEffect(() => {
    props.model.register(FORCE_UPDATE_KEY, forceUpdate);
  }, []);

  return props.render();
};

export default Field;
