import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Firstfloor from "@/components/sections/Firstfloor"
import FloorRooms from "@/components/FloorRooms"
import SEOSetup from "@/components/SEOSetup"

export default function pagegroundfloor() {
	return (
		<>
			<SEOSetup
				title="Upper Level Heritage Deluxe Room - Palace On Ganges Heritage Hotel, Assi Ghat, Varanasi"
				description="The Upper Level rooms are again a nod to India's regal past, embodying a more spacious and luxurious environment. The rooms feature intricate carvings and lush textiles reminiscent of the country's royal history. Each piece in the room."
				keywords="Upper Level Heritage Deluxe Room, Palace On Ganges Heritage Hotel, Assi Ghat, Varanasi, heritage elegance, comfort, tradition"
			/>
			<Layout headerStyle={2}>
				<PageTitle pageName="Upper Level Heritage Deluxe" />
				{/* <Firstfloor/> */}
				<FloorRooms floor={1} />
			</Layout>
		</>
	)
}