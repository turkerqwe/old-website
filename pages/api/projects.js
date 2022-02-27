export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://turker.is-terrible.com/5oU_oTDzQ.png",
      name: "Türker Web",
      description:
        "Şuanda bulunduğunuz Türker'in havalı sitesi!",
      link: "#",
      language: "React",
      languageIcon: "./assets/techs/react.svg",
    },
    {
      id: 2,
      image: "https://turker.is-terrible.com/5oV0CiNoJ.png",
      name: "Kuibot",
      description:
        "Yönetim paneli bulunan havalı Kuibot ama şuanlık yapım aşamasında...",
      link: "#",
      language: "React",
      languageIcon: "./assets/techs/react.svg",
    },
    {
      id: 3,
      image: "https://i.imgur.com/bTisaif.png",
      name: "Campfire",
      description:
        "Discord'un en güzel topluluk sunucusu... (Katılmak için tıkla)",
      link: "https://discord.gg/campfire",
      language: "React",
      languageIcon: "./assets/techs/react.svg",
    },
  ];
  res.status(200).json(data);
};
