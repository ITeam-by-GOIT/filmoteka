import { refs } from './refs.js';
import teamModalTemplate from '../templates/teamModalTemplate.hbs';

const team = [
    {
        name: "Anzhela",
        lastName: "Boiko",
        img: "https://media-exp1.licdn.com/dms/image/C5603AQGikyj3n0zY2w/profile-displayphoto-shrink_800_800/0/1517587157103?e=1633564800&v=beta&t=3IgApPVxqXJ4J36t83rsJao6zk49GUB0iTEK11IM-T4",
        description: "Hello world!",
        githubLink: "https://github.com/Koliadjun",
        linkedInLink: "https://github.com/Koliadjun",
    },
    {
        name: "Anastasia",
        lastName: "",
        img: "https://media-exp1.licdn.com/dms/image/C5603AQGikyj3n0zY2w/profile-displayphoto-shrink_800_800/0/1517587157103?e=1633564800&v=beta&t=3IgApPVxqXJ4J36t83rsJao6zk49GUB0iTEK11IM-T4",
        description: "Hello world!",
        githubLink: "https://github.com/Koliadjun",
        linkedInLink: "https://github.com/Koliadjun",
    },
    {
        name: "Bogdan",
        lastName: "Kolesnikov",
        img: "https://media-exp1.licdn.com/dms/image/C4E03AQH9ut2VuEeP4Q/profile-displayphoto-shrink_800_800/0/1620299550064?e=1633564800&v=beta&t=pvIzuKByv-wJVtJAJCOZQB4Z-NRKPjyNBaOE0T7e2Is",
        description: "Hello world!",
        githubLink: "https://github.com/Koliadjun",
        linkedInLink: "https://github.com/Koliadjun",
    },
    {
        name: "Dima",
        lastName: "Dyka",
        img: "./dima.jpg",
        description: "Hello world!",
        githubLink: "https://github.com/Koliadjun",
        linkedInLink: "https://www.linkedin.com/in/dima-duka-921ba1211/",
    },
    {
        name: "Ihor",
        lastName: "Kalyniak",
        img: "./igor.jpg",
        description: "Hello world!",
        githubLink: "https://github.com/Koliadjun",
        linkedInLink: "https://github.com/Koliadjun",
    },
    {
        name: "Olga",
        lastName: "Kostina",
        img: "https://media-exp1.licdn.com/dms/image/C5603AQGikyj3n0zY2w/profile-displayphoto-shrink_800_800/0/1517587157103?e=1633564800&v=beta&t=3IgApPVxqXJ4J36t83rsJao6zk49GUB0iTEK11IM-T4",
        description: "Hello world!",
        githubLink: "https://github.com/Koliadjun",
        linkedInLink: "https://github.com/Koliadjun",
    },
    {
        name: "Roma",
        lastName: "Petryk",
        img: "https://media-exp1.licdn.com/dms/image/C5603AQGikyj3n0zY2w/profile-displayphoto-shrink_800_800/0/1517587157103?e=1633564800&v=beta&t=3IgApPVxqXJ4J36t83rsJao6zk49GUB0iTEK11IM-T4",
        description: "Hello world!",
        githubLink: "https://github.com/Koliadjun",
        linkedInLink: "https://github.com/Koliadjun",
    },
    {
        name: "Vasyl",
        lastName: "Shcherbyna",
        img: "./vasyl.jpg",
        description: "Hello world!",
        githubLink: "https://github.com/Koliadjun",
        linkedInLink: "https://github.com/Koliadjun",
    },
    {
        name: "Євгенія",
        lastName: "",
        img: "https://media-exp1.licdn.com/dms/image/C5603AQGikyj3n0zY2w/profile-displayphoto-shrink_800_800/0/1517587157103?e=1633564800&v=beta&t=3IgApPVxqXJ4J36t83rsJao6zk49GUB0iTEK11IM-T4",
        description: "Hello world!",
        githubLink: "https://github.com/Yevheniia87",
        linkedInLink: "https://github.com/Koliadjun",
    },
    {
        name: "Yuriy",
        lastName: "Koliadzhyn",
        img: "https://media-exp1.licdn.com/dms/image/C5603AQGikyj3n0zY2w/profile-displayphoto-shrink_800_800/0/1517587157103?e=1633564800&v=beta&t=3IgApPVxqXJ4J36t83rsJao6zk49GUB0iTEK11IM-T4",
        description: "Hello world!",
        githubLink: "https://github.com/Koliadjun",
        linkedInLink: "https://github.com/Koliadjun",
    },
];
const showTeamModal = (e) => {
    e.preventDefault();
    const teamModalHTML = teamModalTemplate(team);
    refs.modalBackdrop.classList.remove('is-hidden');
    refs.cardContainer.insertAdjacentHTML('beforeend', teamModalHTML);
};
refs.aboutTeam.addEventListener('click', showTeamModal);