import { useContext } from "react";
import { Context } from "../../Context/AuthProvider";

const Banner = () => {
    const {user} = useContext(Context)
    return (
        <div className="lg:relative -top-44 -z-10">


            <div className="flex h-[90vh] md:h-[90vh] justify-center items-center flex-col">
                <div
                    className="w-[99vw] h-full   bg-[url('https://i.ibb.co/Lgv2x7B/8294.jpg')] bg-cover bg-center">
                    <div className="w-full h-full flex  justify-center items-center  hero-overlay bg-gray-500  bg-opacity-30 ">
                        <div>
                            <h3 className="drop-shadow-3xl text-white w-[70vw] h-full text-center  mx-auto  text-3xl font-bold bg-transparent mt-4"><span className={user ? 'text-red-500':'text-success drop-shadow-2xl'}>Eventify</span>,One Stop</h3>
                            <h3 className="text-5xl mt-4 font-black text-white text-center">Event Planner And Trainer</h3>
                            <button className={user ? 'btn btn-error mx-auto flex mt-8 text-white' :  'mx-auto flex mt-8 btn btn-success text-white'}>About Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;