###Native.js

The term "native" is very overused in JavaScript.

Colloquially, it is used as in Johan's answer: no JQuery, Moo, Dojo.
Analogous to the JNI for Java, Google's GWT and similar I-compile-down-to-JavaScript talks about the underlying implementation as being native.
The original use of native in JS, I believe, refers to objects built and defined in ECMAScript as opposed to the environment. JavaScript, as an ECMAScript language, is not intended to be self-sufficient; it is embedded in a host environment such as a Web browser, Photoshop, Acroread, etc. When you write a web client program, you will use objects such as Math, Function, Array, Window, and Button. The first three are native (independent of host environment), while the last two are non-native (supplied by the host environment). This is kind of the opposite of cdhowie's answer, which is a good answer BTW. Just interesting, though!
I'm sure there are other interpretations. My guess is that if you see this in a job description, it's probably not the last one: that definition is too academic. :)

Here is the official definition from the ECMAScript-262 Standard, Fifth Edition:

4.3.6 native object --- object in an ECMAScript implementation 
whose semantics are fully defined by this specification rather 
than by the host environment. NOTE Standard native objects are 
defined in this specification. Some native objects are built-in; 
others may be constructed during the course of execution of an 
ECMAScript program.
In other words the built-ins like Math, Object, String, RegExp are native, as are any objects I make with object literals or function definitions. But host objects are the opposite. Sorry for the ramble.

Repeated native JS from a file with tasks 

Repeated native JS from a book you don't know Java script 

Read react documentation 

Closures

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

Promise

The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

typeof

The typeof operator returns a string indicating the type of the unevaluated operand.

Classes

Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

WHAT IS ABSTRACTION?

Do you ever drink Coffee? If you do, then there’s a good chance that you might have used a coffee machine in your life. The concept of abstraction is closely related to the principle of a coffee machine. You know that a coffee machine makes coffee, but you don’t need to know how it makes coffee. In short, all you need to know is about which buttons to press to make Coffee. You can use a button defined interface to make coffee, without needing to worry about the internal working of a machine.
The same principle goes into the concept of an Object-oriented programming language. In simple words, it is a concept that is not associated with any particular instance.

WHAT IS ENCAPSULATION?

It is a group of properties and members under a single class or Object. Programs can be really long and there can easily be a ton of moving parts in it. After some time it gets really tough to maintain all these objects without them running into complexity. This is where a primary principle like encapsulation comes into play. You can use this principle to encapsulate a set of objects into different classes. With this principle, you can prevent the repetition of code and also shorten the length of your code. You can look at encapsulation like a medicinal pill. All the medicine(Objects) are stored inside a pill (class) and you can consume it whenever needed.

WHAT IS INHERITANCE?

It is the ability to acquire the properties of existing classes and create new ones. Inheritance allows you to reuse code without having to rewrite it in a program. One of the best features of Inheritance is the ability to shorten the code in a program. You can use this principle to inherit codes from another class and reuse it in a new class.

WHAT IS POLYMORPHISM?

Polymorphism refers to one name with many forms. It is the ability of one function to perform in different ways. In other words, it refers to an object’s ability to take on more than one single form.

Programming paradigms are a way to classify programming languages based on their features. Languages can be classified into multiple paradigms.

Some paradigms are concerned mainly with implications for the execution model of the language, such as allowing side effects, or whether the sequence of operations is defined by the execution model. Other paradigms are concerned mainly with the way that code is organized, such as grouping a code into units along with the state that is modified by the code. Yet others are concerned mainly with the style of syntax and grammar.

In computer science, functional programming is a programming paradigm where programs are constructed by applying and composing functions. It is a declarative programming paradigm in which function definitions are trees of expressions that map values to other values, rather than a sequence of imperative statements which update the running state of the program.

TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript.[5] As it is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.

### The Catalog of Design Patterns

## Factory Method 
is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

Software design pattern
In software engineering, a software design pattern is a general, reusable solution to a commonly occurring problem within a given context in software design. It is not a finished design that can be transformed directly into source or machine code. Rather, it is a description or template for how to solve a problem that can be used in many different situations. Design patterns are formalized best practices that the programmer can use to solve common problems when designing an application or system.

Delegation pattern

In delegation, an object handles a request by delegating to a second object (the delegate). The delegate is a helper object, but with the original context. With language-level support for delegation, this is done implicitly by having self in the delegate refer to the original (sending) object, not the delegate (receiving object). In the delegate pattern, this is instead accomplished by explicitly passing the original object to the delegate, as an argument to a method. Note that "delegation" is often used loosely to refer to the distinct concept of forwarding, where the sending object simply uses the corresponding member on the receiving object, evaluated in the context of the receiving object, not the original object.

Functional design

Functional Design is a paradigm used to simplify the design of hardware and software devices such as computer software. A functional design assures that each modular part of a device has only one responsibility and performs that responsibility with the minimum of side effects on other parts. Functionally designed modules tend to have low coupling.

Builder is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.

Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.

Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate.

Bridge is a structural design pattern that lets you split a large class or a set of closely related classes into two separate hierarchies—abstraction and implementation—which can be developed independently of each other.

