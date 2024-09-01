import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  
  const [sports, setSports] = useState([]);

  useEffect(() => {
    fetch("sports.json")
      .then((res) => res.json())
      .then((data) => setSports(data));
  }, []);

  return (
    <div className="mt-14">
      {/* sports part */}
      <div>
        <div>
          {sports.map((sport) => (
            <div key={sports.id}>
              <div className="card bg-base-100 shadow-xl">
                <figure className="px-5">
                  <img src={sport.image} alt="Shoes" className="rounded-md" />
                </figure>
                <div className="card-body ">
                  <h2 className=" text-xl font-semibold font-poppins">
                    {sport.title}
                  </h2>
                  <div className="flex justify-between font-semibold">
                    <p className="">{sport.category}</p>
                    <div className="flex gap-2">
                      <img className="w-6" src={sport.calendarLogo} alt="" />
                      <p className="text-gray-500">{sport.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
