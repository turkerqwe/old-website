export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://turkerpw.shx.gg/5qc7igMeI.png",
      name: "kui.bot",
      description:
        "Gelişmiş yönetim panelli discord botu. (Yakında)",
      link: "#",
      language: "Next.js",
      languageIcon: "./assets/techs/nextjs.svg",
    },
    {
      id: 2,
      image: "https://turkerpw.shx.gg/5qc8jrjPV.png",
      name: "discord.gg/campfire",
      description: "Güzel bir Discord sunucusu...",
      link: "https://discord.gg/campfire",
      language: "Next.js",
      languageIcon: "./assets/techs/nextjs.svg",
    },
    {
      id: 4,
      image: "https://turkerpw.shx.gg/5qc8y4TXT.png",
      name: "turker.vercel.app",
      description:
        "Bulunduğun harika site...",
      link: "#",
      language: "Next.js",
      languageIcon: "./assets/techs/nextjs.svg",
    },
  ];
  res.status(200).json(data);
};
