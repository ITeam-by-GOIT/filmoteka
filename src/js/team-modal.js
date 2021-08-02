import { refs } from './refs.js';
import teamModalTemplate from '../templates/teamModalTemplate.hbs';

const team = [
    {
        name: "Anzhela",
        lastName: "Boiko",
        description: "Hello world!",
        githubLink: "https://github.com/Koliadjun",
        linkedInLink: "https://github.com/Koliadjun",
    },
    {
        name: "Anastasia",
        lastName: "",
        description: "Hello world!",
        githubLink: "https://github.com/Koliadjun",
        linkedInLink: "https://github.com/Koliadjun",
    },
    {
        name: "Bogdan",
        lastName: "Kolesnikov",
        description: "Hello world!",
        githubLink: "https://github.com/Koliadjun",
        linkedInLink: "https://github.com/Koliadjun",
    },
    {
        name: "Dima",
        lastName: "Dyka",
        description: "Hello world!",
        githubLink: "https://github.com/Koliadjun",
        linkedInLink: "https://github.com/Koliadjun",
    },
    {
        name: "Ihor",
        lastName: "Kalyniak",
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
        description: "Hello world!",
        githubLink: "https://github.com/Koliadjun",
        linkedInLink: "https://github.com/Koliadjun",
    },
    {
        name: "Vasyl",
        lastName: "Shcherbyna",
        description: "Hello world!",
        githubLink: "https://github.com/Koliadjun",
        linkedInLink: "https://github.com/Koliadjun",
    },
    {
        name: "Євгенія",
        lastName: "",
        description: "Hello world!",
        githubLink: "https://github.com/Yevheniia87",
        linkedInLink: "https://github.com/Koliadjun",
    },
    {
        name: "Yuriy",
        lastName: "Koliadzhyn",
        description: "Hello world!",
        githubLink: "https://github.com/Koliadjun",
        linkedInLink: "https://github.com/Koliadjun",
    },
];
const showTeamModal = (e) => {
    e.preventDefault();
    const teamModalHTML = teamModalTemplate(team);
    refs.modalBackdrop.classList.remove('is-hidden');
    refs.modal.insertAdjacentHTML('beforeend', teamModalHTML);
};
refs.aboutTeam.addEventListener('click', showTeamModal);