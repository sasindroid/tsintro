let message: string = 'Hello, Sasi!';
console.log({ message });

// Primitive Types
  let isDone: boolean = false;
  let code: number = 42;
  let myName: string = 'Sasi';

  let notDefined: undefined = undefined;
  let notPresent: null = null;

  let starSymbol = Symbol('star')
  let biggy: bigint = 24n;

// Built-in class
  let regExp: RegExp = new RegExp('ab+c');
  let array: Array<number> = [1, 2, 3];
  // or
  let array1: number[] = [1, 2, 3];
  let set: Set<number> = new Set([1, 2, 3]);

// Custom class
  class Queue<T> {
    private data: Array<T> = [];
    push(item: T) {
      this.data.push(item);
    }
    pop(): T | undefined {
      return this.data.shift();
    }
  }

  let queue: Queue<number> = new Queue<number>();

// Array and Tuples
  let array2: number[] = [1, 2, 3];

  // Fixed array is called a Tuple
  let fixedArrayIsATuple: [number, number] = [0, 0];

// Object Types and Type Aliases
  type Point = { x: number, y: number };

  let center: Point = {
    x: 0,
    y: 0,
  };

// const
  const point: Point = {
    x: 0,
    y: 0,
  };

  point.x = 3;

// function
  type AddInput = { a: number, b: number };

  // returns value
  function add(input: AddInput): number {
    return input.a + input.b;
  }

  // no return
  function log(message: string): void {
    console.log('Log', message);
  }

  const add1 = (input: AddInput): number => {
    return input.a + input.b;
  };

// Structural Typing
  type Point2D = { x: number, y: number };
  type Point3D = { x: number, y: number, z: number };

  let point2D: Point2D = { x: 0, y: 10 };
  let point3D: Point3D = { x: 0, y: 10, z: 60 };

  // Extra info is ok
  // Called duck typing
  point2D = point3D;

// Classes
  class Animal {
    // name is now accessible in child classes but not on the instance object
    protected name: string;

    constructor(name: string) {
      this.name = name;
    }

    // default is public access
    public move(distanceInMeters: number): void {
      console.log(`${this.name} moved ${distanceInMeters}m`);
    }
  }

  let cat: Animal = new Animal('cat');
  cat.move(100);

  // works only if name is public
  // cat.name = 'Dog';

  class Bird extends Animal {
    public fly(distanceInMeters: number): void {
      console.log(`${this.name} flew ${distanceInMeters}m`);
    }
  }

// Generics
  class Queue1<T> {
    private data: Array<T> = [];
    push(item: T) {
      this.data.push(item);
    }
    pop(): T | undefined {
      return this.data.shift();
    }
  }

  const queue1: Queue1<number> = new Queue1<number>();
  queue1.push(10);
  queue1.pop();

// Special Types - any and unknown
  let anyValue: any;
  let unknownValue: unknown;

  // any is not safe
  // anyValue.name.age.date.anything.here;

  // unknown is a safer version of any
  // the below is not possible
  // unknownValue.name.age.date.anything.here;

  // unknown's need validation before using
  if (typeof unknownValue === 'string') {
    unknownValue.trim();
  }

  if (typeof unknownValue === 'number') {
    console.log(unknownValue + 20);
}

// Type Assertions
  let hello: unknown;
  // hello = load();
  // Here not sure the datatype of hello.
  // const trimmed = (hello as string).trim();

  // Type assertion using Angle bracket syntax.
  // Note this does not work in tsx file.
  // const trimmed1 = (<string>hello).trim();


// Type casting
  let leet;
  leet = '1337';
  // use as number, use + before the value to convert to number.
  const numberVal: number = +leet;


// Type Declarations
  console.log('Logged in user:', process.env.USER);

  // process is not available. So this can be declared:
  // This can be moved into a declaration file that has an extension .d.ts
  // declare const process: any;

  // A better way is to get the types for this.
  // The open source project - definitelytyped  helps in here.
  // add types using npm i @types/node

  // 3rd party on npm that requires external type definitions
  // Eg: Express
  // Check for the type lib: @types/express


// Async/Await
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const mainAsync = async () => {
    await delay(1000);
    console.log('1s');
    await delay(1000);
    console.log('2s');
    await delay(1000);
    console.log('3s');
  };

  mainAsync();


// Lexical this
  class Person {
    private _age: number;

    constructor(_age: number) {
      this._age = _age;
    }

    growOld(): void {
      // Two ways to think about this keyword in js.
      // 1) calling context (growOld function is not an arrow function, this will be driven using calling context)
      // 2) lexically scoped (arrow and bound functions
      this._age++;
    }

    age(): number {
      return this._age;
    }
  }

  const person: Person = new Person(39);
  person.growOld();
  console.log('Age now', person.age());

  // Now if the function is stored in a variable and invoked.
  const growOld = person.growOld;
  // the method is not invoked on any object but just the calling context, so the this keyword in growOld() method is undefined.
  // growOld();

  // The solution for this is to update growOld() to an arrow function.

  class Person2 {
    private _age: number;

    constructor(_age: number) {
      this._age = _age;
    }

    growOld = (): void => {
      this._age++;
    }

    age(): number {
      return this._age;
    }
  }

  const person2: Person2 = new Person2(39);
  const growOldPerson2 = person2.growOld;
  growOldPerson2();
  console.log('Age now for person2', person2.age());


// Readonly modifier
// Works compile time only
  type Point3 = {
    readonly x: number;
    readonly y: number;
  }

  const point3: Point3 = {
    x: 1,
    y: 2
  };

  // Cannot do this.
  // point3.x = 10;


// Union types
  let value1: string | string[];


// Literal types
  type CardinalDirection = 'North' | 'South' | 'East' | 'West';
  let direction: CardinalDirection;
  direction = 'East';


// Type Narrowing (for classes)
  class Cat {
    meow(): void {
      console.log('meow');
    }
  }

  class Dog {
    bark(): void {
      console.log('bark');
    }
  }

  type Animal2 = Cat | Dog;

  function speak(animal2: Animal2): void {
    if (animal2 instanceof Cat) {
      animal2.meow();
    }

    if (animal2 instanceof Dog) {
      animal2.bark();
    }
  }

  speak(new Cat());



// Type Narrowing (for properties)
  type Square = {
    size: number
  }

  type Rectangle = {
    width: number,
    height: number
  }

  type Shape = Square | Rectangle;

  function area(shape: Shape): number | Error {
    if ('size' in shape) {
      return shape.size * shape.size;
    }

    if ('width' in shape) {
      return shape.width * shape.height;
    }

    return new Error('Invalid shape input');
  }

  console.log('square', area({ size: 2 }));
  console.log('rectangle', area({ width: 2, height: 3 }));



  // Discriminated Unions
