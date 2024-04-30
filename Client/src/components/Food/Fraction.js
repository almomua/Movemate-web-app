import React,{useState} from "react";
import './Fraction.css'
import { GrFormNextLink } from "react-icons/gr";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Plate6 from '../imgs/Plate6.jpg'
import Plate2 from '../imgs/Plate2.jpg'
import Plate4 from '../imgs/Plate4.jpg'
import Plate1 from '../imgs/Plate1.jpg'
import Plate5 from '../imgs/Plate5.jpg'
import Plate3 from '../imgs/Plate3.jpg'
import Plate7 from '../imgs/Plate7.jpg'



function Fraction(){

    const [foodItems, setFoodItems] = useState(["Pizza", "Burger", "Salad"]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedPlate, setSelectedPlate] = useState('');
    console.log(selectedPlate);


    const handleNextItem = () => {
        if (currentIndex < foodItems.length - 1) {
            setCurrentIndex(currentIndex => currentIndex + 1);
        }
    };

    return(
        <>
        <Navbar />
        <section className="fraction-section">
                
                <div className="space"></div>
                <div class="fraction-container  justify-content-center mt-4 col-md-11">
                    <div className="">
                        <h4 style={{color:'#4F6D7A'}}>{foodItems.length > 0 && foodItems[currentIndex]}</h4>
                    </div>
                    <div class="button-div">
                        <button onClick={handleNextItem}
                        style={{marginBottom: '2rem'}}><GrFormNextLink style={{  fontSize: '50px', float:'right'}}/></button>
                    </div>
                    {/* <div className="container mt-5 justify-content-center col-md-6 "> */}
                    <div class="form-check form-check-inline mt-4">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="fraction1" value="1"
                        onChange={e=>setSelectedPlate(e.target.value)} style={{ opacity: "0" }}></input>
                        <label class="form-check-label" for="fraction1">
                            <div class="fraction fraction1 ">
                                <img src={Plate1} alt="fraction1"  ></img>
                                <p>Full Plate</p>
                            </div>
                        </label>
                    </div>
                    <div class="form-check form-check-inline mt-4">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="fraction2" value="3/4"
                        onChange={e=>setSelectedPlate(e.target.value)} style={{ opacity: "0" }}></input>
                        <label class="form-check-label" for="fraction2">
                            <div class="fraction fraction1 ">
                                <img src={Plate2} alt="fraction2" ></img>
                                <p>3/4 Plate</p>
                            </div>
                        </label>
                    </div>
                    <div class="form-check form-check-inline mt-4">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="fraction3" value="2/3"
                        onChange={e=>setSelectedPlate(e.target.value)} style={{ opacity: "0" }}></input>
                        <label class="form-check-label" for="fraction3">
                            <div class="fraction fraction1 ">
                                <img src={Plate3} alt="fraction3" ></img>
                                <p>2/3 Plate</p>
                            </div>
                        </label>
                    </div>
                    <div class="form-check form-check-inline mt-4">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="fraction4" value="1/2"
                        onChange={e=>setSelectedPlate(e.target.value)} style={{ opacity: "0" }}></input>
                        <label class="form-check-label" for="fraction4">
                            <div class="fraction fraction1 ">
                                <img src={Plate4} alt="fraction4" ></img>
                                <p>1/2 Plate</p>
                            </div>
                        </label>
                    </div>
                    <div class="form-check form-check-inline mt-4">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="fraction5" value="1/3" 
                        onChange={e=>setSelectedPlate(e.target.value)} style={{ opacity: "0" }}></input>
                        <label class="form-check-label" for="fraction5">
                            <div class="fraction fraction1 ">
                                <img src={Plate5} alt="fraction5" ></img>
                                <p>1/3 Plate</p>
                            </div>
                        </label>
                    </div>
                    <div class="form-check form-check-inline mt-4">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="fraction6" value="1/4"
                        onChange={e=>setSelectedPlate(e.target.value)} style={{ opacity: "0" }}></input>
                        <label class="form-check-label" for="fraction6">
                            <div class="fraction fraction1 ">
                                <img src={Plate6} alt="fraction6" ></img>
                                <p>1/4 Plate</p>
                            </div>
                        </label>
                    </div>
                    <div class="form-check form-check-inline mt-4">
                        <input class="form-check-input fraction-check-input" type="radio" name="inlineRadioOptions" id="fraction7" value="1/5"
                        onChange={e=>setSelectedPlate(e.target.value)} style={{ opacity: "0" }}></input>
                        <label class="form-check-label fraction-check-label" for="fraction7">
                            <div class="fraction fraction1 ">
                                <img src={Plate7} alt="fraction7" ></img>
                                <p>1/5 Plate</p>
                            </div>
                        </label>
                    </div>
                </div>
                {/* </div>    */}
        </section>
        <Footer />
        

        </>
    );
}

export default Fraction;