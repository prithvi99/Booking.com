import "./featuredProperties.css";
import data from "../data.json";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      {data[0].featuredProperties.map((item) => {
        return (
          <div className="fpItem">
            <img className="fpImg" src={item.src} />
            <span className="fpName">{item.name}</span>
            <span className="fpCity">{item.city}</span>
            <span className="fpPrice">{item.price}</span>
            <div className="fpRating">
              <button>{item.rating}</button>
              <button>{item.wordRating} </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedProperties;
