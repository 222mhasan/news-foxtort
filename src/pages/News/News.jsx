import { useLoaderData, useParams } from "react-router-dom";
import Header from "../../shared/Header/Header";
import RightSideNav from "../../shared/RightSideNav/RightSideNav";
import { useEffect, useState } from "react";

import { IoMdArrowRoundBack } from "react-icons/io";
import NavBar from "../../shared/NavBar/NavBar";

const News = () => {
  const [newsDetails, setNewsDetails] = useState(null);

  const news = useLoaderData();
  console.log(news);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const findNews = news?.find((newsDetails) => newsDetails._id == id);
    console.log(findNews);
    setNewsDetails(findNews);
  }, [id, news]);

  const {
    title,
    content,
    imageUrl,
    date,
    author,
    details,
    image_url,
    thumbnail_url,
    published_date,
  } = newsDetails || {};

  return (
    <div className="container mx-auto">
      <Header></Header>
      <NavBar></NavBar>
      <div className="grid md:grid-cols-4 gap-4 font-poppins mt-14">
        {/* left side */}
        <div className="col-span-3 px-5">
            {/* left top */}
          <div className="card rounded-none card-compact bg-base-100 ">
            <figure>
              <img src={image_url} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-2xl">{title}</h2>
              <p>{details}</p>
            </div>
            <div>
              <a href="/">
                <button className="bg-teal-500 text-sm  text-white px-3 py-2 flex items-center gap-2">
                  <IoMdArrowRoundBack className="text-xl" /> All news in this
                  category
                </button>
              </a>
            </div>
          </div>

          {/* left bottom */}
          <div className="mt-10">
            <h1 className="text-xl font-bold">Editors Insight</h1>
          </div>
        </div>

        {/* right side */}
        <div className="w-full items-center mx-auto px-2 md:px-1">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default News;
