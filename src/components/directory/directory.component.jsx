import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.scss";

const DirectoryComponent = ({ categories }) => {
	return (
		<>
			<div className="directory-container">
				{categories.map(({ title, id, imageUrl }) => (
					<DirectoryItem key={id} title={title} imageUrl={imageUrl} />
				))}
			</div>
		</>
	);
};

export default DirectoryComponent;
