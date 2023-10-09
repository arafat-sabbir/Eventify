import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container mx-auto my-8 items-center flex flex-col lg:flex-row gap-20 lg:gap-4 ">
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
                    <h3 className="text-5xl font-semibold my-8 ">Specialist in Educational And Training Event</h3>
                    <div className="flex items-center mb-6 gap-4">
                        <img className="w-16 h-16" src="https://i.ibb.co/pXB9Thk/icons8-rocket-48.png" alt="" />
                        <div>
                            <h1 className="text-2xl mb-2 font-medium">Fast working process</h1>
                            <p className="text-gray-400  text-xl">At Evnentify we specialize in designing, building,
                                <br />  shipping and scaling beautiful.</p>
                        </div>
                    </div>
                    <div className="flex items-center mb-6 gap-4">
                        <img className="w-16 h-16" src="https://i.ibb.co/XSg6K5m/icons8-team-96.png" alt="" />
                        <div>
                            <h1 className="text-2xl mb-2 font-medium">Dedicated team</h1>
                            <p className="text-gray-400 text-xl">At Evnentify we,have dedicated team for every <br /> category event management</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <img className="w-16 h-16" src="https://i.ibb.co/3SrNYtg/icons8-last-24-hours-48.png" alt="" />
                        <div>
                            <h1 className="text-2xl mb-2 font-medium">24/7 hours support</h1>
                            <p className="text-gray-400 text-xl">At Evnentify we Give our Client A <br /> Woaping 24/7 Customer care service </p>
                        </div>
                    </div>
                </div>
            </div>
           <Footer></Footer>
        </div>
    );
};

export default About;