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
                            <p>Their  language training event program are amazing,Those of you are trying to learn foreign language you can Always try their language its simple beginner friendly and Justify the price they are taken for..</p>

                            <div className="flex items-center gap-4">
                                <div className="avatar">
                                    <div className="w-8 mt-2 rounded-full ">
                                        <img src="https://i.ibb.co/tX7W6fq/testi-4.jpg" />
                                    </div>
                                </div>
                                <div>
                                    <h3>Neji Hyuga</h3>
                                    <p>Language t Client (Eventify)</p>
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
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div></div>
                        </div>
                        <div className="card-body">
                            <p>Eventify has a amazing Arts event program those of you are trying to learn Creative Arts you can Always try their Creative arts event its simple beginner friendly and Justify the price they are taken for..</p>

                            <div className="flex items-center gap-4">
                                <div className="avatar">
                                    <div className="w-8 mt-2  rounded-full ">
                                        <img src="https://i.ibb.co/x6zbG72/testi-1.png" />
                                    </div>
                                </div>
                                <div>
                                    <h3>Sasha Alex</h3>
                                    <p>Creative Arts Client(Eventify)</p>
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
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                            </div></div>
                        </div>
                        <div className="card-body">
                            <p>The Soft skill event Eventify has like time management communication and other.those of you are trying to get punctual in life.You can Always try their Soft skill event its simple beginner friendly and Justify the price they are taken for..</p>

                            <div className="flex items-center gap-4">
                                <div className="avatar">
                                    <div className="w-8 mt-2   rounded-full ">
                                        <img src="https://i.ibb.co/LYCSyPf/testi-5.jpg" />
                                    </div>
                                </div>
                                <div>
                                    <h3>Steve Hearby</h3>
                                    <p>Soft Skill Client (Eventify)</p>
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
                            <p>Their Stem means science technology engineering machine learning  .Those of you are trying to get Knowledge on digital life.You can Always try their Stem  event its simple beginner friendly and Justify the price they are taken for..</p>

                            <div className="flex items-center gap-4">
                                <div className="avatar">
                                    <div className="w-8  mt-2  rounded-full ">
                                        <img src="https://i.ibb.co/7XK19pL/testi-7.png" />
                                    </div>
                                </div>
                                <div>
                                    <h3>Tom Crud</h3>
                                    <p>Stem Client (Eventify)</p>
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