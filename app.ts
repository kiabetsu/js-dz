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

  withBucketByKey(
    key: unknown,
    callback: (bucket: Array<MapElement>, index: number) => void,
    createIfNotExist = false,
  ): void {
    const index = this.hash(key);
    if (!this.buckets[index] && createIfNotExist) {
      this.buckets[index] = [];
    }
    const bucket = this.buckets[index];
    if (bucket) {
      callback(bucket, index);
    }
  }

  set(key: unknown, value: unknown): void {
    this.withBucketByKey(key, (bucket) => {
      const mapElement: MapElement = { key, value };
      bucket.push(mapElement);
    });
  }

  get(key: unknown): MapElement | undefined {
    let found: MapElement | undefined;
    this.withBucketByKey(key, (bucket) => {
      found = bucket.find((mapElement) => mapElement.key === key);
    });
    return found;
    // const index = this.hash(key);
    // if (!this.buckets[index]) {
    //   return undefined;
    // }
    // return this.buckets[index].find((mapElement) => mapElement === key);
  }

  has(key: unknown): boolean {
    let exist = false;
    this.withBucketByKey(key, (bucket) => {
      exist = bucket.some((mapElement) => mapElement.key);
    });
    return exist;
    // const index = this.hash(key);
    // if (!this.buckets[index]) {
    //   return false;
    // }
    // return this.buckets[index].map((mapElement) => mapElement.key).includes(key);
  }

  delete(key: unknown): void {
    this.withBucketByKey(key, (bucket, index) => {
      this.buckets[index] = this.buckets[index]!.filter((mapElement) => mapElement.key !== key);
    });
    // const index = this.hash(key);
    // if (!this.buckets[index]) {
    //   return;
    // }
    // this.buckets[index] = this.buckets[index].filter((mapElement) => mapElement.key !== key);
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
