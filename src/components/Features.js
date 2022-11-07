import { features } from "..";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className="w-[64px] h-[64px] rounded-full flex justify-center items-center bg-secondaryLightGreen">
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimBlack text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Features = () =>  (
  <section id="business" className="flex flex-row sm:py-16 py-6 bg-background">
    <div className="pl-10 flex-1 flex justify-center items-start flex-col">
      <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full">
        Find the <span className="text-secondaryDarkGreen">cheap</span>, <span className="text-secondaryLightGreen">healthy</span>, food that you need.
      </h2>
      <p className="font-poppins font-normal text-[18px] leading-[30.8px] max-w-[470px] mt-5">
      Food shouldn't need to be a source of stres for a busy student juggling classes, clubs and calendar parties. With nürish, it doesn't need to be.
      </p>
    </div>

    <div className="flex-1 flex flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col">
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Features