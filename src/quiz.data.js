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
                question: 'What are some differences between function Expressions and Function Declarations?',
                answer: 'Function declarations load before any code is executed while Function expressions load only when the interpreter reaches that line of code.'
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