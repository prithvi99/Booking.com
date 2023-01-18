import "./propertyList.css";
import data from "../data.json";

const PropertyList = () => {
  return (
    <div className="propertyList">
      {data[0].pList.map((property) => {
        return (
          <div key={property.id} className="propertyListItem">
            <img className="propertyListImg" src={property.src} />
            <div className="propertyListTitles">
              <h1>{property.h1} </h1>
              <h2>{property.h2} </h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PropertyList;
