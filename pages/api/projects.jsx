export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://turker.shx.is/5s1X8Z0KQ.png",
      name: "BotsCamp",
      description:
        "Bakımda olan bot list projem (Yakında açılacaktır)",
      link: "https://botscamp.xyz/",
      language: "Next.js",
      languageIcon: "./assets/techs/nextjs.svg",
    },
    
  ];
  res.status(200).json(data);
};
