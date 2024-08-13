import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';

import Movies from './components/Movies';
import Navbar from './components/Navbar';
import Slide from './components/Slide';
import ContactUsPage from './components/ContactUsPage';
import Header from './components/Header';
// import Reviews from './components/Reviews';
import Info from './components/Info';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import StickyNotes from './components/StickyNotes';


// import AboutUs from './components/AboutUs';


function App() {

  const movies =  [ { id:1, modelName:"Dharmaveer",Director:"Director Pravin Tarde",link:"https://www.youtube.com/watch?v=jSOWLmB2Zqw",desciption:"Dharmaveer is a 2022 Indian Marathi-language biographical political drama film.Explores Anand Dighe's life, tracing his political journey.",image:"https://m.media-amazon.com/images/M/MV5BZTg4ZjliOTAtODc2ZS00ZmEwLTkxYmUtZGM4ZGEzYmY1MzY5XkEyXkFqcGdeQXVyMTIyNzY0NTMx._V1_.jpg" },
                 { id:2,modelName:"Oppenheimer",Director:"Christopher Nolan",link:"https://www.youtube.com/watch?v=uYPbbksJxIg",desciption:"Oppenheimer is a 2023 epic biographical thriller drama film written, directed, and produced by Christopher Nolan. It follows the life of J. Robert Oppenheimer. ",image:"https://m.media-amazon.com/images/I/81218n6JFgL._AC_UF1000,1000_QL80_.jpg" },
                 { id:3, modelName:"Brahmāstra: Part One ",Director:"Ayan Mukerji",link:"https://www.youtube.com/watch?v=BUjXzrgntcY",desciption:"Brahmastra: Part One  Shiva  is a 2022 Indian Hindi-language fantasy action-adventure film written and directed by Ayan Mukerji.",image:"https://e1.pxfuel.com/desktop-wallpaper/998/938/desktop-wallpaper-brahmastra-bollywood-2022-movie-poster.jpg" },
                 { id:4, modelName:"Pushpa: The Rise",Director:"Sukumar",link:"https://www.youtube.com/watch?v=Q1NKMPhP8PY",desciption:"Pushpa: The Rise is a 2021 Indian Telugu-language action drama film written and directed by Sukumar, and produced by Mythri Movie Makers and Muttamsetty Media.",image:"https://static-koimoi.akamaized.net/wp-content/new-galleries/2024/02/pushpa-the-rule-part-2.jpg" },
   ]

   
  return (
   <div>
    <Navbar/>
    <br></br>
 
    <Slide/>

    <AboutUs/>
    <Features/>

    <Movies movies={movies}/>
    

    {/* <Info/> */}
    <Header/>
    {/* <AboutUs/> */}
    {/* <ContactUsPage/> */}

    {/* <Reviews/> */}
    <StickyNotes/>

    <Footer/>

   </div>
  );
}

export default App;