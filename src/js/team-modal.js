import { refs } from './refs.js';
import teamModalTemplate from '../templates/teamModalTemplate.hbs';

const team = [
    {
        name: "Yuriy",
        lastName: "Koliadzhyn",
        description: "Hello world!",
        instagramLink: "https://www.instagram.com/iurakoliadzhin/",
        githubLink: "https://github.com/Koliadjun",
        facebookLink: "https://github.com/Koliadjun",
        linkedInLink: "https://github.com/Koliadjun",
    },
    {
        name: "Dima",
        lastName: "Dyka",
        description: "Hello world!",
        instagramLink: "https://www.instagram.com/iurakoliadzhin/",
        githubLink: "https://github.com/Koliadjun",
        facebookLink: "https://github.com/Koliadjun",
        linkedInLink: "https://github.com/Koliadjun",
    }
];
const showTeamModal = (e) => {
    e.preventDefault();
    const teamModalHTML = teamModalTemplate(team);
    refs.modalBackdrop.classList.remove('is-hidden');
    refs.modal.insertAdjacentHTML('beforeend', teamModalHTML);
};
refs.aboutTeam.addEventListener('click', showTeamModal);