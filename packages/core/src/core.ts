import { findLeafNodes, set } from "@meta-engine/shared";
import Model, { Attrs, ModalConfig } from "./model";
import Path from "./path";
import Plugins from "./plugins";
export interface FieldCtx {
  methods: Record<string, Function>;
  register: (forceUpdate: Function) => void;
  value: any;
  onChange: (newValue: any) => void;
  validate: any;
  visible: boolean;
}
class Core {
  private plugins: Plugins = new Plugins();
  private models: Map<Path, Model> = new Map();
  constructor() {}

  static getPath(p: string[]) {
    return new Path(p);
  }

  setModel(path: Path, attrs?: Partial<Attrs>, config?: ModalConfig) {
    const model = new Model(attrs || {}, config);

    this.models.set(path, model);
    return model;
  }

  deleteModel(path: Path) {
    return this.models.delete(path);
  }
  registerPlugin() {
    return this;
  }

  unRegisterPlugin(name: string) {
    this.plugins.uninstall(name);
  }

  resetValues() {
    this.models.forEach((model) => {
      model.value = model.defaultValue;
    });
  }

  getValues() {
    const values = {};
    this.models.forEach((model, path) => {
      set(values, path.path, model.value);
    });
    return values;
  }

  getValue(pathName: string[] | string) {
    pathName = Array.isArray(pathName) ? pathName : Path.revert(pathName);
    return this.models.get(Path.getPath(pathName))?.value;
  }

  setValue(pathName: string[], value: any) {
    const model = this.models.get(Path.getPath(pathName));
    if (model) {
      model.value = value;
    }
  }

  setValues(values?: Record<string, any>) {
    if (values) {
      findLeafNodes(values).map(({ value, pathName }) => {
        const path = Path.getPath(pathName);
        const model = this.models.get(path);
        if (model) {
          // model.value = value;
          model.set(value)
        }
      });
    }
  }

  clear() {
    this.models.clear();
  }
}

export default Core;
