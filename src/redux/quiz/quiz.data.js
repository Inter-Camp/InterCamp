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
                question: `What is the difference between ‘null’ and ‘undefined’?`,
                answer: `Both keywords represent empty values.
In ‘undefined’, we will define a variable, but we won’t assign a value to that variable.
On the other hand, in ‘null’ we will define a variable and assign the ‘null’ value to the variable.
        `
            },
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
                id: 311,
                question: `What are the benefits of SVG?`,
                answer: `SVG is an image format that is vector based. It’s an efficient format for that (small file sizes). You can scale them and they retain their sharpness at any size (bonus points for mentioning raster might have the upper hand at tiny sizes). You can affect parts of them with CSS and JavaScript as well as SVG specific filters that can do things like blurring.`
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
                question: `React question `,
                answer: `React answer`
            },
        ]
    }
};

export default QUIZ_DATA;
