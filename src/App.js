import CardItem from "./components/CardList/CardItem";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.min.css";

const cardData = {
	id: 1,
	title: "Beautiful Cove",
	address: "56 Forest View Dr, San Francisco, CA 94132",
	imgUrl: "card-room-430x300-0.jpg",
	bedrooms: 2,
	baths: 1,
	guests: 1,
	isFeatured: true,
	price: "175.00",
	averageRating: "Good",
	hostedBy: {
		name: "John Anda",
		imgUrl: "card-host-150x150-0.jpg"
	}
};

function App() {
	return (
		<div className="App">
			<div className="container">
				<div className="row">
					<div className="col-xm-12 col-sm-12 col-md-12 col-lg-12">
						<div id="listing-module-section" className="listing-wrap item-list-view ">
							<div id="module-listing" className="row">
								<CardItem data={cardData} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
