import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import './Food.css';
import platephoto from '../imgs/platephoto.jpeg';
// import Navbar from "../Navbar/Navbar";
import { FaUpload } from "react-icons/fa6";
import detection from '../imgs/detection.jpeg'
import { GrFormNextLink } from "react-icons/gr";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from 'axios';
import Fraction from '../Food/Fraction';


function Food(){

    const[img,setImg]=useState(detection);
    const[plate,setPlate]=useState();
    const[data,setData]=useState(null);
    const [loading, setLoading] = useState(false);


    // const handleFileInputChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onload = () => {
    //             setImg(reader.result);
    //             document.getElementById('photo-container').style.backgroundImage = `url(${reader.result})`;
    //             document.querySelector('.overlay').innerHTML = '';
    //         };
    //         reader.readAsDataURL(file);
    //     }
    // };

    // const handleSendData = () => {
    //     // Send data to API
    //     axios.post('http://localhost:8000/upload-foodimage-api/upload', { img, plate })
    //         .then(response => {
    //             // Handle response from the API
    //             console.log('Data sent successfully:', response.data);
    //             // You can perform further actions based on the response here
    //         })
    //         .catch(error => {
    //             // Handle error
    //             console.error('Error sending data:', error);
    //         });
    // };


    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setLoading(true);
            const formData = new FormData();
            formData.append('file', file);
            formData.append('plate', plate);
            axios.post('http://localhost:8000/upload-foodimage-api/upload', formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        
            .then(response => {
                // Handle response from the API
                setData(response.data);
                console.log('Image uploaded successfully:', response.data);
                setLoading(false);
            })
            .catch(error => {
                // Handle error
                console.error('Error uploading image:', error);
                setLoading(false);
            });
            // Create a FileReader object
            const reader = new FileReader();
            // Define the onload event handler
            reader.onload = () => {
                // Update the img state with the selected image URL
                setImg(reader.result);
                // Set the background image of the input with the selected image
                document.getElementById('photo-container').style.backgroundImage = `url(${reader.result})`;
                // Clear the inner HTML of the overlay div
                document.querySelector('.overlay').innerHTML = '';
            };
            // Read the selected file as a data URL
            reader.readAsDataURL(file);
        }
    };



    // const handleFileInputChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    
    //         reader.onload = () => {
    //             setImg(reader.result);
                
    //             document.getElementById('photo-container').style.backgroundImage = `url(${reader.result})`;
    //             document.querySelector('.overlay').innerHTML = '';
    //         };
    //         reader.readAsDataURL(file);
    //     }
    // };


    return(
        <>
        {/* <Navbar /> */}
        {!data?(
                    <section className="food-section position-relative">
                    <h3 class="enjoy-h3 d-flex justify-content-center" style={{color: '#4F6D7A'}}>Enjoy your meal<FaHandHoldingHeart style={{ marginLeft: '0.5rem', marginBottom:'0.5rem' }}/></h3>
                    <div class="plate-container col-md-6 justify-content-center mt-4">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="20"
                            onChange={e=>setPlate(e.target.value)} style={{ opacity: "0" }}></input>
                            <label class="form-check-label" for="inlineRadio1">
                                <div class="plate plate1 ">
                                    <img src={platephoto} alt="plate1" style={{ width: "100px", height: "100px" }} ></img>
                                    <p>Small</p>
                                </div>
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="28"
                            onChange={e=>setPlate(e.target.value)} style={{ opacity: "0" }}></input>
                            <label class="form-check-label" for="inlineRadio2">
                                <div class="plate plate1 ">
                                    <img src={platephoto} alt="plate1" style={{ width: "110px", height: "110px" }}></img>
                                    <p>Medium</p>
                                </div>
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="36"
                            onChange={e=>setPlate(e.target.value)} style={{ opacity: "0" }}></input>
                            <label class="form-check-label" for="inlineRadio3">
                                <div class="plate plate1 ">
                                    <img src={platephoto} alt="plate1" style={{ width: "120px", height: "120px" }}></img>
                                    <p>Large</p>
                                </div>
                            </label>
                        </div>
                    </div>

                    <div class="photo-container-wrapper">
                        <div id="photo-container" className="top-0 end-0 mt-5 mr-4 col-md-5" style={{ backgroundImage: `url(${img})` }}>
                            <div className="overlay">
                                <FaUpload style={{ fontSize: '50px' }} />
                                <p style={{ fontSize: '20px' }}>Upload Your Plate Photo</p>
                            </div>
                            <input type="file" id="file-input" style={{ opacity: "0" }} accept="image/*" onChange={handleFileInputChange} />
                        </div>
                        {loading && (
                            <div class="d-flex justify-content-center mt-5">
                                <div class="spinner-border text-secondary" role="status">
                                {/* <span class="sr-only">Loading...</span> */}
                                </div>
                                <span class="sr-only" style={{ color:'#DD6E42' ,fontSize:'larger'}}>Loading...</span>
                            </div>
                        )}
                    </div>







                    {/* <div id="photo-container" className=" top-0 end-0 mt-5 mr-4 col-md-5" style={{ backgroundImage: `url(${img})` }}>
                        
                        <div className="overlay">
                            <FaUpload style={{  fontSize: '50px' }} />
                            <p style={{  fontSize: '20px' }}>Upload Your Plate Photo</p>
                        </div>
                        <input type="file" id="file-input" style={{ opacity: "0" }} accept="image/*" onChange={handleFileInputChange} />
                    </div>  */}
        
        
                </section>
        ):(<Fraction props={data}/>)}


        
        </>
    );
}

export default Food;