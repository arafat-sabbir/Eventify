import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const ServiceDetail = () => {
    const { id } = useParams()
    const servicedata = useLoaderData()
    const clickedService = servicedata?.find(clickService => clickService.id == id)
    const { title, detail_img,detail_description} = clickedService
    return (
        <div className="mx-auto container">
            <Navbar></Navbar>
            <h3 className="text-4xl text-success  font-bold text-center mb-6">{title}</h3>
            <img src={detail_img} className="w-[70vw] rounded-2xl my-4 h-[67vh] mx-auto" alt="" />
            <h1 className="my-4 w-[70vw] mx-auto text-black font-semibold text-xl" >Detail : {detail_description} </h1>
        </div>
    );
};

export default ServiceDetail;