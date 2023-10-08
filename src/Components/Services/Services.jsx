import { useEffect, useState } from "react";
import Service from "../Service/Service";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    })
    AOS.init();
    return (
        <div data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="500"
           
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
            className="container  mx-auto">
            <h3 className="text-2xl font-bold text-center my-12">Our Services</h3>
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 xl:grid-cols-4  gap-10 my-8">
                {
                    services.map(service => <Service key={service.id} service={service}> </Service>)
                }
            </div>
        </div>
    );
};

export default Services;