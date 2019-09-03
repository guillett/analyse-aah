import Link from 'next/link'
import config from '../next.config.js'

const layoutStyle = {
  fontFamily: 'sans-serif',
  fontSize: '200%',
  margin: 20,
  padding: 20,
  height: '100%',
  minHeight: '800px'
}

const list = [{
  name: 'Célibataire',
  link: 'full.json'
}]

function Index () {
    return (
        <div style={layoutStyle}>
            <title>Décompositions du revenu disponible en fonction du salaire net</title>
            <h1>Comprendre l'impact d'un changement de ressources sur les prestations sociales</h1>
            <p>
              Ce site met en perspective l'évolution des prestations sociales en fonction de celle du <strong>salaire net mensuel</strong>.
            </p>
            <p>
              Accédez aux informations pour les cas types suivants&nbsp;:
            </p>
            <ul>
              {list.map(i => (<li key={i.link}><Link href={`${config.assetPrefix}/graphique?source=${config.assetPrefix}/static/${i.link}`}><a>{i.name}</a></Link></li>))}
            </ul>
        </div>
    );
}

export default Index;
