import { Link } from "react-router-dom";
import pfone from "../../assets/Images/pf1.jpg";
import pftwo from "../../assets/Images/pf2.jpg";
import pfthree from "../../assets/Images/pf3.jpg";
import pffour from "../../assets/Images/pf4.jpg";
import pffive from "../../assets/Images/pf5.jpg";
import pfsix from "../../assets/Images/pf6.jpg";
import pfseven from "../../assets/Images/pf7.jpg";
import pfeight from "../../assets/Images/pf8.jpg";
import pfnine from "../../assets/Images/pf9.jpg";
import { IoMdQrScanner } from "react-icons/io";
import { MdLink } from "react-icons/md";
import "./Portfolio.css";

const images = [
  pfone,
  pftwo,
  pfthree,
  pffour,
  pffive,
  pfsix,
  pfseven,
  pfeight,
  pfnine,
];

const Portfolio = () => {
  return (
    <>
      <div className="portfolio_item">
        <div className="container">
          <div className="portfolio_item_row  justify-between flex-wrap gap-[18px] mb-[50px] flex ">
            {images.map((image, index) => (
              <div className="group relative " key={index}>
                <img
                  className="transition-all  duration-300 group-hover:scale-110 group-hover:opacity-70 object-cover"
                  src={image}
                  alt={`portfolio ${index + 1}`}
                />
                <div className="portfoilo_img_text transition-all z-30 duration-300 border-[1px] border-[#e9e9e9] p-[30px] border-t-transparent">
                        <h2 className='text-[20px] text-[#4b4b4b] font-open sans font-light mb-[5px]'>Portfolio Item Title</h2>
                        <p className='text-[14px] text-[#4b4b4b] font-open sans font-light leading-[22px] mb-[5px] before:w-[42px] before:h-[1px] before:bg-[#b6b6b6] before:absolute before:bottom-[-6px] hover:before:bg-[#000] relative'>
                            Print, Branding</p>
                        </div>
    
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-white/70 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex gap-4">
                  <a
                      href={image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#4b4a4a] text-[white] p-3 rounded-full  text-xl hover:scale-110 transition-transform duration-300"
                    >
                      <IoMdQrScanner />
                    </a>
                    <Link
                      to="#"
                      className="bg-[#4b4a4a] text-[white] p-3 rounded-full text-xl hover:scale-110 transition-transform duration-300"
                    >
                      <MdLink />
                    </Link>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
