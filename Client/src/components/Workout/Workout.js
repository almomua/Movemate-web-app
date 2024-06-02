import React from "react";
import './Workout.css';
import iconAccount from '../imgs/icon-account.jpg'
import chatpot from '../imgs/chatpot.png'

function Workout(){


    return(
        <>
            <section className="workout-section">
                <div class="container py-5">
                    <div class="row d-flex justify-content-center">
                        <div class="col-md-8 col-lg-6 col-xl-4" style={{backgroundColor:'#fff' ,borderRadius:'15px', display: 'flex', flexDirection: 'column', height: '500px', position: 'relative'}}>
                            <div class="card" id="chat1" style={{borderRadius:'15px', display: 'flex', flexDirection: 'column'}}>
                                <div
                                    class="card-header d-flex justify-content-between align-items-center p-3 text-white border-bottom-0" style={{borderTopLeftRadius: '15px', borderTopRightRadius: '15px' ,backgroundColor:'#4F6D7A'}}>
                                    <i class="fas fa-angle-left"></i>
                                    <p class="mb-0">Hello, I am Chatty</p>
                                    <i class="fas fa-times"></i>
                                </div>
                            </div>

                            <div class="card-body overflow-auto flex-grow-1" style={{ flexGrow: 1, overflowY: 'auto' }}>
                                <div class="d-flex flex-row justify-content-start mb-4">
                                    <img className="icon-account" src={iconAccount} alt="avatar 1" style={{width:'45px',height:"100%"}}></img>
                                    <div class="p-3 ms-3" style={{borderRadius: '15px', backgroundColor: 'rgba(57, 192, 237,.2)'}}>
                                        <p class="small mb-0">Hello can you help me?</p>
                                    </div>
                                </div>

                                <div class="d-flex flex-row justify-content-end mb-4">
                                    <div class="p-3 me-3 border" style={{borderRadius: '15px', backgroundColor: '#fbfbfb'}}>
                                        <p class="small mb-0">Of course How i can help You today?</p>
                                    </div>
                                    <img className="chatpot-icon" src={chatpot} alt="avatar 2" style={{width:'45px',height:"100%"}}></img>
                                    </div>
                                </div>
                                
                                

                                {/* <div class="form-outline">
                                    <textarea class="form-control" id="textAreaExample" rows="3"></textarea>
                                    <label class="form-label" for="textAreaExample">Type your message</label>
                                </div> */}
                                <div class="card-footer text-muted d-flex justify-content-start align-items-center p-3" style={{ bottom: 0, width: '100%', backgroundColor: '#fff' }}>
                                    <div class="input-group mb-0">
                                    <input type="text" class="form-control" placeholder="Type message"
                                        aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button data-mdb-button-init data-mdb-ripple-init class="btn text-white" type="button" id="button-addon2" style={{paddingTop:'.55rem',backgroundColor:'#DD6E42'}}>
                                        Send
                                    </button>
                                    </div>
                                </div>

                            </div>

                    </div>
                </div>
            </section>
        </>
    );
}
export default Workout;