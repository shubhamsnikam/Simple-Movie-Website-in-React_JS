import React from 'react'

const Features = () => {
  return (
    <div class="bg-info" id='features'>
      <div class="container my-2 ">
        <h1 class="text-center mb-4"><br></br>Our Features</h1>
        <div class="row text-center">
            
            <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                    <div class="card-body">
                        <div class="feature-icon bg-primary bg-gradient text-white rounded-circle mb-3">
                            <i class="bi bi-speedometer2 fs-1"></i>
                        </div>
                        <h5 class="card-title"><b>Comfortable Seating</b></h5>
                        <p class="card-text">Enjoy the show in our luxurious, reclining seats designed for ultimate comfort, complete with ample legroom and cup holders.</p>
                    </div>
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                    <div class="card-body">
                        <div class="feature-icon bg-success bg-gradient text-white rounded-circle mb-3">
                            <i class="bi bi-shield-lock fs-1"></i>
                        </div>
                        <h5 class="card-title"><b>Premium Screenings </b></h5>
                        <p class="card-text">Our cinema  screens equipped with Dolby Atmos, 2K projectors, etc., providing crystal-clear visuals and immersive sound that puts you in the middle of the action.</p>
                    </div>
                </div>
            </div>
           
            <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                    <div class="card-body">
                        <div class="feature-icon bg-warning bg-gradient text-white rounded-circle mb-3">
                            <i class="bi bi-lightning-charge fs-1"></i>
                        </div>
                        <h5 class="card-title"><b> Concessions </b></h5>
                        <p class="card-text">Panchvati Cinema offers a wide variety of snacks and drinks, from classic popcorn and soda to gourmet options like nachos, pretzels, and artisanal ice cream.</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default Features
