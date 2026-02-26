import { BlogArticle, LANG, Skills, Work } from "@/app/lib/types";

export const BANNER_FR = `
  <p class="text-xl lg:text-3xl text-center font-semibold">Développeuse Web et Mobile</p>
  <p class="mb-8 text-center">Full remote enthousiaste</p>
  <p class="pb-4">Passionnée par la création d'applications robustes, évolutives et faciles à maintenir, j'accorde une attention particulière à la fluidité de l'expérience utilisateur sur les plateformes web et mobiles</p>
  <p>Spécialisée dans le développement d'interfaces (UI), d'API backend et la mise en place de tests complets, je m'engage à livrer des solutions de haute qualité, avec rigueur et efficacité, tout en tirant parti de la flexibilité du travail à distance.</p>
`;

export const BANNER_EN = `
  <p class="text-xl lg:text-3xl text-center font-semibold">Web and Mobile developer</p>
  <p class="mb-8 text-center">Full remote enthousiast</p>
  <p class="pb-4">Passionate about crafting robust, scalable, and maintainable applications, I pay close attention to delivering seamless user experience acrossweb and mobile platforms.</p>
  <p>Specialized in UI development, backend APIs, and comprehensive testing, I am committed to delivering high-quality solutions with rigor and efficiency, while embracing the flexibility of remote work.</p>
`;

export const TIMELINE_FR: Work[]
  = [
    {
      job: 'Développeuse Application Mobile et Web',
      date: 'Janvier 2025 - Actuellement',
      place: 'Vohitra MG SA - Madagascar - Remote',
      skills: ['NextJs', 'Typescript', 'Python', 'GraphQL', 'ERPNext', 'Frappe', 'Docker', 'Playwright', 'React Native'],
      logo: 'exponent.svg'
    },
    {
      job: 'Développeuse Application Mobile et Web',
      date: 'Juin 2022 - Décembre 2024',
      place: 'Exponent.ch - Switzerland - Remote',
      skills: ['NextJs', 'Typescript', 'Python', 'GraphQL', 'ERPNext', 'Frappe', 'Docker', 'Playwright', 'React Native'],
      logo: 'exponent.svg'
    },
    {
      job: 'Consultante, Web Développeuse',
      date: 'Décembre 2020 - Février 2024',
      place: 'Maasil Inc - Antananarivo, Madagascar',
      skills: ["NextJS", "ReactJS", 'NodeJS', 'NestJS', 'Typescript'],
      logo: "maasil.jpg"
    },
    {
      job: `Développeuse d'Applications Web`,
      date: 'Octobre 2021 - Juillet 2023',
      place: 'Astek - Antananarivo, Madagascar',
      skills: ['ReactJS', 'AngularJS'],
      logo: 'astek_madagascar.jpeg'
    },
    {
      job: `Développeuse d'Application Web`,
      date: 'Mai 2021 - Juillet 2021',
      place: 'ESA - Antananarivo, Madagascar',
      skills: ['ReactJS', 'NodeJs', 'Express'],
      logo: 'esa.jpeg'
    },
    {
      job: 'Web Développeuse - Remote',
      date: 'Avril 2021 - Décembre 2021',
      place: 'Opcadia - Lyon, France',
      skills: ['NextJS'],
      logo: 'optedif.jpg'
    },
    {
      job: 'Web Développeuse - Temps partiel',
      date: 'Novembre 2020',
      skills: ['VueJS', 'Laravel'],
      place: 'Inforce Madagascar, Antananarivo',
    },
    {
      job: 'Web Développeuse - Remote',
      date: 'Juillet 2020 - Novembre 2020',
      place: 'Esokia Web Agency, Mauritius',
      logo: 'esokia.jpeg'
    },
    {
      job: 'Développeuse ReactJs - Remote',
      date: 'Mai 2020 - Septembre 2020',
      place: 'Datadict Ltd, Paris, France',
      logo: 'datadict.jpeg'
    },
    {
      job: 'Développeuse Web et Designer - Remote',
      date: 'Avril 2020 - Septembre 2020',
      place: 'Sedeco Ltd, Mauritius',
      logo: 'sedeco.jpeg'
    },
    {
      job: 'Web Développeuse - Stage',
      date: 'Décembre 2018 - Août 2019',
      place: 'Esokia Web Agency, Mauritius',
      logo: 'esokia.jpeg'
    },
  ];

