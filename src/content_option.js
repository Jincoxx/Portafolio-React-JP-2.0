const logotext = "JP";
const meta = {
    title: "Portafolio JP",
    description: "Soy Juan Pablo web devloper, estudiante de Analisi y desarrollo de software",
};

const introdata = {
    title: "Soy JP Bienvenido",
    animated: {
        first: "Me gusta el Diseño web",
        second: "Me gustan los Video Juegos",
        third: "Me gusta el PC custom",
    },
    description: "Soy estudiante de Analisis y desarrollo de software del SENA",
    your_img_url: "http://localhost:3000/programador.jpg",
};

const dataabout = {
    title: "Cosas Acerca de mi",
    aboutme: "Desde que tuve acceso a una computadora en mi colegio, me dedique a aprender, modificar y ensamblar equipos fisicos de computador. Ahora me gustrai seguir profundizando en su lemguage como se comunican de dispositivo a dispositivo y en la creacion de citios web ",
};
const worktimeline = [{
        jobtitle: "Tecnico en Manteniminto y Ensamble de PC",
        where: "RedeComputo",
        date: "2011",
    },
    {
        jobtitle: "Trabajador Social",
        where: "Univercidad del Quindio",
        date: "2021",
    },
    {
        jobtitle: "Tecnologo en Analisis y Desarrollo de Software",
        where: "SENA",
        date: "2025",
    },
];

const skills = [{
        name: "HTML",
        value: 80,
    },
    {
        name: "CSS",
        value: 80,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Java",
        value: 40,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Creacion y diseño de sitios web segun lo requerimientos del cliente.",
    },
    {
        title: "Resolucion de Problemas Empresariales",
        description: "La creacion, diseño y transformacion de probemas reales empresariales, a soluciones por medio de programas.",
    },
    {
        title: "Bots",
        description: "Creacion de bots diseñados para relaizar actividades repetitivas en entornos empresariales.",
    },
];

const dataportfolio = [{
        img: "http://localhost:3000/rickymorthy.jpg",
        description: "filtro de busqueda de personajes usando api.",
        link: "https://rick-and-morty-api-nine-lyart.vercel.app/",
    },
    {
        img: "http://localhost:3000/arrays.jpg",
        description: "Muestra de como se usan los diferentes Arrays.",
        link: "https://arrays-methods.vercel.app/",
    },
    {
        img: "http://localhost:3000/contactenos.jpg",
        description: "Creacion de un formulario de contactenos.",
        link: "https://formulario-de-cont-ctenos-con-librer-a-email-js.vercel.app/",
    },
    {
        img: "http://localhost:3000/atlas.jpg",
        description: "Maquetacion web proyecto atlas.",
        link: "https://proyecto-atlas-lime.vercel.app/",
    },
    {
        img: "http://localhost:3000/edtravel.jpg",
        description: "Maquetacion pagina web agencia de viajes.",
        link: "https://maquetado-pagina-web-ed-travel.vercel.app/",
    },
];

const contactConfig = {
    YOUR_EMAIL: "carnagechu@gmail.com",
    YOUR_FONE: "(+57)315-469-4903",
    description: "Para cualqueir tipo de informacion, no dudes en hacermela llegar por medio de mi correo electronico. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/Jincoxx",
    //facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/juan-pablo-reinoso-mart%C3%ADnez-3a7593229/",
    //twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};