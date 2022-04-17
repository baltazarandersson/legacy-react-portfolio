import chattioThumb from "../assets/thumbnails/chattio.png";
import forecastThumb from "../assets/thumbnails/forecast.png";
import giffiThumb from "../assets/thumbnails/giffi.png";
import glacssifyThumb from "../assets/thumbnails/glacssify.png";
import simonsaysThumb from "../assets/thumbnails/simonsays.png";

export const data = {
  projects: [
    {
      thumbnail: chattioThumb,
      title: "Chattio",
      description:
        "Personal project in where I wanted to work with real time requests and learn Tailwind while creating an instant messaging chat app.",
      tags: [
        { title: "Personal proj.", color: "#4E4AC4" },
        { title: "React", color: "#0098B3" },
        { title: "Tailwind", color: "#0098B3" },
        { title: "Firebase", color: "#AD7F01" },
      ],
      repository: "https://github.com/baltazarandersson/chattio-app",
      deploy: "https://chattio.vercel.app/",
    },
    {
      thumbnail: giffiThumb,
      title: "GIFFI",
      description:
        "A GIF search app made with the full React course of midudev, a well packed course of React full of useful knowledge.",
      tags: [
        { title: "Course proj.", color: "#4E4AC4" },
        { title: "React", color: "#0098B3" },
        { title: "Firebase", color: "#AD7F01" },
      ],
      repository: "https://github.com/baltazarandersson/react-giffi-app",
      deploy: "https://giffi-baltazar.vercel.app/",
    },
    {
      thumbnail: glacssifyThumb,
      title: "Glacssify",
      description:
        "This is a tiny project I made to practice styled-components library.",
      tags: [
        { title: "Personal proj.", color: "#4E4AC4" },
        { title: "React", color: "#0098B3" },
        { title: "styled-components", color: "#9b4e88" },
      ],
      repository: "https://github.com/baltazarandersson/react-glacssify",
      deploy: "https://glacssify-baltazar.vercel.app/",
    },
    {
      thumbnail: forecastThumb,
      title: "Forecast app",
      description:
        "Challenge from devchallenges, in where I decided to test my abilities managin APIs, and in the same way, learn some React.",
      tags: [
        { title: "Challenge proj.", color: "#4E4AC4" },
        { title: "React", color: "#0098B3" },
      ],
      repository: "https://github.com/baltazarandersson/react-weather-forecast",
      deploy: "https://forecast-baltazar.vercel.app/",
    },
    {
      thumbnail: "",
      title: "LOL Profile Lookup",
      description:
        "Project made to apply my knowledge of promises to create an app in where you can look for your LoL profile data.",
      tags: [{ title: "Personal proj.", color: "#4E4AC4" }],
      repository: "",
      deploy: "",
    },
    {
      thumbnail: simonsaysThumb,
      title: "Simon says",
      description:
        "The classic simon says game made with vanilla JS, during the course of JS Fundamentals of Platzi.",
      tags: [{ title: "Course proj.", color: "#4E4AC4" }],
      repository: "https://github.com/baltazarandersson/Fundamentos-JS",
      deploy:
        "https://baltazarandersson.github.io/Fundamentos-JS/JUEGO_JS/index.html",
    },
  ],
  certificates: {},
};
