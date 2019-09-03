import Link from 'next/link'

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
  link: 'static/full.json'
}]

function Index () {
    return (
        <div style={layoutStyle}>
            <title>Décompositions du revenu disponible en fonction du salaire net</title>
            <h1>Comprendre l'impact d'un changement de ressources sur les prestations sociales</h1>
            <p>
              Ce site mettre en perspective l'évolution des prestations sociales en fonction des chagements de ressources et en particulier l'évolution du salaire net mensuel.
            </p>
            <p>
              Accédez aux informations pour les cas types suivants&nbsp;:
            </p>
            <ul>
              {list.map(i => (<li key={i.link}><Link href={`/graphique?source=${i.link}`}><a>{i.name}</a></Link></li>))}
            </ul>
        </div>
    );
}

export default Index;
