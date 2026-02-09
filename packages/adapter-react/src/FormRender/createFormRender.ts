import {
  ComponentType,
  createElement,
  forwardRef,
  Fragment,
  ReactNode,
  useImperativeHandle,
  useState,
} from "react";

import {
  CreateConfig,
  FormEngine,
  FormRef,
  FormRenderProps,
} from "@meta-engine/form";
import Field from "./Field";

const _createElement = (...args: Parameters<typeof createElement>) => {
  const children = args[2] as any;

  return createElement(
    args[0],
    args[1],
    typeof children === "function" ? children() : children,
  );
};
export default function createFormRender(
  createConfig: CreateConfig<ComponentType>,
) {
  const { layout, layoutItem, components } = createConfig;

  return forwardRef<FormRef, FormRenderProps>((props, ref) => {
    const { fields } = props;
    useImperativeHandle(ref, () => ({
      getRef: () => form.getRef(),
    }));
    const [form] = useState(
      new FormEngine<ReactNode, ComponentType<any>>(
        {
          fragment: Fragment,
          render: _createElement,
          field: Field,
        },
        {
          fields,
          components,
          layout,
          layoutItem,
        },
      ),
    );

    return form.render();
  });
}
