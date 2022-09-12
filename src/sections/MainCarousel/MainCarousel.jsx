// import Carousel from "react-material-ui-carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import Slide from "../../components/Slide/Slide";
import { useEffect, useState } from "react";
import { Card, CardActionArea, CardHeader, CardMedia, Container } from "@mui/material";


const MainCarousel = () => {
	const[data, setData] = useState([]);
	const[isLoading, setIsLoading] = useState(true);
	const[error, setError] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch("/data/slidesData.json")
		.then(response => response.json())
		.then(data => {
				setData(data);
				setIsLoading(false);
				console.log(data);
			})
		.catch((err) => setError(err));
	}, []);
	
		if(isLoading) return "Loading...";

		if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

		return (
			// <Container component="main" sx={{mt:"94px", mb:"24px"}}>
				<Swiper
					spaceBetween={30}
					centeredSlides={true}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Autoplay, Pagination, Navigation]}
					className="mySwiper"
					style={{
						"--swiper-pagination-color": "#ed1c24",
						"--swiper-navigation-color": "#ed1c24",
					}}
				>
					
					{data.map((item => {
						return (
							<SwiperSlide key={item.id}>
								<Slide data={item}/>
							</SwiperSlide>
						)
					}))}
				</Swiper>
			// </Container>
		)
}

export default MainCarousel;