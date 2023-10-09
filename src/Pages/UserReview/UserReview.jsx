import Footer from "../../Components/Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const UserReview = () => {
    AOS.init();
    return (
        <div>
            <div className="container mx-auto">
                <div className="flex items-center my-8">
                    <div className="badge badge-success mr-2 badge-sm"></div>
                    <h3> Testimonial</h3>
                </div>
                <h3 className="text-5xl font-semibold my-8">Check whatclient say</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 my-12 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <div data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-duration="1500"

                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="right"

                        className="card  border drop-shadow-2xl p-4">
                        <div className="flex justify-between items-center">
                            <div><img src="https://i.ibb.co/xgT1Zd0/icons8-amazon-24.png" alt="" /></div>
                            <div> <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                            </div></div>
                        </div>
                        <div className="card-body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, omnis? Aliquam accusamus ex nihil itaque, atque, delectus eos repellendus maxime commodi soluta totam quisquam, esse ut a provident ad tenetur molestias praesentium omnis nobis. Dolorem facilis sunt aut voluptatum iste!</p>

                            <div className="flex items-center gap-4">
                                <div className="avatar">
                                    <div className="w-8 mt-2 rounded-full ">
                                        <img src="https://lh3.googleusercontent.com/a/ACg8ocLSEzriO9EM2Nno9atF8fLsO6LWEKhjpOMZBYxbXGHdPUI=s96-c" />
                                    </div>
                                </div>
                                <div>
                                    <h3>Arafat Sabbir</h3>
                                    <p>Font end developer (Amazon)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-duration="1500"

                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top"
                        className="card  border drop-shadow-2xl p-4">
                        <div className="flex justify-between items-center">
                            <div><img src="https://i.ibb.co/xgT1Zd0/icons8-amazon-24.png" alt="" /></div>
                            <div> <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div></div>
                        </div>
                        <div className="card-body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, omnis? Aliquam accusamus ex nihil itaque, atque, delectus eos repellendus maxime commodi soluta totam quisquam, esse ut a provident ad tenetur molestias praesentium omnis nobis. Dolorem facilis sunt aut voluptatum iste!</p>

                            <div className="flex items-center gap-4">
                                <div className="avatar">
                                    <div className="w-8 mt-2  rounded-full ">
                                        <img src="https://lh3.googleusercontent.com/a/ACg8ocLSEzriO9EM2Nno9atF8fLsO6LWEKhjpOMZBYxbXGHdPUI=s96-c" />
                                    </div>
                                </div>
                                <div>
                                    <h3>Arafat Sabbir</h3>
                                    <p>Font end developer (Amazon)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-down"
                        data-aos-offset="200"
                        data-aos-duration="1500"

                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top"
                        className="card  border drop-shadow-2xl p-4">
                        <div className="flex justify-between items-center">
                            <div><img src="https://i.ibb.co/xgT1Zd0/icons8-amazon-24.png" alt="" /></div>
                            <div> <div className="rating">
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                            </div></div>
                        </div>
                        <div className="card-body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, omnis? Aliquam accusamus ex nihil itaque, atque, delectus eos repellendus maxime commodi soluta totam quisquam, esse ut a provident ad tenetur molestias praesentium omnis nobis. Dolorem facilis sunt aut voluptatum iste!</p>

                            <div className="flex items-center gap-4">
                                <div className="avatar">
                                    <div className="w-8 mt-2   rounded-full ">
                                        <img src="https://lh3.googleusercontent.com/a/ACg8ocLSEzriO9EM2Nno9atF8fLsO6LWEKhjpOMZBYxbXGHdPUI=s96-c" />
                                    </div>
                                </div>
                                <div>
                                    <h3>Arafat Sabbir</h3>
                                    <p>Font end developer (Amazon)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-duration="1500"

                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="right"
                     className="card  border drop-shadow-2xl p-4">
                        <div className="flex justify-between items-center">
                            <div><img src="https://i.ibb.co/xgT1Zd0/icons8-amazon-24.png" alt="" /></div>
                            <div> <div className="rating">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                            </div></div>
                        </div>
                        <div className="card-body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, omnis? Aliquam accusamus ex nihil itaque, atque, delectus eos repellendus maxime commodi soluta totam quisquam, esse ut a provident ad tenetur molestias praesentium omnis nobis. Dolorem facilis sunt aut voluptatum iste!</p>

                            <div className="flex items-center gap-4">
                                <div className="avatar">
                                    <div className="w-8  mt-2  rounded-full ">
                                        <img src="https://lh3.googleusercontent.com/a/ACg8ocLSEzriO9EM2Nno9atF8fLsO6LWEKhjpOMZBYxbXGHdPUI=s96-c" />
                                    </div>
                                </div>
                                <div>
                                    <h3>Arafat Sabbir</h3>
                                    <p>Font end developer (Amazon)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserReview;