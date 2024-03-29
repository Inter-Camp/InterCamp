export const ourPros = [
    {
        id: 'our-pro-1',
        imgUrl: './images/home-00.jpg',
        imgAlt: 'illustration of a woman with red hair',
        text: 'Create your own quizzes and share with friends'
    },
    {
        id: 'our-pro-2',
        imgUrl: './images/home-01.jpg',
        imgAlt: 'illustration of a man in red t-shirt',
        text: 'Get back to your favorite questions'
    },
    {
        id: 'our-pro-3',
        imgUrl: './images/home-02.jpg',
        imgAlt: 'illustration of a programmer',
        text: 'Be prepared for all types of questions'
    }
]

export const links = [
    {
        title: 'Home',
        linkUrl: '/'
    },
    {
        title: 'Quizzes',
        linkUrl: '/quiz'
    },
    {
        title: 'FAQ',
        linkUrl: '/'
    },
]

export const footer = {
    title: 'InterCamp',
    p: 'InterCamp is an interview preparation platform, where users can check their knowledge on a specific topic.',
    links: {
        fb: 'https://www.facebook.com/',
        ig: 'https://www.instagram.com/',
        tt: 'https://www.twitter.com/'
    }
}

export const signUp = {
    id: 'signUp',
    title: 'join our team',
    subtitle: 'Learn with other, practice together!',
    imgAlt: 'hand-drawn-people-giving-high-five',
    imgUrl: './images/join-us.png',
    accountExists: 'Aready have an account?',
    submitLabel: 'Sign Up',
    inputFields: [
        {
            id: 'name',
            type: 'text',
            placeholder: 'Enter Your Name',
        },
        {
            id: 'emailfield',
            type: 'email',
            placeholder: 'Enter Your Email',
            autocomplete: 'username',
        },
        {
            id: 'password',
            type: 'password',
            placeholder: 'Enter Your Password',
            autocomplete: 'new-password'
        },
    ],
}

export const signIn = {
    id: 'signIn',
    title: 'welcome back',
    subtitle: 'We are happy to see you!',
    imgAlt: 'hand-drawn-people-giving-high-five',
    imgUrl: './images/join-us.png',
    accountExists: 'Create an account!',
    submitLabel: 'Sign In',
    inputFields: [
        {
            id: 'emailfield',
            type: 'email',
            placeholder: 'Enter Your Email',
            autocomplete: 'username',
        },
        {
            id: 'password',
            type: 'password',
            placeholder: 'Enter Your Password',
            autocomplete: 'current-password'
        },
    ],
}

export const signInOptions = {
    optionText: 'or continue with',
    facebook: {
        id: 'facebook',
        imageUrl: './icons/facebook.png'
    },
    google: {
        id: 'google',
        imageUrl: './icons/google.png'
    },
    github: {
        id: 'github',
        imageUrl: './icons/github.png'
    }
}

export const home = {
    title: 'Prepare for Coding Interviews',
    subtitle1: 'Most common interview theory questions. Check yourself and prepare for upcomming interviews',
    subtitle2: '',
    signInLabel: 'Get Started',
    signInLabel2: 'Start learning today!',
    signInLink: '/signin',
    quizLabel: 'Go to Quizzes!',
    quizLink: '/quiz',
    userLabel: '/user',
    userLink: 'User Page',
    joinUsLables: [
        { id: 1, text: 'Get ready to learn difficult concepts.' },
        { id: 2, text: 'Practive everywhere, because consistency is the key!' },
        { id: 3, text: 'Become a part of growing community.' },
        { id: 4, text: 'Track your progress to stay motivated.' },
    ]
}

export const header = {
    websiteName: 'InterCamp',
    signInLink: '/signin',
    signInLabel: 'Sign In',
}