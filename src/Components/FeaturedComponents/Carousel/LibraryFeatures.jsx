import React from "react";
import "./LibraryFeatures.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FeaturesOfLib } from "../../../ServiceDataBase/ManualData/Content";



const LibraryFeatures = () => {
    return (
        <>
            <div className="library_features">

                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    slidesPerGroup={1}
                    loop={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    loopFillGroupWithBlank={true}
                    navigation={true}
                >
                    {
                        FeaturesOfLib.map((linkData) => {
                            return (
                                <SwiperSlide key={linkData.id} className="e_com_swiper">
                                    <div className="features">
                                        <div className="feature_image">
                                            {/* <h3>{linkData.title}</h3> */}
                                            <img src={linkData.img} alt="" />
                                        </div>
                                        {/* <div className="descrip">
                                            <h5>{linkData.description}</h5>
                                        </div> */}
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>

            </div>
        </>
    )
}



export default LibraryFeatures;
