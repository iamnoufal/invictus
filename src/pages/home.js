import Layout from "components/Layout";

import wnkLogo from "assets/images/wnk-logo.webp";
import stratlytics from "assets/images/stratlytics.png";
import ytIcon from "assets/images/yt.png";

import { Circle, SmallCircle, ShadowCircle } from "components/Circle";

const HomePage = () => {
  return (
    <Layout>
    	<div className="mask-desk">
		  	<SmallCircle style={{ height: "5rem", width: "5rem", right: "5vw" }} />
	 			<SmallCircle style={{ height: "2rem", width: "2rem", left: "40vw", top: "12vw" }} />
		  	<SmallCircle style={{ height: "5rem", width: "5rem", top: "30vw", left: "10vw" }} />
		  	<SmallCircle style={{ height: "4rem", width: "4rem", top: "20vw", right: "10vw" }} />
		 		<SmallCircle style={{ height: "3rem", width: "3rem", left: "4vw" }} />
		 		<SmallCircle style={{ height: "6rem", width: "6rem", top: "40vw", left: "14vw" }} />
		 		<SmallCircle style={{ height: "4rem", width: "4rem", top: "38vw", right: "7rem" }} />
		 		<ShadowCircle style={{ height: "10rem", width: "10rem", left: "25vw", top: "20vw" }} />
		 		<ShadowCircle style={{ height: "10rem", width: "10rem", top: "22vw", right: "10vw" }} />
		 		<ShadowCircle style={{ height: "10rem", width: "10rem", top: "44vw" }} />
		 		<ShadowCircle style={{ height: "10rem", width: "10rem", left: "50vw" }} />
		 		<ShadowCircle style={{ height: "10rem", width: "10rem" }} />
		 		<ShadowCircle style={{ height: "10rem", width: "10rem", top: "44vw", right: "40vw" }} />
		 	</div>
    	<div className="mask-mob">
		  	<SmallCircle style={{ height: "5rem", width: "5rem", right: "5vw" }} />
		  	<SmallCircle style={{ height: "5rem", width: "5rem", right: "5vw", top: "65vh" }} />
	 			<SmallCircle style={{ height: "2rem", width: "2rem", left: "40vw", top: "12vh" }} />
		  	<SmallCircle style={{ height: "5rem", width: "5rem", top: "50vh", left: "10vw" }} />
		  	<SmallCircle style={{ height: "4rem", width: "4rem", top: "80vh", left: "10vw" }} />
		 		<SmallCircle style={{ height: "3rem", width: "3rem", left: "4vw" }} />
		 		<SmallCircle style={{ height: "6rem", width: "6rem", top: "120vh", left: "10vw" }} />
		 		<SmallCircle style={{ height: "6rem", width: "6rem", top: "90vh", right: "10vw" }} />
		 		<SmallCircle style={{ height: "4rem", width: "4rem", top: "150vh", left: "20vw" }} />
		 		<SmallCircle style={{ height: "7rem", width: "7rem", top: "180vh", right: "10vw" }} />
		 		<ShadowCircle style={{ height: "10rem", width: "10rem", left: "25vw", top: "20vw" }} />
		 		<ShadowCircle style={{ height: "10rem", width: "10rem", top: "90vh", right: "10vw" }} />
		 		<ShadowCircle style={{ height: "10rem", width: "10rem", top: "80vh" }} />
		 		<ShadowCircle style={{ height: "10rem", width: "10rem", left: "50vw" }} />
		 		<ShadowCircle style={{ height: "10rem", width: "10rem" }} />
		 		<ShadowCircle style={{ height: "10rem", width: "10rem", top: "160vh", left: "15vw" }} />
		 		<ShadowCircle style={{ height: "10rem", width: "10rem", top: "180vh", right: "5vw" }} />
		 		<ShadowCircle style={{ height: "10rem", width: "10rem", top: "170vh", right: "5vw" }} />
		 	</div>
    	<div className="home-page">
    		<div>
	      	<Circle style={{ height: "18rem", width: "18rem" }} position={{ justifyContent: "left" }}>
  	    		<p style={{ fontSize: "1.3rem", margin: "1.7rem" }}>
  	    			Event Date <br />
  	    			<span className="text-color-green">Aug 28 2021</span><br />
		      		till<br />
  		    		<span className="text-color-green">Sept 5 2021</span>
  	    		</p>
	  	    </Circle>
  		    <Circle style={{ height: "13rem", width: "13rem" }} position={{ justifyContent: "center", marginTop: "7rem" }}>
  		    	<p>
  		    		<span className="text-color-green" style={{ fontSize: "1.8rem", marginBottom: "0" }}>15+</span><br />
  		    		Activities Organized
  		    	</p>
  		    </Circle>
  		    <Circle style={{ height: "14rem", width: "14rem" }} position={{ jusitifyContent: "center" }}>
  		    	<p style={{ fontSize: "0.8rem", marginBottom: "0", marginTop: "1.5rem" }}>Proudly Sponsored by</p>
  		    	<img src={stratlytics} width="100%" />
  		    </Circle>
  		  </div>
  		  <div>
  		    <Circle style={{ height: "10rem", width: "10rem" }} position={{ justifyContent: "right" }}>
  		    	<p style={{ fontSize: "0.6rem", marginBottom: "0" }}>Check us out on</p>
  		    	<a href="https://www.youtube.com/channel/UCax6gDzWhjc1177nGU2A_Ew"><img src={ytIcon} width="50%" /></a>
  		    </Circle>
  			    <Circle style={{ height: "11rem", width: "11rem" }} position={{ justifyContent: "center", marginTop: "4rem" }}>
  		    	<p style={{ fontSize: "0.6rem", marginBottom: "0rem", marginTop: "0.4rem" }}>Brought to you by</p>
  		    	<img src={wnkLogo} width="80%" />
  		    </Circle>
  		    <Circle style={{ height: "13rem", width: "13rem" }} position={{ justifyContent: "left" }}>
  		    	<p style={{ fontSize: "0.85rem", margin: "1.1rem 0" }}>Open to all the students of IITM BSc</p>
  		    </Circle>
  		  </div>
  	  </div>
    </Layout>
  );
};

export default HomePage;
