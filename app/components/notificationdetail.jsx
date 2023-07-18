import Image from "next/image";

const NotificationDetail = ({currentNotification, setShowMore}) => {
	return (
		<main className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gray-300 rounded-3xl z-50 shadow-xl">
			<section className="flex flex-row justify-between">
				<p className="p-4 pb-0">{currentNotification.name}</p>
				<button className="h-4 w-4 pt-5 mr-5" onClick={() => setShowMore(false)}>
					<Image loading={"eager"} alt="x" width={24} height={24} src="utils/x_huntek.svg" />
				</button>
			</section>
			<section>
				<p className="p-4">
          {currentNotification.value}
				</p>
			</section>
		</main>
	);
};
export default NotificationDetail;
