import { useEffect, useState } from "react";
import NavBar from "../../shared/NavBar/NavBar";
import Header from "../../shared/Header/Header";
import { IoMdArrowRoundBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";

const Sports = () => {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    fetch("sports.json")
      .then((res) => res.json())
      .then((data) => setSports(data));
  }, []);

  return (
    <div>
      <Header></Header>
      <NavBar></NavBar>
      <section className="grid grid-cols-5 font-poppins">
        <div className="col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5  w-fit mx-auto mt-10 px-3">
          {sports.map((sport) => (
            <div key={sport.id}>
              <div className="flex justify-between font-semibold mb-2 font-poppins">
                <div className="flex gap-2">
                  <img className="w-6" src={sport.calendarLogo} alt="" />
                  <p className="text-gray-500">{sport.date}</p>
                </div>
              </div>
              <div className="card rounded-none bg-base-100 ">
                <div className="w-fit mb-3">
                  <img src={sport.image} alt="Shoes" />
                </div>

                <div className="">
                  <h2 className=" text-xl font-semibold ">{sport.title}</h2>
                  <p className="text-justify">{sport.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-600 underline mb-3">
            Recent Post
          </h2>
          {sports.map((sport) => (
            <div
              key={sport.id}
              className="flex flex-col mb-3 hover:text-blue-800 px-2"
            >
              <a href="#">{sport.recentPost}</a>
            </div>
          ))}
        </div>
      </section>

      {/* back button */}
      <section className="my-5 font-poppins">
        <NavLink to="/">
          <button className="bg-violet-900 hover:bg-violet-500 text-white px-5 md:px-28  py-2 rounded-md flex items-center gap-3">
            <IoMdArrowRoundBack className="md:text-2xl" />
            Back to Home
          </button>
        </NavLink>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Sports;
