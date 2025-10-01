type MapElement = { key: unknown; value: unknown };

class Map {
  list: Array<MapElement> = [];

  has(key: unknown): boolean {
    return this.list.map((element) => element.key).includes(key);
  }

  set(key: unknown, value: unknown): void {
    if (this.has(key)) {
      this.list = this.list.map((element) => (element.key === key ? { key, value } : element));
      return;
    }
    const element: MapElement = { key, value };
    this.list.push(element);
  }

  delete(key: unknown): void {
    this.list = this.list.filter((element) => element.key !== key);
  }

  clear(): void {
    this.list = [];
  }
}

const newMap = new Map();

// const newMap = new Map();
newMap.set('hello', 'world');
newMap.set('hello1', 'world');
newMap.set('hello2', 'world');
newMap.set('hello', 'world1');
newMap.delete(1);
newMap.has('hello');

console.log(newMap);
