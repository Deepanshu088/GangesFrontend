import SEOSetup from "@/components/SEOSetup"
import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Features from "@/components/sections/Features"
import Form from "@/components/sections/Form"
import News1 from "@/components/sections/News1"
import Pricing from "@/components/sections/Pricing"
import Rooms from "@/components/sections/Rooms"
import Services from "@/components/sections/Services"
import Slider1 from "@/components/sections/Slider1"
import Team from "@/components/sections/Team"
import Testimonial1 from "@/components/sections/Testimonial1"
import Video from "@/components/sections/Video"
import { useSelector } from "react-redux"

export default function Home() {
	const { bannerImgs, homeRoomImgs, mdProfileImg } = useSelector(state => state.settings);

	return (
		<>
			<SEOSetup
				title="Palace on Ganges Heritage Hotel | Stay at Assi Ghat, Varanasi"
				description="Discover the timeless beauty of Varanasi at Palace on Ganges Heritage Hotel. Situated on Assi Ghat, this heritage hotel offers comfortable rooms, traditional cuisine, and stunning views of the Ganges River. Book your heritage stay today."
				keywords="Palace on Ganges Heritage Hotel, Heritage Hotel Varanasi, Hotel Assi Ghat Varanasi, Stay on Assi Ghat, Ganges River Hotel Varanasi, Varanasi Heritage Accommodation, Palace on Ganges, Assi Ghat Hotels"
			/>

			<Layout>
				<Slider1 bannerImgs={bannerImgs} />
				<About1 addClass={"pt-0"} />
				<Rooms homeRoomImgs={homeRoomImgs} />
				<Services />
				<Video />
				<Features />
				<Testimonial1 />
				<Form />
				<News1 />
			</Layout>
		</>
	)
}