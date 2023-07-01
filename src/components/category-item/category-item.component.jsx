import "./category-item.styles.scss";
const categoryItemComponent = ({ id, title, imageUrl }) => {
  return (
    <>
      <div key={id} className="category-container">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <div className="category-body">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </>
  );
};

export default categoryItemComponent;
