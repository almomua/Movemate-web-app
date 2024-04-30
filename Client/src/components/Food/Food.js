import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import './Food.css';
import platephoto from '../imgs/platephoto.jpeg';
import Navbar from "../Navbar/Navbar";
import { FaUpload } from "react-icons/fa6";
import detection from '../imgs/detection.jpeg'
import { GrFormNextLink } from "react-icons/gr";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from 'axios';


function Food(){

    const[img,setImg]=useState(detection);
    const[plate,setPlate]=useState();

    // console.log(img);
    // console.log(plate);


    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImg(reader.result);
                document.getElementById('photo-container').style.backgroundImage = `url(${reader.result})`;
                document.querySelector('.overlay').innerHTML = '';
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSendData = () => {
        // Send data to API
        axios.post('http://localhost:8000/upload-foodimage-api/upload', { img, plate })
            .then(response => {
                // Handle response from the API
                console.log('Data sent successfully:', response.data);
                // You can perform further actions based on the response here
            })
            .catch(error => {
                // Handle error
                console.error('Error sending data:', error);
            });
    };


    // const handleFileInputChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         const formData = new FormData();
    //         formData.append('file', file);
    //         axios.post('http://localhost:8000/upload-foodimage-api/upload', formData,
    //         {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data'
    //             }
    //         })
        
    //         .then(response => {
    //             // Handle response from the API
    //             console.log('Image uploaded successfully:', response.data);
    //         })
    //         .catch(error => {
    //             // Handle error
    //             console.error('Error uploading image:', error);
    //         });
    //         // Create a FileReader object
    //         const reader = new FileReader();
    //         // Define the onload event handler
    //         reader.onload = () => {
    //             // Update the img state with the selected image URL
    //             setImg(reader.result);
    //             // Set the background image of the input with the selected image
    //             document.getElementById('photo-container').style.backgroundImage = `url(${reader.result})`;
    //             // Clear the inner HTML of the overlay div
    //             document.querySelector('.overlay').innerHTML = '';
    //         };
    //         // Read the selected file as a data URL
    //         reader.readAsDataURL(file);
    //     }
    // };



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
        <Navbar />
        <section className="food-section position-relative">
            <h3  style={{color: '#4F6D7A'}}>Enjoy your meal<FaHandHoldingHeart style={{ marginLeft: '0.5rem', marginBottom:'0.5rem' }}/></h3>
            <div class="plate-container col-md-6 justify-content-center mt-4">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="9"
                    onChange={e=>setPlate(e.target.value)} style={{ opacity: "0" }}></input>
                    <label class="form-check-label" for="inlineRadio1">
                        <div class="plate plate1 ">
                            <img src={platephoto} alt="plate1" style={{ width: "100px", height: "100px" }} ></img>
                            <p>Small</p>
                        </div>
                    </label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="11"
                    onChange={e=>setPlate(e.target.value)} style={{ opacity: "0" }}></input>
                    <label class="form-check-label" for="inlineRadio2">
                        <div class="plate plate1 ">
                            <img src={platephoto} alt="plate1" style={{ width: "110px", height: "110px" }}></img>
                            <p>Medium</p>
                        </div>
                    </label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="12"
                    onChange={e=>setPlate(e.target.value)} style={{ opacity: "0" }}></input>
                    <label class="form-check-label" for="inlineRadio3">
                        <div class="plate plate1 ">
                            <img src={platephoto} alt="plate1" style={{ width: "120px", height: "120px" }}></img>
                            <p>Large</p>
                        </div>
                    </label>
                </div>
            </div>
            
            {/* <div id="photo-container">
                <div class="overlay">
                    <FaUpload />
                    <p>Upload Your Plate Photo</p>
                </div>
                <input type="file" id="file-input" style={{ opacity: "0" }} accept="image/*"></input>
            </div> */}
            {/* <div className="position-absolute top-0 end-0 mt-2 mr-2"> */}
            <div id="photo-container" className=" top-0 end-0 mt-5 mr-4 col-md-5" style={{ backgroundImage: `url(${img})` }}>
                <div className="overlay">
                    <FaUpload style={{  fontSize: '50px' }} />
                    <p style={{  fontSize: '20px' }}>Upload Your Plate Photo</p>
                </div>
                <input type="file" id="file-input" style={{ opacity: "0" }} accept="image/*" onChange={handleFileInputChange} />
            </div>
            {/* </div> */}

            <div class="next-button">
                    <Link onClick={handleSendData} to="/fraction" class="next-btn"><GrFormNextLink style={{  fontSize: '50px' }}/></Link>
                </div> 


        </section>
        {/* <Fraction/> */}


            <Footer />
        </>
    );
}

export default Food;