const NotificationDetail = ({currentNotification}) => {
	return (
		<main className="bg-gray-100 w-11/12 h-11/12">
			<section className="text-start text-lg font-medium">
				<p className="">{currentNotification.name}</p>
			</section>
			<section className="text-start font-light">
				<p className="">
          {currentNotification.value}
				</p>
			</section>
		</main>
	);
};
export default NotificationDetail;
