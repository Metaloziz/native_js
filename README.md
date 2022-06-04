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
