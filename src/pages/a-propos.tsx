import { NextSeo } from 'next-seo'
import { Layout } from '../components/Layout/Layout'

export default function APropos() {
  return (
    <Layout className="bg-gray-50" withoutContactBanner>
      <NextSeo title="À propos" />
      <div className="py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
        <div className="relative max-w-3xl mx-auto">
          <svg
            className="absolute left-full transform translate-x-1/4"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
          </svg>
          <svg
            className="absolute right-full bottom-0 transform -translate-x-1/4"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
          </svg>
          <div className="text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-blue-default sm:text-4xl">À propos</h1>
          </div>
          <div className="mt-12 max-w-[100ch] prose prose-sm sm:prose-base lg:prose-lg"><p>Le <strong>projet « Ressources précarité &amp; santé »</strong> a d&#39;abord été initié par le <strong>Réseau Social Rue Hôpital de la métropole Lyonnaise.</strong> </p>
            <p>Ce réseau regroupe différentes institutions « santé » qui accompagnent les personnes en situation de grande précarité. Il s&#39;agit parmi d&#39;autres : de Médecins du monde, des Permanences d&#39;Accès aux Soins de Santé (PASS), de Centres d&#39;Hébergement et de Réinsertion Sociale (CHRS), du SAMU Social, de structures portant des dispositifs type Lits Halte Soins Santé (LHSS), Lits d&#39;Accueil Médicalisé (LAM) ou Appartement de Coordination Thérapeutique (ACT).</p>
            <p>Les différents professionnels de ces structures posaient le constat que l&#39;accès aux soins des personnes en situation de précarité était de plus en plus difficile, notamment lorsqu&#39;il s&#39;agit d&#39;aller vers des praticiens libéraux. </p>
            <p>Cette difficulté peut s&#39;expliquer par un manque de connaissance des dispositifs existants et de l&#39;environnement des personnes précaires. En effet, recevoir une personne en situation de précarité implique souvent des durées de consultations plus importantes, une coordination avec les secteurs social et médico-social, et régulièrement une prise en charge clinique plus complexe. De plus l&#39;ensemble des droits ne sont pas toujours ouverts.</p>
            <p>Ainsi les professionnels de santé exerçant en libéral ont besoin de soutien par les associations et institutions existantes afin de garantir un accompagnement global de la personne et de ne pas se sentir isolé dans la prise en charge.</p>
            <p><strong>La délégation régionale Auvergne-Rhône-Alpes Médecins du Monde</strong> déploie des programmes sur le territoire de Lyon, de Grenoble, mais également des Combrailles (Auvergne). </p>
            <p>Pour faire vivre ces programmes, la délégation s&#39;appuie sur une équipe salariée mais également sur des bénévoles, et notamment de médecins bénévoles (qui pratiquent en cabinet par ailleurs). Afin de favoriser l&#39;accès aux soins des plus précaires, l&#39;association a mis en place (Grenoble/ Lyon) des partenariats avec certains médecins libéraux pour l&#39;orientation des patients en situation de précarité.</p>
            <p>La <strong>fédération des acteurs de la solidarité Auvergne Rhône Alpes</strong> anime une commission santé qui réunit des professionnels des structures de l&#39;Accueil-Hébergement et Insertion. </p>
            <p>Quel que soit le territoire, il est rapporté la difficulté, voire l&#39;impossibilité pour les personnes accueillies d&#39;avoir un médecin traitant référent. </p>
            <p>Au-delà de la problématique de la sous densité de médecins, le fait que les patients soient en situation de précarité constitue un frein supplémentaire. En effet, les médecins craignent une prise en charge médicale qui sera plus longue et plus complexe et ont besoin de ressources et de relais locaux pour garantir une prise en charge globale.</p>
            <p><strong>Rattachées aux établissements de santé, les PASS</strong> , dispositifs médico-sociaux dédiés à l&#39;accueil et à la prise en charge des personnes en situation de précarité et ayant besoin de soins, ont pour mission de faciliter l&#39;accès au système en accompagnant les personnes dans leurs démarches de reconnaissance de leurs droits. </p>
            <p>Pour accompagner l&#39;ensemble des PASS de la région Auvergne-Rhône-Alpes et assurer l&#39;harmonisation des pratiques, l&#39;Agence Régionale de Santé AURA a positionné deux coordinatrices régionales. </p>
            <p>Les missions spécifiques de ces dernières sont : </p>
            <ol>
              <li>Soutenir et accompagner les pratiques des équipes PASS de la région,</li>
              <li>Soutenir l&#39;environnement partenarial des PASS sur chaque territoire, </li>
              <li>Animer le réseau régional des PASS en lien avec l&#39;ensemble des partenaires,</li>
              <li>Contribuer à l&#39;animation du réseau nationale des PASS,
                5.Assurer des missions de diagnostic et de veille juridique sur le champ de la santé/précarité.
              </li>
            </ol>
            <p>Forts de ces constats similaires, le Réseau Social Rue Hôpital, Médecins du Monde (AuRA) et la Fédération des Acteurs de la Solidarité (AuRA), ont construit un projet commun qui permettrait de former et d&#39;outiller les professionnels de santé sur l&#39;accompagnement global des personnes en situation de précarité : repérage, environnement de la personne, connaissance des dispositifs existants.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
