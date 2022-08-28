### Native.js

The term "native" is very overused in JavaScript.

Colloquially, it is used as in Johan's answer: no JQuery, Moo, Dojo.
Analogous to the JNI for Java, Google's GWT and similar I-compile-down-to-JavaScript talks
about the underlying implementation as being native.
The original use of native in JS, I believe, refers to objects built and defined in
ECMAScript as opposed to the environment. JavaScript, as an ECMAScript language, is not
intended to be self-sufficient; it is embedded in a host environment such as a Web
browser, Photoshop, Acroread, etc. When you write a web client program, you will use
objects such as Math, Function, Array, Window, and Button. The first three are native (
independent of host environment), while the last two are non-native (supplied by the host
environment). This is kind of the opposite of cdhowie's answer, which is a good answer
BTW. Just interesting, though!
I'm sure there are other interpretations. My guess is that if you see this in a job
description, it's probably not the last one: that definition is too academic. :)

Here is the official definition from the ECMAScript-262 Standard, Fifth Edition:

4.3.6 native object --- object in an ECMAScript implementation
whose semantics are fully defined by this specification rather
than by the host environment. NOTE Standard native objects are
defined in this specification. Some native objects are built-in;
others may be constructed during the course of execution of an
ECMAScript program.
In other words the built-ins like Math, Object, String, RegExp are native, as are any
objects I make with object literals or function definitions. But host objects are the
opposite. Sorry for the ramble.

Repeated native JS from a file with tasks

Repeated native JS from a book you don't know Java script

Read react documentation

Closures

A closure is the combination of a function bundled together (enclosed) with references to
its surrounding state (the lexical environment). In other words, a closure gives you
access to an outer function's scope from an inner function. In JavaScript, closures are
created every time a function is created, at function creation time.

Promise

The Promise object represents the eventual completion (or failure) of an asynchronous
operation and its resulting value.

typeof

The typeof operator returns a string indicating the type of the unevaluated operand.

Classes

Classes are a template for creating objects. They encapsulate data with code to work on
that data. Classes in JS are built on prototypes but also have some syntax and semantics
that are not shared with ES5 class-like semantics.

## The modern mode, "use strict"

For a long time, JavaScript evolved without compatibility issues. New features were added
to the language while old functionality didn’t change.

That had the benefit of never breaking existing code. But the downside was that any
mistake or an imperfect decision made by JavaScript’s creators got stuck in the language
forever.

This was the case until 2009 when ECMAScript 5 (ES5) appeared. It added new features to
the language and modified some existing ones. To keep the old code working, most such
modifications are off by default. You need to explicitly enable them with a special
directive: "use strict".

## Data types

Seven primitive data types:
 - number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
 - bigint for integer numbers of arbitrary length.
 - string for strings. A string may have zero or more characters, there’s no separate single-character type.
 - boolean for true/false.
 - null for unknown values – a standalone type that has a single value null.
 - undefined for unassigned values – a standalone type that has a single value undefined.
 - symbol for unique identifiers.
And one non-primitive data type:
 - object for more complex data structures.

The typeof operator allows us to see which type is stored in a variable.
 - Usually used as typeof x, but typeof(x) is also possible.
 - Returns a string with the name of the type, like "string".
 - For null returns "object" – this is an error in the language, it’s not actually an object.

____________________________________________________________________________________________________________________________________________________________________

# OOP — Object-oriented programming

OOP (Object-oriented programming) is a programming paradigm based on the concept of "
objects", which can contain data and code: data in the form of fields (often known as
attributes or properties), and code, in the form of procedures (often known as methods).

## WHAT IS ABSTRACTION?

Do you ever drink Coffee? If you do, then there’s a good chance that you might have used a
coffee machine in your life. The concept of abstraction is closely related to the
principle of a coffee machine. You know that a coffee machine makes coffee, but you don’t
need to know how it makes coffee. In short, all you need to know is about which buttons to
press to make Coffee. You can use a button defined interface to make coffee, without
needing to worry about the internal working of a machine.
The same principle goes into the concept of an Object-oriented programming language. In
simple words, it is a concept that is not associated with any particular instance.

## WHAT IS ENCAPSULATION?

It is a group of properties and members under a single class or Object. Programs can be
really long and there can easily be a ton of moving parts in it. After some time it gets
really tough to maintain all these objects without them running into complexity. This is
where a primary principle like encapsulation comes into play. You can use this principle
to encapsulate a set of objects into different classes. With this principle, you can
prevent the repetition of code and also shorten the length of your code. You can look at
encapsulation like a medicinal pill. All the medicine(Objects) are stored inside a pill (
class) and you can consume it whenever needed.

## WHAT IS INHERITANCE?

It is the ability to acquire the properties of existing classes and create new ones.
Inheritance allows you to reuse code without having to rewrite it in a program. One of the
best features of Inheritance is the ability to shorten the code in a program. You can use
this principle to inherit codes from another class and reuse it in a new class.

## WHAT IS POLYMORPHISM?

Polymorphism refers to one name with many forms. It is the ability of one function to
perform in different ways. In other words, it refers to an object’s ability to take on
more than one single form.

Programming paradigms are a way to classify programming languages based on their features.
Languages can be classified into multiple paradigms.

