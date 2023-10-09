
import Navbar from '../../Components/Navbar/Navbar';

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container mx-auto mt-44 items-center flex flex-col lg:flex-row gap-20 lg:gap-4 ">
                <div data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-duration="2000"

                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="right"
                    className="w-1/2 my-12  lg:my-auto ">
                    <img  src="https://i.ibb.co/1ZzyvFS/desk-items.png" className="mx-auto " alt="" />
                </div>
                <div data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-duration="1500"

                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="left"
                    className="w-1/2 ">
                    <div className="flex items-center">
                        <div className="badge badge-success badge-sm"></div>
                        <p className="text-xl font-semibold text-gray-400 ml-2">About us</p>
                    </div>
                    <h3 className="lg:text-5xl text-3xl font-semibold my-8 ">Eventify is Specialist in Educational And Training Event</h3>
                    <div className="flex flex-col lg:flex-row items-center mb-6 gap-4">
                        <img className="w-16 h-16" src="https://i.ibb.co/820730n/icons8-about-96.png" alt="" />
                        <div>
                            <h1 className="text-2xl mb-2 font-medium">Working Since 1999</h1>
                            <p className="text-gray-400  text-xl">At Eventify We have been Specilizing Eduacatin and Training Event Since 1999 giving our Client a Great Eventing Experience, building,
                                <br />  shipping and scaling beautiful.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;