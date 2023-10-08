import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const ServiceDetail = () => {
    const { id } = useParams()
    const servicedata = useLoaderData()
    const clickedService = servicedata?.find(clickService => clickService.id == id)
    const { title, detail_img, big_description } = clickedService
    return (
        <div className="mx-auto container">
            <Navbar></Navbar>
            <h3 className="text-4xl   text-success  font-bold text-center mb-6">{title}</h3>
            <img src={detail_img} className="w-[70vw] rounded-2xl my-4 h-[67vh] mx-auto" alt="" />

            <h2 className="my-4 w-[70vw] mx-auto text-2xl  text-success font-bold" >Detail : <span className="text-black font-semibold text-xl ">{big_description.slice(0,420)}</span></h2>
        </div>
    );
};

export default ServiceDetail;