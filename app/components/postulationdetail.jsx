"use client";
import { useState } from "react";
import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const PostulationDetail = ({ postulationInfo }) => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <main
      className={`h-fit w-full relative flex flex-col sm:items-center rounded-b-md border mt-4 bg-sec ${
        expanded ? "z-50" : ""
      } shadow-lg`}>
      {expanded && <div className="fixed inset-0 bg-black  opacity-80 z-10"></div>}
      <section className="w-full flex z-30 rounded border-b-0 bg-sec flex-row p-2 px-4">
        <Image
          loading={"eager"}
          alt="logo"
          src={postulationInfo.enterpriseLogo}
          width={85}
          height={85}
          className="rounded-full z-30 border-2"
        />
        <div className="flex flex-col z-30 justify-between px-4">
          <a
            href={postulationInfo.enterpriseWebSite}
            target="_blank"
            className={`text-pri z-30 flex items-center text-xl`}>
            {postulationInfo.enterpriseName}
            <div className="group flex relative">
            </div>
          </a>
          <p className={`text-base mb-2 z-30 text-gray-700 `}>{postulationInfo.vacant}</p>
          <p className={`text-xs mb-2 z-30 text-gray-500 `}>{postulationInfo.ubication}</p>
        </div>
      </section>
      <section className={`w-[100%] flex flex-col  md:absolute md:top-[5.9rem] md:left-0 ${expanded ? "z-20 " : ""}`}>
        <Accordion className=" border border-x-0" expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
            <Typography className="flex-shrink-0">Información</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              {postulationInfo.vacantInfo.map((item) => (
                <li className="list-disc list-inside" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
            <Typography className="flex-shrink-0">Requerimientos</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              {postulationInfo.vacantRequire.map((item) => (
                <li className="list-disc list-inside" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
            <Typography className="flex-shrink-0">¿Por qué nosotros?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              {postulationInfo.whyUs.map((item) => (
                <li className="list-disc list-inside" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
      </section>
    </main>
  );
};
export default PostulationDetail;
