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
		<main className="h-fit w-full lg:min-h-[200px] flex flex-col sm:items-center border-2 border-t-0 border-l-0">
			<section className="w-full sm:w-auto flex flex-row p-2 px-4 lg:mt-2">
				<Image
					loading={"eager"}
					alt="logo"
					src={postulationInfo.enterpriseLogo}
					width={85}
					height={85}
					className="rounded-full border-2"
				/>
				<div className="flex flex-col justify-between px-4">
					<a href={postulationInfo.enterpriseWebSite} target="_blank" className="text-cyan-700 text-xl">
						{postulationInfo.enterpriseName}
					</a>
					<p className="text-base mb-2 text-gray-700">{postulationInfo.vacant}</p>
					<p className="text-xs mb-2 text-gray-500">{postulationInfo.ubication}</p>
				</div>
			</section>
			<section className="w-full flex flex-col lg:flex-row lg:border-y-2 lg:m-4">
				<Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")} className="lg:w-1/3">
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
				<Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")} className="lg:w-1/3">
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
				<Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")} className="lg:w-1/3">
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
