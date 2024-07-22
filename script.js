// const a = document.getElementsByTagName('a');
// Array.from(a).forEach((element) => {
//     element.classList.add('text-preset-3');
// });
const socials = [
    {
        name: 'GitHub',
        link: 'https://github.com/Volodymyrquo',
    },
    {
        name: 'Frontend Mentor',
        link: 'https://www.frontendmentor.io/profile/Volodymyrquo',
    },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/volodymyr-basok/' },
    { name: 'Twitter', link: '#' },
    { name: 'Instagram', link: 'https://www.instagram.com/volodymyr.basok/' },
];

const ul = document.querySelector('ul');

for (let el of socials) {
    ul.innerHTML += `<li><a href=${el.link} target="_blank" class='text-preset-3'>${el.name}</a></li>`;
}
