import { useCallback, useEffect, useRef, useState } from "react";

export default function useUpdate() {
  const isMounted = useRef(false);
  const [_, setState] = useState({});

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  // 确保挂载状态才触发更新组件
  return useCallback(() => isMounted.current && setState({}), []);
}
