import React from 'react'

const Slide = () => {
  return (
    <div id='slide'>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
        </ol>
        <div className="carousel-inner " >
          <div className="carousel-item active">
            <img className="d-block w-100 " src="https://lh5.googleusercontent.com/p/AF1QipNzZ1nlaR8xWHiEWZVlDYst1WAkubHZVtpEJZxu=w408-h306-k-no" alt="First slide" style={{height:"600px"}} />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://i.ytimg.com/vi/CzzNUkupcCc/hqdefault.jpg" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://i.ytimg.com/vi/CzzNUkupcCc/hqdefault.jpg" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://i.ytimg.com/vi/CzzNUkupcCc/hqdefault.jpg" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://i.ytimg.com/vi/CzzNUkupcCc/hqdefault.jpg" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjslrp_tdJ2ZE0DyY8VCW8paIphoCi8wB2MCCEMmwh3XQepZwjvodHY2Gyn_2ehPcqbUWIPpGPknRpDcxQ3HziZ5d-gdVCjXp5oHvjY3wO4XL_csMyVvE4yAkwGDBUI8j4BlSYDCQn6ICY/s1600/01.jpg" alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}

export default Slide
