import React,{useState,useEffect} from "react";
import './Fraction.css'
import { GrFormNextLink } from "react-icons/gr";
import Navbar from "../Navbar/Navbar";
import Plate6 from '../imgs/Plate6.jpg'
import Plate2 from '../imgs/Plate2.jpg'
import Plate4 from '../imgs/Plate4.jpg'
import Plate1 from '../imgs/Plate1.jpg'
import Plate5 from '../imgs/Plate5.jpg'
import Plate3 from '../imgs/Plate3.jpg'
import Plate7 from '../imgs/Plate7.jpg'



function Fraction({props}){

    const [foodItems, setFoodItems] = useState(props.data.predictions);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedPlate, setSelectedPlate] = useState();
    const[arrayPlate,setArrayPlate]=useState([]);
    const [isInputDisabled, setIsInputDisabled] = useState(false);
    const [tableVisible, setTableVisible] = useState(false);
    console.log(arrayPlate);
    console.log('data from fraction=',props.data)


    const handleNextItem = () => {
        if (currentIndex < foodItems.length - 1) {
            setCurrentIndex(currentIndex => currentIndex + 1);
        }

        if (currentIndex === foodItems.length - 2) {
            setIsInputDisabled(true); // Disable the input
        }

        setArrayPlate([...arrayPlate, selectedPlate]);
    };

    const handleDisapear=() =>{
        setArrayPlate([...arrayPlate, selectedPlate]);
        setTableVisible(true);
    }

    const num = props.data.predictions.length;
    // console.log(num);

    const [foodResults, setFoodResults] = useState([]);


    useEffect(() => {
        // Check if arrayPlate has been fully populated
        if (arrayPlate.length === foodItems.length) {
            // Loop through each item in foodItems and calculate results
            const newFoodResults = [];
            for (let i = 0; i < foodItems.length; i++) {
                const food = props.data.calories[i][0];
                const result = {
                    name: food.name,
                    totalCalories: food.calories * arrayPlate[i],
                    serving_size_g: food.serving_size_g * arrayPlate[i],
                    fat_total_g: food.fat_total_g * arrayPlate[i],
                    fat_saturated_g: food.fat_saturated_g * arrayPlate[i]
                };
                newFoodResults.push(result);
            }
            // Update the state once after all results are calculated
            setFoodResults(newFoodResults);
        }
    }, [props.data.calories, props.data.predictions, arrayPlate, foodItems.length]);
    

    // useEffect(() => {
    //     const newFoodResults = [];
    //     for (let i = 0; i < props.data.predictions.length; i++) {
    //         const food = props.data.calories[i][0];
    //         const result = {
    //             name: food.name,
    //             totalCalories: food.calories * arrayPlate[i],
    //             serving_size_g: food.serving_size_g * arrayPlate[i],
    //             fat_total_g: food.fat_total_g * arrayPlate[i],
    //             fat_saturated_g: food.fat_saturated_g * arrayPlate[i]
    //         };
    //         newFoodResults.push(result);
    //     }
    //     setFoodResults(newFoodResults);
    // }, [props.data.calories, props.data.predictions]); 


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
                        <button className="arrow-button" onClick={handleNextItem} disabled={isInputDisabled}
                        style={{marginBottom: '2rem'}}><GrFormNextLink style={{  fontSize: '50px', float:'right'}}/></button>
                    </div>
                    {/* <div className="container mt-5 justify-content-center col-md-6 "> */}
                    <div class="form-check form-check-inline mt-4">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="fraction1" value="1"
                        onChange={e=>setSelectedPlate(e.target.value)} style={{ opacity: "0" }}></input>
                        <label class="form-check-label" for="fraction1">
                            <div class="fraction fraction1 ">
                                <img className="pp-img" src={Plate1} alt="fraction1"  ></img>
                                <p>Full Plate</p>
                            </div>
                        </label>
                    </div>
                    <div class="form-check form-check-inline mt-4">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="fraction2" value="0.75"
                        onChange={e=>setSelectedPlate(e.target.value)} style={{ opacity: "0" }}></input>
                        <label class="form-check-label" for="fraction2">
                            <div class="fraction fraction1 ">
                                <img className="pp-img" src={Plate2} alt="fraction2" ></img>
                                <p>3/4 Plate</p>
                            </div>
                        </label>
                    </div>
                    <div class="form-check form-check-inline mt-4">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="fraction3" value="0.66"
                        onChange={e=>setSelectedPlate(e.target.value)} style={{ opacity: "0" }}></input>
                        <label class="form-check-label" for="fraction3">
                            <div class="fraction fraction1 ">
                                <img className="pp-img" src={Plate3} alt="fraction3" ></img>
                                <p>2/3 Plate</p>
                            </div>
                        </label>
                    </div>
                    <div class="form-check form-check-inline mt-4">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="fraction4" value="0.5"
                        onChange={e=>setSelectedPlate(e.target.value)} style={{ opacity: "0" }}></input>
                        <label class="form-check-label" for="fraction4">
                            <div class="fraction fraction1 ">
                                <img className="pp-img" src={Plate4} alt="fraction4" ></img>
                                <p>1/2 Plate</p>
                            </div>
                        </label>
                    </div>
                    <div class="form-check form-check-inline mt-4">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="fraction5" value="0.33" 
                        onChange={e=>setSelectedPlate(e.target.value)} style={{ opacity: "0" }}></input>
                        <label class="form-check-label" for="fraction5">
                            <div class="fraction fraction1 ">
                                <img className="pp-img" src={Plate5} alt="fraction5" ></img>
                                <p>1/3 Plate</p>
                            </div>
                        </label>
                    </div>
                    <div class="form-check form-check-inline mt-4">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="fraction6" value="0.25"
                        onChange={e=>setSelectedPlate(e.target.value)} style={{ opacity: "0" }}></input>
                        <label class="form-check-label" for="fraction6">
                            <div class="fraction fraction1 ">
                                <img className="pp-img" src={Plate6} alt="fraction6" ></img>
                                <p>1/4 Plate</p>
                            </div>
                        </label>
                    </div>
                    <div class="form-check form-check-inline mt-4">
                        <input class="form-check-input fraction-check-input" type="radio" name="inlineRadioOptions" id="fraction7" value="0.2"
                        onChange={e=>setSelectedPlate(e.target.value)} style={{ opacity: "0" }}></input>
                        <label class="form-check-label fraction-check-label" for="fraction7">
                            <div class="fraction fraction1 ">
                                <img className="pp-img" src={Plate7} alt="fraction7" ></img>
                                <p>1/5 Plate</p>
                            </div>
                        </label>
                    </div>
                </div>
                {/* </div>    */}
                


                {/* <button className="button-disapear" style={{margin:'auto'}}>Next</button> */}
                <button onClick={handleDisapear}
                type="button" class="btn btn-light mt-3 button-disapear">Next</button>

                    {tableVisible && (
                        <table className="table table-hover mt-5 custom-table" style={{ maxWidth: '80%', margin: 'auto', backgroundColor: '#C0D6DF' }}>
                            <thead>
                                <tr>
                                    <th style={{ color: '#DD6E42' }}>Name</th>
                                    <th style={{ color: '#DD6E42' }}>Total Calories</th>
                                    <th style={{ color: '#DD6E42' }}>Serving Size (g)</th>
                                    <th style={{ color: '#DD6E42' }}>Total Fat (g)</th>
                                    <th style={{ color: '#DD6E42' }}>Saturated Fat (g)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {foodResults.map((foodResult, index) => (
                                    <tr key={index}>
                                        <td style={{ color: '#4F6D7A' }}>{foodResult.name}</td>
                                        <td style={{ color: '#4F6D7A' }}>{foodResult.totalCalories}</td>
                                        <td style={{ color: '#4F6D7A' }}>{foodResult.serving_size_g}</td>
                                        <td style={{ color: '#4F6D7A' }}>{foodResult.fat_total_g}</td>
                                        <td style={{ color: '#4F6D7A' }}>{foodResult.fat_saturated_g}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}

                {/* <table className="table table-hover mt-5 custom-table" style={{ maxWidth: '80%', margin: 'auto',backgroundColor: '#C0D6DF'  }}>
                    <thead>
                        <tr>
                        <th style={{ color:'#DD6E42' }}>Name</th>
                        <th style={{ color:'#DD6E42' }}>Total Calories</th>
                        <th style={{ color:'#DD6E42' }}>Serving Size (g)</th>
                        <th style={{ color:'#DD6E42' }}>Total Fat (g)</th>
                        <th style={{ color:'#DD6E42' }}>Saturated Fat (g)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {foodResults.map((foodResult, index) => (
                        <tr key={index}>
                            <td style={{ color:'#4F6D7A' }}>{foodResult.name}</td>
                            <td style={{ color:'#4F6D7A' }}>{foodResult.totalCalories}</td>
                            <td style={{ color:'#4F6D7A' }}>{foodResult.serving_size_g}</td>
                            <td style={{ color:'#4F6D7A' }}>{foodResult.fat_total_g}</td>
                            <td style={{ color:'#4F6D7A' }}>{foodResult.fat_saturated_g}</td>
                        </tr>
                        ))}
                    </tbody>
                </table> */}
        </section>
        {/* <Footer /> */}
        

        </>
    );
}

export default Fraction;