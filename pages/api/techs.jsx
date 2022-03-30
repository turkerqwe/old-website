export default async(req, res) => { 
    const techs = [
        {
            "name": "HTML",
            "src": "/assets/techs/html.svg"
        },
        {
            "name": "Bootstrap",
            "src": "/assets/techs/bootstrap.svg"
        },
        {
            "name": "CSS",
            "src": "/assets/techs/css.svg"
        },
        {
            "name": "Javascript",
            "src": "/assets/techs/javascript.svg"
        },
        {
            "name": "Node.js",
            "src": "/assets/techs/nodejs.svg"
        },
        {
            "name": "Sass",
            "src": "/assets/techs/sass.svg"
        },
        {
            "name": "Mongo DB",
            "src": "/assets/techs/mongodb.svg"
        },
        {
            "name": "PHP",
            "src": "/assets/techs/php.svg"
        },
        {
            "name": "Next.js",
            "src": "/assets/techs/nextjs.svg"
        },
        {
            "name": "Express",
            "src": "/assets/techs/expressjs.svg"
        },
        {
            "name": "React",
            "src": "/assets/techs/react.svg"
        },
        {
            "name": "Bulma",
            "src": "/assets/techs/bulmacss.svg"
        },
        {
            "name": "Git",
            "src": "/assets/techs/git.svg"
        },   
        {
            "name": "Yarn",
            "src": "/assets/techs/yarn.svg"
        },
        {
            "name": "Photoshop CC",
            "src": "/assets/techs/photoshop.svg"
        },
        {
            "name": "Github",
            "src": "/assets/techs/github.svg"
        },
        {
            "name": "Firebase",
            "src": "/assets/techs/firebase.svg"
        },
        {
            "name": "Heroku",
            "src": "/assets/techs/heroku.svg"
        },
        {
            "name": "pnpm",
            "src": "/assets/techs/pnpm.svg"
        },

    ]
    res.status(200).json(techs)
}
