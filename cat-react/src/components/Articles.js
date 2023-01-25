const Articles = ({ animals }) => {
  return (
    <div className="articles_container">
      {animals.map(({ image, title, description }) => (
        <div key={title + image} className="articles">
          <img
            key={image + "img"}
            src={image}
            alt={title}
            className="article_images"
          />
          <div className="article_info">
            <h2 className="titles">{title}</h2>
            <p className="descriptions">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Articles;
