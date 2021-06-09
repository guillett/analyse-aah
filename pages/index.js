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

            <p>Comprendre</p>
            <h2>Ressources pour un couple dont aucun adulte n'est bénéficiaire de l'AAH</h2>
            <iframe id="couple_non_beneficiaire" src={`${config.assetPrefix}/graphique?source=${config.assetPrefix}/static/aah/couple_non_beneficiaire.json`} style={iframeStyle}/>


            <div style={{
              display: 'flex'
            }}>
              <div style={{ width: '100%'}}>AVANT
              <iframe id="conjoint_beneficiaire_aah_avant" src={`${config.assetPrefix}/graphique?source=${config.assetPrefix}/static/aah/conjoint_beneficiaire_aah_avant.json`} style={iframeStyle}/>
              </div>
              <div style={{ width: '100%'}}>AMENDEMENT
              <iframe id="conjoint_beneficiaire_aah_apres" src={`${config.assetPrefix}/graphique?source=${config.assetPrefix}/static/aah/conjoint_beneficiaire_aah_apres.json`} style={iframeStyle}/>
              </div>
            </div>

            <h2>Ressources pour un couple dont les deux adultes sont bénéficiaires de l'AAH (l'un d'eux étant sans salaire)</h2>


            <div style={{
              display: 'flex'
            }}>
              <div style={{ width: '100%'}}>AVANT
              <iframe id="couple_beneficiaire_aah_avant" src={`${config.assetPrefix}/graphique?source=${config.assetPrefix}/static/aah/couple_beneficiaire_aah_avant.json`} style={iframeStyle}/>
              </div>
              <div style={{ width: '100%'}}>AMENDEMENT
              <iframe id="couple_beneficiaire_aah_apres" src={`${config.assetPrefix}/graphique?source=${config.assetPrefix}/static/aah/couple_beneficiaire_aah_apres.json`} style={iframeStyle}/>
              </div>
            </div>

            <h2>Ressources pour une famille avec 2 enfants dont les deux adultes sont bénéficiaires de l'AAH (l'un d'eux étant sans salaire)</h2>


            <div style={{
              display: 'flex'
            }}>
              <div style={{ width: '100%'}}>AVANT
              <iframe id="couple_beneficiaire_aah_2enf_avant" src={`${config.assetPrefix}/graphique?source=${config.assetPrefix}/static/aah/couple_beneficiaire_aah_2enf_avant.json`} style={iframeStyle}/>
              </div>
              <div style={{ width: '100%'}}>AMENDEMENT
              <iframe id="couple_beneficiaire_aah_2enf_amendement" src={`${config.assetPrefix}/graphique?source=${config.assetPrefix}/static/aah/couple_beneficiaire_aah_2enf_apres.json`} style={iframeStyle}/>
              </div>
            </div>
        </div>
    );
}

export default Index;
