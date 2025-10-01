type MapElement = { key: unknown; value: unknown };

class Map {
  buckets: Array<Array<MapElement>> = [];
  mapSize: number = 16;

  hash(key: unknown) {
    const keyString = String(key);
    let sum = 0;
    for (let i = 0; i < keyString.length; i++) {
      sum += keyString.charCodeAt(i);
    }
    const hash = sum % this.mapSize;
    return hash;
  }

  set(key: unknown, value: unknown): void {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    const mapElement: MapElement = { key, value };
    this.buckets[index].push(mapElement);
  }

  has(key: unknown): boolean {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      return false;
    }
    return this.buckets[index].map((mapElement) => mapElement.key).includes(key);
  }

  delete(key: unknown): void {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      return;
    }
    this.buckets[index].filter((mapElement) => mapElement.key !== key);
  }

  clear(): void {
    this.buckets = [];
  }
}

const newMap = new Map();

// // const newMap = new Map();
newMap.set('hello', 'world');
newMap.set('hello1', 'world');
newMap.set('hello2', 'world');
newMap.set('hello', 'world1');
newMap.delete(1);
console.log(newMap.has('hello'));

console.log(newMap);
