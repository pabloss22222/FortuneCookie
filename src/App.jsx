
import { useState } from 'react';
import './App.css';
import quotes from './data/phrases.json'
import photos from './data/photos.json'
import getRandomNumber from './services/getRandomNumber';
import Phrase from './components/Phrase';
import BtnPhrase from './components/BtnPhrase';

function App() {

  const indexRandom= getRandomNumber(quotes.length)

  const [phraseSelected, setphraseSelected] = useState(quotes[indexRandom])
  const [bgSelected, setBgSelected]= useState(photos[getRandomNumber(photos.length)])
  

  const objstyle = {

    backgroundImage: `url(/images/fondo${bgSelected}.png)`

  }
  const objstyle_h1 = {

    textShadow: `8px 8px #558ABB`,
    animation:`bounce`,
    animationDuration: `1.5s`
  }


  return (
    <div className='min-h-screen flex justify-center items-center bg-cover bg-center'  style={objstyle}>
      <h1 className='titulo absolute top-20 left-0 right-2 text-5xl uppercase font-bold text-center text-white' style={objstyle_h1}>Galletas de la fortuna</h1>

      <article className=' phrase_btn max-w-[400px] p-6 bg-violet-600 bg-opacity-85 rounded-3xl shadow-2xl relative z-10'>
         
         <Phrase propsPhraseSelected= {phraseSelected} />

         <BtnPhrase propsSetphraseSelected={setphraseSelected} propsSetBgSelected={setBgSelected} propsBgSelected={bgSelected} propsPhraseSelected={phraseSelected} />
        
      </article>

    </div>

    

  )
}

export default App