export const TIMELINE_EN: Work[] = [
  {
    job: 'Web and Mobile application developer',
    date: 'January 2025 - Current',
    place: 'Vohitra MG SA - Madagascar - Remote',
    skills: ['NextJs', 'Typescript', 'GraphQL', "PayloadCMS", "PWA", "Push notifications", 'Docker', 'Playwright', 'React Native', 'Python'],
    logo: 'exponent.svg'
  },
  {
    job: 'Web and Mobile application developer',
    date: 'June 2022 - December 2024',
    place: 'Exponent.ch - Switzerland - Remote',
    skills: ['NextJs', 'Typescript', 'GraphQL', "PayloadCMS", "PWA", "Push notifications", 'Docker', 'Playwright', 'React Native', 'Python'],
    logo: 'exponent.svg'
  },
  {
    job: 'Consultant, Web Developer',
    date: 'December 2020 - February 2024',
    place: 'Maasil Inc - Antananarivo, Madagascar',
    skills: ["NextJS", "ReactJS", 'NodeJS', 'NestJS', 'Typescript'],
    logo: "maasil.jpg"
  },
  {
    job: 'Web application Developer',
    date: 'October 2021 - July 2023',
    place: 'Astek - Antananarivo, Madagascar',
    skills: ['ReactJS', 'AngularJS'],
    logo: 'astek_madagascar.jpeg'
  },
  {
    job: 'Web Application Developer',
    date: 'May 2021 - July 2021',
    place: 'ESA - Antananarivo, Madagascar',
    skills: ['ReactJS', 'NodeJs', 'Express'],
    logo: 'esa.jpeg'
  },
  {
    job: 'Web Developer - Remote',
    date: 'April 2021 - December 2021',
    skills: ['NextJS'],
    place: 'Opcadia - Lyon, France',
    logo: 'optedif.jpg'
  },
  {
    job: 'Web Developer - Part time',
    date: 'November 2020',
    skills: ['VueJS', 'Laravel'],
    place: 'Inforce Madagascar, Antananarivo',
  },
  {
    job: 'Web Developer - Remote',
    date: 'July 2020 - November 2020',
    place: 'Esokia Web Agency, Mauritius',
    logo: 'esokia.jpeg'
  },
  {
    job: 'ReactJs Developer - Remote',
    date: 'May 2020 - September 2020',
    place: 'Datadict Ltd, Paris, France',
    logo: 'datadict.jpeg'
  },
  {
    job: 'Web Developer and Designer - Remote',
    date: 'April 2020 - September 2020',
    place: 'Sedeco Ltd, Mauritius',
    logo: 'sedeco.jpeg'
  },
  {
    job: 'Web Developer - Internship',
    date: 'December 2018 - August 2019',
    place: 'Esokia Web Agency, Mauritius',
    logo: 'esokia.jpeg'
  },
];

export const SKILLS_SET: Skills[] = [
  { name: "ReactJS", percent: 95, img: "reactjs.png" },
  { name: "NextJS", percent: 96, img: "nextjs.jpg" },
  { name: "PayloadCMS", percent: 95, img: "payloadcms.png" },
  { name: "NodeJS", percent: 90, img: "nodejs.png" },
  { name: "GraphQL", percent: 90, img: "graphql.png" },
  { name: "Vue 2 & 3", percent: 70, img: "vuejs.jpg" },
  { name: "Nuxt", percent: 75, img: "nuxt.png" },
  { name: "Plasmic", percent: 80, img: "plasmic.png" },
  { name: "NestJS", percent: 65, img: "nestjs.jpg" },
  { name: "Flutter", percent: 60, img: "flutter.jpg" },
  { name: "React Native", percent: 80, img: "reactnative.png" },
  { name: "Python", percent: 50, img: "python.png" },
];

export const FAMILIARITIES: string[] = [
  "Typescript", "Composing Docker containers", "Playwright tests", "Gleap integration", "Stripe integration", "Datatrans integration", "Github Actions", "Implementing CI/CD Pipelines", "Tailwind", "Storybook", "Postgres", "MongoDB", "Firebase", "Web Push notifications", "Firebase push notifications", "PWA apps"
]

