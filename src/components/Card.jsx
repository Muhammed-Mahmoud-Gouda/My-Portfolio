import "./Card.css";

const Card = ({ title, description, image, tags, link, onViewProject }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} loading="lazy" />
        <div className="card-overlay">
          <button className="card-link" onClick={onViewProject} type="button">
            <i className="fas fa-external-link-alt"></i> View Project
          </button>
        </div>
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="card-tags">
          {tags.map((tag, index) => (
            <span key={index} className="card-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
