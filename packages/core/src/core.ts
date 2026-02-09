import Model from "./model";
import Path from "./path";
import Plugins from "./plugins";

class Core {
  private plugins: Plugins = new Plugins();
  private models: WeakMap<Path, Model> = new WeakMap();
  constructor() {}

  setModel(path: Path, model: Model) {
    return this.models.set(path, model);
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

  clear() {
    this.models = new WeakMap();
  }
}

export default Core;
