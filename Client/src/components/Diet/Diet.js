import React,{useState} from "react";
import Footer from "../Footer/Footer";
// import Navbar from "../Navbar/Navbar";
import './Diet.css';
import female from '../imgs/female.jpeg'
import male from '../imgs/male.jpeg'
import tunapasta from '../imgs/tunapasta.jpeg'
import butternutSquash from '../imgs/ButternutSquash.jpg'
import creamyChickenPasta from '../imgs/CreamyChickenPasta.jpeg'
import SouthernSpicedChicken from '../imgs/Southern-SpicedChicken.jpeg'
import greenGoddess from '../imgs/greenGoddess.jpg'
import creamyavocado from '../imgs/creamyavocado.jpeg'
import spinashstauffedsalmon from '../imgs/spinash stauffed salmon.jpeg'
// 
import PanChicken from '../imgs/PanChicken.jpeg'
import chickpeaBurgers from '../imgs/chickpeaBurgers.jpeg'
import cannedSalmon from '../imgs/cannedSalmon.jpeg'
import peanutChicken from '../imgs/peanutChicken.jpeg'
import RavioilWithSpanich from '../imgs/RavioilWithSpanich.jpeg'
import potatoPeanutSoup from '../imgs/potatoPeanutSoup.jpeg'
import cremySpanichPasta from '../imgs/cremySpanichPasta.jpg'
//
import GreekYougurt from '../imgs/GreekYougurt.jpg'
import avocadoWithTurkey from '../imgs/avocadoWithTurkey.jpeg'
import GrilledShrimp from '../imgs/grilledShrimp.jpeg'
import turkeyChili from '../imgs/turkeyChili.jpeg'
import wheatChicken from '../imgs/wheatChicken.jpeg'
import midterraneanChickpea from '../imgs/midterraneanChickpea.jpeg'
import BrownRice from '../imgs/BrownRice.jpeg'


