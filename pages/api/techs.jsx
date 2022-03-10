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
            "name": "Mongo DB",
            "src": "/assets/techs/mongodb.svg"
        },
        {
            "name": "PHP",
            "src": "/assets/techs/php.svg"
        },
        {
            "name": "TailwindCSS",
            "src": "/assets/techs/tailwindcss.svg"
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
            "name": "Yarn",
            "src": "/assets/techs/yarn.svg"
        }
    ]
    res.status(200).json(techs)
}
