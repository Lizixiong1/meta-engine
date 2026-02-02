class Path {
  path: string[];
  key: string;
  symbol: Symbol;

  static pathMapping: Record<string, Path> = {};
  static symbolMapping: Record<string, Path> = {};

  constructor(path: string[]) {
    this.path = path;
    this.key = Path.parse(path);
    this.symbol = Symbol(this.key);
    this.init();
  }

  static getPath(path: string[]) {
    const key = Path.parse(path);
    return Path.pathMapping[key];
  }

  static getPathBySymbol(symbol: Symbol) {
    const symbolKey = symbol.toString();
    return Path.symbolMapping[symbolKey];
  }

  static parse(path: string[]) {
    return path.join('.');
  }

  static revert(key: string) {
    return key.split('.');
  }

  init() {
    Path.pathMapping[this.key] = this;
    Path.symbolMapping[this.symbol.toString()] = this;
  }
}

export default Path;
