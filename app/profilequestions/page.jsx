'use client'
import FormQuestions from "../components/profileQuestions";
import PageProgress from "react-page-progress";

const profileQuestionsPage = () => {
	return (
		<section>
			<PageProgress color={'#046255'} />
			<FormQuestions />
		</section>
	);
};

export default profileQuestionsPage;
