import "./featured.css";
import data from "../data.json";

const Featured = () => {
  return (
    <div className="featured">
      {data[0].featured.map((item) => {
        return (
          <div key={item.id} className="featuredItem">
            <img className="featuredImg" src={item.src} />
            <div className="featuredTitles">
              <h1>{item.h1}</h1>
              <h2>{item.h2}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Featured;

// "featured" :  [
//   {
//       "id": 1,
//       "src": "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
//       "h1": "Dublin",
//       "h2": "7856 Properties"
//   },
//    {
//       "id": 2,
//       "src": "https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=",
//       "h1": "Reno",
//       "h2": "54966 Properties"

//   },
//   {
//       "id": 3,
//       "src":"https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=",
//       "h1": "Austin",
//       "h2": "972018 Properties"

//   }
// ]    ,
