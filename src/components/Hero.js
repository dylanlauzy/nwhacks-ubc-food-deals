import graphic from "./assets/Balls.png"
import { FaSchool } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="flex flex-row sm:py-16 py-6 bg-background">
      <div className="pl-10 flex-1 flex flex-col justify-center items-start">
        <div className="flex flex-row items-center py-[6px] rounded-[10px] mb-2">
            <FaSchool alt="school-icon" className="w-[24px] h-[24px] pb-1 mr-1 fill-secondaryDarkGreen" />
            <p className="text-[20px] font-poppins">
              Trusted by<span className="text-secondaryDarkGreen"> 4 students</span> across
              <span className="text-secondaryDarkGreen"> UBC</span>
            </p>
        </div>
        <h1 className="font-semibold font-poppins text-[48px] mb-5">
        Battling food insecurity by helping students find affordable food.
        </h1>

        <a href="#deals">
        <button className="font-poppins hover:bg-secondaryLightGreen transition-colors rounded-2xl py-3 px-5 text-[18px] bg-secondaryBeige">Show me the deals</button>
        </a>
      </div>

      <div className="flex-1 flex md:my-0 my-10 relative">
        <img src={graphic} className="w-[100%] h-[100%] relative z-[5]"/>
      </div>
    </section>
  )
}

export default Hero