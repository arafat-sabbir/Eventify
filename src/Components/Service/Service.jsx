import PropTypes from "prop-types"
import { Link } from "react-router-dom";

const Service = ({ service }) => {
    const { title, img,price,id,description } = service;
    return (
        <div>
            <div  className={`card border-b-2 group ease-out p-4 bg-base-100 hover:border-b-success drop-shadow-2xl`}>
                <img src={img} alt="" className='w-24 h-24 mr-auto ml-8'/>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions items-center justify-between pt-2 ">
                        <h3 className="text-success text-xl font-semibold">Price : ${price}</h3>
                       <Link to={`/service/detail/${id}`}> <button className="btn btn-sm btn-outline btn-success rounded-full">View Detail</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;

Service.propTypes ={
    service:PropTypes.object
}