export const FAMILIAR_TOOLS: string[] = [
  "Github", "GitLab", "Notion", "Figma", "JIRA", "Linear", "Heroku", "Vercel", "Netlify", "Ngrok"
]

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: "importance-of-typescript",
    en: {
      title: "Why TypeScript Matters",
      summary: "TypeScript helps teams ship faster with fewer bugs by catching mistakes early, improving code readability, and making refactors safer.",
      date: "February 26, 2026",
      readTime: "5 min read",
      tags: ["TypeScript", "Code Quality", "Productivity"],
      intro: "TypeScript is not just about strict typing. It is about building software that stays reliable as the codebase, team, and product requirements grow.",
      sections: [
        {
          heading: "Fewer Production Bugs",
          paragraphs: [
            "In JavaScript projects, many bugs happen because values are not what we expect at runtime. TypeScript catches a large class of these issues during development.",
            "When function inputs and outputs are explicitly typed, wrong assumptions become compiler errors instead of customer-facing failures."
          ],
          bullets: [
            "Detects missing properties before runtime.",
            "Prevents invalid function calls early.",
            "Makes null and undefined cases explicit."
          ]
        },
        {
          heading: "Safer Refactoring",
          paragraphs: [
            "Refactoring is unavoidable in real projects. TypeScript gives confidence to rename, extract, and reorganize code without silently breaking connected features.",
            "With good typing, your editor becomes an assistant that highlights every location affected by a change."
          ],
          bullets: [
            "Rename operations are more accurate.",
            "Dead code is easier to identify.",
            "Interface changes propagate with clear compiler feedback."
          ]
        },
        {
          heading: "Better Team Collaboration",
          paragraphs: [
            "Types act as living documentation. New team members can understand how to use services, utilities, and components directly from type definitions.",
            "This reduces back-and-forth and lowers onboarding time, especially in distributed teams."
          ],
          bullets: [
            "Shared contracts reduce ambiguity.",
            "Code reviews focus more on architecture and less on guesswork.",
            "API changes become explicit and traceable."
          ]
        }
      ],
      conclusion: "TypeScript creates a healthier feedback loop: catch issues earlier, refactor confidently, and collaborate with clearer contracts. For product teams, that translates into faster delivery with fewer regressions.",
    },
    fr: {
      title: "Pourquoi TypeScript est essentiel",
      summary: "TypeScript aide les équipes a livrer plus vite avec moins de bugs en détectant les erreurs plus tôt, en rendant le code plus lisible et les refactorings plus surs.",
      date: "26 février 2026",
      readTime: "5 min de lecture",
      tags: ["TypeScript", "Qualité du code", "Productivité"],
      intro: "TypeScript ne se limite pas au typage strict. C'est un moyen de construire des logiciels fiables à mesure que le code, l'équipe et le produit évoluent.",
      sections: [
        {
          heading: "Moins de bugs en production",
          paragraphs: [
            "Dans les projets JavaScript, beaucoup de bugs viennent à l'exécution. TypeScript capture une grande partie de ces erreurs pendant le développement.",
            "Quand les entrées et sorties des fonctions sont typées explicitement, les mauvaises hypothèses deviennent des erreurs de compilation plutôt que des incidents coté utilisateur."
          ],
          bullets: [
            "Détecte les propriétes manquantes avant l'exécution.",
            "Evite les appels de fonction invalides en amont.",
            "Rend explicites les cas null et undefined."
          ]
        },
        {
          heading: "Refactoring plus sûr",
          paragraphs: [
            "Le refactoring est inévitable dans les projets réels. TypeScript donne la confiance nécessaire pour renommer, extraire et réorganiser du code sans casser des fonctionnalites liées.",
            "Avec de bons types, l'éditeur devient un assistant qui montre tous les impacts d'un changement."
          ],
          bullets: [
            "Les renommages sont plus fiables.",
            "Le code mort est plus simple a identifier.",
            "Les changements d'interface remontent clairement via le compilateur."
          ]
        },
        {
          heading: "Meilleure collaboration d'équipe",
          paragraphs: [
            "Les types servent de documentation vivante. Les nouveaux membres comprennent rapidement comment utiliser services, utilitaires et composants.",
            "Cela reduit les aller-retours et accélère l'onboarding, surtout dans les équipes distribuées."
          ],
          bullets: [
            "Des contrats partages reduisent l'ambiguité.",
            "Les revues de code se concentrent davantage sur l'architecture.",
            "Les changements d'API deviennent explicites et traçables."
          ]
        }
      ],
      conclusion: "TypeScript crée une boucle de feedback plus saine: on détecte plus tôt, on refactor plus sereinement et on collabore avec des contrats clairs. Pour une équipe produit, cela signifie des livraisons plus rapides avec moins de régressions."
    }
  },
  {
    slug: "nextjs-delivery-checklist",
    en: {
      title: "From Idea to Production: My Next.js Delivery Checklist",
      summary: "A practical checklist I use to ship frontend features with confidence, from planning and UI states to testing and deployment.",
      date: "February 26, 2026",
      readTime: "6 min read",
      tags: ["Next.js", "Testing", "Delivery"],
      intro: "A reliable release process is rarely accidental. This checklist helps transform ideas into production-ready features with less risk.",
      sections: [
        {
          heading: "Define Scope Before Writing Code",
          paragraphs: [
            "I start by defining user outcomes, success metrics, and edge cases. This keeps implementation focused and avoids expensive rewrites late in the cycle.",
            "Clear acceptance criteria make it easier to align product, design, and engineering from day one."
          ],
          bullets: [
            "List happy path and failure states.",
            "Confirm responsive behavior and accessibility expectations.",
            "Identify analytics and tracking events upfront."
          ]
        },
        {
          heading: "Build with Operational Readiness",
          paragraphs: [
            "Features should be observable from the first release. I add structured logging, sensible error messages, and fallback states while implementing UI logic.",
            "When incidents happen, recovery is faster if monitoring and debugging were considered early."
          ],
          bullets: [
            "Add clear loading and empty states.",
            "Handle API timeout and retry scenarios.",
            "Keep server and client boundaries explicit in Next.js."
          ]
        },
        {
          heading: "Test the Most Valuable Paths",
          paragraphs: [
            "I avoid over-testing low-value details and focus on flows that protect revenue, trust, or data integrity.",
            "A balanced strategy usually includes targeted unit tests plus one end-to-end test per critical journey."
          ],
          bullets: [
            "Test forms and validation behavior.",
            "Verify navigation and permission boundaries.",
            "Automate smoke checks before deployment."
          ]
        }
      ],
      conclusion: "Consistent delivery comes from repeatable habits. A practical checklist makes quality visible and helps teams ship with confidence, even under tight timelines."
    },
    fr: {
      title: "De l'idée a la production: ma checklist de livraison Next.js",
      summary: "Une checklist pratique que j'utilise pour livrer des fonctionnalites frontend avec confiance, de la planification aux tests et au déploiement.",
      date: "26 fevrier 2026",
      readTime: "6 min de lecture",
      tags: ["Next.js", "Tests", "Livraison"],
      intro: "Un processus de release fiable est rarement le fruit du hasard. Cette checklist aide a transformer une idée en fonctionnalité prête pour la production avec moins de risque.",
      sections: [
        {
          heading: "Définir le scope avant de coder",
          paragraphs: [
            "Je commence par définir les résultats utilisateur, les métriques de succès et les cas limites. Cela garde l'implémentation focus et évite des reworks couteux.",
            "Des critères d'acceptation clairs facilitent l'alignement entre produit, design et engineering des le premier jour."
          ],
          bullets: [
            "Lister les happy paths et les états d'echec.",
            "Valider les attentes responsive et accessibilité.",
            "Identifier les évènements analytics des le départ."
          ]
        },
        {
          heading: "Construire avec un niveau operationnel",
          paragraphs: [
            "Une fonctionnalité doit être observable des la première release. J'ajoute logs structures, messages d'erreur utiles et états de fallback pendant l'implémentation.",
            "Quand un incident arrive, la reprise est plus rapide si le monitoring et le debug ont ete pensés tot."
          ],
          bullets: [
            "Ajouter des états de chargement et de vide explicites.",
            "Gerer les timeouts API et les scenarios de retry.",
            "Maintenir des frontières serveur/client claires dans Next.js."
          ]
        },
        {
          heading: "Tester les parcours les plus critiques",
          paragraphs: [
            "J'évite de sur-tester des détails peu critiques et je cible les flux qui protègent le revenu, la confiance ou l'integrité des données.",
            "Une stratégie équilibrée combine souvent des tests unitaires cibles et un test end-to-end par parcours critique."
          ],
          bullets: [
            "Tester les formulaires et les validations.",
            "Vérifier la navigation et les limites de permissions.",
            "Automatiser des smoke tests avant le déploiement."
          ]
        }
      ],
      conclusion: "Une livraison régulière vient d'habitudes reproductibles. Une checklist concrète rend la qualité visible et aide les équipes a livrer avec confiance, même avec des délais serrés."
    }
  },
  {
    slug: "shared-api-design-mobile-web",
    en: {
      title: "Building Reliable Mobile + Web Flows With Shared APIs",
      summary: "How to design contracts and fallback strategies so React Native and web clients stay aligned without breaking user journeys.",
      date: "February 20, 2026",
      readTime: "8 min read",
      tags: ["React Native", "API", "Architecture"],
      intro: "Sharing APIs across web and mobile can accelerate development, but only when contracts are stable and failure behavior is planned.",
      sections: [
        {
          heading: "Design Explicit Contracts",
          paragraphs: [
            "Shared APIs should be versioned and documented with precise payload definitions. Clients must know what is required, optional, and deprecated.",
            "Inconsistent contracts often create hidden regressions where one platform breaks while the other appears healthy."
          ],
          bullets: [
            "Use schema validation at boundaries.",
            "Treat breaking changes as versioned events.",
            "Document defaults and nullable fields."
          ]
        },
        {
          heading: "Handle Partial Failures Gracefully",
          paragraphs: [
            "Real users face network instability. Mobile and web UIs should degrade gracefully when APIs are slow or partially unavailable.",
            "Fallback strategies should be product decisions, not ad-hoc code paths."
          ],
          bullets: [
            "Define offline-safe states for critical actions.",
            "Retry idempotent requests with backoff.",
            "Surface clear, actionable error messages."
          ]
        },
        {
          heading: "Measure Cross-Platform Health",
          paragraphs: [
            "Reliability improves when dashboards and alerts are split by platform and endpoint. This highlights issues that affect only one client.",
            "A shared API strategy is successful when release velocity rises without increasing incident frequency."
          ],
          bullets: [
            "Track error rates per endpoint and client.",
            "Monitor latency percentiles, not only averages.",
            "Review incident trends every sprint."
          ]
        }
      ],
      conclusion: "Shared APIs work best with clear contracts, deliberate fallback behavior, and platform-specific observability. These guardrails protect user journeys while keeping teams fast."
    },
    fr: {
      title: "Construire des parcours mobile + web fiables avec des API partagées",
      summary: "Comment définir des contrats et des stratégies de repli pour garder les clients React Native et web alignés sans casser les parcours utilisateur.",
      date: "20 fevrier 2026",
      readTime: "8 min de lecture",
      tags: ["React Native", "API", "Architecture"],
      intro: "Partager des API entre web et mobile peut accélerer le developpement, mais seulement si les contrats sont stables et les comportements en erreur anticipés.",
      sections: [
        {
          heading: "Définir des contrats explicites",
          paragraphs: [
            "Les API partagees doivent etre versionnées et documentées avec des payloads precis. Les clients doivent savoir ce qui est requis, optionnel et obsolète.",
            "Des contrats incohérents créent souvent des régressions silencieuses: une plateforme casse pendant que l'autre semble saine."
          ],
          bullets: [
            "Utiliser une validation de schema aux frontières.",
            "Traiter les changements cassants comme des évènements versionnés.",
            "Documenter les valeurs par defaut et les champs nullable."
          ]
        },
        {
          heading: "Gerer les échecs partiels proprement",
          paragraphs: [
            "Les utilisateurs réels subissent l'instabilite réseau. Les UI mobile et web doivent dégrader proprement quand les API sont lentes ou partiellement indisponibles.",
            "Les stratégies de fallback doivent être des décisions produit, pas des branches de code ad-hoc."
          ],
          bullets: [
            "Définir des états offline-safe pour les actions critiques.",
            "Retenter les requêtes idempotentes avec backoff.",
            "Afficher des erreurs claires et actionnables."
          ]
        },
        {
          heading: "Mesurer la santé cross-plateforme",
          paragraphs: [
            "La fiabilité progresse quand les dashboards et alertes sont decoupés par plateforme et endpoint. Cela met en lumière les incidents qui touchent un seul client.",
            "Une stratégie d'API partagée est réussie quand la vitesse de release monte sans augmenter la fréquence des incidents."
          ],
          bullets: [
            "Suivre les taux d'erreur par endpoint et client.",
            "Monitorer les percentiles de latence, pas seulement les moyennes.",
            "Analyser les tendances d'incident à chaque sprint."
          ]
        }
      ],
      conclusion: "Les API partagées fonctionnent le mieux avec des contrats clairs, des fallbacks volontaires et une observabilité adaptée à chaque plateforme. Ces garde-fous protègent les parcours utilisateur tout en gardant les équipes rapides."
    }
  },
  {
    slug: "playwright-patterns-for-regressions",
    en: {
      title: "Playwright Patterns That Catch Real Regressions",
      summary: "A set of realistic end-to-end test patterns for critical flows, including data setup, retries, and debuggable failures.",
      date: "February 12, 2026",
      readTime: "7 min read",
      tags: ["Playwright", "QA", "CI/CD"],
      intro: "Good end-to-end tests are not about quantity. They are about protecting core user paths with stable, debuggable checks.",
      sections: [
        {
          heading: "Focus on Business-Critical Flows",
          paragraphs: [
            "End-to-end suites should prioritize scenarios where failure is costly, such as authentication, checkout, and account management.",
            "Testing every edge in E2E increases flakiness and maintenance cost."
          ],
          bullets: [
            "Map tests to top user journeys.",
            "Keep non-critical checks in unit or integration layers.",
            "Set clear ownership for failing suites."
          ]
        },
        {
          heading: "Control Test Data Intentionally",
          paragraphs: [
            "Unstable data is one of the biggest causes of flaky E2E tests. I prefer deterministic seed data and isolated test accounts.",
            "Each scenario should start from a known state and clean up side effects when possible."
          ],
          bullets: [
            "Create fixtures for users and permissions.",
            "Reset mutable resources between runs.",
            "Avoid dependence on shared environments."
          ]
        },
        {
          heading: "Optimize for Fast Diagnosis",
          paragraphs: [
            "A failing test is useful only if diagnosis is quick. Artifacts such as trace files, videos, and console logs should be standard in CI.",
            "When teams can triage failures quickly, test suites remain trusted instead of ignored."
          ],
          bullets: [
            "Capture traces on retry.",
            "Attach screenshots for assertion failures.",
            "Use readable step names and assertions."
          ]
        }
      ],
      conclusion: "Playwright delivers the most value when tests are purposeful, data is controlled, and failures are easy to understand. That combination catches meaningful regressions without slowing delivery."
    },
    fr: {
      title: "Patterns Playwright qui détectent de vraies régressions",
      summary: "Un ensemble de patterns de tests end-to-end réalistes pour les flux critiques, incluant la préparation des données, les retries et des erreurs faciles a diagnostiquer.",
      date: "12 fevrier 2026",
      readTime: "7 min de lecture",
      tags: ["Playwright", "QA", "CI/CD"],
      intro: "De bons tests end-to-end ne sont pas une question de quantité. Ils servent a protéger les parcours utilisateur critiques avec des verifications stables et debuggables.",
      sections: [
        {
          heading: "Cibler les parcours métier critiques",
          paragraphs: [
            "Les suites end-to-end doivent prioriser les scénarios ou l'échec coute cher, comme l'authentification, le paiement et la gestion de compte.",
            "Tester tous les cas limites en E2E augmente la flakiness et le cout de maintenance."
          ],
          bullets: [
            "Mapper les tests sur les parcours utilisateur majeurs.",
            "Garder les controles non critiques au niveau unitaire ou integration.",
            "Définir un ownership clair des suites en échec."
          ]
        },
        {
          heading: "Controler les données de test intentionnellement",
          paragraphs: [
            "Des données instables sont l'une des premières causes de tests E2E flaky. Je préfère des données seed deterministes et des comptes de test isolés.",
            "Chaque scénario doit partir d'un état connu et nettoyer ses effets de bord quand c'est possible."
          ],
          bullets: [
            "Créer des fixtures pour utilisateurs et permissions.",
            "Reinitialiser les ressources mutables entre les runs.",
            "Eviter la dépendance à des environnements partagés."
          ]
        },
        {
          heading: "Optimiser pour un diagnostic rapide",
          paragraphs: [
            "Un test en échec n'est utile que si le diagnostic est rapide. Les artefacts comme traces, videos et logs console doivent etre standards en CI.",
            "Quand les équipes peuvent qualifier une panne rapidement, la suite de tests reste fiable au lieu d'être ignorée."
          ],
          bullets: [
            "Capturer les traces au retry.",
            "Joindre des captures d'écran sur les échecs d'assertion.",
            "Utiliser des noms d'étape et des assertions lisibles."
          ]
        }
      ],
      conclusion: "Playwright apporte le plus de valeur quand les tests sont utiles, les données maitrisées et les echecs faciles a comprendre. Cette combinaison détecte les régressions importantes sans ralentir la livraison."
    }
  }
];

export const getLocalizedBlogArticle = (article: BlogArticle, lng: LANG) => {
  return article[lng];
};
