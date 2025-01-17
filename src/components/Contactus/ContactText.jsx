import { AiOutlineStock } from "react-icons/ai";
import { FaPeopleGroup } from "react-icons/fa6";
import { TiWorldOutline } from "react-icons/ti";
import Sponser from "../Home/Sponser";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ContactText = () => {

    // Aos
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);

  return (
    <div className="mt-5 lg:mt-0" data-aos="slide-left">
      <h2 className="text-3xl font-semibold text-center mb-12">
        Align, collaborate, and gain visibility into your work in one connected
        space
      </h2>
      <div className="flex py-6 gap-5">
        <div className="flex flex-col items-center justify-center text-center border-r-2">
          <TiWorldOutline className="text-4xl" />
          <p className="w-32">
            Across <span className="font-bold">200+</span> countries
          </p>
        </div>

        <p className="mt-4">
          Meet with a product consultant to see how monday.com can fit your
          exact business needs
        </p>
      </div>

      <div className="flex py-6 gap-5">
        <div className="flex flex-col items-center justify-center text-center border-r-2">
          <FaPeopleGroup className="text-4xl" />
          <p className="w-32">
            <span className="font-bold">225k+</span> paying customers
          </p>
        </div>

        <p className="mt-4">
          Explore our tailored pricing plans based on your goals and priorities
        </p>
      </div>

      <div className="flex py-6 gap-5">
        <div className="flex flex-col items-center justify-center text-center border-r-2">
          <AiOutlineStock className="text-4xl" />
          <p className="w-32">
            Serving <span className="font-bold">200+</span> industries
          </p>
        </div>

        <p className="mt-4">
          Boost productivity from day one by building your team's ideal workflow
        </p>
      </div>

      <Sponser />
    </div>
  );
};

export default ContactText;
