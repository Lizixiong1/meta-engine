import { FORCE_UPDATE_KEY } from "./constant";
import { FieldCtx } from "./core";
import Path from "./path";

export interface ValidationResult {
  isValid: boolean;
  errorMessage?: string;
}

export interface Rule {}

export interface ModalConfig {
  rules?: Rule[]; // 校验规则
  validAllowedSetValue?: boolean; // 校验不通过时是否允许设置值 只有在设置了校验器和 必填时才能
  validator?: (newValue: any, rules?: Rule[]) => Promise<ValidationResult>; // 校验器
}

export interface Attrs {
  defaultValue?: any;
  value?: any;
  visible: boolean;
  required: boolean;
}
const defaultConfig: Partial<ModalConfig> = {
  validAllowedSetValue: true,
};
class Model {
  private config: ModalConfig;
  defaultValue?: any;
  value?: any;
  visible!: boolean;
  required!: boolean;
  methods: Record<string, Function> = {};
  constructor(attrs: Partial<Attrs>, config?: ModalConfig) {
    this.initAttrs({ required: false, visible: true, ...attrs });
    this.config = { ...defaultConfig, ...config };
  }

  register(type: string, callback: Function) {
    this.methods[type] = callback;
  }

  exec(type: string) {
    const callback = this.methods[type];
    callback && callback();
  }

  onChange(newValue: any) {
    this.value = newValue;
  }

  initAttrs(attrs: Attrs) {
    this.defaultValue = attrs.defaultValue;
    this.value = attrs.value;
    this.visible = attrs.visible;
    this.required = attrs.required;
  }

  shouldValidate() {
    return this.config.validator && this.required;
  }

  get() {
    return typeof this.value === "undefined" ? this.defaultValue : this.value;
  }

  async set(newValue: any) {
    if (this.shouldValidate()) {
      const result = await this.config.validator?.(newValue, this.config.rules);
      if (!result?.isValid && !this.config.validAllowedSetValue) {
        return false;
      }
    }
    this.value = newValue;
    this.methods[FORCE_UPDATE_KEY]?.();
    return true;
  }
}

export default Model;
