import React from "react";
import Card from "./Card/card.jsx";
import Jumbotron from "./Jumbotron/jumbotron.jsx";
import NavBar from "./NavBar/navBar.jsx";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			
			<NavBar/>
			<Jumbotron jumbotronText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam" />
				<div class="row">
					<Card cardTitle ="Card Title1" cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
						enim ad minim veniam" />
					<Card cardTitle ="Card Title2" cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
						enim ad minim veniam" />
					<Card cardTitle ="Card Title3" cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
						enim ad minim veniam" />
				</div>
				<div class="footer text-light center white py-3  bg-dark">Some footer...
   
  </div>

		</div>		
	);
};

export default Home;
