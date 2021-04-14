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
        linkUrl: './'
    },
    {
        title: 'Quizzes',
        linkUrl: './quiz'
    },
    {
        title: 'FAQ',
        linkUrl: './'
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
    accountExist: 'Aready have an account?',
    submitLabel: 'Sign Up',
    inputFields: [
        {
            id: 'name',
            type: 'text',
            placeholder: 'Enter Your Name',
        },
        {
            id: 'emailfield',
            type: 'text',
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
    accountExist: 'Create an account!',
    submitLabel: 'Sign In',
    inputFields: [
        {
            id: 'emailfield',
            type: 'text',
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