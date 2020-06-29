const QUIZ_DATA = {
    javascript: {
        id: 1,
        title: 'JavaScript',
        routename: 'javascript',
        questions: [
            {
                id: 1,
                question: 'What is Hoisting in JavaScript?',
                answer: "Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local."
            },
            {
                id: 2,
                question: 'What are some differences between Function Expressions and Function Declarations?',
                answer: 'Function declarations load before any code is executed while Function expressions load only when the interpreter reaches that line of code.'
            },
            {
                id: 3,
                question: `What is the significance, and what are the benefits, of including 'use strict' at the beginning of a JavaScript source file?`,
                answer: 'The short and most important answer here is that use strict is a way to voluntarily enforce stricter parsing and error handling on your JavaScript code at runtime. Code errors that would otherwise have been ignored or would have failed silently will now generate errors or throw exceptions. In general, it is a good practice.' 
            }

        ]
    },
    html: {
        id: 2,
        title: 'html',
        routename: 'html',
        questions: [
            {
                id: 3,
                question: "Some HTML-1 question",
                answer: "Some HTML-1 answer"
            },
            {
                id: 4,
                question: "Some HTML-2 awesome question",
                answer: "Some HTML-2 answer"
            }
        ]
    }
}

export default QUIZ_DATA;