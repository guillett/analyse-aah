import {useEffect} from 'react'
import Link from 'next/link'
import config from '../next.config.js'
import iFrameResize from 'iframe-resizer/js/iframeResizer'

const layoutStyle = {
  fontFamily: 'sans-serif',
  fontSize: '200%',
  margin: 20,
  padding: 20,
  height: '100%',
  minHeight: '800px'
}

function Index () {
  useEffect(() => {
    iFrameResize({ log: false }, '#couple_non_beneficiaire')
    iFrameResize({ log: false }, '#conjoint_beneficiaire_aah')
    iFrameResize({ log: false }, '#conjoint_beneficiaire_aah_avant')
    iFrameResize({ log: false }, '#conjoint_beneficiaire_aah_apres')
    iFrameResize({ log: false }, '#couple_beneficiaire_aah_avant')
    iFrameResize({ log: false }, '#couple_beneficiaire_aah_apres')
    iFrameResize({ log: false }, '#couple_beneficiaire_aah_2enf_avant')
    iFrameResize({ log: false }, '#couple_beneficiaire_aah_2enf_apres')
  }, [])

  const iframeStyle = {margin: "0 auto", width:"100%", border: "none", minHeight: "700px"}
    return (
        <div style={layoutStyle}>
            <title>Comprendre les enjeux autour de la déconjugalisation de l'AAH</title>
            <h1>Comprendre les enjeux autour de la déconjugalisation de l'AAH</h1>

            <p>Les graphiques suivants permettre de mieux comprendre les enjeux autour de la déconjugalisation de l'AAH.</p>

            <p>Ils représentent les ressources de différents foyers lorsque le salaire d'un des adultes le composant évolue entre 0 et 3&nbsp;500 euros par mois.</p>

            <p>Suite à <a
          target="_blank" rel="noopener" href="https://www.assemblee-nationale.fr/dyn/15/amendements/3970/CION-SOC/AS1">l'amendement</a> proposé par la majorité,
            nous avons aussi voulu voir l'impact qu'il aurait s'il était appliqué.</p>

            <p>Avant de regarder ce qui se passe pour les bénéficiaires de l'AAH, on peut voir la dynamique pour un couple dont aucun des membres en bénéficie.</p>

            <h2>Ressources pour un couple dont aucun adulte n'est bénéficiaire de l'AAH</h2>
            <iframe id="couple_non_beneficiaire" src={`${config.assetPrefix}/graphique?source=${config.assetPrefix}/static/aah/couple_non_beneficiaire.json`} style={iframeStyle}/>

            <p>Ce graphique met en évidence trois dispositifs de solidarité nationale, le RSA, la prime d'activité et l'aide au logement.</p>
            <p>On voit aussi que, globalement, les ressources vont toujours en augmentant.</p>

            <h2>Ressources pour un couple dont un parent est sans salaire et bénéficiaire de l'AAH</h2>
            <div style={{
              display: 'flex'
            }}>
              <div style={{ width: '100%'}}>ACTUELLEMENT
              <iframe id="conjoint_beneficiaire_aah_avant" src={`${config.assetPrefix}/graphique?source=${config.assetPrefix}/static/aah/conjoint_beneficiaire_aah_avant.json`} style={iframeStyle}/>
              </div>
              <div style={{ width: '100%'}}>AVEC L'AMENDEMENT
              <iframe id="conjoint_beneficiaire_aah_apres" src={`${config.assetPrefix}/graphique?source=${config.assetPrefix}/static/aah/conjoint_beneficiaire_aah_apres.json`} style={iframeStyle}/>
              </div>
            </div>

            <p>Le premier graphique met en évidence certains des problèmes actuels. À partir d'environ 1000 €, les ressources globales du couple diminuent !
            Vous travaillez plus mais vous gagnez littéralement moins ! Cette diminution n'est compensée qu'à partir de 1 800 €.
            </p>

            <p>L'amendement proposé par la majorité ne règle pas du tout le problème, elle le déplace ! Le premier pic n'est plus à 1 000 mais à environ 1 100 euros et cela n'est compensé qu'à partir de 2 000 € !
            </p>

            <h2>Ressources pour un couple dont les deux adultes sont bénéficiaires de l'AAH (l'un d'eux étant sans salaire)</h2>

            <div style={{
              display: 'flex'
            }}>
              <div style={{ width: '100%'}}>ACTUELLEMENT
              <iframe id="couple_beneficiaire_aah_avant" src={`${config.assetPrefix}/graphique?source=${config.assetPrefix}/static/aah/couple_beneficiaire_aah_avant.json`} style={iframeStyle}/>
              </div>
              <div style={{ width: '100%'}}>AVEC L'AMENDEMENT
              <iframe id="couple_beneficiaire_aah_apres" src={`${config.assetPrefix}/graphique?source=${config.assetPrefix}/static/aah/couple_beneficiaire_aah_apres.json`} style={iframeStyle}/>
              </div>
            </div>

            <p>Les problèmes sont encore plus accentués lorsque les deux conjoints sont bénéficiaires de l'AAH.</p>

            <h2>Ressources pour une famille avec 2 enfants dont les deux adultes sont bénéficiaires de l'AAH (l'un d'eux étant sans salaire)</h2>

            <div style={{
              display: 'flex'
            }}>
              <div style={{ width: '100%'}}>ACTUELLEMENT
              <iframe id="couple_beneficiaire_aah_2enf_avant" src={`${config.assetPrefix}/graphique?source=${config.assetPrefix}/static/aah/couple_beneficiaire_aah_2enf_avant.json`} style={iframeStyle}/>
              </div>
              <div style={{ width: '100%'}}>AVEC L'AMENDEMENT
              <iframe id="couple_beneficiaire_aah_2enf_amendement" src={`${config.assetPrefix}/graphique?source=${config.assetPrefix}/static/aah/couple_beneficiaire_aah_2enf_apres.json`} style={iframeStyle}/>
              </div>
            </div>

            <p>Et l'amendement a un impact négatif fort sur les familles, notamment avec deux enfants.</p>


          <p>Pour en savoir plus, contactez <a target="_blank" rel="noopener" href="https://twitter.com/1h0ma5">moi sur Twitter</a>.

          Tout ça est réalisé grâce à <a
          target="_blank" rel="noopener" href="https://openfisca.org/">OpenFisca</a> et <a
          target="_blank" rel="noopener" href="https://mes-aides.org/">Mes Aides</a>.
          </p>
        </div>
    );
}

export default Index;
