import Header from "../../shared/Header/Header";
import NavBar from "../../shared/NavBar/NavBar";
import LeftSideNav from "../../shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../../shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";
import { useState } from "react";
import Footer from "../Footer/Footer";

const Home = () => {
  const news = useLoaderData();
  console.log(news);

  const [visibleCards, setVisibleCards] = useState(4);

  const toggleVisibleCards = () => {
    if (visibleCards === 4) {
      setVisibleCards(8);
    } else if (visibleCards === 8) {
      setVisibleCards(news.length);
    } else {
      setVisibleCards(4);
    }
  };

  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <NavBar></NavBar>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-5">
        {/* left side */}
        <div className="">
          <LeftSideNav></LeftSideNav>
        </div>

        {/* main news area */}
        <div className="col-span-2 ">
          <h1 className="underline text-xl text-gray-500 font-semibold mt-2 mb-5">Top News</h1>
          {news.slice(0, visibleCards).map((aNews) => (
            <NewsCard key={aNews._id} news={aNews}></NewsCard>
          ))}

          {/* toggle button */}
          <div>
            {news.length > 4 && (
              <div className="my-4 text-center">
                <button
                  className="bg-violet-600 text-white hover:bg-violet-900 px-3 py-1 rounded-sm drop-shadow-xl font-poppins"
                  onClick={toggleVisibleCards}
                >
                  {visibleCards === 4
                    ? "Show More"
                    : visibleCards === 8
                      ? "Show More"
                      : "Show Less"}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* right side */}
        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </section>

      <Footer></Footer>

    </div>
  );
};

export default Home;
