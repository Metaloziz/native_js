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

prototype and Object.getPrototypeOf

JavaScript is a bit confusing for developers coming from Java or C++, as it's all dynamic, all runtime, and it has no classes at all. It's all just instances (objects). Even the "classes" we simulate are just a function object.
