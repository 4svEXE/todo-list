import { Component } from "@angular/core";

@Component({
  selector: "app-learn-type-script",
  templateUrl: "./learn-type-script.component.html",
  styleUrls: ["./learn-type-script.component.scss"],
})
export class LearnTypeScriptComponent {}

const entity: string = "d";
const obj = {
  a: "v",
};

type UserType = {
  name: string;
  age: number;
  // adress: string
};
type AdressType = {
  sity: string;
  country: string;
};

let user: UserType;

user = {
  name: "ivan",
  // adress: 'aasasa',
  age: 42,
};

const adress: AdressType = {
  country: "dsdas",
  sity: "dasdsadasd",
};

let common: UserType & AdressType;
common = {
  ...user,
  ...adress,
};

let arr: string[];
arr = ["a", "b", "c", "d", "e", "f"];

let numbers: ReadonlyArray<number> = [1, 2, 3];
// numbers[0] = 22// Дасть помилку бо змінювати не можна

// Кортеж
type TypeArray = [number, string, boolean, number];
const arrr: TypeArray = [1, "a", false, 1];

// Functions
type TypeCapybara = {
  name: string;
  age: number;
  sizes: number[];
};
function getCapy(): TypeCapybara {
  let capy: TypeCapybara;

  capy = {
    name: "Capybara",
    age: 42,
    sizes: [12, 16, 32],
  };

  return capy;
}

// Arrow functions
const capyIsAngry = (name: string): boolean => {
  console.log(`Capy ${name} not angry! Capys is peasfull!`);
  return false;
};

// or
type TypeCapySizes = { sizes: number[] };
type TypeArrFuncForGetCapySizes = (name: string) => TypeCapySizes;

const getCapySizes: TypeArrFuncForGetCapySizes = (name) => {
  return { sizes: [12, 16, 32] };
};

// rest
const getSomeNumbers = (...numbers: number[]): number[] => {
  return numbers;
};

// ****** Перегрузки ******
function getCar(name: string): string;
function getCar(name: string, price: number): string;

function getCar(name: string, price?: number): string {
  return price ? `name : ${name}, price : ${price}` : `name : ${name}`;
}

// ****** Classes ******
class Capybabka {
  name: string;
  age: number;
  dateOfBirth: Date;

  constructor(name: string, age: number, dateOfBirth: Date) {
    this.name = name;
    this.age = age;
    this.dateOfBirth = dateOfBirth;
  }

  // В TS є три модефікатори:
  // private | public | protected
  // = public = is default modeficator for classes
  // = private = can use only in class
  // = protected = like private, but can be used in extended classes
}

// ****** Interfaces ******
interface ICapybabka {
  // I - because interface
  name: string;
  age: number;
  angry: boolean;
}

const weryAngryCapy: ICapybabka = {
  name: "Lera",
  age: 30,
  angry: false,
};

// extends in iterfaces
interface ICapybabkaHappy extends ICapybabka {
  happy: boolean;
  whuIsHappy: string;
}

const happyCappy: ICapybabkaHappy = {
  name: "alex",
  age: 12,
  angry: false,
  happy: true,
  whuIsHappy: "Because He see a cat",
};

// ****** Enums ******
enum EnumRoles { // constants lice in CONFIG.js
  ADMIN,
  GUEST,
  USER,
}

// or
const enum EnumColors {
  black,
  white,
  red,
  green,
  blue,
}

//
interface IUser {
  role: EnumRoles;
  color: EnumColors;
}

const userAdmin: IUser = {
  role: EnumRoles.ADMIN,
  color: EnumColors.red,
};

// user!.name
const getLength = (text: string | null) => {
  // return text!.length; // not NULL and not UNDEFINED
  return text?.length;
};
getLength("text");

// ****** Generics ******
//
function generateDeda<T>(args: T): T {
  return args;
}
generateDeda<number>(1);

// Arrow functions
const generateDeda2 = <T>(args: T): T => {
  return args;
};

//Class
class CapyLazy<T> {
  private capy: T;

  constructor(capy: T) {
    this.capy = capy;
  }

  getCapy(): T {
    return this.capy;
  }
}
new CapyLazy<number>(123);
// new CapyLazy<number>('123'); //didnt work

// Interface
interface IPair<K, V> {
  key: K;
  value: V;
}

const pair: IPair<string, number> = {
  key: "string22",
  value: 123,
};

// ****** Assertions ******
const inpEl = document.querySelector("input");
let val = inpEl?.value;

const getLng = (str: string | null): number => str!.length;
var numn: number = getLng("sss");

// ****** Utilites of types ******
interface IJuniorCapy {
  id: number; // creatte id but not use in next case
  name: string;
  age: number;
  workXP: number;
  isAngry: false;
}

// Витягує все окрім id
interface IJuniorCapyUpdate1 extends Omit<IJuniorCapy, "id"> {}
// Витягує тільки id 
interface IJuniorCapyUpdate2 extends Pick<IJuniorCapy, "id"> {}
// Зобить всі властивості не обов'язковими
interface IJuniorCapyUpdate3 extends Partial<IJuniorCapy> {}
// Зобить всі властивості не змінними і тільки для читання
interface IJuniorCapyUpdate4 extends Readonly<IJuniorCapy> {}
// Зобить властивості тільки того типу якого вказано
interface IJuniorCapyUpdate5 extends Record<'name' | 'age', string | number> {} 
// Зобить властивості обов'язковими
interface IJuniorCapyUpdate6 extends Required<IJuniorCapy> {} 


// ****** Decorators ******
function LogClass(constructor: Function) { // Upper case first letter
  console.log(constructor.name)
}

function LogMetod(target: Object, key: string, descriptor: PropertyDescriptor) { // Upper case first letter
  console.log(key)
}

@LogClass

class Tankibara{
  private age: number;

  constructor(name: string, age: number) {
    this.age = age;
  }

  @LogMetod
  getAge(){
    return this.age
  }
}