
import quotes from '../data/phrases.json'
import getRandomNumber from '../services/getRandomNumber'
import photos from '../data/photos.json'

const BtnPhrase = ({propsSetphraseSelected, propsSetBgSelected, propsBgSelected, propsPhraseSelected}) => {

  let num, num2
  const changePhraseAndPhoto = () =>{

    num = getRandomNumber(photos.length);
    while (num == (propsBgSelected-1))
    {
      num = getRandomNumber(photos.length);
    }
    num2 = getRandomNumber(quotes.length);

    while (quotes[num2].phrase == propsPhraseSelected.phrase)
    {
      num2 = getRandomNumber(quotes.length);
    }
    propsSetBgSelected(photos[num])
    propsSetphraseSelected(quotes[num2])


  }

  return (
    <button className="ml-auto  mt-5 block cursor-pointer bg-violet-950 py-2 px-4 text-white rounded-md text-sm hover:brightness-200" onClick={changePhraseAndPhoto}>Abre otra 🥠 </button>
  )
}

export default BtnPhrase