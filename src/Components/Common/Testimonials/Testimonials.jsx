import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { TestimonialsData } from "../../../ServiceDataBase/ManualData/TestimonialData";
import "./Testimonials.css";



const Testimonials = () => {
    return (
        <>
            <section className="testimonials">

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
                        TestimonialsData.map((data) => {
                            return (
                                <>
                                    <SwiperSlide className="swipe_slides" key={data.id}>
                                        <div className="inner_slides x_y_axis_center">
                                            <div className="slide_image x_y_axis_center">
                                                <img src={data.img} alt="" />
                                            </div>
                                            <h4>{data.reviewerName}</h4>
                                            <div className="descrip x_y_axis_center">
                                                <h5>{data.reviewerFeedback}</h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </>
                            )
                        })
                    }
                </Swiper>

            </section>

            <section className="desk_testimonials">

                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    slidesPerGroup={1}
                    loop={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    loopFillGroupWithBlank={true}
                    navigation={true}
                >
                    {
                        TestimonialsData.map((data) => {
                            return (
                                <>
                                    <SwiperSlide className="swipe_slides" key={data.id}>
                                        <div className="inner_slides x_y_axis_center">
                                            <div className="slide_image x_y_axis_center">
                                                <img src={data.img} alt="" />
                                            </div>
                                            <h4>{data.reviewerName}</h4>
                                            <div className="descrip x_y_axis_center">
                                                <h5>{data.reviewerFeedback}</h5>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </>
                            )
                        })
                    }
                </Swiper>

            </section>
        </>
    )
}



export default Testimonials;