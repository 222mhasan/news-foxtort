// import { FcGoogle } from "react-icons/fc";
// import { FaFacebook } from "react-icons/fa6";
import play_store from "../../images/rightSideImage/play_store3.png";
import app_store from "../../images/rightSideImage/app_store3.png";
import one_bank from "../../images/rightSideImage/one-bank.gif";

import qZone1 from "../../assets/Q-zone/qZone1.png";
import qZone2 from "../../assets/Q-zone/qZone2.png";
import qZone3 from "../../assets/Q-zone/qZone3.png";

import adds from "../../assets/adds.gif";
import adds3 from "../../assets/adds3.gif";

const RightSideNav = () => {
  return (
    <div className="space-y-8 p-2 bg-slate-100 font-poppins mt-14">
      <img src={one_bank} alt="" />

      {/* Download apps */}
      <section>
        <h1 className="font-semibold text-gray-600 mb-2 text-xl">
          Download mobile apps
        </h1>
        <div className="flex gap-1">
          <a href="#">
            <img className="w-40" src={play_store} alt="play_store" />
          </a>
          <a href="#">
            <img className="w-40" src={app_store} alt="app_store" />
          </a>
        </div>
      </section>

      {/* gif 1 */}
      <section>
        <img src={adds} alt="" />
      </section>

      {/* Q-zone */}
      <section>
        <h1 className="font-bold mb-2">Q-Zone</h1>
        <div className="w-fit mx-auto space-y-5">
          <img src={qZone1} alt="" />
          <img src={qZone2} alt="" />
          <img src={qZone3} alt="" />
        </div>
      </section>

      {/* gif 2 */}
      <section>
        <img src={adds3} alt="" />
      </section>
      {/* recent post */}

      <section>
        <h2 className="text-xl font-semibold text-gray-600 underline mb-3">
          Recent Post
        </h2>
        <div className="flex flex-col mb-3  px-2 space-y-3">
          <div>
            <a className="flex items-center hover:text-blue-800" href="#">
              <span className="text-3xl text-gray-400 mr-4 font-bold">1</span>
              China manufacturing shrinks for 4th month
            </a>
          </div>
          <a className="flex items-center hover:text-blue-800" href="#">
            <span className="text-3xl text-gray-400 mr-4 font-bold">2</span>
            British hospitality eyes big bucks ahead of Oasis tour
          </a>
          <a className="flex items-center hover:text-blue-800" href="#">
            <span className="text-3xl text-gray-400 mr-4 font-bold">3</span>US
            requests dispute talks on Canada digital services tax
          </a>
          <a className="flex items-center hover:text-blue-800" href="#">
            <span className="text-3xl text-gray-400 mr-4 font-bold">4</span>
            People of Bangladesh will choose their govt: Tarique
          </a>
          <a className="flex items-center hover:text-blue-800" href="#">
            <span className="text-3xl text-gray-400 mr-4 font-bold">5</span>
            People urged to work for inclusive Bangladesh
          </a>
          <a className="flex items-center hover:text-blue-800" href="#">
            <span className="text-3xl text-gray-400 mr-4 font-bold">6</span>
            Centre for Non Party Politics congratulates Muhammad Yunus speech
          </a>
          <a className="flex items-center hover:text-blue-800" href="#">
            <span className="text-3xl text-gray-400 mr-4 font-bold">7</span>
            Canada women recall children missing over CIA brainwash
          </a>
        </div>
      </section>
      
    </div>
  );
};

export default RightSideNav;
