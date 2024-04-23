
const Phrase = ({propsPhraseSelected}) => {            // desestructuramos el objeto y obt sus prop y metod
  
  return (
    <p className="italic text-white text-justify" >{propsPhraseSelected.phrase}</p>
 
  )
}

export default Phrase