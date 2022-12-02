import React from 'react'

//css
import './traitement.css'

const Traitement = () => {
  return (
    <div className="traitement">
        <div className="traitement__intro">
        Actuellement, aucun traitement ne permet d’éliminer complètement le VIH de l’organisme. Les traitements adaptés permettent aux personnes séropositives de bloquer la multiplication du VIH dans leur organisme et ainsi de garder un système immunitaire opérationnel. Ces traitements sont appelés trithérapies car ils combinent l’action de plusieurs molécules antirétrovirales. Des recherches et des essais cliniques sont actuellement menés pour déterminer le potentiel de simplification de ces thérapies chez les personnes y répondant efficacement afin que celles-ci passent, par exemple, de trois à deux médicaments ou puissent interrompre temporairement leur traitement ou via le test de médicaments à action prolongée, injectés une fois par mois tout au plus.

La première génération d’antirétroviraux était souvent responsable d’effets secondaires, parmi lesquels : nausées, vomissements, fatigue, perte d’appétit, fièvres, diarrhées, réactions cutanées. Il est à espérer que les médicaments de nouvelle génération, s’ils sont administrés précocement après l’infection, permettent une vie normale. Des effets secondaires à long terme, de type prise de poids ou inflammation, ne sont toutefois pas à exclure.

Il est recommandé d’initier le traitement le plus tôt possible suite à l’infection. Ceci permet de garder le système immunitaire le plus intact possible, de réduire l’inflammation chronique induite par l’infection et aussi de limiter le risque de transmission du VIH. Malheureusement, la plupart des infections par le VIH ne sont détectées qu’après plusieurs années, et 60 % seulement des personnes infectées à l’échelle mondiale ont accès au traitement.
        </div>
        <img src="./assets/traitement.png" className="traitement__photo" />

    </div>
  )
}

export default Traitement