Some paradigms are concerned mainly with implications for the execution model of the
language, such as allowing side effects, or whether the sequence of operations is defined
by the execution model. Other paradigms are concerned mainly with the way that code is
organized, such as grouping a code into units along with the state that is modified by the
code. Yet others are concerned mainly with the style of syntax and grammar.

In computer science, functional programming is a programming paradigm where programs are
constructed by applying and composing functions. It is a declarative programming paradigm
in which function definitions are trees of expressions that map values to other values,
rather than a sequence of imperative statements which update the running state of the
program.

TypeScript is a programming language developed and maintained by Microsoft. It is a strict
syntactical superset of JavaScript and adds optional static typing to the language. It is
designed for the development of large applications and transpiles to JavaScript. As it is
a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.

____________________________________________________________________________________________________________________________________________________________________

# SOLID

## --- The single-responsibility principle:

"There should never be more than one reason for a class to change." In other words, every
class should have only one responsibility.

## --- The open–closed principle:

"Software entities ... should be open for extension, but closed for modification."

## --- Liskov substitution principle:

"Liskov's notion of a behavioural subtype defines a notion of substitutability for
objects; that is, if S is a subtype of T, then objects of type T in a program may be
replaced with objects of type S without altering any of the desirable properties of that
program (e.g. correctness)."

## --- Interface segregation principle:

In the field of software engineering, the interface segregation principle (ISP) states
that no code should be forced to depend on methods it does not use. ISP splits
interfaces that are very large into smaller and more specific ones so that clients will
only have to know about the methods that are of interest to them.

## --- Dependency inversion principle

High-level modules should not import anything from low-level modules. Both should depend
on abstractions (e.g., interfaces).
Abstractions should not depend on details. Details (concrete implementations) should
depend on abstractions.
__________________________________________________________________________________________________________________________________________________________________

# The Catalog of Design Patterns

## --- Creational patterns

These patterns provide various object creation mechanisms, which increase flexibility and
reuse of existing code.

### Factory Method

is a creational design pattern that provides an interface for creating objects in a
superclass, but allows subclasses to alter the type of objects that will be created.

### Abstract Factory

is a creational design pattern that lets you produce families of related objects without
specifying their concrete classes.

### Builder

is a creational design pattern that lets you construct complex objects step by step. The
pattern allows you to produce different types and representations of an object using the
same construction code.

### Prototype

is a creational design pattern that lets you copy existing objects without making your
code dependent on their classes.

### Singleton

is a creational design pattern that lets you ensure that a class has only one instance,
while providing a global access point to this instance.

## --- Structural patterns

These patterns explain how to assemble objects and classes into larger structures while
keeping these structures flexible and efficient.

### Adapter

is a structural design pattern that allows objects with incompatible interfaces to
collaborate.

### Bridge

is a structural design pattern that lets you split a large class or a set of closely
related classes into two separate hierarchies—abstraction and implementation—which can be
developed independently of each other.

### Composite

is a structural design pattern that lets you compose objects into tree structures and then
work with these structures as if they were individual objects.

### Decorator

is a structural design pattern that lets you attach new behaviors to objects by placing
these objects inside special wrapper objects that contain the behaviors.

### Facade

is a structural design pattern that provides a simplified interface to a library, a
framework, or any other complex set of classes.

### Flyweight

is a structural design pattern that lets you fit more objects into the available amount of
RAM by sharing common parts of state between multiple objects instead of keeping all of
the data in each object.

### Proxy

is a structural design pattern that lets you provide a substitute or placeholder for
another object. A proxy controls access to the original object, allowing you to perform
something either before or after the request gets through to the original object.

## --- Behavioral patterns

These patterns are concerned with algorithms and the assignment of responsibilities
between objects.

### Chain of Responsibility

is a behavioral design pattern that lets you pass requests along a chain of handlers. Upon
receiving a request, each handler decides either to process the request or to pass it to
the next handler in the chain.

### Command

is a behavioral design pattern that turns a request into a stand-alone object that
contains all information about the request. This transformation lets you pass requests as
a method arguments, delay or queue a request’s execution, and support undoable operations.

### Iterator

is a behavioral design pattern that lets you traverse elements of a collection without
exposing its underlying representation (list, stack, tree, etc.).

### Mediator

is a behavioral design pattern that lets you reduce chaotic dependencies between objects.
The pattern restricts direct communications between the objects and forces them to
collaborate only via a mediator object.

### Memento

is a behavioral design pattern that lets you save and restore the previous state of an
object without revealing the details of its implementation.

### Observer

is a behavioral design pattern that lets you define a subscription mechanism to notify
multiple objects about any events that happen to the object they’re observing.

### State

is a behavioral design pattern that lets an object alter its behavior when its internal
state changes. It appears as if the object changed its class.

### Strategy

is a behavioral design pattern that lets you define a family of algorithms, put each of
them into a separate class, and make their objects interchangeable.

### Template Method

is a behavioral design pattern that defines the skeleton of an algorithm in the superclass
but lets subclasses override specific steps of the algorithm without changing its
structure.

### Visitor

is a behavioral design pattern that lets you separate algorithms from the objects on which
they operate.
