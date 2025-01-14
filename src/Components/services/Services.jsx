import React from "react";
import { FiMonitor, FiHeart, FiGrid, FiSun, FiSettings, FiTool } from "react-icons/fi";

const services = [
  {
    icon: <FiMonitor size={20} />,
    title: "UI/UX Design",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from.",
  },
  {
    icon: <FiHeart size={20} />,
    title: "Web Design",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from.",
  },
  {
    icon: <FiGrid size={20} />,
    title: "Minimal Design",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from.",
  },
  {
    icon: <FiSun size={20} />,
    title: "Creative Design",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from.",
  },
  {
    icon: <FiSettings size={20} />,
    title: "Best Support",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from.",
  },
  {
    icon: <FiTool size={20} />,
    title: "Easy Customize",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from.",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-light font-open sans text-[#757575] ">Our Services</h2>
        <p className=" relative mt-4 after:content-[''] after:w-[50px] pb-3 after:h-[1px] after:bg-[#777777] after:absolute after:left-[300px] after:top[0px] after:bottom-0 text-gray-400 font-open sans font-light max-w-2xl mx-auto">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex gap-5 p-6 rounded-lg text-center group transition-transform duration-300 transform"
          >
            <div
              className="flex items-center justify-center w-9 p-2 h-9 mx-auto mb-4 rounded-full text-gray-400 border-[1px] border-gray-500 transition-all duration-[.7s] group-hover:text-white group-hover:bg-gray-500 group-hover:shadow-lg "
              style={{
                backgroundImage:
                  "radial-gradient(circle at center, transparent 50%, currentColor)",
              }}
            >
              {service.icon}
            </div>
            <div>
            <h3 className=" relative text-left pb-2 after:content-[''] after:w-[50px] after:h-[1px] after:bg-[#777777] after:absolute after:left-[0px] after:top[0px] after:bottom-0 text-[16px] font-normal text-gray-500 font-open sans ">{service.title}</h3>
            <p className="w-[330px] text-left mt-2 text-gray-400 font-open sans ">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
 