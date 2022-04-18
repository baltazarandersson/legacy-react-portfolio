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
  qualification: [
    {
      title: "2022",
      months: [
        {
          title: "April",
          courses: [
            {
              title: "Curso de Manipulación del DOM",
              icon: "https://static.platzi.com/media/achievements/badge-manipulacion-dom-js-68f056c0-11d4-4533-8c75-693db60d85f8.png",
              author: "Platzi",
              certificate:
                "https://platzi.com/p/baltazarander/curso/2193-dom/diploma/detalle/",
            },
          ],
        },
        {
          title: "March",
          courses: [
            {
              title: "Curso de React desde cero",
              icon: "https://midu.dev/favicon/apple-touch-icon.png",
              author: "midudev",
              certificate: undefined,
            },
            {
              title: "Curso de Introducción a React.js",
              icon: "https://static.platzi.com/media/achievements/badge-react-2018-0a41bdc5-e874-45c9-ac67-98294c898da4.png",
              author: "Platzi",
              certificate:
                "https://platzi.com/p/baltazarander/curso/2444-react/diploma/detalle/",
            },
          ],
        },
        {
          title: "February",
          courses: [
            {
              title: "Curso de Closures y Scope en JavaScript",
              icon: "https://static.platzi.com/media/achievements/badge-_closures-scope-javascript-3848a8e7-cf6f-47c5-a824-df5fc0c14d41.png",
              author: "Platzi",
              certificate:
                "https://platzi.com/p/baltazarander/curso/1807-scope/diploma/detalle/",
            },
            {
              title: "Curso de Asincronismo con JavaScript",
              icon: "https://static.platzi.com/media/achievements/badge-asincronismo-javascript-3f44d51e-209e-4e47-a228-4142d049525c.png",
              author: "Platzi",
              certificate:
                "https://platzi.com/p/baltazarander/curso/1789-asincronismo-js/diploma/detalle/",
            },
            {
              title: "Curso Profesional de Git y GitHub",
              icon: "https://static.platzi.com/media/achievements/badge-github-0b729570-934d-47d8-ba6b-610d7f15e0ec.png",
              author: "Platzi",
              certificate:
                "https://platzi.com/p/baltazarander/curso/1557-git-github/diploma/detalle/",
            },
            {
              title: "Curso Práctico de JavaScript",
              icon: "https://static.platzi.com/media/achievements/badge3-practico-javascript-d081180f-b158-446b-a34e-e658111a3680.png",
              author: "Platzi",
              certificate:
                "https://platzi.com/p/baltazarander/curso/2327-javascript-practico/diploma/detalle/",
            },
            {
              title: "Curso Práctico de HTML y CSS",
              icon: "https://static.platzi.com/media/achievements/badge-practico-html-css-1-106665ee-bf4f-4301-8991-1fab9e54a73e.png",
              author: "Platzi",
              certificate:
                "https://platzi.com/p/baltazarander/curso/1758-html-practico/diploma/detalle/",
            },
          ],
        },
        {
          title: "January",
          courses: [
            {
              title: "Curso Básico de JavaScript",
              icon: "https://static.platzi.com/media/achievements/badge-basicojs-e2ead888-428e-4f55-962c-8894aeaeacda.png",
              author: "Platzi",
              certificate:
                "https://platzi.com/p/baltazarander/curso/1814-basico-javascript/diploma/detalle/",
            },
          ],
        },
      ],
    },
    {
      title: "2021",
      months: [
        {
          title: "December",
          courses: [
            {
              title: "Curso de Frontend Developer",
              icon: "https://static.platzi.com/media/achievements/badge-curso-frontend-developer-825407d1-49b1-4c9b-90c4-eee793720ede.png",
              author: "Platzi",
              certificate:
                "https://platzi.com/p/baltazarander/curso/2467-frontend-developer/diploma/detalle/",
            },
            {
              title: "Curso Práctico de Frontend Developer",
              icon: "https://static.platzi.com/media/achievements/badge-curso-practico-frontend-developer-d28c2eb0-cd3e-4951-bb96-5f1bcab2add5.png",
              author: "Platzi",
              certificate:
                "https://platzi.com/p/baltazarander/curso/2477-frontend-developer-practico/diploma/detalle/",
            },
          ],
        },
      ],
    },
  ],
};
