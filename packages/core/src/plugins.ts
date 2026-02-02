class Plugins {
  plugins = new Map();
  install(name: string, plugin: any) {
    this.plugins.set(name, plugin);
  }

  uninstall(name: string) {
    this.plugins.delete(name);
  }
}

export default Plugins;