function Diet(){

    const[checkGender,setCheckGender]=useState('');
    const [fatPercentage, setFatPercentage] = useState("");
    const [selectionComplete, setSelectionComplete] = useState(false);
    const[secondCheckGender,setSecondCheckGender]=useState('');
    const [secondFatPercentage, setSecondFatPercentage] = useState("");
    
    console.log(checkGender)



    const handleInputChange = (event) => {
        const { value } = event.target;
        setFatPercentage(value);
        console.log("Fat Percentage:", value);
    };

    // const handleGenderChange = (event) => {
    //     const { value } = event.target;
    //     setCheckGender(value);
    //     // Use the updated value passed to setFatPercentage
    //     setFatPercentage((prevFatPercentage) => {
    //         // Check if both gender and fat percentage are selected
    //         if (value !== "" && prevFatPercentage !== "") {
    //             setSelectionComplete(true);
    //         } else {
    //             setSelectionComplete(false);
    //         }
    //         return prevFatPercentage; // Return the previous value
    //     });
    // };
    

    const handleGenderChange = (event) => {
        const { value } = event.target;
        setCheckGender(value);

        console.log("Gender:", value);
        console.log("Fat Percentage:", fatPercentage);
    };

    const handleDoneInput=() =>{
        setSecondCheckGender(checkGender);
        setSecondFatPercentage(fatPercentage);
    }



    return(
        <>
            {/* <Navbar/> */}
            <section className="back-page">
                <div className="container diet-section">

                <div class="gender-container justify-content-center">
                <p style={{color:'#DD6E42 ',fontSize:'20px'}} className=""> Choose Your Gender & Enter Your Fat Percentage </p>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="female"
                            onChange={handleGenderChange} style={{ opacity: "0" }}></input>
                            <label class="form-check-label" for="inlineRadio1">
                                <div class="plate plate1 ">
                                    <img src={female} alt="plate1" style={{ width: "20px", height: "20px" }} ></img>
                                </div>
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="male"
                            onChange={handleGenderChange} style={{ opacity: "0" }}></input>
                            <label class="form-check-label" for="inlineRadio2">
                                <div class="plate plate1 ">
                                    <img src={male} alt="plate1" style={{ width: "20px", height: "20px" }}></img>
                                </div>
                            </label>
                        </div>
                    </div>

                    <div className="form-group row">
                        {/* <label className="mt-2 mb-2 font-weight-bold" for="ex2" style={{ color: '#DD6E42',fontSize:'30px' }}>Enter Your Fat Percentage</label> */}
                        <div class="position-relative input-group sml-input">
                            <input class="form-control sml-input" id="ex2" type="text"
                            value={fatPercentage} onChange={handleInputChange}/>
                            <div class="position-absolute end-0 bottom-0 p-2"  style={{marginRight: '10px'}}>
                                <span>%</span>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleDoneInput} class="done-button mt-3">Done</button>

                    {/* gain weight */}
                    {/* Conditionally render the table based on checkGender and fatPercentage */}
                    {
                    (secondCheckGender === 'female' && secondFatPercentage >= 0 && secondFatPercentage<= 20) ||
                    (secondCheckGender === 'male' && secondFatPercentage>= 0 && secondFatPercentage <= 13) ? (
                        <table class="table mt-3 table-hover table-bordered table-custom" >
                            <thead>
                                <tr>
                                <th scope="col"></th>
                                <th scope="col" style={{ color: '#DD6E42' }}>Breakfast</th>
                                <th scope="col" style={{ color: '#DD6E42' }}>Lunch</th>
                                <th scope="col" style={{ color: '#DD6E42' }}>Dinner</th>
                                <th scope="col" style={{ color: '#DD6E42' }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row" style={{ color: '#DD6E42' }}>Day1</th>
                                <td style={{ color: '#4F6D7A  ' }}>2 servings Vegan Freezer Break- fast Burritos and 1 cup straw- berries</td>
                                <td style={{ color: '#4F6D7A  ' }}>2 servings Vegetable & Tuna Pasta 1 large apple and 1 Tbsp. nat- ural peanut butter</td>
                                <td style={{ color: '#4F6D7A  ' }}>1 serving Sheet-Pan Ma- ple-Mustard Pork Chops and Carrots and 1 1/2 cups Easy Brown Rice</td>
                                <td>
                                    <img src={tunapasta} alt="tunapasta" style={{width:'150px',height:'100px'}}/>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row" style={{ color: '#DD6E42' }}>Day2</th>
                                <td style={{ color: '#4F6D7A  ' }}>1 serving Raspberry Peach Mango Smoothie Bowl and 1 hard-boiled egg</td>
                                <td style={{ color: '#4F6D7A  ' }}>1 serving Roasted Butternut Squash & Root Vegetables with Cauliflower Gnocchi and 1 slice whole-wheat toast with 1 tsp. un- salted butter</td>
                                <td style={{ color: '#4F6D7A  ' }}>2 servings Philly Cheese  Steak Sloppy Joes 2 cups fresh spinach & 1 cup shredded carrots topped with 1/2 Tbsp. olive oil & 1/2 Tbsp. balsamic vinegar</td>
                                <td>
                                    <img src={butternutSquash} alt="tunapasta" style={{width:'150px',height:'150px'}}/>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row" style={{ color: '#DD6E42' }}>Day3</th>
                                <td style={{ color: '#4F6D7A  ' }}>2 servings Maple-Nut Granola and 1 cup 2% milk</td>
                                <td style={{ color: '#4F6D7A  ' }}>1 serving Roasted Butternut Squash & Root Vegetables with Cauliflower Gnocchi 1 and slice whole-wheat toast with 1 tsp. un- salted butter</td>
                                <td style={{ color: '#4F6D7A  ' }}>2 servings Creamy Chicken, Brussels Sprouts and Mush- room One-Pot Pasta</td>
                                <td>
                                    <img src={creamyChickenPasta} alt="tunapasta" style={{width:'150px',height:'150px'}}/>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row" style={{ color: '#DD6E42' }}>Day4</th>
                                <td style={{ color: '#4F6D7A  ' }}>2 servings Maple-Nut Granola and 1 cup 2% milk</td>
                                <td style={{ color: '#4F6D7A  ' }}>1 serving Roasted Butternut Squash & Root Vegetables with Cauliflower Gnocchi 1 and slice whole-wheat toast with 1 tsp. un- salted butter</td>
                                <td style={{ color: '#4F6D7A  ' }}>1 serving Southern Style Ov-en-Fried Chicken, 1 serving Greek Potato Salad, and 1 serving Garlicky Green Beans</td>
                                <td>
                                    <img src={SouthernSpicedChicken} alt="tunapasta" style={{width:'150px',height:'150px'}}/>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row" style={{ color: '#DD6E42' }}>Day5</th>
                                <td style={{ color: '#4F6D7A  ' }}>1 serving Raspberry Peach Mango Smoothie Bowl and 2 hard-boiled eggs</td>
                                <td style={{ color: '#4F6D7A  ' }}>1 serving Roasted Butternut Squash & Root Vegetables with Cauliflower Gnocchi 1 and slice whole-wheat toast with 1 tsp. un- salted butter</td>
                                <td style={{ color: '#4F6D7A  ' }}>2 servings Green Goddess Salad with Chicken and 1 slice whole-wheat toast with 1 tsp. unsalted butter</td>
                                <td>
                                    <img src={greenGoddess} alt="tunapasta" style={{width:'150px',height:'130px'}}/>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row" style={{ color: '#DD6E42' }}>Day6</th>
                                <td style={{ color: '#4F6D7A  ' }} >1 serving Raspberry Peach Mango Smoothie Bowl, 1 medi-um orange, and 2 hard-boiled eggs</td>
                                <td style={{ color: '#4F6D7A  ' }}>2 servings Creamy Avocado and White Bean Wraps and 1 cup strawberries</td>
                                <td style={{ color: '#4F6D7A  ' }}>2 servings Tortilla Chip Flounder with Black Bean Salad</td>
                                <td>
                                    <img src={creamyavocado} alt="tunapasta" style={{width:'150px',height:'150px'}}/>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row" style={{ color: '#DD6E42' }}>Day7</th>
                                <td style={{ color: '#4F6D7A  ' }}>1 serving Vegan Freezer Burri- tos, 1 medium banana, and 2 Tbsp. peanut butter</td>
                                <td style={{ color: '#4F6D7A  ' }}>2 servings Creamy Avocado and White Bean Wraps</td>
                                <td style={{ color: '#4F6D7A  ' }}>1 serving Creamed Spin- ach-Stuffed Salmon, 2 serv- ings Garlicky Green Beans, and 3/4 cup Easy Brown Rice</td>
                                <td>
                                    <img src={spinashstauffedsalmon} alt="tunapasta" style={{width:'150px',height:'150px'}}/>
                                </td>
                                </tr>
                            </tbody>
                        </table>
                    ) : null}

                    


                    {/* lose weight */}
                    {(secondCheckGender === 'female' && secondFatPercentage >24) ||
                    (secondCheckGender === 'male' && secondFatPercentage >17) ? (
                        <table class="table mt-3 table-hover table-bordered table-custom" >
                            <thead>
                                <tr>
                                <th scope="col"></th>
                                <th scope="col" style={{ color: '#DD6E42' }}>Breakfast</th>
                                <th scope="col" style={{ color: '#DD6E42' }}>Lunch</th>
                                <th scope="col" style={{ color: '#DD6E42' }}>Dinner</th>
                                <th scope="col" style={{ color: '#DD6E42' }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row" style={{ color: '#DD6E42' }}>Day1</th>
                                <td style={{ color: '#4F6D7A  ' }}>2 servings Baked Banana-Nut Oat- meal Cups and 1 clementine</td>
                                <td style={{ color: '#4F6D7A  ' }}>1 serving Veggie & Hummus Sandwich</td>
                                <td style={{ color: '#4F6D7A  ' }}>1 serving Sheet-Pan Chicken Fajita Bowis with 1/3 cup cooked brown rice</td>
                                <td>
                                    <img src={PanChicken} alt="tunapasta" style={{width:'150px',height:'120px'}}/>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row" style={{ color: '#DD6E42' }}>Day2</th>
                                <td style={{ color: '#4F6D7A  ' }}>2 servings Baked Banana-Nut Oat- meal Cups and 1 clemetine</td>
                                <td style={{ color: '#4F6D7A  ' }}>1 serving Chipot- le-Lime Cauliflower Taco Bowls</td>
                                <td style={{ color: '#4F6D7A  ' }}>1 serving Zucchi- ni-Chickpea Veggie Burgers with Ta- hini-Ranch Sauce and 1 serving Oven Sweet-Potato Fries</td>
                                <td>
                                    <img src={chickpeaBurgers } alt="tunapasta" style={{width:'150px',height:'120px'}}/>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row" style={{ color: '#DD6E42' }}>Day3</th>
                                <td style={{ color: '#4F6D7A  ' }}>2 servings Baked Banana-Nut Oat- meal Cups and 1 clemetine</td>
                                <td style={{ color: '#4F6D7A  ' }}>1 serving Chipot- le-Lime Cauliflower Taco Bowls</td>
                                <td style={{ color: '#4F6D7A  ' }}>1 serving Easy Salm- on Cakes over 2 cups baby spinach and 1 (2-inch) piece whole- wheat baguette</td>
                                <td>
                                    <img src={cannedSalmon} alt="tunapasta" style={{width:'150px',height:'120px'}}/>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row" style={{ color: '#DD6E42' }}>Day4</th>
                                <td style={{ color: '#4F6D7A  ' }}>1 serving Muesli with Raspberries and 1 medium banana</td>
                                <td style={{ color: '#4F6D7A  ' }}>1 serving Chipot- le-Lime Cauliflower Taco Bowls</td>
                                <td style={{ color: '#4F6D7A  ' }}>1 serving Chicken & Cucumber Lettuce Wraps with Peanut Sauce</td>
                                <td>
                                    <img src={peanutChicken} alt="tunapasta" style={{width:'150px',height:'120px'}}/>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row" style={{ color: '#DD6E42' }}>Day5</th>
                                <td style={{ color: '#4F6D7A  ' }}>1 serving Muesli with Raspberries</td>
                                <td style={{ color: '#4F6D7A  ' }}>1 serving Chipot- le-Lime Cauliflower Taco Bowls</td>
                                <td style={{ color: '#4F6D7A  ' }}>1 serving Spinach Rav- ioli with Artichokes & Olives</td>
                                <td>
                                    <img src={RavioilWithSpanich} alt="tunapasta" style={{width:'150px',height:'120px'}}/>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row" style={{ color: '#DD6E42' }}>Day6</th>
                                <td style={{ color: '#4F6D7A  ' }} >1 serving Muesli with Raspberries and 1 medium banana</td>
                                <td style={{ color: '#4F6D7A  ' }}>1 serving Veggie & Hummus Sandwich and 1 clementine</td>
                                <td style={{ color: '#4F6D7A  ' }}>1 serving Curried Sweet Potato & Pea- nut Soup and 1 (2-in.) slice whole-wheat baguette</td>
                                <td>
                                    <img src={potatoPeanutSoup} alt="tunapasta" style={{width:'150px',height:'120px'}}/>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row" style={{ color: '#DD6E42' }}>Day7</th>
                                <td style={{ color: '#4F6D7A  ' }}>1 serving "Egg in a Hole" Peppers with 1 medium apple Avocado Salsa</td>
                                <td style={{ color: '#4F6D7A  ' }}>1 serving Curried Sweet Potato & Pea- nut Soup</td>
                                <td style={{ color: '#4F6D7A  ' }}> 1 serving Spinach &Artichoke Dip Pasta</td>
                                <td>
                                    <img src={cremySpanichPasta} alt="tunapasta" style={{width:'150px',height:'120px'}}/>
                                </td>
                                </tr>
                            </tbody>
                        </table>
                    ) : null}


                    {/* healthy diet */}
                    {(secondCheckGender === 'female' && secondFatPercentage > 20 && secondFatPercentage <= 24) ||
                    (secondCheckGender === 'male' && secondFatPercentage > 13 && secondFatPercentage <= 17) ? (
                        <table class="table mt-3 table-hover table-bordered table-custom" >
                            <thead>
                                <tr>
                                <th scope="col"></th>
                                <th scope="col" style={{ color: '#DD6E42' }}>Breakfast</th>
                                <th scope="col" style={{ color: '#DD6E42' }}>Lunch</th>
                                <th scope="col" style={{ color: '#DD6E42' }}>Dinner</th>
                                <th scope="col" style={{ color: '#DD6E42' }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row" style={{ color: '#DD6E42' }}>Day1</th>
                                <td style={{ color: '#4F6D7A  ' }}>Greek yogurt with fresh fruit and granola</td>
                                <td style={{ color: '#4F6D7A  ' }}>Quinoa and black bean salad with mixed greens</td>
                                <td style={{ color: '#4F6D7A  ' }}>Grilled salmon with roasted vegetables</td>
                                <td>
                                    <img src={GreekYougurt} alt="tunapasta" style={{width:'150px',height:'120px'}}/>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row" style={{ color: '#DD6E42' }}>Day2</th>
                                <td style={{ color: '#4F6D7A  ' }}>2 servings Baked Banana-Nut Oat- meal Cups and 1 clemetine</td>
                                <td style={{ color: '#4F6D7A  ' }}>Turkey and avocado wrap with whole wheat tortilla</td>
                                <td style={{ color: '#4F6D7A  ' }}>Baked chicken with sweet potato and green beans</td>
                                <td>
                                    <img src={avocadoWithTurkey } alt="tunapasta" style={{width:'150px',height:'120px'}}/>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row" style={{ color: '#DD6E42' }}>Day3</th>
                                <td style={{ color: '#4F6D7A  ' }}>Scrambled eggs with spinach and whole wheat toast</td>
                                <td style={{ color: '#4F6D7A  ' }}>Vegetable soup with whole grain crackers</td>
                                <td style={{ color: '#4F6D7A  ' }}>Grilled shrimp with brown rice and mixed vegetables</td>
                                <td>
                                    <img src={GrilledShrimp} alt="tunapasta" style={{width:'150px',height:'120px'}}/>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row" style={{ color: '#DD6E42' }}>Day4</th>
                                <td style={{ color: '#4F6D7A  ' }}>Smoothie with spinach, banana, almond milk, and peanut butter</td>
                                <td style={{ color: '#4F6D7A  ' }}>Tuna salad with mixed greens and whole grain crackers</td>
                                <td style={{ color: '#4F6D7A  ' }}>Turkey chili with side salad</td>
                                <td>
                                    <img src={turkeyChili} alt="tunapasta" style={{width:'150px',height:'120px'}}/>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row" style={{ color: '#DD6E42' }}>Day5</th>
                                <td style={{ color: '#4F6D7A  ' }}>Whole grain cereal with low- fat milk and berries</td>
                                <td style={{ color: '#4F6D7A  ' }}>Grilled chicken sandwich with whole wheat bun and side salad</td>
                                <td style={{ color: '#4F6D7A  ' }}>Grilled steak with roasted vegetables and sweet potato fries</td>
                                <td>
                                    <img src={wheatChicken} alt="tunapasta" style={{width:'150px',height:'120px'}}/>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row" style={{ color: '#DD6E42' }}>Day6</th>
                                <td style={{ color: '#4F6D7A  ' }} >Breakfast burrito with scrambled eggs, black beans, and avocado</td>
                                <td style={{ color: '#4F6D7A  ' }}>Mediterranean salad with chickpeas, feta cheese, and mixed greens</td>
                                <td style={{ color: '#4F6D7A  ' }}>Baked cod with quinoa and steamed broccoli</td>
                                <td>
                                    <img src={midterraneanChickpea} alt="tunapasta" style={{width:'150px',height:'120px'}}/>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row" style={{ color: '#DD6E42' }}>Day7</th>
                                <td style={{ color: '#4F6D7A  ' }}>Whole grain pancakes with fresh fruit and maple syrup</td>
                                <td style={{ color: '#4F6D7A  ' }}>Vegetable stir-fry with brown rice</td>
                                <td style={{ color: '#4F6D7A  ' }}> Lentil soup with side salad</td>
                                <td>
                                    <img src={BrownRice} alt="tunapasta" style={{width:'150px',height:'120px'}}/>
                                </td>
                                </tr>
                            </tbody>
                        </table>
                    ) : null}


                </div>
            </section>
            {/* <Footer /> */}

        </>
    );
}

export default Diet;