import CategoryItemComponent from "../category-item/category-item.component";
import "./directory.styles.scss";

const DirectoryComponent = ({ categories }) => {
  return (
    <>
      <div className="directory-container">
        {categories.map(({ title, id, imageUrl }) => (
          <CategoryItemComponent key={id} title={title} imageUrl={imageUrl} />
        ))}
      </div>
    </>
  );
};

export default DirectoryComponent;
