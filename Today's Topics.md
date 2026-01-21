## 1. Type System Basics

These are the foundation of TypeScript.

* `number`, `string`, `boolean`
* `null` and `undefined`
* `any`
* `unknown`
* `void`
* `never`
* Type inference (TS automatically infers types)

---

## 2. Arrays & Tuples

* Typed arrays

  ```ts
  let nums: number[] = [1, 2, 3];
  ```
* Tuples (fixed length & types)

  ```ts
  let user: [number, string] = [1, "Alice"];
  ```

---

## 3. Objects & Type Aliases

* Object typing
* Optional properties (`?`)
* Readonly properties
* Type aliases

  ```ts
  type User = {
    id: number;
    name: string;
    age?: number;
  };
  ```

---

## 4. Interfaces

* Defining object shapes
* Extending interfaces
* Interface vs Type

  ```ts
  interface User {
    id: number;
    name: string;
  }
  ```

---

## 5. Functions

* Typed parameters
* Return types
* Optional & default parameters
* Function overloads

  ```ts
  function add(a: number, b: number): number {
    return a + b;
  }
  ```

---

## 6. Union & Intersection Types

* Union (`|`)
* Intersection (`&`)

  ```ts
  type Status = "success" | "error";
  ```

---

## 7. Enums

* Numeric enums
* String enums

  ```ts
  enum Role {
    Admin,
    User,
    Guest
  }
  ```

---

## 8. Literal Types

* String literals
* Numeric literals

  ```ts
  let direction: "left" | "right";
  ```

---

## 9. Type Assertions

* `as` keyword
* Angle-bracket syntax

  ```ts
  let value: unknown = "hello";
  let length = (value as string).length;
  ```

---

## 10. Classes

* Class properties & methods
* Constructors
* Access modifiers (`public`, `private`, `protected`)
* `readonly`
* Inheritance
* Abstract classes

---

## 11. Generics

* Generic functions
* Generic interfaces & classes

  ```ts
  function identity<T>(value: T): T {
    return value;
  }
  ```

---

## 12. Type Narrowing

* `typeof`
* `instanceof`
* Discriminated unions
* Control flow analysis

---

## 13. Modules

* `import` / `export`
* Default vs named exports

---

## 14. Utility Types (Very Important)

Built-in helpers:

* `Partial<T>`
* `Required<T>`
* `Readonly<T>`
* `Pick<T, K>`
* `Omit<T, K>`
* `Record<K, T>`

---

## 15. Configuration (tsconfig.json)

* `target`
* `module`
* `strict`
* `noImplicitAny`
* `strictNullChecks`

---

## 16. TypeScript with JavaScript

* Using TS with JS files
* `allowJs`
* `checkJs`
* Migrating JS → TS

---

1. Types & inference
2. Functions & objects
3. Interfaces & unions
4. Classes
5. Generics
6. Utility types
7. tsconfig
