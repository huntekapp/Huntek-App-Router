"use client";
import {useState} from "react";
import {useParams} from "next/navigation";
import Image from "next/image";
import NavBar from "@/app/components/navbar";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Postulation = () => {
  const id = useParams();
  const [expanded, setExpanded] = useState(false);

  const [iframeLoaded, setIframeLoaded] = useState(false);
  console.log(iframeLoaded);
  const empresa = id.postulation;
  const data = [
    {
      nombre: "Youtube",
      puesto: "Influencer",
      image: "/images/youtube-g6a795f8e6_1920.png",
      info: [
        "Participar del ciclo completo de desarrollo de producto desde el análisis, prototipado y pruebas con usuarios hasta la mejora continua de las soluciones",
        "Construir sistemas de frontend eficientes y reutilizables",
        "Colaborar en la generación de nuevos productos, junto a profesionales de diseño y desarrollo de software",
        "Identificar y comunicar las mejores prácticas para la ingeniería de frontend, formando parte del diseño y revisión del código",
      ],
      requirements: [
        "Ser profesional de Ingeniería en Sistemas o carreras afines",
        "Poseer 5 años de experiencia de trabajo en frontend en ambientes de alto desempeño",
        "Contar con experiencia de trabajo con tecnologías web abiertas como JavaScript, HTML y CSS",
        "Tener experiencia en la utilización de NodeJS, Express, React, Sass, WPO y SEO",
        "Residir en cualquier localidad de Argentina",
      ],
      why: [
        "Ser parte de una compañía con espíritu emprendedor en la que nos encanta pensar en grande y a largo plazo",
        "Ser protagonista de tu desarrollo en un ambiente de oportunidades, aprendizaje, crecimiento, expansión y proyectos desafiantes",
        "Compartir y aprender en equipo junto a grandes profesionales y especialistas",
        "Un excelente clima de trabajo, con todo lo necesario para que vivas una gran experiencia :)",
      ],
    },
    {
      nombre: "Linkedin",
      puesto: "Reclutador",
      image: "/social/linkedin.svg",
      info: [
        "Participar del ciclo completo de desarrollo de producto desde el análisis, prototipado y pruebas con usuarios hasta la mejora continua de las soluciones",
        "Construir sistemas de frontend eficientes y reutilizables",
        "Colaborar en la generación de nuevos productos, junto a profesionales de diseño y desarrollo de software",
        "Identificar y comunicar las mejores prácticas para la ingeniería de frontend, formando parte del diseño y revisión del código",
      ],
      requirements: [
        "Ser profesional de Ingeniería en Sistemas o carreras afines",
        "Poseer 5 años de experiencia de trabajo en frontend en ambientes de alto desempeño",
        "Contar con experiencia de trabajo con tecnologías web abiertas como JavaScript, HTML y CSS",
        "Tener experiencia en la utilización de NodeJS, Express, React, Sass, WPO y SEO",
        "Residir en cualquier localidad de Argentina",
      ],
      why: [
        "Ser parte de una compañía con espíritu emprendedor en la que nos encanta pensar en grande y a largo plazo",
        "Ser protagonista de tu desarrollo en un ambiente de oportunidades, aprendizaje, crecimiento, expansión y proyectos desafiantes",
        "Compartir y aprender en equipo junto a grandes profesionales y especialistas",
        "Un excelente clima de trabajo, con todo lo necesario para que vivas una gran experiencia :)",
      ],
    },
    {
      nombre: "Facebook",
      puesto: "Metadatos",
      image: "/social/facebook.svg",
      info: [
        "Participar del ciclo completo de desarrollo de producto desde el análisis, prototipado y pruebas con usuarios hasta la mejora continua de las soluciones",
        "Construir sistemas de frontend eficientes y reutilizables",
        "Colaborar en la generación de nuevos productos, junto a profesionales de diseño y desarrollo de software",
        "Identificar y comunicar las mejores prácticas para la ingeniería de frontend, formando parte del diseño y revisión del código",
      ],
      requirements: [
        "Ser profesional de Ingeniería en Sistemas o carreras afines",
        "Poseer 5 años de experiencia de trabajo en frontend en ambientes de alto desempeño",
        "Contar con experiencia de trabajo con tecnologías web abiertas como JavaScript, HTML y CSS",
        "Tener experiencia en la utilización de NodeJS, Express, React, Sass, WPO y SEO",
        "Residir en cualquier localidad de Argentina",
      ],
      why: [
        "Ser parte de una compañía con espíritu emprendedor en la que nos encanta pensar en grande y a largo plazo",
        "Ser protagonista de tu desarrollo en un ambiente de oportunidades, aprendizaje, crecimiento, expansión y proyectos desafiantes",
        "Compartir y aprender en equipo junto a grandes profesionales y especialistas",
        "Un excelente clima de trabajo, con todo lo necesario para que vivas una gran experiencia :)",
      ],
    },
    {
      nombre: "Google",
      puesto: "Ingeniero industrial",
      image: "/social/google.svg",
      info: [
        "Participar del ciclo completo de desarrollo de producto desde el análisis, prototipado y pruebas con usuarios hasta la mejora continua de las soluciones",
        "Construir sistemas de frontend eficientes y reutilizables",
        "Colaborar en la generación de nuevos productos, junto a profesionales de diseño y desarrollo de software",
        "Identificar y comunicar las mejores prácticas para la ingeniería de frontend, formando parte del diseño y revisión del código",
      ],
      requirements: [
        "Ser profesional de Ingeniería en Sistemas o carreras afines",
        "Poseer 5 años de experiencia de trabajo en frontend en ambientes de alto desempeño",
        "Contar con experiencia de trabajo con tecnologías web abiertas como JavaScript, HTML y CSS",
        "Tener experiencia en la utilización de NodeJS, Express, React, Sass, WPO y SEO",
        "Residir en cualquier localidad de Argentina",
      ],
      why: [
        "Ser parte de una compañía con espíritu emprendedor en la que nos encanta pensar en grande y a largo plazo",
        "Ser protagonista de tu desarrollo en un ambiente de oportunidades, aprendizaje, crecimiento, expansión y proyectos desafiantes",
        "Compartir y aprender en equipo junto a grandes profesionales y especialistas",
        "Un excelente clima de trabajo, con todo lo necesario para que vivas una gran experiencia :)",
      ],
    },
    {
      nombre: "Huntek",
      puesto: "Desarrollador FullStack",
      image: "/huntek/logo/G.svg",
      info: [
        "Participar del ciclo completo de desarrollo de producto desde el análisis, prototipado y pruebas con usuarios hasta la mejora continua de las soluciones",
        "Construir sistemas de frontend eficientes y reutilizables",
        "Colaborar en la generación de nuevos productos, junto a profesionales de diseño y desarrollo de software",
        "Identificar y comunicar las mejores prácticas para la ingeniería de frontend, formando parte del diseño y revisión del código",
      ],
      requirements: [
        "Ser profesional de Ingeniería en Sistemas o carreras afines",
        "Poseer 5 años de experiencia de trabajo en frontend en ambientes de alto desempeño",
        "Contar con experiencia de trabajo con tecnologías web abiertas como JavaScript, HTML y CSS",
        "Tener experiencia en la utilización de NodeJS, Express, React, Sass, WPO y SEO",
        "Residir en cualquier localidad de Argentina",
      ],
      why: [
        "Ser parte de una compañía con espíritu emprendedor en la que nos encanta pensar en grande y a largo plazo",
        "Ser protagonista de tu desarrollo en un ambiente de oportunidades, aprendizaje, crecimiento, expansión y proyectos desafiantes",
        "Compartir y aprender en equipo junto a grandes profesionales y especialistas",
        "Un excelente clima de trabajo, con todo lo necesario para que vivas una gran experiencia :)",
      ],
    },
  ];
  const search = data.find((item) => item.nombre === empresa);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <section className="min-h-screen bg-pri/70 flex justify-center w-full items-center flex-col">
      {search ? (
        <article className="flex flex-col bg-sec w-[21.1rem] border border-sec shadow-2xl rounded-2xl h-full m-4 ">
          <div className="h-[17rem] border-b w-full  center">
            <Image loading={"eager"} src={search.image} height={100} width={200} className="mb-2" alt="hola" />
          </div>
          <div>
            <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                <Typography sx={{width: "33%", flexShrink: 0}}>{search.nombre}</Typography>
                <Typography sx={{color: "text.secondary"}}>{search.puesto}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  {search.info.map((item) => (
                    <li className="list-disc list-inside" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
                <Typography sx={{width: "33%", flexShrink: 0}}>Usuario</Typography>
                <Typography sx={{color: "text.secondary"}}>Requerimientos</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  {search.requirements.map((item) => (
                    <li className="list-disc list-inside" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion className="shadow border" expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
                <Typography sx={{width: "33%", flexShrink: 0}}>Empresa</Typography>
                <Typography sx={{color: "text.secondary"}}>¿Por qué nosotros?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  {search.why.map((item) => (
                    <li className="list-disc list-inside" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="h-52  px-4 w-full relative center">
            {!iframeLoaded && <span className=" text-pri absolute h-full loading loading-spinner loading-lg"></span>}
            <iframe
              width="330"
              height="170"
              src="https://www.youtube.com/embed/O8RTHwOEqJA"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-md"
              onLoad={() => setIframeLoaded(true)}></iframe>
          </div>
        </article>
      ) : (
        <p className="text-white h-[90%]">... Loading</p>
      )}
    </section>
  );
};
export default Postulation;
