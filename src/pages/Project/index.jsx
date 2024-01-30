import { Navigation, Pagination, Autoplay,EffectCube, EffectCards,Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import e_learn from "../../assets/img/e_learn.png";

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Project(){
    return (
        <div>
            <div className="flex flex-col justify-center items-center w-10/12 relative">
                    <div className="border text-4xl w-72 bg-primary border-primary absolute -top-8 rounded-xl p-2 flex flex-row justify-center">
                        label
                    </div>
                <div className="flex border-primary border-8 flex-col  justify-center pt-16 w-9/12 rounded-2xl pb-10">
                    <div>
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay,EffectCube, EffectCards,A11y]}
                            effect="cards"
                            cardsEffect={{
                                perSlideOffset: 32,
                                perSlideRotate: 2,
                                rotate: false,
                                slideShadows: true,
                            }}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            //loop={true}
                        >
                            <SwiperSlide>
                                <div className="flex flex-col m-auto bg-primary p-8 rounded-2xl w-10/12">
                                    <div className="flex flex-row justify-center rounded-2xl p-8 bg-gray-500">
                                        <img src={e_learn} alt="" className="rounded-2xl"/>
                                    </div>
                                    <p className="mt-8 w-10/12 m-auto text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error quae rerum laborum ullam sequi numquam quo consectetur repellat placeat nostrum!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-col m-auto bg-primary p-8 rounded-2xl w-10/12">
                                    <div className="flex flex-row justify-center rounded-2xl p-8 bg-gray-500">
                                        <img src={e_learn} alt="" className="rounded-2xl"/>
                                    </div>
                                    <p className="mt-8 w-10/12 m-auto text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error quae rerum laborum ullam sequi numquam quo consectetur repellat placeat nostrum!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-col m-auto bg-primary p-8 rounded-2xl w-10/12">
                                    <div className="flex flex-row justify-center rounded-2xl p-8 bg-gray-500">
                                        <img src={e_learn} alt="" className="rounded-2xl"/>
                                    </div>
                                    <p className="mt-8 w-10/12 m-auto text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error quae rerum laborum ullam sequi numquam quo consectetur repellat placeat nostrum!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-col m-auto bg-primary p-8 rounded-2xl w-10/12">
                                    <div className="flex flex-row justify-center rounded-2xl p-8 bg-gray-500">
                                        <img src={e_learn} alt="" className="rounded-2xl"/>
                                    </div>
                                    <p className="mt-8 w-10/12 m-auto text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error quae rerum laborum ullam sequi numquam quo consectetur repellat placeat nostrum!</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;