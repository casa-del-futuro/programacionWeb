const proyects = [
    {
        id:1,
        title:"Web Page - Casa del Futuro (2020)",
        description:"Project developed in the 'Casa del Futuro' in conjunction with Lucas Trubiano, using HTML, CSS y Javascript lenguages",
        img:"https://i.postimg.cc/jq79LfT9/Casita-del-Futuro.png",
        host:"https://casadelfuturo.netlify.app/"
    },
    {
        id:2,
        title:"Clinica Odontologica (2021)",
        description:"Project developed in Digital House, using Java, Springboot, HTML, CSS y Javascript lenguages",
        img:"https://i.postimg.cc/ZKPMLhCx/Clinica-Odontologica.png",
        host:"https://lucaszhh.github.io/clinicaOdontologica//src/main/resources/static/index.html"
    },
    {
        id:3,
        title:"Historia Interactiva (2021)",
        description:"Project developed in Digital House, using HTML, CSS, Javascript y Reactjs lenguages",
        img:"https://i.postimg.cc/y8HzVPSv/Historia-interactiva.png",
        host:"https://eligetuaventura-interactivo.netlify.app/"
    },
    {
        id:4,
        title:"Pet Shop (2021)",
        description:"Project developed in Digital House, using HTML, CSS, Javascript lenguages",
        img:"https://i.postimg.cc/wj6bfbN8/PetShop.png",
        host:"https://lucaszhh.github.io/FrontEnd-HTML-CSS/PetShop/"
    },
    {
        id:5,
        title:"Portfolio (2022)",
        description:"Project developed to upload my projects, using HTML, CSS, Javascript y Reactjs lenguages",
        img:"https://i.postimg.cc/nLVbmh2m/Portflio.png",
        host:"https://casadelfuturo.netlify.app/"
    }
    ,{
        id: 6,
        title:"Marvel Comics (2022)",
        description:"Fanpage Marvel - Proyect developed with API marvel, using React, Typescript, CSS lenguages ",
        img:"https://i.postimg.cc/52ths5Wv/Marvel-Comic.png",
        host:"https://ctd-esp-fe3-final-five.vercel.app/"
    }
    ,{
        id: 7,
        title:"Mi primer sitio web (2023)",
        description:"Educational website - Proyect developed in Conectar LAB Mendoza, build your first web site with HTML, CSS and JavaScript",
        img:"https://i.postimg.cc/9XdH0FB4/Mi-Primer-Sitio-Web.png",
        host:"https://lucaszhh.github.io/mi-primer-sitio-web/"
    }
    ,{
        id: 8,
        title:"Git con GitHub (2023)",
        description:"Educational website - Learn basic git flow with github, using HTML, CSS, Javascript lenguages",
        img:"https://i.postimg.cc/SR7BvDKL/Git-Con-Github.png",
        host:"https://git-con-github.netlify.app/"
    }
    ,{
        id: 9,
        title:"Casa del Futuro (2023)",
        description:"Web site from 'Casa del Futuro' - Project developed in the 'Casa del Futuro', using Next.js, typescript, CSS lenguages",
        img:"https://i.postimg.cc/vHXR7qkb/Casa-Del-Futuro.png",
        host:"https://casa-del-futuro.vercel.app/"
    }
    ,{
        id: 10,
        title:"Digital Money House",
        description:"Virtual wallet - Final project Certified Tech Developer, using Next.js, typescript, CSS lenguages",
        img:"https://i.postimg.cc/Dy7kXkCx/Digital-Money-House.png",
        host:"https://equipo-12-lucaszhh.vercel.app/"
    }
]

const proyectosSection = document.querySelector("#proyects")


    console.log("hola");
    proyects.forEach((project)=>{
        proyectosSection.innerHTML += `
        <article class="card">
            <img src="${project.img}" alt="">
            <div class="card__content">
                <p class="card__title">${project.title}</p>
                <p class="card__description">${project.description}</p>
                <a target="_blank" href="${project.host}" class="button" >view site</a>
            </div>
        </article>`
    })

