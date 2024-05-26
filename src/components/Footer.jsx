import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdCall, MdMailOutline } from "react-icons/md";
import { TbWorldCode } from "react-icons/tb";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#F8F9FA] min-h-14">
      <div className="w-full max-w-7xl px-5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:justify-items-center">
        {/* about section */}
        <div>
          <p className="text-primary text-lg font-bold">About Me</p>
          <p className="py-3 text-lg text-justify">
            I am a fullstack developer but focus on frontend developer. Aspirant
            to making technological innovation and mentoring people to achieve
            their goal in programming.
          </p>
        </div>
        {/* contact */}
        <div>
          <p className="text-primary text-lg font-bold">Get In Touch</p>
          <p>Feel Free To Contact Me!</p>
          <p className="my-5 flex items-center gap-5">
            <span className="text-primary ">
              <MdCall />
            </span>
            <p>01838499882</p>
          </p>
          <p className="my-5 flex items-center gap-5">
            <span className="text-primary ">
              <MdMailOutline />
            </span>
            <p>jubair2810@gmail.com</p>
          </p>
          <p className="my-5 flex items-center gap-5">
            <span className="text-primary ">
              <IoLocationOutline />
            </span>
            <p>Dhaka, Bangladesh</p>
          </p>
        </div>

        {/* social */}
        <div>
          <p className="text-primary text-lg font-bold pb-3">Find Me On</p>
          <div className="flex items-center gap-5 text-primary text-xl mt-5">
            <Link to="https://jubair-abdullah.vercel.app/" target="_blank">
              {" "}
              <span>
                <TbWorldCode />
              </span>{" "}
            </Link>
            <Link to="https://jubair-abdullah.vercel.app/" target="_blank">
              {" "}
              <span>
                <FaLinkedin />
              </span>{" "}
            </Link>
            <Link to="https://jubair-abdullah.vercel.app/" target="_blank">
              {" "}
              <span>
                <FaGithub />
              </span>{" "}
            </Link>
            <Link
              to="https://www.facebook.com/jubairabdullah.jibon"
              target="_blank"
            >
              {" "}
              <span>
                <FaFacebookSquare />
              </span>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
