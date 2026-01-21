# CORE TypeScript

Typescript is the superset of the Javascript which can run the normal Js easily without any error.

But we use the Typescript to Prevent the Future Typebased Errors and make the Applications more robust and effective

## Topics Completed Involves 

 - ### The Basics 
 - ### DATA Types 
 - ### Interface
 - ### Type
 - ### Generics
 - ### Unions
 - ### OOPS
 - ### Composing Types
 - ### Structural Type Difference 


## The Basics 

    When we run our code, the way that our JavaScript runtime chooses what to do is by figuring out the type of the value - what sorts of behaviors and capabilities it has. That’s part of what that TypeError is alluding to - it’s saying that the string "Hello World!" cannot be called as a function.

### Some Key Points About the Typescript 

- Many Browser doesn't support the typescript directly to run them so they have to translate the typescript to the javascript 

- Type Annotations are not the part of the Javascript 

- The Down Leveling of the Typescripts is automatically to ES3 or ES5 Meaning the typescript codes is supported every broswer where the ES3 or ES5 or any other Downlevel js is supported 

- Use these Settings to work with the typescript : The strict flag in the CLI, or "strict": true in a tsconfig.json toggles them all on simultaneously, but we can opt out of them individually. The two biggest ones you should know about are noImplicitAny and strictNullChecks.

- Anonymous functions are a little bit different from function declarations. When a function appears in a place where TypeScript can determine how it’s going to be called, the parameters of that function are automatically given types.

- ### Object Types : 
        Apart from primitives, the most common sort of type you’ll encounter is an object type. This refers to any JavaScript value with properties, which is almost all of them! To define an object type, we simply list its properties and their types.

- ### Union Types : 
        TypeScript’s type system allows you to build new types out of existing ones using a large variety of operators. 

- ### Type Alias :
        We’ve been using object types and union types by 
        writing them directly in type annotations. This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name.

- ### Interfaces : 
        
        An interface declaration is another way to name an object type

- ### Differences Between Type Aliases and Interfaces
        
        Type aliases and interfaces are very similar, and in many cases we can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

- ### Type Assertions
        Sometimes you will have information about the type of a value that TypeScript can’t know about.

        For example, if you’re using document.getElementById, TypeScript only knows that this will return some kind of HTMLElement, but you might know that your page will always have an HTMLCanvasElement with a given ID.

- ### Literal Types
        In addition to the general types string and number, we can refer to specific strings and numbers in type positions.

        One way to think about this is to consider how JavaScript comes with different ways to declare a variable. Both var and let allow for changing what is held inside the variable, and const does not. This is reflected in how TypeScript creates types for literals.

- ### Narrowing 
        Type narrowing in TypeScript refers to the process of refining a variable's type from a broader, more general type to a more specific one within a certain code block, based on runtime checks or control flow.  This enables safer access to properties, methods, or values unique to the narrowed type

        - typeof Type Guard
        - truthiness narrowing
            - Equality Narrowing 
            - The 'in' Operater Narrowing
            - Instance of Narrowing 
            - Control Flow Analysis
            - using type predicates
            - Assestion Functions
            - Exhaustiveness checking

    ### Discriminated Unions

        Key Points in this 

        - we can use this ! after the values which we know which is certainly not null as per our knowledge and We know more about our types then the type checkers

        - We can also use the Switch case statements to work with this inplace of the if and else statement

- ### More on Functions 

        - Function type expressions
        - Call Signatures 
        - Construct Signatures
        - Generic Functions
        
- ### Classes 

        - Cross-hierarchy protected access
                TypeScript doesn’t allow accessing protected  members of a sibling class in a class hierarchy:
                 
                ```
                class Base {
                        protected x: number = 1;
                                }
                class Derived1 extends Base {
                        protected x: number = 5;
                }
                class Derived2 extends Base {
                        f1(other: Derived2) {
                                other.x = 10;           
                        }
                        f2(other: Derived1) {
                                other.x = 10;
                        Property 'x' is protected and only accessible within class 'Derived1' and its subclasses.
                }
                }
                ```

        - Static members can also use the same public, protected, and private visibility modifier

        - TypeScript (and JavaScript) don’t have a construct called static class the same way as, for example, C# does. 
                Those constructs only exist because those languages force all data and functions to be inside a class; because that restriction doesn’t exist in TypeScript, there’s no need for them. A class with only a single instance is typically just represented as a normal object in JavaScript/TypeScript.   

        - 