
import React, { useState } from 'react';
import axios from 'axios';

const Body = () => {

  const [data, setData] = useState();
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [gender, setGender] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
    console.log(selectedFile);

  };




  const handleUpload = async () => {
    try {
      if (!selectedFile) {
        alert('Please select a file.');
        return;
      }

      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('gender', gender);

      // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
      const response = await axios.post('http://localhost:8000/upload-bodyimage-api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Upload successful:', response.data);
      setData(response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return <>
  <div className="about">


            <div className="body-img">
              

              {selectedImage?(

                <img className="calory"  src={selectedImage} alt="Body" />
              )
            
            :(<img className="calory"  src="WhatsApp Image 2024-04-26 at 22.26.18_19358834.jpg" alt="Body" />)
            
            }









            </div> 
 
            {data&&(
                <div className=" w-50 about-caption">
                <h2>Discover your body fat percentage:</h2>
                <p>{data.result}</p>
                </div>
    
            )}

                   {!data&&(
                 <div className=" w-50 about-caption">
                 <h2 className='h1'>Discover your body fat percentage:</h2>
                 <p className='h5 mt-3'>1- Upload a clear picture of your body and your body fat percentage will appear</p>
                 <p className='h5 mt-3'>2- Selcet your gender</p>
                 </div>
    
            )}
        

            <div className="clr"></div>
                    </div>


            <div className="body-gender w-50  m-auto bg-light mt-5 mb-5 d-flex justify-content-center">
            <div className="content d-flex justify-content-center m-auto mt-5 ">
    <div className="image-uploader mt-5">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="file-input"
      />
      <button onClick={handleUpload} className="btn btn-danger">
        Upload
      </button>
    </div>
 


<div className="Box mt-5">
  <div className="maleChoice">
      <div className="form-check mb-3 d-flex justify-content-center h6">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="Male" value="0" onChange={e=>setGender(e.target.value)}/>
          <label className="form-check-label text-white " for="Male"  >
                  Male
                </label>
                  </div>
                      </div>

  <div className="femaleChoice ms-3">
      <div className="form-check mb-3 d-flex justify-content-center h6">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="Female" value="1"  onChange={e=>setGender(e.target.value)}/>
              <label className="form-check-label text-white" for="Female">
                  Female
                  </label>
                      </div>
                          </div>
                          <div className="clr"></div>
                              </div>
                              <div className="clr"></div>

                              </div>

<div className="body-gender-layer d-flex justify-content-center bg-black">
    
                                </div>
                                  </div>

{console.log(process.env)}

  </>
};

export default Body;

