import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Home(){

    useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // whether animation should happen only once
    });
  }, []);

    return (
        <div className="mx-auto max-w-[700px] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20">
            <div className="flex flex-col justify-center ">
                <h1 className="text-5xl font-bold mb-2 text-black" data-aos="fade-up">Huy Duong</h1>
                <p className="py-2" data-aos="fade-up">Computer Science @ SJSU 
                    <br />
                    SWE Intern @ Nutanix
                </p>
            </div>
                
        </div>
    );
};

export default Home