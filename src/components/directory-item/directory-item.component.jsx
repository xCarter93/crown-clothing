import "./directory-item.styles.scss";
const DirectoryItem = ({ id, title, imageUrl }) => {
	return (
		<>
			<div key={id} className="directory-item-container">
				<div
					className="background-image"
					style={{
						backgroundImage: `url(${imageUrl})`,
					}}
				/>
				<div className="directory-item-body">
					<h2>{title}</h2>
					<p>Shop Now</p>
				</div>
			</div>
		</>
	);
};

export default DirectoryItem;
