import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, image_url, details, _id } = news;

  return (
    <div className="px-3 font-poppins">
      
      <div className="card rounded-none card-compact bg-base-100 mx-auto shadow-md mb-10">
        <figure className="rounded-none">
          <img  src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {details.length > 220 ? (
            <p className="font-poppins">
              {details.slice(0, 260)}...
              <br />
              <Link className="font-bold text-md text-orange-500 font-poppins" news={news} to={`/news/${_id}`}>Read More...</Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
