import React from 'react'

//css
import './symptomes.css'

const Symptomes = () => {
  return (
    <div className="symptomes">
        <p className="symptomes__info">
        Le tableau clinique de l’infection par le VIH évolue selon les différents stades de la maladie. Dans un premier temps, la personne infectée peut rester asymptomatique ou bien développer les symptômes d’une phase appelée primo-infection. Survenant après une période d’incubation d’une à plusieurs semaines, la primo-infection est caractérisée par des signes cliniques analogues à ceux rencontrés en cas de grippe (forte fièvre, douleurs musculaires, maux de tête, diarrhée).

Après la primo-infection, débute une phase asymptomatique qui peut durer plusieurs années. Durant cette période, le virus est présent et les personnes infectées restent contagieuses. Le VIH affaiblissant progressivement le système immunitaire, la maladie entraîne ensuite l’apparition d’autres symptômes : perte de poids, fièvre, infections de la peau, diarrhée et toux.

Sans traitement, la maladie évolue vers le syndrome de l’immunodéficience acquise, dit sida, stade ultime de l’infection par le VIH. Cet état est marqué par l’apparition de maladies dites « opportunistes », car elles surviennent en raison de l’affaiblissement du système immunitaire provoqué par le VIH. Les malades développent alors de multiples infections d’origine bactérienne, fongique et parasitaire, ainsi que certains cancers.
        </p>
        <img src="./assets/symptomesBody.png" alt="" className="symtomes__img" />
    </div>
  )
}

export default Symptomes