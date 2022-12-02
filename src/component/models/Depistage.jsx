import React from 'react'

//css
import './depistage.css'

const Depistage = () => {
  return (
    <div className="depistage">
        <div className="depistage__intro">
        Le dépistage du VIH repose sur la recherche des anticorps contre le VIH-1 et le VIH-2 et de l'antigène P24 du virus. Un examen sanguin de dépistage, en laboratoire de biologie médicale, sans ordonnance, sans rendez-vous et sans avance de frais est possible.
        </div>
        <img src="./assets/depistage.jpg" className="depistage__photo" />
    </div>
  )
}

export default Depistage