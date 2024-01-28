import Container from "../../components/Container";
import { Navigation, Pagination, Autoplay,EffectCube, EffectCards,Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import e_learn from "../../assets/img/e_learn.png";
import { Virtual } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';

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
                            // loop={true}
                        >
                            <SwiperSlide><img src={e_learn} alt="" className=" ml-8 w-11/12"/></SwiperSlide>
                            <SwiperSlide><img src={e_learn} alt="" className=" ml-8 w-11/12"/></SwiperSlide>
                            <SwiperSlide><img src={e_learn} alt="" className=" ml-8 w-11/12"/></SwiperSlide>
                            <SwiperSlide><img src={e_learn} alt="" className=" ml-8 w-11/12"/></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;