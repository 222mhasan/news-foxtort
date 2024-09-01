import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex bg-slate-100 py-4 mt-4">
      <button className="btn bg-[#383C93] text-white rounded-none text-md font-semibold">
        Latest Update
      </button>
      <Marquee pauseOnHover={true} className=" bg-white">
        India, Sheikh Hasina blamed for 2009 BDR Mutiny. BNP ready to face
        challenges in establishing democracy: Fakhrul. UN releases $100 million in emergency aid funds for 10 countrie. Ton-up Liton helps Bangladesh thwart Pakistan. England record-breaker Root has 'more to contribute' after 34th Test ton
      </Marquee>
    </div>
  );
};

export default BreakingNews;
