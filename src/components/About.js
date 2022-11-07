import graphic from "./assets/Balls2.png"
import { FaSchool } from "react-icons/fa";
import { FaPiggyBank } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="flex flex-row sm:py-16 py-6 bg-background">
      <div className="flex-1 flex md:my-0 my-10 relative">
        <img src={graphic} className="w-[50%] h-[100%] relative z-[5]"/>
      </div>
      <div className="pl-10 flex-1 flex flex-col justify-center items-start">
        <h1 className="font-normal text-[32px] mb-5">
          "I <span className="text-transparent bg-clip-text bg-gradient bg-gradient-to-r from-green-400 to-green-800">don't buy food on campus</span> just cause it's too expensive. I've just ruled that out for me."
        </h1>
        <div className="flex flex-row items-center py-[6px] rounded-[10px] mb-2">
        <FaPiggyBank alt="school-icon" className="w-[24px] h-[24px] pb-1 mr-1 fill-secondaryDarkGreen" />
            <p className="text-[20px] text-gray-500 font">
              Nick van Gruen, student at UBC
            </p>
        </div>

      </div>
    </section>
  )
}

export default About