const QUIZ_DATA = {
    javascript: {
        id: 1,
        title: "JavaScript",
        routename: "javascript",
        questions: [
            {
                id: 111,
                question: "What is Hoisting in JavaScript?",
                answer: `Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local."
                `,
            },
            {
                id: 112,
                question:
                    "What are some differences between Function Expressions and Function Declarations?",
                answer: `Example: Function Expression
alert(foo());

// ERROR! foo wasn't loaded yet
var foo = function() { return 5; }
Example: Function Declaration
alert(foo());

// Alerts 5. Declarations are loaded
before any code can run.
function foo() { return 5; };

Function declarations load before any code is executed while Function expressions load only when the interpreter reaches that line of code.`,
            },
            {
                id: 113,
                question: `What is the significance, and what are the benefits, of including 'use strict' at the beginning of a JavaScript source file?`,
                answer: `The short and most important answer here is that use strict is a way to voluntarily enforce stricter parsing and error handling on your JavaScript code at runtime.

Code errors that would otherwise have been ignored or would have failed silently will now generate errors or throw exceptions. In general, it is a good practice.",
        `
            },
            {
                id: 114,
                question: `What is Lexical Scope?`,
                answer: `Lexical scope means that in a nested group of functions, the inner functions have access to the variables and other resources of their parent scope.

This means that the child functions are lexically bound to the execution context of their parents. Lexical scope is sometimes also referred to as static scope.
        `
            },
            {
                id: 115,
                question: `What is a closure?`,
                answer: `A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables — a scope chain.
The closure has three scope chains:
it has access to its own scope — variables defined between its curly brackets
it has access to the outer function’s variables
it has access to the global variables
        `
            },
            {
                id: 116,
                question: `In how many ways can you create an array in JS?`,
                answer: `Answer: There are three different ways of creating an array in JavaScript, namely:
1.
By creating instance of an array:
var someArray = new Array();
2.
By using an array constructor:
var someArray = new Array(‘value1’, ‘value2’,…, ‘valueN’);
3.
By using an array literal:
var someArray = [value1, value2,…., valueN];`
            },
            {
                id: 117,
                question: `What are Self Invoking Functions?`,
                answer: `The syntax for the Self-Invoking function:

(function () {
return () } () ;
They are also known as ‘Immediately Invoked Function Expressions’ or ‘Self Executing Anonymous Functions’.
These functions are invoked automatically in the code, hence they are named as ‘Self Invoking Functions’.
Usually, we define a function and invoke it, but if we want to execute a function automatically where it is explained, and if we are not going to call it again, we can use anonymous functions.`
            },
            {
                id: 118,
                question: `What is the difference between ‘==’ and ‘===’?`,
                answer: `Both ‘==’ and ‘===’ are comparison operators.
'=='
operator is also knows as 'Type Converting Operator
It compares Value, do not compare type
‘===’
operator is known as ‘Strict Equality Operator’
It compares both value and type.`
            },
            {
                id: 119,
                question: `What is debouncing in javascript?`,
                answer: `Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, that it stalls the performance of the web page.
                
                In javascript, it s a practice used to improve browser performance. There might be some functionality in a web page that requires time-consuming computations. If such a method is invoked frequently, it might greatly affect the performance of the browser, as JavaScript is a single-threaded language.
        `
            },
            {
                id: 120,
                question: `What is the difference between call, apply, and bind methods in JavaScript?`,
                answer: `The call, apply, and bind methods are used to manipulate the this keyword in JavaScript, which refers to the context in which a function is called.

                call method is used to invoke a function with a specified this value and any number of arguments passed individually. The syntax for call is function.call(thisArg, arg1, arg2, ...).

                apply method is similar to call, but the arguments are passed as an array instead of individually. The syntax for apply is function.apply(thisArg, [argsArray]).

                bind method returns a new function with the same code as the original function, but with a permanently bound this value. The syntax for bind is function.bind(thisArg, arg1, arg2, ...). It can also be used to partially apply arguments.
        `
            },
            {
                id: 121,
                question: `What is 'this' keyword in javascript?`,
                answer: `In JavaScript, 'this' is a keyword that refers to the object that is currently executing a function. The value of this is determined at runtime, based on how the function is invoked.

                For eg. in global scope, 'this' keyword would refer to the window object. In an object such as...

                const person = {
                    firstName: 'John',
                    lastName: 'Doe',
                    fullName: function() {
                        return this.firstName + ' ' + this.lastName;
                    }
                };

                'this' keyword would refer to the object person.
        `
            },
            {
                id: 122,
                question: `What do you understand by async await in javascript?`,
                answer: `Async/await is a modern feature in javascript that simplifies the way we write asynchronous code. Its built on top of promises and an async function always returns a promise. An async function would make asynchronous code more readable than using promises.

                Basically you need to declare a function as async as follows...

                async function () {
                    // asynchoronous code here...
                }

                inside the async function, you can use the await keyword to wait for the resolution of a Promise before continuing with the execution of the function. An example usecase of an async function would be...

                async function fetchData (url) {
                    const res = await fetch (url);
                    const data = await res.json ();
                    if (data.ok) console.log (data);
                    else console.log ('Error fetching the data!');
                }

                fetchData (url1);
                fetchData (url2);
        `
            }
        ],
    },

    html: {
        id: 2,
        title: "html",
        routename: "html",
        questions: [
            {
                id: 201,
                question: `What is the difference between HTML elements and tags?`,
                answer: `Elements:
Each part of a web page, such as a paragraph, an image, a link or anything else you can interact with, is an element.
Each type of element has its own behavior - for example you can click on links, or type in text boxes.

Tags:
An HTML document is a simple, plain text document, which you are able to open with any text editor on your computer.
When you open one, you’ll see the document is made up of tags, which are keywords surrounded by angled brackets, each of which describes an HTML element.
Here you can see HTML tags telling the browser how to render the text element inside:
<span>This text is surrounded by HTML tags!</span>
`,
            },
            {
                id: 202,
                question: `When should you use comments?`,
                answer: `Sometimes it can be useful to add code comments to your HTML document.
These will not be displayed in the browser, but they can be useful to leave notes for yourself and other developers as to what a section of HTML is for.
The start of the comment is denoted by
<!-- and the end is marked by -->.`,

            },
            {
                id: 203,
                question: `What’s the difference between a block-level element and an inline element?`,
                answer: `Each element in HTML is displayed in one of a few ways. By default, most tags are either displayed as block-level or inline. This value can be overridden using CSS.

Block
As the name suggests, a block-level element is drawn as a block that stretches to fill the full width available to it (the width of its container) and will always start on a new line.
<div>, <img>, <section>, <form>, <nav>.

Inline
Unlike the block-level elements, inline elements are drawn where they are defined and only take up space that is absolutely needed.
<span>, <b>, <strong>, <a>, <input>.
                `,
            },
            {
                id: 204,
                question: `How do you apply CSS styles to a web page?`,
                answer: `Inline styles
You can add a style attribute to almost any tag. Inside this attribute you can write your CSS rules.
<div style="background-color: red;">A container with a red background.</div>

A style block
You are able to define one or more style blocks inside the head section of your HTML document.

Link to a CSS file
By far the most recommended option is to link to a CSS file. This way you are able to keep the content (HTML) separate from the way you present that content (CSS).
It also means you can use the same styles on multiple pages.
<head><link rel="stylesheet" href="styles.css"></head>
      `,
            },
            {
                id: 205,
                question: `What are the list types available in HTML?`,
                answer: `The common list type are available in HTML are given below:
– Ordered list
– Unordered list
– Definition list
– Menu list
– Directory list`,
            },
            {
                id: 206,
                question: `Which new tags are included in the HTML5?`,
                answer: `<video> and <audio> are the new tags which are introduced in the HTML5.
They are basically used as a replacement of flash player and Silverlight to play multimedia items in the web pages.`,
            },
            {
                id: 207,
                question: `What is the difference between the id and class attributes in HTML?`,
                answer: `In HTML, the id attribute is used to specify a unique identifier for an element, while the class attribute is used to specify one or more classes that an element belongs to. A unique id can be used to select and style a specific element, while a class can be used to style multiple elements that share the same class.`,
            },
            {
                id: 208,
                question: `What is semantic HTML, and why is it important?`,
                answer: `Semantic HTML refers to the practice of using HTML markup to convey the meaning and structure of content on a webpage, rather than using markup solely for presentation purposes. This can help improve the accessibility, maintainability, and search engine optimization of a webpage. It makes the markup more readable and understandable for us.`,
            },
            {
                id: 209,
                question: `How can you group multiple radio buttons together in HTML, and what is the purpose of doing so?`,
                answer: `You can group multiple radio buttons together by using the name attribute with the same value on each button. This will ensure that only one radio button in the group can be selected at a time. Grouping radio buttons together is important for providing a clear and consistent interface for users to make choices, such as selecting a gender or choosing a payment method on a checkout page.`,
            },
            {
                id: 210,
                question: `What is the purpose of the alt attribute in the <img> tag, and why is it important for accessibility?`,
                answer: `The alt attribute in the <img> tag is used to provide alternative text that describes the content of an image. This text is displayed by screen readers or other assistive technologies when the image cannot be rendered or is not visible to the user, such as in cases of slow internet connections, images turned off by the user, or for visually-impaired users who rely on assistive technologies.`,
            },
            {
                id: 211,
                question: `What is the <input type="file"> element in HTML used for, and how can you restrict the types of files that can be uploaded using this element?`,
                answer: `The <input type="file"> element in HTML is used for file uploads. When the user clicks on this input element, they can select one or more files from their computer to upload to the web server.

                To restrict the types of files that can be uploaded using this element, you can use the accept attribute and set it to a comma-separated list of file types or MIME types. For example, accept="image/*" would allow only image files to be uploaded, while accept=".pdf,.doc" would allow only PDF and Word documents to be uploaded.`,
            },
            {
                id: 212,
                question: `What is the purpose of the <meta> element in the <head> section of an HTML document, and how can it be used to improve SEO?`,
                answer: `The <meta> element in the <head> section of an HTML document is used to provide metadata about the document, such as the author, description, keywords, and character encoding.

                One common use of the <meta> element is to provide information to search engines about the content of the webpage. This can be done using the name="description" attribute to provide a brief description of the page, and the name="keywords" attribute to provide a list of relevant keywords. This can improve the search engine optimization (SEO) of the webpage, making it more likely to appear in search results for relevant queries.
                
                Another important use of the <meta> element is to specify the character encoding of the document, using the charset attribute. This ensures that the browser can correctly render special characters and symbols, and improves the overall accessibility of the webpage.`,
            },
            {
                id: 213,
                question: `What is the purpose of the <iframe> element in HTML?`,
                answer: `The <iframe> element in HTML is used to embed content from other websites or web applications within a webpage. This can be useful for displaying content such as maps, videos, or social media feeds, without requiring the user to leave the current page.`,
            },
            {
                id: 214,
                question: `What is the purpose of the data-* attributes in HTML?`,
                answer: `The data-* attributes in HTML are used to store custom data or metadata about elements in a webpage. They can be set with any value and are useful for scripting or other purposes where additional information is needed beyond the content or presentation of the element. To use a data-* attribute, you simply include the attribute name in the format data-attribute-name, set the value of the attribute to any valid string value, and then use JavaScript to access the value of the attribute.`,
            },
        ],
    },
    css: {
        id: 2,
        title: "css",
        routename: "css",
        questions: [
            {
                id: 301,
                question: `What is CSS?`,
                answer: `CSS stands for Cascading Style Sheet. It is a popular styling language which is used with HTML to design websites.`
            },
            {
                id: 302,
                question: `What is Embedded Style Sheet?`,
                answer: `An Embedded style sheet is a CSS style specification method used with HTML. You can embed the entire stylesheet in an HTML document by using the STYLE element.`
            },
            {
                id: 303,
                question: `What is the difference between class selectors and id selectors?`,
                answer: `An overall block is given to class selector while id selectors take only a single element differing from other elements.`
            },
            {
                id: 304,
                question: `What is the CSS Box model and what are its elements?`,
                answer: `The CSS box model is used to define the design and layout of elements of CSS.

The elements are:
Margin - It removes the area around the border. It is transparent.
Border - It represents the area around the padding
Padding - It removes the area around the content. It is transparent.
Content - It represents the content like text, images, etc.`
            },
            {
                id: 305,
                question: `Explain the term Responsive web design.`,
                answer: `It is a method in which we design and develop a web page according to the user activities and conditions which are based on various components like the size of the screen, portability of the web page on the different devices, etc.
It is done by using different flexible layouts and grids.`
            },
            {
                id: 306,
                question: `What is CSS specificity?`,
                answer: `CSS specificity is a score or rank that decides which style declaration has to be used to an element. (*) this universal selector has low specificity while ID selectors have high specificity.
There are four categories in CSS which authorize the specificity level of the selector.

Inline style
IDs
Classes, Attributes, and pseudo-classes.
Elements and pseudo-elements.`
            },
            {
                id: 307,
                question: `How will you add border images to an HTML element?`,
                answer: `We can set the image to be used as the border-image alongside an element by using the property of CSS “border-image”.

#bordering {
border: 15px solid transparent;
padding: 20px;
border-image: url(border.png) 30 round;
}`
            },
            {
                id: 308,
                question: `What are the differences between relative and absolute in CSS?`,
                answer: `The main difference between relative and absolute is that “relative” is used for the same tag in CSS and it means that if we write the left:10px then the padding will shift to 10px in the left while absolute is totally relative to the non-static parent.
It means, if we write left:10px then the result will be 10px far from the left edge of the parent element.`
            },
            {
                id: 309,
                question: `How is the concept of inheritance applied in CSS?`,
                answer: `Inheritance is a concept in which the child class will inherit the properties of its parent class. It is a concept which is been used in many languages and is the easy way of defining the same property again.

It is used in CSS to define the hierarchy from the top level to the bottom level. Inherited properties can be overridden by the children's class if the child uses the same name.`
            },
            {
                id: 310,
                question: `What are Sass, Less, and Stylus? Why do people use them? How does something like Compass relate to Sass?`,
                answer: `They are CSS preprocessors. They are an abstraction layer on top of CSS. They are a special syntax/language that compile down into CSS. They make managing CSS easier, with things like variables and mixins to handle vendor prefixes (among other things). They make doing best practices easier, like concatenating and compressing CSS.
 Bonus points for knowing how they differ and/or having experience using them.
 More bonus points for knowing what things like Compass, Bourbon, LESSHat, Nib, etc are and how they relate.`
            },
            {
                id: 311,
                question: `Describe what a “reset” CSS file does and how it’s useful. Are you familiar with normalize.css? Do you understand how they differ?
                `,
                answer: `Resets are so wildly common in CSS that anyone who is a front end developer type has surely used them. Do they do so blindly or do they know why? The reason is essentially that different browsers have different default styling for elements, and if you don’t deal with that at all, you risk designers looking unnecessarily different in different browsers and possibly more dramatic breaking problems.

Normalize you might call a CSS reset alternative. Instead of wiping out all styles, it delivers a set of reasonable defaults. It doesn’t unset things that are already consistent across browsers and reasonable (e.g. bold headers). In that way it does some less than a reset. It also does some more than a reset in that it handles quirks you may never consider, like HTML5 audio element inconsistencies or line-height inconsistencies when you use sub and sup elements.`
            },
            {
                id: 312,
                question: `What are the benefits of SVG?`,
                answer: `SVG is an image format that is vector based. It’s an efficient format for that (small file sizes). You can scale them and they retain their sharpness at any size (bonus points for mentioning raster might have the upper hand at tiny sizes). You can affect parts of them with CSS and JavaScript as well as SVG specific filters that can do things like blurring.`
            },
            {
                id: 313,
                question: `State some ways to center a div using CSS.`,
                answer: `There are several ways to center a div in CSS. Some of them are-
                
                -Using flexbox: This is probably the easiest and the most common way to center a div. You apply display: flex to the container div and then use justify-content and align-items properties of flexbox. For eg.
                
                .container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                  
                -Using grid: This is similar to using flexbox where you apply display: grid to the container div. In a grid layout, we have a property called place-items which we would use in this case. An example would be
                
                .container {
                    display: grid;
                    place-items: center;
                }
                
                -Using absolute positioning: This would require the parent div to have been positioned relative. We can use the top/left/bottom/right properties on our absolutely positioned element then. For eg.
                
                .container {
                    position: relative;
                }
                  
                  .child {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }`
            },
            {
                id: 314,
                question: `What is the purpose of the "z-index" property in CSS, and how does it work?`,
                answer: `The "z-index" property in CSS determines the stacking order of positioned elements that overlap each other on the z-axis. It can take any integer value, with higher values placing elements in front of elements with lower values or no value at all. Elements with the same "z-index" value are placed in the order in which they appear in the HTML markup. It only works on elements that have a "position" value of "relative", "absolute", or "fixed".`
            },
            {
                id: 315,
                question: `What are keyframes in CSS?`,
                answer: `In CSS, keyframes are used to define the intermediate steps of an animation sequence. They allow developers to specify the styles that an element should have at different points in the animation, creating a smooth transition between those points. To use keyframes, you define a series of rules using the "@keyframes" at-rule, which specify the style properties at different percentages of the animation's duration. These rules can then be applied to an element using the "animation" property. By specifying different keyframes at different percentages, you can create a wide range of animations and transitions in your web pages.`
            },
            {
                id: 316,
                question: `How do you create a gradient background in CSS?`,
                answer: `To create a gradient background in CSS, you can use the "background-image" property and set its value to a linear gradient function. The linear gradient function takes two or more color stops, and generates a gradient between them.
                
                For example, to create a horizontal gradient that transitions from red to blue, you could use the following CSS:
                
                background-image: linear-gradient(to right, red, blue);`
            },
            {
                id: 317,
                question: `What is the difference between the "border" and "outline" properties in CSS, and when would you use one over the other?`,
                answer: `The main difference between the two is that a border affects the actual dimensions of an element, while an outline does not. This means that if you add a border to an element, it will increase its width and height by the size of the border, while an outline will not.
                
                You would typically use a border when you want to create a visible boundary around an element, while an outline can be used for decorative purposes or to provide visual feedback, such as indicating that an element has focus.`
            },
            {
                id: 318,
                question: `What is the difference between a pseudo-class and a pseudo-element in CSS, and give an example of each?`,
                answer: `A pseudo-class in CSS is used to style an element based on its state, such as when it's being hovered over or clicked. An example of a pseudo-class is :hover.

                A pseudo-element, on the other hand, is used to style a specific part of an element, such as the first line of a paragraph or the content inside a button. An example of a pseudo-element is ::before or ::after.`
            },
            {
                id: 319,
                question: `What are CSS variables, how are they declared and used in CSS, and what are some benefits of using them?`,
                answer: `CSS variables, also known as custom properties, allow you to declare a variable with a specific value and reuse that value throughout your CSS. They are declared using the -- prefix followed by a name and value. You can then use the variable value by referencing it with the var() function. Here is an example use case of css variables.
                
                :root {
                    --background-color: #f0f0f0;
                    --text-color: #333;
                }
                  
                  body {
                    background-color: var(--background-color);
                    color: var(--text-color);
                }
                  
                  body.dark-mode {
                    --background-color: #333;
                    --text-color: #f0f0f0;
                }
                
                In this example, we declare two CSS variables --background-color and --text-color with their respective values. We then use these variables to set the background color and text color of the body element. Finally, we define a .dark-mode class to override the variable values with new colors, effectively creating a dark mode theme. We would have a theme toggler in our HTML and we would handle that theme toggle using javascript logic.`
            },
        ]
    },
    react: {
        id: 2,
        title: "react",
        routename: "react",
        questions: [
            {
                id: 301,
                question: `What are the features of React?`,
                answer: `Major features of React are:

1. It uses the virtual DOM instead of the real DOM.

2. It uses server-side rendering.

3. It follows uni-directional data flow or data binding.
`
            },
            {
                id: 302,
                question: `List some of the major advantages of React.`,
                answer: `Some of the major advantages are:

1. It increases the application’s performance.

2. It can be conveniently used on the client as well as server side.

3. Because of JSX, code’s readability increases.

4. React is easy to integrate with other frameworks like Mete1. Angular, etc.

5. Using React, writing UI test cases become extremely easy`
            },
            {
                id: 303,
                question: `What are the limitations of React?`,
                answer: `
1. React is just a library, not a full-blown framework.

2. Its library is very large and takes time to understand.

3. It can be little difficult for the novice programmers to understand.

4. Coding gets complex as it uses inline templating and JSX.`
            },
            {
                id: 304,
                question: `What is JSX?`,
                answer: `JSX is a shorthand for JavaScript XML. This is a type of file used by React which utilizes the expressiveness of JavaScript along with HTML like template syntax.
This makes the HTML file really easy to understand. This file makes applications robust and boosts its performance.`
            },
            {
                id: 305,
                question: `What do you understand by Virtual DOM? Explain its working.`,
                answer: `A virtual DOM is a lightweight JavaScript object which originally is just the copy of the real DOM.
It is a node tree that lists the elements, their attributes and content as Objects and their properties. React’s render function creates a node tree out of the React components.

It then updates this tree in response to the mutations in the data model which is caused by various actions done by the user or by the system.

This Virtual DOM works in three simple steps.

1. Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.

2. Then the difference between the previous DOM representation and the new one is calculated.

3. Once the calculations are done, the real DOM will be updated with only the things that have actually changed.`
            },
            {
                id: 306,
                question: `Why can’t browsers read JSX?
                `,
                answer: `Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser. `
            },
            {
                id: 307,
                question: `Explain the purpose of render() in React.
                `,
                answer: `It returns a single React element which is the representation of the native DOM component.
If more than one HTML element needs to be rendered, then they must be grouped together inside one enclosing tag such as <form>, <group>,<div> etc. This function must be kept pure i.e., it must return the same result each time it is invoked.`
            },
            {
                id: 308,
                question: `What is Props?`,
                answer: `Props is the shorthand for Properties in React. They are read-only components which must be kept pure i.e. immutable. They are always passed down from the parent to the child components throughout the application. A child component can never send a prop back to the parent component. This help in maintaining the unidirectional data flow and are generally used to render the dynamically generated data.

                `
            },
            {
                id: 309,
                question: `What is a state in React and how is it used?`,
                answer: `States are the heart of React components. States are the source of data and must be kept as simple as possible. Basically, states are the objects which determine components rendering and behavior. They are mutable unlike the props and create dynamic and interactive components. They are accessed via this.state().`
            },
            {
                id: 310,
                question: `What is arrow function in React? How is it used?`,
                answer: `Arrow functions are more of brief syntax for writing the function expression. They are also called ‘fat arrow‘ (=>) the functions. These functions allow to bind the context of the components properly since in ES6 auto binding is not available by default. Arrow functions are mostly useful while working with the higher order functions.`
            },
            {
                id: 311,
                question: `Explain the lifecycle methods of React components in detail.`,
                answer: `Some of the most important lifecycle methods are:

componentWillMount()
Executed just before rendering takes place both on the client as well as server-side.

componentDidMount()
Executed on the client side only after the first render.

componentWillReceiveProps()
Invoked as soon as the props are received from the parent class and before another render is called.

shouldComponentUpdate()
Returns true or false value based on certain conditions. If you want your component to update, return true else return false. By default, it returns false.

componentWillUpdate()
Called just before rendering takes place in the DOM.

componentDidUpdate()
Called immediately after rendering takes place.

componentWillUnmount()
Called after the component is unmounted from the DOM. It is used to clear up the memory spaces.`
            },
            {
                id: 312,
                question: `What do you understand by refs in React?`,
                answer: `Refs is the short hand for References in React. It is an attribute which helps to store a reference to a particular React element or component, which will be returned by the components render configuration function.
It is used to return references to a particular element or component returned by render(). They come in handy when we need DOM measurements or to add methods to the components.`
            },
            {
                id: 313,
                question: `What are Higher Order Components(HOC)?`,
                answer: `Higher Order Component is an advanced way of reusing the component logic. Basically, it’s a pattern that is derived from React’s compositional nature. HOC are custom components which wrap another component within it. They can accept any dynamically provided child component but they won’t modify or copy any behavior from their input components. You can say that HOC are ‘pure’ components.`
            },
            {
                id: 314,
                question: `What can you do with HOC?`,
                answer: `HOC can be used for many tasks like:

Code reuse, logic and bootstrap abstraction;
Render High jacking;
State abstraction and manipulation;
Props manipulation;`
            },
            {
                id: 315,
                question: `What is the significance of keys in React?`,
                answer: `Keys are used for identifying unique Virtual DOM Elements with their corresponding data driving the UI. They help React to optimize the rendering by recycling all the existing elements in the DOM.
These keys must be a unique number or string, using which React just reorders the elements instead of re-rendering them. This leads to increase in application’s performance.`
            },
        ]
    },
    redux: {
        id: 5,
        title: "redux",
        routename: "redux",
        questions: [
            {
                id: 401,
                question: `What were the major problems with MVC framework?`,
                answer: `Following are some of the major problems with MVC framework:

DOM manipulation was very expensive
Applications were slow and inefficient
There was huge memory wastage
Because of circular dependencies, a complicated model created around models and views`
            },
            {
                id: 402,
                question: `Explain Flux.`,
                answer: `Flux is an architectural pattern which enforces the uni-directional data flow. It controls derived data and enables communication between multiple components using a central Store which has authority for all data. Any update in data throughout the application must occur here only. Flux provides stability to the application and reduces run-time errors.`
            },
            {
                id: 403,
                question: `What is Redux?`,
                answer: `Redux is one of the hottest libraries for front-end development in today’s marketplace. It is a predictable state container for JavaScript applications and is used for the entire applications state management. Applications developed with Redux are easy to test and can run in different environments showing consistent behavior.`
            },
            {
                id: 404,
                question: `What are the three principles that Redux follows?
                `,
                answer: `Single source of truth:
The state of the entire application is stored in an object/ state tree within a single store. The single state tree makes it easier to keep track of changes over time and debug or inspect the application.

State is read-only:
The only way to change the state is to trigger an action. An action is a plain JS object describing the change. Just like state is the minimal representation of data, the action is the minimal representation of the change to that data. 

Changes are made with pure functions:
In order to specify how the state tree is transformed by actions, you need pure functions. Pure functions are those whose return value depends solely on the values of their arguments.`
            },
            {
                id: 405,
                question: `What do you understand by “Single source of truth”?`,
                answer: `Redux uses ‘Store’ for storing the application’s entire state at one place. So all the component’s state are stored in the Store and they receive updates from the Store itself. The single state tree makes it easier to keep track of changes over time and debug or inspect the application.`
            },
            {
                id: 406,
                question: `List the components of Redux.`,
                answer: `Redux is composed of the following components:

Action – It’s an object that describes what happened.
Reducer –  It is a place to determine how the state will change.
Store – State/ Object tree of the entire application is saved in the Store.
View – Simply displays the data provided by the Store.`
            },
            {
                id: 407,
                question: `Explain the role of Reducer.`,
                answer: `Reducers are pure functions which specify how the application’s state changes in response to an ACTION. Reducers work by taking in the previous state and action, and then it returns a new state. It determines what sort of update needs to be done based on the type of the action, and then returns new values. It returns the previous state as it is, if no work needs to be done.`
            },
            {
                id: 408,
                question: `What are the advantages of Redux?`,
                answer: `Predictability of outcome – Since there is always one source of truth, i.e. the store, there is no confusion about how to sync the current state with actions and other parts of the application.

Maintainability – The code becomes easier to maintain with a predictable outcome and strict structure.

Server-side rendering – You just need to pass the store created on the server, to the client side. This is very useful for initial render and provides a better user experience as it optimizes the application performance.

Developer tools – From actions to state changes, developers can track everything going on in the application in real time.

Community and ecosystem – Redux has a huge community behind it which makes it even more captivating to use. A large community of talented individuals contribute to the betterment of the library and develop various applications with it.

Ease of testing – Redux’s code is mostly functions which are small, pure and isolated. This makes the code testable and independent.

Organization – Redux is precise about how code should be organized, this makes the code more consistent and easier when a team works with it.`
            },
            {
                id: 409,
                question: `What is Redux Thunk?`,
                answer: `Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState() as parameters.`
            },
            {
                id: 410,
                question: `What are reducers in redux? `,
                answer: `The reducer is a pure function that takes the previous state and an action, and returns the next state.

(previousState, action) => newState

It's called a reducer because it's the type of function you would pass to Array.prototype.reduce(reducer, ?initialValue). 
It's very important that the reducer stays pure. Things you should never do inside a reducer:

Mutate its arguments;
Perform side effects like API calls and routing transitions;
Call non-pure functions, e.g. Date.now() or Math.random().
                
                `
            },
            {
                id: 411,
                question: `What are the differences between redux-saga and redux-thunk? `,
                answer: `Both Redux Thunk and Redux Saga take care of dealing with side effects. In most of the scenarios, Thunk allows Promises to deal with them, whereas Saga uses Generators.

Thunk is simple to use and Promises are familiar to many developers, Saga/Generators are more powerful but you will need to learn them. But both the two middleware can coexists, so you can start with Thunks and introduce Sagas when/if you need them.`
            },

        ]
    },
    favorite: {
        id: 5,
        title: "favorite",
        routename: "favorite",
        questions: [
        ]
    }


};

export default QUIZ_DATA;
