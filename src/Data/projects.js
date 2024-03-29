export const projects = [
  {
    id: 1,
    title: "Proyecto SAC",
    shot_title:"SAC",
    intro_description:
      'Este es un proyecto utilizado por usuarios a lo largo de todo el país (Chile) para gestionar la administración de contratos de obras viales licitados a contratistas externos. Existe un centro de gestión por Región y el desarrollo requiere de interoperabilidad entre sistemas involucrados en el ciclo de vida de contratos.',
    description:
      "El Sistema de Administración de Contratos (SAC), es una herramienta administrativa que facilita el control y seguimiento de indicadores de gestión en obras viales, como por ejemplo avance físico, avance financiero, proyección de mano de obra, entre muchas otras prestaciones. Su desarrollo involucra consideraciones técnicas de arquitectura de software y patrones de diseño tales como patrón de repositorios, patrón creacional de repositorios, patrón creacional de objetos, etc. Esto con el objetivo de permitir el crecimiento continuo de funcionalidades sin perder calidad. Además, integra servicios web institucionales, y la arquitectura de servidores se encuentra distribuida en aplicaciones, base de datos, y repositorio y versionamiento documental. Actualmente se encuentran en producción varias funcionalidades requeridas y se siguen agregando más de forma iterativa.",
    languajes: ["css", "html", "js", "c-sharp"],
    libraries: {title:"Framework", img: "", text:"MVC5 .Net"},
    extra: { title: "Data", text: "Oracle 11g", img: null },
    backend: "C# .Net Framework",
    link_app: {demo:"demo video", url:null},
    link_repo: null,
  },
  {
    id: 2,
    title: "Proyecto Chat Sockets",
    shot_title:"Chat Sockets",
    intro_description:
      "Aplicación en tiempo real utilizando web sockets. Dispone de avatars que pueden ser seleccionados por los usuarios, además de 3 rooms con temas por defecto y la posibilidad de crear nuevas salas de chat. Implementa librería react-emoji para convertir emoji de tipo text a tipo icon.",
    description:
      `Fue entretenido el desarrollo de este proyecto, implementar websockets para el intercambio de información en tiempo real debe ser una de las herramientas más poderosas en aplicaciones web. Utilicé la librería sockets.io en la construcción de esta aplicación, su api es muy intuitiva y hace que sea muy simple la recepción y emisión de eventos, sobre todo con sus funcionalidades para enviar mensajes a un usuario en particular, a un room completo, como también a todos y cada uno de los componentes dentro de nuestra app que están esperando una emisión de evento tipo broadcast para actualizar el estado de data. El deploy del cliente se realiza en Netlify utilizando su cli e implementando un script para automatizar el proceso de construcción y publicación, y por parte del server, este se encuentra desplegado en Heroku.`,
    languajes: ["css", "html", "js"],
    libraries: {title:"Librería", img: ["react", "socketio"], text:null},
    extra: { title: "Server Deploy", text: "Heroku", img: "heroku" },
    backend: "Node + Express",
    link_app: {demo:"demo app", url:"https://react-chat-app-mauro.netlify.app/"},
    link_repo: "https://github.com/mauricioACV/chat-app-react-socket",
  },
  {
    id: 3,
    title: "Proyecto Dev_United",
    shot_title:"Dev_United",
    intro_description:
      "El proyecto consiste en construir una aplicación web full-stack que simula una Red Social estilo Twitter pero orientada a programadores. El objetivo es poder vincular la comunidad del desarrollo y reunirla en un lugar para discutir, ayudar y conectar con otras personas que compartan esta misma pasión.",
    description:
      "Para el  proyecto, se requiere una vista con un feed de mensajes. Las personas usuarias podrán también hacer social sign up/login con una cuenta de Google y publicar/borrar mensajes, así como también ver los publicados por las demás personas usuarias. La base de datos e integración con Google para el login/sign up es realizada por medio de Firebase. El proyecto deberá ser desplegado y accesible en una URL pública a través de servicios como Github, Netlify o Firebase Hosting. La aplicación cuenta con vista responsive basado a maqueta Figma con referencias gráficas de cómo se vería el proyecto en dispositivos portátiles. Se utiliza React Context para compartir datos sobre login de usuario de forma global, render props, React Router.",
    languajes: ["css", "html", "js"],
    libraries: {title:"Librería", img: ["react"], text:null},
    extra: { title: "Data", text: "Firestore", img: null },
    backend: "Firebase",
    link_app: {demo:"demo app", url:"https://dev-united-mcampusano.web.app/"},
    link_repo: "https://github.com/mauricioACV/React-JS-Proyecto-Dev_United-FireBase-Acamica-",
  },
  {
    id: 4,
    title: "Landing Page Campcon",
    shot_title:"Campcon",
    intro_description:
      'Propuesta de landing page para empresa especialista en demarcaciones viales y seguridad industrial. Actualmente se encuentra desplegada en github pages para visualización y validación de los interesados. Una vez aceptada la propuesta se finalizan detalles del sitio y se despliega en hosting definitivo.',
    description:
      "Este proyecto se desarrolla como sitio estático solo con html, css y Javascript. A través del módulo de media query en css3 el sitio se adapta a diferentes tamaños de pantalla, centrando los esfuerzos en una correcta visualización en smartphones. Una herramienta que me sirvió mucho en este desarrollo fue Prepos, un pre-procesador que compila LESS, Sass, SCSS, entre otros. Con la funcionalidad de procesar archivos en tiempo real, pude modificar el css (puro) en tiempo de codificación y Prepos implementa los prefijos para todos lo navegadores en el archivo utilizado en producción.",
    languajes: ["css", "html", "js"],
    libraries: {title:null, img: null, text:null},
    extra: { title: null, text: null, img: null },
    backend: null,
    link_app: {demo:"landing page", url:"https://mauricioacv.github.io/Sitio-CampCon/"},
    link_repo: "https://github.com/mauricioACV/Sitio-CampCon",
  },
  {
    id: 5,
    title: "Proyecto Portfolio",
    shot_title:"Mi portfolio",
    intro_description:
      'Mi portfolio fue construido en React, y tiene por objetivo ser mi carta de presentación profesional, permitiendo acceder a información sobre mí experiencia en el rubro y cargos que he desempeñado, proyectos relevantes que he desarrollado, habilidades y competencias, medios de contactos y mis redes sociales.',
    description:
      "Este proyecto cuenta con vista responsive adaptado a distintos tamaños de pantalla. En una siguiente versión se incorporará un blog que me permita presentar posts sobre contenidos que voy aprendiendo y consolidando, además de permitir a otras personas publicar sobre desarrollo web.",
    languajes: ["css", "html", "js"],
    libraries: {title:"Librería", img: ["react"], text:null},
    extra: { title: null, text: null, img: null },
    backend: null,
    link_app: {demo:"demo app", url:"https://mauricioacv.github.io/portfolio/"},
    link_repo: "https://github.com/mauricioACV/portfolio",
  },
  {
    id: 6,
    title: "Proyecto GifOS",
    shot_title:"GifOS",
    intro_description:
      'En este proyecto si implementa el manejo asíncrono en JavaScript, así como el uso de los hooks useState, useEffect y useContext. La aplicación, además de ofrecer la búsqueda de gifs, también dispone la opción de modo nocturno o “dark mode", y al iniciar muestra 15 trending gif.',
    description:
      "En este proyecto se utilizó React Context como alternativa a prop drilling, con el objetivo de compartir datos y estados entre componentes, como por ejemplo, indicar a cada componente si el usuario alternó entre el modo claro y oscuro de la app. Context está diseñado para compartir datos que pueden considerarse “globales” para un árbol de componentes en React. También se implementa un custom hook para realizar las peticiones a la api de Giphy, y la implementación de un closure para ejecutar la técnica de memorización de estado.",
    languajes: ["css", "html", "js"],
    libraries: {title:"Librería", img: ["react"], text:null},
    extra: { title: "Api", text: "Giphy Developers", img: null },
    backend: null,
    link_app: {demo:"demo app", url:"https://mauricioacv.github.io/React-JS-Proyecto-GIFos-Acamica/"},
    link_repo: "https://github.com/mauricioACV/React-JS-Proyecto-GIFos-Acamica",
  },
  {
    id: 7,
    title: "Proyecto Reserva Hotel",
    shot_title:"Reserva Hotel",
    intro_description:
      'Este proyecto simula realizar una aplicación en versión “beta”, y el modelo de negocio es la búsqueda y reserva de alojamientos según ciertos criterios de búsqueda: fechas disponibles, países, cantidad de camas del lugar y el precio del mismo. La interfaz gráfica fue construida en React.',
    description:
      "Este es un proyecto simple pero muy potente en cuanto al uso de funciones de JavaScript, como filter y map por ejemplo. El manejo de fechas se implementó sin librerías externas, desarrollando lógica propia. También se generaron abstracciones para reutilización de funciones, obteniendo componentes con menos código duplicado.",
    languajes: ["css", "html", "js"],
    libraries: {title:"Librería", img: ["react"], text:null},
    extra: { title: null, text: null, img: null },
    backend: null,
    link_app: {demo:"demo app", url:"https://mauricioacv.github.io/React-JS-Proyecto-Hoteles-Acamica/"},
    link_repo: "https://github.com/mauricioACV/React-JS-Proyecto-GIFos-Acamica",
  },
];
