const QUESTIONS = [
  // ── Section 1 : Principes et valeurs de la République (Q1–Q37) ──────────
  {
    id: 1, section: 1, sectionName: "Principes et valeurs de la République", important: false,
    text: "Quelle est la devise de la République française ?",
    options: [
      { label: "a", text: "Travail, famille, patrie", correct: false },
      { label: "b", text: "Égalité, justice, solidarité", correct: false },
      { label: "c", text: "Liberté, égalité, fraternité", correct: true },
      { label: "d", text: "Unité, paix, progrès", correct: false },
    ]
  },
  {
    id: 2, section: 1, sectionName: "Principes et valeurs de la République", important: false,
    text: "«Liberté, égalité, fraternité», c'est :",
    options: [
      { label: "a", text: "Le titre de la Déclaration des droits de l'homme", correct: false },
      { label: "b", text: "La devise de la République française", correct: true },
      { label: "c", text: "Le préambule de la Constitution de 1958", correct: false },
      { label: "d", text: "Une formule inscrite sur les billets en euros", correct: false },
    ]
  },
  {
    id: 3, section: 1, sectionName: "Principes et valeurs de la République", important: false,
    text: "Où peut-on voir la devise de la République ?",
    options: [
      { label: "a", text: "Sur les billets de banque", correct: false },
      { label: "b", text: "Sur les passeports et cartes d'identité", correct: false },
      { label: "c", text: "Sur les uniformes de l'armée", correct: false },
      { label: "d", text: "Sur les bâtiments publics (mairies, écoles…)", correct: true },
    ]
  },
  {
    id: 4, section: 1, sectionName: "Principes et valeurs de la République", important: false,
    text: "Quelles sont les couleurs du drapeau français ?",
    options: [
      { label: "a", text: "Bleu, blanc, vert", correct: false },
      { label: "b", text: "Bleu, blanc, rouge", correct: true },
      { label: "c", text: "Rouge, blanc, or", correct: false },
      { label: "d", text: "Bleu, jaune, rouge", correct: false },
    ]
  },
  {
    id: 5, section: 1, sectionName: "Principes et valeurs de la République", important: false,
    text: "Quel symbole de la République française est tricolore ?",
    options: [
      { label: "a", text: "La Marseillaise", correct: false },
      { label: "b", text: "Le drapeau", correct: true },
      { label: "c", text: "Marianne", correct: false },
      { label: "d", text: "Le sceau de la République", correct: false },
    ]
  },
  {
    id: 6, section: 1, sectionName: "Principes et valeurs de la République", important: false,
    text: "Quel est le nom de l'hymne national ?",
    options: [
      { label: "a", text: "Le Chant du Départ", correct: false },
      { label: "b", text: "La Carmagnole", correct: false },
      { label: "c", text: "La Marseillaise", correct: true },
      { label: "d", text: "Le Chant des partisans", correct: false },
    ]
  },
  {
    id: 7, section: 1, sectionName: "Principes et valeurs de la République", important: false,
    text: "Qu'est-ce que la Marseillaise ?",
    options: [
      { label: "a", text: "Une chanson révolutionnaire interdite sous l'Empire", correct: false },
      { label: "b", text: "L'hymne national français", correct: true },
      { label: "c", text: "La devise de la République française", correct: false },
      { label: "d", text: "Le nom du défilé militaire du 14 juillet", correct: false },
    ]
  },
  {
    id: 8, section: 1, sectionName: "Principes et valeurs de la République", important: false,
    text: "Quel est l'un des symboles de la République française ?",
    options: [
      { label: "a", text: "La tour Eiffel", correct: false },
      { label: "b", text: "L'Arc de triomphe", correct: false },
      { label: "c", text: "Marianne", correct: true },
      { label: "d", text: "Le château de Versailles", correct: false },
    ]
  },
  {
    id: 9, section: 1, sectionName: "Principes et valeurs de la République", important: false,
    text: "Lequel de ces symboles représente officiellement la République française ?",
    options: [
      { label: "a", text: "La tour Eiffel", correct: false },
      { label: "b", text: "La cathédrale Notre-Dame", correct: false },
      { label: "c", text: "Le château de Versailles", correct: false },
      { label: "d", text: "Marianne", correct: true },
    ]
  },
  {
    id: 10, section: 1, sectionName: "Principes et valeurs de la République", important: false,
    text: "Quels sont des symboles officiels de la République française ?",
    options: [
      { label: "a", text: "La tour Eiffel, le Louvre, les Champs-Élysées, le coq", correct: false },
      { label: "b", text: "Le drapeau tricolore, la Marseillaise, Marianne, la devise", correct: true },
      { label: "c", text: "Le coq, le Louvre, la devise, Napoléon", correct: false },
      { label: "d", text: "L'hymne national, la fleur de lys, Marianne, la Constitution", correct: false },
    ]
  },
  {
    id: 11, section: 1, sectionName: "Principes et valeurs de la République", important: false,
    text: "Qui est Marianne ?",
    options: [
      { label: "a", text: "Une héroïne réelle de la Révolution française", correct: false },
      { label: "b", text: "La déesse romaine de la liberté", correct: false },
      { label: "c", text: "Le personnage représentant la justice", correct: false },
      { label: "d", text: "La figure symbolique de la République française", correct: true },
    ]
  },
  {
    id: 12, section: 1, sectionName: "Principes et valeurs de la République", important: false,
    text: "Quel animal est un symbole de la France ?",
    options: [
      { label: "a", text: "L'aigle", correct: false },
      { label: "b", text: "Le lion", correct: false },
      { label: "c", text: "Le coq", correct: true },
      { label: "d", text: "Le loup", correct: false },
    ]
  },
  {
    id: 13, section: 1, sectionName: "Principes et valeurs de la République", important: false,
    text: "Quelle est la langue officielle de la République française ?",
    options: [
      { label: "a", text: "Le français", correct: true },
      { label: "b", text: "Le français et les langues régionales reconnues", correct: false },
      { label: "c", text: "Le français, l'occitan et le breton", correct: false },
      { label: "d", text: "Le français et l'anglais", correct: false },
    ]
  },
  {
    id: 14, section: 1, sectionName: "Principes et valeurs de la République", important: false,
    text: "Quelle est la place de la langue française dans la République ?",
    options: [
      { label: "a", text: "Elle est recommandée dans les actes officiels", correct: false },
      { label: "b", text: "Elle est reconnue comme patrimoine national immatériel", correct: false },
      { label: "c", text: "Elle est obligatoire uniquement pour les fonctionnaires", correct: false },
      { label: "d", text: "C'est la langue officielle de la République (article 2 de la Constitution)", correct: true },
    ]
  },
  {
    id: 15, section: 1, sectionName: "Principes et valeurs de la République", important: true,
    text: "Quelle est la date de la fête nationale française ?",
    options: [
      { label: "a", text: "Le 1er mai", correct: false },
      { label: "b", text: "Le 8 mai", correct: false },
      { label: "c", text: "Le 14 juillet", correct: true },
      { label: "d", text: "Le 11 novembre", correct: false },
    ]
  },
  {
    id: 16, section: 1, sectionName: "Principes et valeurs de la République", important: true,
    text: "À quoi correspond la date du 14 juillet ?",
    options: [
      { label: "a", text: "La proclamation de la République en 1792", correct: false },
      { label: "b", text: "La prise de la Bastille (1789) et la Fête de la Fédération (1790)", correct: true },
      { label: "c", text: "La signature de la Constitution de 1789", correct: false },
      { label: "d", text: "La victoire française à Valmy", correct: false },
    ]
  },
  {
    id: 17, section: 1, sectionName: "Principes et valeurs de la République", important: false,
    text: "Qu'est-ce qui est traditionnellement organisé sur les Champs-Élysées le 14 juillet ?",
    options: [
      { label: "a", text: "Un grand concert symphonique national", correct: false },
      { label: "b", text: "Une cérémonie du souvenir devant l'Arc de triomphe", correct: false },
      { label: "c", text: "Un défilé militaire", correct: true },
      { label: "d", text: "Un discours télévisé du Président de la République", correct: false },
    ]
  },
  {
    id: 18, section: 1, sectionName: "Principes et valeurs de la République", important: false,
    text: "Que signifie la liberté ?",
    options: [
      { label: "a", text: "La possibilité de faire tout ce que l'on souhaite", correct: false },
      { label: "b", text: "L'absence de toute obligation légale", correct: false },
      { label: "c", text: "Le droit de faire tout ce qui ne nuit pas à autrui", correct: true },
      { label: "d", text: "Le droit de vivre sans contraintes imposées par l'État", correct: false },
    ]
  },
  {
    id: 19, section: 1, sectionName: "Principes et valeurs de la République", important: false,
    text: "Quelle liberté permet à chacun d'exprimer ses idées ?",
    options: [
      { label: "a", text: "La liberté de conscience", correct: false },
      { label: "b", text: "La liberté d'expression", correct: true },
      { label: "c", text: "La liberté d'association", correct: false },
      { label: "d", text: "La liberté de la presse", correct: false },
    ]
  },
  {
    id: 20, section: 1, sectionName: "Principes et valeurs de la République", important: false,
    text: "Quelle proposition est correcte ? La liberté d'expression :",
    options: [
      { label: "a", text: "Autorise à dire tout ce que l'on pense sans aucune limite", correct: false },
      { label: "b", text: "S'applique uniquement aux journalistes et aux élus", correct: false },
      { label: "c", text: "Permet de s'exprimer librement dans le respect de la loi", correct: true },
      { label: "d", text: "Est garantie uniquement aux citoyens français", correct: false },
    ]
  },
  {
    id: 21, section: 1, sectionName: "Principes et valeurs de la République", important: false,
    text: "Qu'est-ce que l'égalité ?",
    options: [
      { label: "a", text: "L'État doit offrir les mêmes revenus à tous les citoyens", correct: false },
      { label: "b", text: "Tous les citoyens paient les mêmes impôts", correct: false },
      { label: "c", text: "Tous les citoyens ont les mêmes droits et les mêmes devoirs sans distinction", correct: true },
      { label: "d", text: "Tous les citoyens ont accès aux mêmes emplois par obligation légale", correct: false },
    ]
  },
  {
    id: 22, section: 1, sectionName: "Principes et valeurs de la République", important: false,
    text: "Le principe d'égalité signifie que :",
    options: [
      { label: "a", text: "Tous les citoyens ont les mêmes revenus", correct: false },
      { label: "b", text: "L'État doit traiter les riches et les pauvres différemment", correct: false },
      { label: "c", text: "Les hommes et les femmes ont des droits différents selon leur situation", correct: false },
      { label: "d", text: "Tous les citoyens ont les mêmes droits et devoirs, sans distinction d'origine, de race ou de religion", correct: true },
    ]
  },
  {
    id: 23, section: 1, sectionName: "Principes et valeurs de la République", important: false,
    text: "A-t-on le droit d'insulter publiquement quelqu'un parce qu'il est différent (handicap, apparence physique, sexe…) ?",
    options: [
      { label: "a", text: "Oui, la liberté d'expression est absolue", correct: false },
      { label: "b", text: "Oui, si cela reste dans un contexte privé", correct: false },
      { label: "c", text: "Oui, sauf envers les fonctionnaires", correct: false },
      { label: "d", text: "Non, c'est interdit par la loi", correct: true },
    ]
  },
  {
    id: 24, section: 1, sectionName: "Principes et valeurs de la République", important: false,
    text: "Certains métiers peuvent-ils être réservés aux hommes ?",
    options: [
      { label: "a", text: "Oui, certains métiers très physiques sont réservés aux hommes", correct: false },
      { label: "b", text: "Non, tous les métiers sont ouverts aux femmes et aux hommes", correct: true },
      { label: "c", text: "Oui, dans les secteurs militaire et de sécurité", correct: false },
      { label: "d", text: "Oui, si les entreprises le justifient par des raisons techniques", correct: false },
    ]
  },
  {
    id: 25, section: 1, sectionName: "Principes et valeurs de la République", important: false,
    text: "Que signifie le mot «fraternité» dans la devise française ?",
    options: [
      { label: "a", text: "L'obligation de défendre son pays", correct: false },
      { label: "b", text: "L'égalité des droits entre tous les citoyens", correct: false },
      { label: "c", text: "La solidarité entre les citoyens", correct: true },
      { label: "d", text: "L'assistance de l'État aux personnes en difficulté", correct: false },
    ]
  },
  {
    id: 26, section: 1, sectionName: "Principes et valeurs de la République", important: false,
    text: "Une personne peut-elle changer librement de religion ?",
    options: [
      { label: "a", text: "Non, sauf si elle obtient une autorisation administrative", correct: false },
      { label: "b", text: "Non, la religion est transmise par la famille", correct: false },
      { label: "c", text: "Oui, c'est un droit fondamental", correct: true },
      { label: "d", text: "Oui, seulement pour les personnes majeures", correct: false },
    ]
  },
  {
    id: 27, section: 1, sectionName: "Principes et valeurs de la République", important: false,
    text: "Quel est l'un des rôles des associations ?",
    options: [
      { label: "a", text: "Remplacer les services publics dans certains domaines", correct: false },
      { label: "b", text: "Lever des impôts locaux pour financer des projets", correct: false },
      { label: "c", text: "Permettre aux citoyens de participer à la vie sociale et civique", correct: true },
      { label: "d", text: "Contrôler l'action du gouvernement", correct: false },
    ]
  },
  {
    id: 28, section: 1, sectionName: "Principes et valeurs de la République", important: false,
    text: "Le régime de la France est :",
    options: [
      { label: "a", text: "Une monarchie constitutionnelle", correct: false },
      { label: "b", text: "Une confédération d'États", correct: false },
      { label: "c", text: "Une république démocratique", correct: true },
      { label: "d", text: "Un régime présidentiel fédéral", correct: false },
    ]
  },
  {
    id: 29, section: 1, sectionName: "Principes et valeurs de la République", important: true,
    text: "De quand date la Constitution de la Ve République ?",
    options: [
      { label: "a", text: "1944", correct: false },
      { label: "b", text: "1946", correct: false },
      { label: "c", text: "1958", correct: true },
      { label: "d", text: "1962", correct: false },
    ]
  },
  {
    id: 30, section: 1, sectionName: "Principes et valeurs de la République", important: true,
    text: "«La France est une République indivisible, ..., démocratique et sociale.» Complétez :",
    options: [
      { label: "a", text: "Fédérale", correct: false },
      { label: "b", text: "Libérale", correct: false },
      { label: "c", text: "Souveraine", correct: false },
      { label: "d", text: "Laïque", correct: true },
    ]
  },
  {
    id: 31, section: 1, sectionName: "Principes et valeurs de la République", important: true,
    text: "En quelle année la loi de séparation des Églises et de l'État a-t-elle été votée ?",
    options: [
      { label: "a", text: "1789", correct: false },
      { label: "b", text: "1848", correct: false },
      { label: "c", text: "1905", correct: true },
      { label: "d", text: "1946", correct: false },
    ]
  },
  {
    id: 32, section: 1, sectionName: "Principes et valeurs de la République", important: false,
    text: "Qu'est-ce que la laïcité ?",
    options: [
      { label: "a", text: "L'interdiction de pratiquer une religion en France", correct: false },
      { label: "b", text: "L'obligation d'être athée pour exercer une fonction publique", correct: false },
      { label: "c", text: "Le principe de séparation des religions et de l'État", correct: true },
      { label: "d", text: "La reconnaissance d'une religion officielle d'État", correct: false },
    ]
  },
  {
    id: 33, section: 1, sectionName: "Principes et valeurs de la République", important: false,
    text: "Que permet le principe de laïcité ?",
    options: [
      { label: "a", text: "D'interdire toute manifestation religieuse dans l'espace public", correct: false },
      { label: "b", text: "D'imposer une religion officielle à l'État", correct: false },
      { label: "c", text: "De pratiquer librement sa religion dans le respect de l'ordre public", correct: true },
      { label: "d", text: "De pratiquer sa religion uniquement dans les lieux de culte", correct: false },
    ]
  },
  {
    id: 34, section: 1, sectionName: "Principes et valeurs de la République", important: false,
    text: "Quel droit est garanti par la laïcité ?",
    options: [
      { label: "a", text: "Le droit à une religion reconnue par l'État", correct: false },
      { label: "b", text: "La liberté de conscience (croire ou ne pas croire)", correct: true },
      { label: "c", text: "Le droit de pratiquer sa religion sur le lieu de travail", correct: false },
      { label: "d", text: "La liberté d'enseigner la religion à l'école publique", correct: false },
    ]
  },
  {
    id: 35, section: 1, sectionName: "Principes et valeurs de la République", important: false,
    text: "Pourquoi le principe de laïcité doit-il être respecté à l'école ?",
    options: [
      { label: "a", text: "Pour garantir la neutralité et le respect de toutes les croyances", correct: true },
      { label: "b", text: "Pour interdire toute discussion sur les religions", correct: false },
      { label: "c", text: "Pour favoriser l'intégration des élèves étrangers", correct: false },
      { label: "d", text: "Pour empêcher les conflits entre élèves de différentes origines", correct: false },
    ]
  },
  {
    id: 36, section: 1, sectionName: "Principes et valeurs de la République", important: false,
    text: "Un enfant peut-il refuser d'aller à l'école pour une raison religieuse ?",
    options: [
      { label: "a", text: "Oui, si les parents en font la demande écrite à la direction", correct: false },
      { label: "b", text: "Oui, pour les principales fêtes religieuses", correct: false },
      { label: "c", text: "Oui, à condition de suivre un enseignement à domicile", correct: false },
      { label: "d", text: "Non, l'école est obligatoire", correct: true },
    ]
  },
  {
    id: 37, section: 1, sectionName: "Principes et valeurs de la République", important: false,
    text: "Une personne a-t-elle le droit de ne pas croire en une religion ?",
    options: [
      { label: "a", text: "Non, la France est un pays de tradition chrétienne", correct: false },
      { label: "b", text: "Oui, uniquement si elle n'affiche pas son athéisme publiquement", correct: false },
      { label: "c", text: "Oui, la liberté de conscience est garantie", correct: true },
      { label: "d", text: "Non, tout citoyen doit se déclarer d'une confession", correct: false },
    ]
  },

  // ── Section 2 : Système institutionnel et politique (Q38–Q83) ────────────
  {
    id: 38, section: 2, sectionName: "Système institutionnel et politique", important: true,
    text: "La séparation des pouvoirs est un principe fondamental. Quels sont les trois pouvoirs concernés ?",
    options: [
      { label: "a", text: "Le pouvoir politique, militaire et juridique", correct: false },
      { label: "b", text: "Le pouvoir fédéral, régional et local", correct: false },
      { label: "c", text: "Le pouvoir exécutif, le pouvoir législatif, le pouvoir judiciaire", correct: true },
      { label: "d", text: "Le pouvoir royal, républicain et démocratique", correct: false },
    ]
  },
  {
    id: 39, section: 2, sectionName: "Système institutionnel et politique", important: false,
    text: "Qu'est-ce que le pouvoir exécutif ? Le pouvoir :",
    options: [
      { label: "a", text: "De voter les lois", correct: false },
      { label: "b", text: "De faire appliquer les lois", correct: true },
      { label: "c", text: "De juger les crimes et délits", correct: false },
      { label: "d", text: "D'élire les représentants du peuple", correct: false },
    ]
  },
  {
    id: 40, section: 2, sectionName: "Système institutionnel et politique", important: true,
    text: "Qui possède le pouvoir exécutif ?",
    options: [
      { label: "a", text: "Le Parlement", correct: false },
      { label: "b", text: "Les juges et les magistrats", correct: false },
      { label: "c", text: "Le Conseil constitutionnel", correct: false },
      { label: "d", text: "Le président de la République et le gouvernement", correct: true },
    ]
  },
  {
    id: 41, section: 2, sectionName: "Système institutionnel et politique", important: true,
    text: "Qui possède le pouvoir législatif ?",
    options: [
      { label: "a", text: "Le gouvernement", correct: false },
      { label: "b", text: "Le Parlement (Assemblée nationale + Sénat)", correct: true },
      { label: "c", text: "Le président de la République", correct: false },
      { label: "d", text: "Le Conseil d'État", correct: false },
    ]
  },
  {
    id: 42, section: 2, sectionName: "Système institutionnel et politique", important: false,
    text: "Quel pouvoir détient un juge ? Le pouvoir :",
    options: [
      { label: "a", text: "Exécutif", correct: false },
      { label: "b", text: "Législatif", correct: false },
      { label: "c", text: "Administratif", correct: false },
      { label: "d", text: "Judiciaire", correct: true },
    ]
  },
  {
    id: 43, section: 2, sectionName: "Système institutionnel et politique", important: false,
    text: "L'autorité judiciaire est exercée par :",
    options: [
      { label: "a", text: "Le président de la République", correct: false },
      { label: "b", text: "Le Premier ministre et les ministres", correct: false },
      { label: "c", text: "Les juges et les magistrats", correct: true },
      { label: "d", text: "Le Parlement", correct: false },
    ]
  },
  {
    id: 44, section: 2, sectionName: "Système institutionnel et politique", important: false,
    text: "Quel est le rôle de l'autorité judiciaire ?",
    options: [
      { label: "a", text: "Voter les lois", correct: false },
      { label: "b", text: "Appliquer les décisions du gouvernement", correct: false },
      { label: "c", text: "Contrôler les élections", correct: false },
      { label: "d", text: "Veiller au respect des lois et protéger les libertés individuelles", correct: true },
    ]
  },
  {
    id: 45, section: 2, sectionName: "Système institutionnel et politique", important: false,
    text: "Qui réside au palais de l'Élysée ?",
    options: [
      { label: "a", text: "Le Premier ministre", correct: false },
      { label: "b", text: "Le président du Sénat", correct: false },
      { label: "c", text: "Le président de la République", correct: true },
      { label: "d", text: "Le président de l'Assemblée nationale", correct: false },
    ]
  },
  {
    id: 46, section: 2, sectionName: "Système institutionnel et politique", important: true,
    text: "Qui nomme le Premier ministre ?",
    options: [
      { label: "a", text: "Le président de la République", correct: true },
      { label: "b", text: "L'Assemblée nationale", correct: false },
      { label: "c", text: "Le Sénat par vote", correct: false },
      { label: "d", text: "Les citoyens par élection directe", correct: false },
    ]
  },
  {
    id: 47, section: 2, sectionName: "Système institutionnel et politique", important: true,
    text: "Pour combien de temps est élu le président de la République française ?",
    options: [
      { label: "a", text: "4 ans", correct: false },
      { label: "b", text: "6 ans", correct: false },
      { label: "c", text: "5 ans (quinquennat)", correct: true },
      { label: "d", text: "7 ans", correct: false },
    ]
  },
  {
    id: 48, section: 2, sectionName: "Système institutionnel et politique", important: false,
    text: "Est-ce que le président de la République a tous les pouvoirs ?",
    options: [
      { label: "a", text: "Oui, il est le chef suprême de toutes les institutions", correct: false },
      { label: "b", text: "Oui, il dirige le gouvernement, l'armée et la justice", correct: false },
      { label: "c", text: "Non, les pouvoirs sont séparés", correct: true },
      { label: "d", text: "Oui, en situation d'état d'urgence", correct: false },
    ]
  },
  {
    id: 49, section: 2, sectionName: "Système institutionnel et politique", important: false,
    text: "Qui est élu lors des élections présidentielles ?",
    options: [
      { label: "a", text: "Le président de la République", correct: true },
      { label: "b", text: "Le Premier ministre", correct: false },
      { label: "c", text: "Les membres du gouvernement", correct: false },
      { label: "d", text: "Le président du Sénat", correct: false },
    ]
  },
  {
    id: 50, section: 2, sectionName: "Système institutionnel et politique", important: true,
    text: "Le Parlement est composé :",
    options: [
      { label: "a", text: "Du président, du Premier ministre et des ministres", correct: false },
      { label: "b", text: "Du Conseil d'État et du Conseil économique et social", correct: false },
      { label: "c", text: "De l'Assemblée nationale et du Sénat", correct: true },
      { label: "d", text: "De la Cour de cassation et du Conseil constitutionnel", correct: false },
    ]
  },
  {
    id: 51, section: 2, sectionName: "Système institutionnel et politique", important: false,
    text: "Quel est le rôle du Parlement ?",
    options: [
      { label: "a", text: "Nommer les ministres et le Premier ministre", correct: false },
      { label: "b", text: "Appliquer les lois et gérer l'administration publique", correct: false },
      { label: "c", text: "Juger les crimes les plus graves", correct: false },
      { label: "d", text: "Voter les lois et contrôler l'action du gouvernement", correct: true },
    ]
  },
  {
    id: 52, section: 2, sectionName: "Système institutionnel et politique", important: false,
    text: "Qui vote les lois ?",
    options: [
      { label: "a", text: "Le président de la République", correct: false },
      { label: "b", text: "Le gouvernement", correct: false },
      { label: "c", text: "Le Parlement", correct: true },
      { label: "d", text: "Le Conseil constitutionnel", correct: false },
    ]
  },
  {
    id: 53, section: 2, sectionName: "Système institutionnel et politique", important: false,
    text: "Quel est le rôle des députés ?",
    options: [
      { label: "a", text: "Nommer le Premier ministre", correct: false },
      { label: "b", text: "Représenter les régions au niveau national", correct: false },
      { label: "c", text: "Voter les lois et contrôler l'action du gouvernement", correct: true },
      { label: "d", text: "Appliquer les décisions du Conseil d'État", correct: false },
    ]
  },
  {
    id: 54, section: 2, sectionName: "Système institutionnel et politique", important: true,
    text: "Combien de députés composent l'Assemblée nationale ?",
    options: [
      { label: "a", text: "348 députés", correct: false },
      { label: "b", text: "577 députés", correct: true },
      { label: "c", text: "450 députés", correct: false },
      { label: "d", text: "650 députés", correct: false },
    ]
  },
  {
    id: 55, section: 2, sectionName: "Système institutionnel et politique", important: false,
    text: "Qui est élu lors des élections législatives ?",
    options: [
      { label: "a", text: "Les sénateurs", correct: false },
      { label: "b", text: "Les maires", correct: false },
      { label: "c", text: "Les députés", correct: true },
      { label: "d", text: "Les conseillers régionaux", correct: false },
    ]
  },
  {
    id: 56, section: 2, sectionName: "Système institutionnel et politique", important: false,
    text: "Qui élit les députés ?",
    options: [
      { label: "a", text: "Les citoyens français au suffrage universel direct", correct: true },
      { label: "b", text: "Les sénateurs", correct: false },
      { label: "c", text: "Les membres du gouvernement", correct: false },
      { label: "d", text: "Les conseillers régionaux", correct: false },
    ]
  },
  {
    id: 57, section: 2, sectionName: "Système institutionnel et politique", important: true,
    text: "Pour combien de temps sont élus les députés ?",
    options: [
      { label: "a", text: "4 ans", correct: false },
      { label: "b", text: "6 ans", correct: false },
      { label: "c", text: "7 ans", correct: false },
      { label: "d", text: "5 ans", correct: true },
    ]
  },
  {
    id: 58, section: 2, sectionName: "Système institutionnel et politique", important: true,
    text: "Pour combien de temps sont élus les sénateurs ?",
    options: [
      { label: "a", text: "4 ans", correct: false },
      { label: "b", text: "5 ans", correct: false },
      { label: "c", text: "6 ans", correct: true },
      { label: "d", text: "9 ans", correct: false },
    ]
  },
  {
    id: 59, section: 2, sectionName: "Système institutionnel et politique", important: false,
    text: "Quand sont élus les sénateurs ?",
    options: [
      { label: "a", text: "Au suffrage universel direct par tous les citoyens", correct: false },
      { label: "b", text: "Au suffrage universel indirect (par les grands électeurs)", correct: true },
      { label: "c", text: "Par les membres de l'Assemblée nationale", correct: false },
      { label: "d", text: "Par les présidents des conseils régionaux", correct: false },
    ]
  },
  {
    id: 60, section: 2, sectionName: "Système institutionnel et politique", important: false,
    text: "Qui est élu lors des élections municipales ?",
    options: [
      { label: "a", text: "Les maires directement par les citoyens", correct: false },
      { label: "b", text: "Les conseillers municipaux", correct: true },
      { label: "c", text: "Les conseillers départementaux", correct: false },
      { label: "d", text: "Les préfets", correct: false },
    ]
  },
  {
    id: 61, section: 2, sectionName: "Système institutionnel et politique", important: false,
    text: "Qui dirige la commune ?",
    options: [
      { label: "a", text: "Le préfet", correct: false },
      { label: "b", text: "Le conseiller municipal", correct: false },
      { label: "c", text: "Le maire", correct: true },
      { label: "d", text: "Le président du conseil départemental", correct: false },
    ]
  },
  {
    id: 62, section: 2, sectionName: "Système institutionnel et politique", important: false,
    text: "Les dirigeants sont élus par les citoyens dans :",
    options: [
      { label: "a", text: "Une monarchie", correct: false },
      { label: "b", text: "Une dictature", correct: false },
      { label: "c", text: "Une démocratie", correct: true },
      { label: "d", text: "Une théocratie", correct: false },
    ]
  },
  {
    id: 63, section: 2, sectionName: "Système institutionnel et politique", important: true,
    text: "À partir de quel âge a-t-on le droit de voter ?",
    options: [
      { label: "a", text: "16 ans", correct: false },
      { label: "b", text: "17 ans", correct: false },
      { label: "c", text: "18 ans", correct: true },
      { label: "d", text: "21 ans", correct: false },
    ]
  },
  {
    id: 64, section: 2, sectionName: "Système institutionnel et politique", important: false,
    text: "Quelle condition est nécessaire pour voter aux élections ?",
    options: [
      { label: "a", text: "Avoir un domicile fixe depuis plus de 2 ans", correct: false },
      { label: "b", text: "Avoir payé ses impôts", correct: false },
      { label: "c", text: "Être inscrit sur les listes électorales", correct: true },
      { label: "d", text: "Posséder la carte nationale d'identité", correct: false },
    ]
  },
  {
    id: 65, section: 2, sectionName: "Système institutionnel et politique", important: false,
    text: "Qui peut voter aux élections en France ?",
    options: [
      { label: "a", text: "Tout résident en France depuis plus de 5 ans", correct: false },
      { label: "b", text: "Tous les citoyens européens résidant en France", correct: false },
      { label: "c", text: "Les citoyens français majeurs inscrits sur les listes électorales", correct: true },
      { label: "d", text: "Toute personne titulaire d'un titre de séjour valide", correct: false },
    ]
  },
  {
    id: 66, section: 2, sectionName: "Système institutionnel et politique", important: false,
    text: "Que signifie «suffrage universel» ?",
    options: [
      { label: "a", text: "Que les élections ont lieu dans tout le pays simultanément", correct: false },
      { label: "b", text: "Que le vote est obligatoire pour tous les citoyens", correct: false },
      { label: "c", text: "Que les résultats sont valables à l'échelle internationale", correct: false },
      { label: "d", text: "Que tous les citoyens majeurs ont le droit de vote", correct: true },
    ]
  },
  {
    id: 67, section: 2, sectionName: "Système institutionnel et politique", important: false,
    text: "Concernant les partis politiques, quelle proposition est correcte ?",
    options: [
      { label: "a", text: "Il n'existe qu'un seul parti politique en France", correct: false },
      { label: "b", text: "Les partis politiques sont interdits dans les institutions", correct: false },
      { label: "c", text: "Il existe plusieurs partis politiques (pluralisme politique)", correct: true },
      { label: "d", text: "Les partis politiques sont financés uniquement par les citoyens", correct: false },
    ]
  },
  {
    id: 68, section: 2, sectionName: "Système institutionnel et politique", important: false,
    text: "A-t-on le droit de ne pas respecter une loi ?",
    options: [
      { label: "a", text: "Oui, si l'on est en désaccord avec elle", correct: false },
      { label: "b", text: "Oui, tant qu'on ne nuit pas aux autres", correct: false },
      { label: "c", text: "Non, la loi s'applique à tous", correct: true },
      { label: "d", text: "Oui, si on peut prouver qu'elle est injuste", correct: false },
    ]
  },
  {
    id: 69, section: 2, sectionName: "Système institutionnel et politique", important: false,
    text: "Qui doit respecter la loi ?",
    options: [
      { label: "a", text: "Uniquement les citoyens français", correct: false },
      { label: "b", text: "Les citoyens français et les résidents permanents", correct: false },
      { label: "c", text: "Tout le monde (citoyens et non-citoyens)", correct: true },
      { label: "d", text: "Uniquement les personnes nées en France", correct: false },
    ]
  },
  {
    id: 70, section: 2, sectionName: "Système institutionnel et politique", important: false,
    text: "Que se passe-t-il si un ministre ne respecte pas la loi ?",
    options: [
      { label: "a", text: "Il bénéficie d'une immunité totale pendant son mandat", correct: false },
      { label: "b", text: "Il est seulement sanctionné par le gouvernement en privé", correct: false },
      { label: "c", text: "Il est sanctionné comme tout citoyen", correct: true },
      { label: "d", text: "Il doit démissionner mais n'est pas poursuivi en justice", correct: false },
    ]
  },
  {
    id: 71, section: 2, sectionName: "Système institutionnel et politique", important: false,
    text: "Qui sanctionne l'auteur d'un vol ?",
    options: [
      { label: "a", text: "La police", correct: false },
      { label: "b", text: "Le maire de la commune", correct: false },
      { label: "c", text: "La justice (un juge)", correct: true },
      { label: "d", text: "Le préfet", correct: false },
    ]
  },
  {
    id: 72, section: 2, sectionName: "Système institutionnel et politique", important: true,
    text: "Combien y a-t-il de départements en France ?",
    options: [
      { label: "a", text: "101 départements", correct: true },
      { label: "b", text: "95 départements", correct: false },
      { label: "c", text: "96 départements", correct: false },
      { label: "d", text: "105 départements", correct: false },
    ]
  },
  {
    id: 73, section: 2, sectionName: "Système institutionnel et politique", important: false,
    text: "Qui représente l'État dans un département ?",
    options: [
      { label: "a", text: "Le maire", correct: false },
      { label: "b", text: "Le gouverneur", correct: false },
      { label: "c", text: "Le président du conseil départemental", correct: false },
      { label: "d", text: "Le préfet", correct: true },
    ]
  },
  {
    id: 74, section: 2, sectionName: "Système institutionnel et politique", important: false,
    text: "Qui est le préfet ?",
    options: [
      { label: "a", text: "Le chef de la police nationale", correct: false },
      { label: "b", text: "L'élu à la tête du conseil départemental", correct: false },
      { label: "c", text: "Le représentant de l'État dans un département", correct: true },
      { label: "d", text: "Le président d'une région", correct: false },
    ]
  },
  {
    id: 75, section: 2, sectionName: "Système institutionnel et politique", important: false,
    text: "Quel est le régime politique de la France aujourd'hui ?",
    options: [
      { label: "a", text: "Une monarchie constitutionnelle", correct: false },
      { label: "b", text: "Une confédération de régions autonomes", correct: false },
      { label: "c", text: "Une république démocratique (Ve République)", correct: true },
      { label: "d", text: "Un État fédéral", correct: false },
    ]
  },
  {
    id: 76, section: 2, sectionName: "Système institutionnel et politique", important: true,
    text: "Combien d'États font partie de l'Union européenne au 1er janvier 2025 ?",
    options: [
      { label: "a", text: "25 États membres", correct: false },
      { label: "b", text: "28 États membres", correct: false },
      { label: "c", text: "27 États membres", correct: true },
      { label: "d", text: "30 États membres", correct: false },
    ]
  },
  {
    id: 77, section: 2, sectionName: "Système institutionnel et politique", important: false,
    text: "Quel État n'est pas membre de l'Union européenne ?",
    options: [
      { label: "a", text: "La Belgique", correct: false },
      { label: "b", text: "L'Italie", correct: false },
      { label: "c", text: "La Suisse", correct: true },
      { label: "d", text: "L'Espagne", correct: false },
    ]
  },
  {
    id: 78, section: 2, sectionName: "Système institutionnel et politique", important: false,
    text: "Quelle condition est nécessaire pour voter aux élections européennes ?",
    options: [
      { label: "a", text: "Être citoyen français uniquement", correct: false },
      { label: "b", text: "Avoir la double nationalité française et européenne", correct: false },
      { label: "c", text: "Être citoyen d'un État membre de l'UE et être inscrit sur les listes électorales", correct: true },
      { label: "d", text: "Résider en France depuis plus de 5 ans", correct: false },
    ]
  },
  {
    id: 79, section: 2, sectionName: "Système institutionnel et politique", important: true,
    text: "À quelle fréquence les élections européennes sont-elles organisées ?",
    options: [
      { label: "a", text: "Tous les 4 ans", correct: false },
      { label: "b", text: "Tous les 5 ans", correct: true },
      { label: "c", text: "Tous les 6 ans", correct: false },
      { label: "d", text: "Tous les 7 ans", correct: false },
    ]
  },
  {
    id: 80, section: 2, sectionName: "Système institutionnel et politique", important: false,
    text: "Quel pays est un pays fondateur de l'Union européenne ?",
    options: [
      { label: "a", text: "La France", correct: true },
      { label: "b", text: "L'Espagne", correct: false },
      { label: "c", text: "La Pologne", correct: false },
      { label: "d", text: "La Suède", correct: false },
    ]
  },
  {
    id: 81, section: 2, sectionName: "Système institutionnel et politique", important: false,
    text: "Quelle est la monnaie utilisée en France ?",
    options: [
      { label: "a", text: "Le franc", correct: false },
      { label: "b", text: "L'euro", correct: true },
      { label: "c", text: "La livre sterling", correct: false },
      { label: "d", text: "La couronne européenne", correct: false },
    ]
  },
  {
    id: 82, section: 2, sectionName: "Système institutionnel et politique", important: false,
    text: "Qui élit les députés européens ?",
    options: [
      { label: "a", text: "Les chefs d'État des pays membres de l'UE", correct: false },
      { label: "b", text: "Les parlements nationaux des États membres", correct: false },
      { label: "c", text: "Les citoyens des États membres de l'UE au suffrage universel direct", correct: true },
      { label: "d", text: "Le Conseil de l'Europe", correct: false },
    ]
  },
  {
    id: 83, section: 2, sectionName: "Système institutionnel et politique", important: true,
    text: "Quand célèbre-t-on la journée de l'Europe ?",
    options: [
      { label: "a", text: "Le 1er janvier", correct: false },
      { label: "b", text: "Le 8 mai", correct: false },
      { label: "c", text: "Le 9 mai", correct: true },
      { label: "d", text: "Le 25 mars", correct: false },
    ]
  },

  // ── Section 3 : Droits et devoirs (Q84–Q113) ────────────────────────────
  {
    id: 84, section: 3, sectionName: "Droits et devoirs", important: true,
    text: "De quelle année date la Déclaration des droits de l'homme et du citoyen ?",
    options: [
      { label: "a", text: "1776", correct: false },
      { label: "b", text: "1789", correct: true },
      { label: "c", text: "1793", correct: false },
      { label: "d", text: "1804", correct: false },
    ]
  },
  {
    id: 85, section: 3, sectionName: "Droits et devoirs", important: false,
    text: "Quel texte a été adopté pendant la Révolution française ?",
    options: [
      { label: "a", text: "La Constitution de la IVe République", correct: false },
      { label: "b", text: "Le Code civil napoléonien", correct: false },
      { label: "c", text: "La Déclaration des droits de l'homme et du citoyen", correct: true },
      { label: "d", text: "La Charte des droits fondamentaux de l'UE", correct: false },
    ]
  },
  {
    id: 86, section: 3, sectionName: "Droits et devoirs", important: false,
    text: "Quel est le texte fondateur établissant en France les droits et les devoirs de chaque citoyen ?",
    options: [
      { label: "a", text: "La Constitution de 1958", correct: false },
      { label: "b", text: "La Charte des droits fondamentaux de l'Union européenne", correct: false },
      { label: "c", text: "La Déclaration des droits de l'homme et du citoyen de 1789", correct: true },
      { label: "d", text: "Le Code Napoléon de 1804", correct: false },
    ]
  },
  {
    id: 87, section: 3, sectionName: "Droits et devoirs", important: false,
    text: "Comment s'appelle la Constitution actuelle de la France ?",
    options: [
      { label: "a", text: "La Constitution de la IVe République", correct: false },
      { label: "b", text: "La Grande Charte française", correct: false },
      { label: "c", text: "La Constitution de la Ve République (1958)", correct: true },
      { label: "d", text: "La Déclaration des droits de l'homme", correct: false },
    ]
  },
  {
    id: 88, section: 3, sectionName: "Droits et devoirs", important: false,
    text: "Comment s'appelle le texte qui énonce les droits et devoirs des personnes résidant en France ?",
    options: [
      { label: "a", text: "La Déclaration des droits de l'homme et du citoyen", correct: false },
      { label: "b", text: "Le Code civil français", correct: false },
      { label: "c", text: "La Charte des droits et devoirs du citoyen français", correct: true },
      { label: "d", text: "Le préambule de la Constitution de 1958", correct: false },
    ]
  },
  {
    id: 89, section: 3, sectionName: "Droits et devoirs", important: false,
    text: "Parmi ces textes, lequel garantit les droits et libertés en France ?",
    options: [
      { label: "a", text: "Le Code civil", correct: false },
      { label: "b", text: "La Charte des droits du citoyen français", correct: false },
      { label: "c", text: "La Constitution", correct: true },
      { label: "d", text: "Le règlement de l'Union européenne", correct: false },
    ]
  },
  {
    id: 90, section: 3, sectionName: "Droits et devoirs", important: false,
    text: "Concernant les droits individuels, quelle proposition est correcte ?",
    options: [
      { label: "a", text: "Seuls les citoyens français bénéficient de droits en France", correct: false },
      { label: "b", text: "Les droits varient selon l'origine de la personne", correct: false },
      { label: "c", text: "Chaque personne a des droits garantis par la loi", correct: true },
      { label: "d", text: "Les droits individuels peuvent être supprimés en cas de crise", correct: false },
    ]
  },
  {
    id: 91, section: 3, sectionName: "Droits et devoirs", important: false,
    text: "Lequel de ces droits est un droit fondamental ?",
    options: [
      { label: "a", text: "Le droit au logement gratuit", correct: false },
      { label: "b", text: "Le droit à un revenu minimum garanti", correct: false },
      { label: "c", text: "La liberté d'expression", correct: true },
      { label: "d", text: "Le droit à la retraite anticipée", correct: false },
    ]
  },
  {
    id: 92, section: 3, sectionName: "Droits et devoirs", important: false,
    text: "Qu'est-ce que la liberté d'expression ?",
    options: [
      { label: "a", text: "Le droit de tout dire sans aucune limite", correct: false },
      { label: "b", text: "Le droit réservé aux journalistes et aux artistes", correct: false },
      { label: "c", text: "Le droit d'exprimer librement ses opinions dans le respect de la loi", correct: true },
      { label: "d", text: "Le droit de s'exprimer uniquement dans les lieux publics autorisés", correct: false },
    ]
  },
  {
    id: 93, section: 3, sectionName: "Droits et devoirs", important: false,
    text: "Quel droit permet à une personne de se défendre devant la justice ?",
    options: [
      { label: "a", text: "Le droit de grâce", correct: false },
      { label: "b", text: "Le droit d'asile", correct: false },
      { label: "c", text: "Le droit à un avocat (droit de la défense)", correct: true },
      { label: "d", text: "Le droit de recours administratif", correct: false },
    ]
  },
  {
    id: 94, section: 3, sectionName: "Droits et devoirs", important: false,
    text: "Quelle liberté permet à une personne de ne pas avoir de religion ?",
    options: [
      { label: "a", text: "La liberté d'expression", correct: false },
      { label: "b", text: "La liberté de la presse", correct: false },
      { label: "c", text: "La liberté de conscience", correct: true },
      { label: "d", text: "La liberté d'association", correct: false },
    ]
  },
  {
    id: 95, section: 3, sectionName: "Droits et devoirs", important: false,
    text: "Que permet la citoyenneté française ?",
    options: [
      { label: "a", text: "De travailler sans titre de séjour dans l'UE", correct: false },
      { label: "b", text: "De bénéficier de tous les services publics gratuits", correct: false },
      { label: "c", text: "De voter et de participer à la vie politique", correct: true },
      { label: "d", text: "D'obtenir automatiquement un logement social", correct: false },
    ]
  },
  {
    id: 96, section: 3, sectionName: "Droits et devoirs", important: false,
    text: "Une femme peut avorter :",
    options: [
      { label: "a", text: "Uniquement avec l'autorisation de son médecin", correct: false },
      { label: "b", text: "Uniquement avant 10 semaines de grossesse", correct: false },
      { label: "c", text: "Librement, c'est un droit garanti par la loi", correct: true },
      { label: "d", text: "Uniquement avec l'accord du père de l'enfant", correct: false },
    ]
  },
  {
    id: 97, section: 3, sectionName: "Droits et devoirs", important: false,
    text: "Est-il toujours possible de divorcer ?",
    options: [
      { label: "a", text: "Non, seulement en cas de faute prouvée", correct: false },
      { label: "b", text: "Non, il faut l'accord des deux parties obligatoirement", correct: false },
      { label: "c", text: "Oui, le divorce est un droit", correct: true },
      { label: "d", text: "Oui, mais seulement après 2 ans de séparation", correct: false },
    ]
  },
  {
    id: 98, section: 3, sectionName: "Droits et devoirs", important: true,
    text: "La peine de mort est :",
    options: [
      { label: "a", text: "Applicable uniquement pour les crimes contre l'État", correct: false },
      { label: "b", text: "Suspendue mais non abolie officiellement", correct: false },
      { label: "c", text: "Abolie en France depuis 1981", correct: true },
      { label: "d", text: "Réservée aux crimes terroristes", correct: false },
    ]
  },
  {
    id: 99, section: 3, sectionName: "Droits et devoirs", important: false,
    text: "Concernant les limites aux libertés individuelles, quelle proposition est correcte ?",
    options: [
      { label: "a", text: "Les libertés ne peuvent jamais être limitées dans une démocratie", correct: false },
      { label: "b", text: "Seul le Parlement peut restreindre les libertés par décret", correct: false },
      { label: "c", text: "Les libertés peuvent être limitées pour respecter celles des autres et l'ordre public", correct: true },
      { label: "d", text: "Les libertés peuvent être limitées uniquement en cas de guerre", correct: false },
    ]
  },
  {
    id: 100, section: 3, sectionName: "Droits et devoirs", important: false,
    text: "Pourquoi les libertés individuelles peuvent-elles être limitées ?",
    options: [
      { label: "a", text: "Pour réduire les inégalités sociales", correct: false },
      { label: "b", text: "Pour faciliter le travail des forces de l'ordre", correct: false },
      { label: "c", text: "Pour préserver l'ordre public et les droits des autres", correct: true },
      { label: "d", text: "Pour renforcer l'autorité de l'État", correct: false },
    ]
  },
  {
    id: 101, section: 3, sectionName: "Droits et devoirs", important: false,
    text: "En France, est-ce légal d'être marié à plusieurs personnes en même temps ?",
    options: [
      { label: "a", text: "Oui, si toutes les parties sont consentantes", correct: false },
      { label: "b", text: "Oui, si le mariage a été contracté à l'étranger", correct: false },
      { label: "c", text: "Non, la polygamie est interdite", correct: true },
      { label: "d", text: "Oui, dans certaines communautés culturelles reconnues", correct: false },
    ]
  },
  {
    id: 102, section: 3, sectionName: "Droits et devoirs", important: false,
    text: "Que risque une personne qui ne respecte pas la loi ?",
    options: [
      { label: "a", text: "Un simple avertissement de la police", correct: false },
      { label: "b", text: "Une convocation devant le maire", correct: false },
      { label: "c", text: "Des sanctions (amende, prison…)", correct: true },
      { label: "d", text: "L'expulsion automatique du territoire", correct: false },
    ]
  },
  {
    id: 103, section: 3, sectionName: "Droits et devoirs", important: false,
    text: "Qu'est-ce qu'une infraction ?",
    options: [
      { label: "a", text: "Une erreur administrative commise par l'État", correct: false },
      { label: "b", text: "Un comportement interdit par la loi", correct: true },
      { label: "c", text: "Une décision de justice contestable", correct: false },
      { label: "d", text: "Un manquement aux règles de politesse", correct: false },
    ]
  },
  {
    id: 104, section: 3, sectionName: "Droits et devoirs", important: true,
    text: "Quelle est l'infraction la plus grave ?",
    options: [
      { label: "a", text: "La contravention", correct: false },
      { label: "b", text: "La faute civile", correct: false },
      { label: "c", text: "Le délit", correct: false },
      { label: "d", text: "Le crime", correct: true },
    ]
  },
  {
    id: 105, section: 3, sectionName: "Droits et devoirs", important: false,
    text: "Quel est le rôle de la police ?",
    options: [
      { label: "a", text: "Voter les lois sur la sécurité", correct: false },
      { label: "b", text: "Assurer la sécurité des personnes et des biens", correct: true },
      { label: "c", text: "Juger les personnes accusées d'infractions", correct: false },
      { label: "d", text: "Percevoir les amendes de stationnement", correct: false },
    ]
  },
  {
    id: 106, section: 3, sectionName: "Droits et devoirs", important: false,
    text: "Quel est le rôle de la gendarmerie ?",
    options: [
      { label: "a", text: "Surveiller les frontières nationales", correct: false },
      { label: "b", text: "Protéger les institutions républicaines", correct: false },
      { label: "c", text: "Assurer la sécurité des personnes et des biens (en zone rurale et périurbaine)", correct: true },
      { label: "d", text: "Instruire les dossiers judiciaires", correct: false },
    ]
  },
  {
    id: 107, section: 3, sectionName: "Droits et devoirs", important: false,
    text: "Que doit faire une victime de violences ?",
    options: [
      { label: "a", text: "Consulter un médecin avant toute démarche officielle", correct: false },
      { label: "b", text: "Prévenir son employeur", correct: false },
      { label: "c", text: "Porter plainte auprès de la police ou de la gendarmerie", correct: true },
      { label: "d", text: "Contacter directement le procureur de la République", correct: false },
    ]
  },
  {
    id: 108, section: 3, sectionName: "Droits et devoirs", important: false,
    text: "Que doit faire une personne en cas d'accident ?",
    options: [
      { label: "a", text: "Attendre l'arrivée des secours sans intervenir", correct: false },
      { label: "b", text: "Prendre des photos pour témoigner", correct: false },
      { label: "c", text: "Appeler les secours (15, 18 ou 112)", correct: true },
      { label: "d", text: "Transporter la victime à l'hôpital immédiatement", correct: false },
    ]
  },
  {
    id: 109, section: 3, sectionName: "Droits et devoirs", important: false,
    text: "En quoi consiste la traite des êtres humains ?",
    options: [
      { label: "a", text: "Faire entrer illégalement des personnes sur le territoire", correct: false },
      { label: "b", text: "Vendre des organes sur un marché clandestin", correct: false },
      { label: "c", text: "Exploiter des personnes (travail forcé, prostitution…). C'est un crime.", correct: true },
      { label: "d", text: "Recruter des travailleurs sans contrat de travail", correct: false },
    ]
  },
  {
    id: 110, section: 3, sectionName: "Droits et devoirs", important: false,
    text: "Faut-il réduire ses déchets ?",
    options: [
      { label: "a", text: "Non, c'est une recommandation sans caractère obligatoire", correct: false },
      { label: "b", text: "Oui, mais seulement dans les grandes villes", correct: false },
      { label: "c", text: "Oui, uniquement pour les entreprises", correct: false },
      { label: "d", text: "Oui, c'est une obligation légale et civique", correct: true },
    ]
  },
  {
    id: 111, section: 3, sectionName: "Droits et devoirs", important: false,
    text: "Jeter une bouteille dans la rue est :",
    options: [
      { label: "a", text: "Toléré s'il n'y a pas de poubelle à proximité", correct: false },
      { label: "b", text: "Autorisé pour les matières recyclables", correct: false },
      { label: "c", text: "Interdit et passible d'une amende", correct: true },
      { label: "d", text: "Autorisé dans certaines zones désignées", correct: false },
    ]
  },
  {
    id: 112, section: 3, sectionName: "Droits et devoirs", important: false,
    text: "Comment peut-on réduire ses déchets ?",
    options: [
      { label: "a", text: "En les enfouissant dans son jardin", correct: false },
      { label: "b", text: "En les incinérant soi-même", correct: false },
      { label: "c", text: "En triant, recyclant et limitant sa consommation", correct: true },
      { label: "d", text: "En les déposant dans n'importe quelle poubelle publique", correct: false },
    ]
  },
  {
    id: 113, section: 3, sectionName: "Droits et devoirs", important: false,
    text: "Déposer une machine à laver cassée sur le trottoir est :",
    options: [
      { label: "a", text: "Autorisé si on prévient la mairie à l'avance", correct: false },
      { label: "b", text: "Toléré une fois par an lors des collectes spéciales", correct: false },
      { label: "c", text: "Interdit (il faut aller à la déchetterie)", correct: true },
      { label: "d", text: "Autorisé dans les zones rurales sans service de collecte", correct: false },
    ]
  },

  // ── Section 4 : Histoire, géographie et culture (Q114–Q160) ─────────────
  {
    id: 114, section: 4, sectionName: "Histoire, géographie et culture", important: true,
    text: "En quelle année a débuté la Révolution française ?",
    options: [
      { label: "a", text: "1776", correct: false },
      { label: "b", text: "1792", correct: false },
      { label: "c", text: "1789", correct: true },
      { label: "d", text: "1793", correct: false },
    ]
  },
  {
    id: 115, section: 4, sectionName: "Histoire, géographie et culture", important: false,
    text: "Qui était le roi de France au moment de la Révolution française ?",
    options: [
      { label: "a", text: "Louis XIV", correct: false },
      { label: "b", text: "Louis XV", correct: false },
      { label: "c", text: "Louis XVI", correct: true },
      { label: "d", text: "Charles X", correct: false },
    ]
  },
  {
    id: 116, section: 4, sectionName: "Histoire, géographie et culture", important: false,
    text: "Qui était Napoléon Ier ?",
    options: [
      { label: "a", text: "Un roi de France du XVIIIe siècle", correct: false },
      { label: "b", text: "Un général de la Révolution française devenu président", correct: false },
      { label: "c", text: "Un empereur français (1804–1815)", correct: true },
      { label: "d", text: "Un maréchal de France de la Première Guerre mondiale", correct: false },
    ]
  },
  {
    id: 117, section: 4, sectionName: "Histoire, géographie et culture", important: false,
    text: "Qui a rendu l'école gratuite, laïque et obligatoire ?",
    options: [
      { label: "a", text: "Napoléon Bonaparte", correct: false },
      { label: "b", text: "Jules Ferry", correct: true },
      { label: "c", text: "Victor Hugo", correct: false },
      { label: "d", text: "Léon Gambetta", correct: false },
    ]
  },
  {
    id: 118, section: 4, sectionName: "Histoire, géographie et culture", important: true,
    text: "En quelle année l'esclavage a-t-il été aboli définitivement en France ?",
    options: [
      { label: "a", text: "1848", correct: true },
      { label: "b", text: "1789", correct: false },
      { label: "c", text: "1815", correct: false },
      { label: "d", text: "1865", correct: false },
    ]
  },
  {
    id: 119, section: 4, sectionName: "Histoire, géographie et culture", important: true,
    text: "Depuis quelle année l'école publique est-elle gratuite (lois Jules Ferry) ?",
    options: [
      { label: "a", text: "1789", correct: false },
      { label: "b", text: "1881", correct: true },
      { label: "c", text: "1905", correct: false },
      { label: "d", text: "1936", correct: false },
    ]
  },
  {
    id: 120, section: 4, sectionName: "Histoire, géographie et culture", important: true,
    text: "Quand a eu lieu la Première Guerre mondiale ?",
    options: [
      { label: "a", text: "1870–1871", correct: false },
      { label: "b", text: "1914–1918", correct: true },
      { label: "c", text: "1912–1916", correct: false },
      { label: "d", text: "1916–1920", correct: false },
    ]
  },
  {
    id: 121, section: 4, sectionName: "Histoire, géographie et culture", important: false,
    text: "Quelle guerre a eu lieu entre 1914 et 1918 ?",
    options: [
      { label: "a", text: "La guerre franco-prussienne", correct: false },
      { label: "b", text: "La Première Guerre mondiale", correct: true },
      { label: "c", text: "La guerre d'Algérie", correct: false },
      { label: "d", text: "La guerre de Sécession", correct: false },
    ]
  },
  {
    id: 122, section: 4, sectionName: "Histoire, géographie et culture", important: true,
    text: "Le 11 novembre est un jour férié. À quoi correspond cette date ?",
    options: [
      { label: "a", text: "La fin de la Seconde Guerre mondiale", correct: false },
      { label: "b", text: "L'armistice de la Première Guerre mondiale (1918)", correct: true },
      { label: "c", text: "La capitulation de l'Allemagne nazie en 1945", correct: false },
      { label: "d", text: "La commémoration des soldats de Verdun", correct: false },
    ]
  },
  {
    id: 123, section: 4, sectionName: "Histoire, géographie et culture", important: true,
    text: "Quand a eu lieu la Seconde Guerre mondiale ?",
    options: [
      { label: "a", text: "1935–1944", correct: false },
      { label: "b", text: "1940–1945", correct: false },
      { label: "c", text: "1939–1945", correct: true },
      { label: "d", text: "1941–1946", correct: false },
    ]
  },
  {
    id: 124, section: 4, sectionName: "Histoire, géographie et culture", important: false,
    text: "Qu'est-ce que la Shoah ?",
    options: [
      { label: "a", text: "La déportation des résistants français par l'Allemagne nazie", correct: false },
      { label: "b", text: "Les crimes de guerre commis en Algérie durant la colonisation", correct: false },
      { label: "c", text: "Le génocide des Juifs par les nazis pendant la Seconde Guerre mondiale", correct: true },
      { label: "d", text: "Les bombardements alliés sur les villes françaises en 1944", correct: false },
    ]
  },
  {
    id: 125, section: 4, sectionName: "Histoire, géographie et culture", important: true,
    text: "En quelle année a été créée la Communauté Économique Européenne (CEE) ?",
    options: [
      { label: "a", text: "1945", correct: false },
      { label: "b", text: "1950", correct: false },
      { label: "c", text: "1957", correct: true },
      { label: "d", text: "1963", correct: false },
    ]
  },
  {
    id: 126, section: 4, sectionName: "Histoire, géographie et culture", important: true,
    text: "Pourquoi l'année 1958 est-elle importante pour la France ?",
    options: [
      { label: "a", text: "La fin de la Seconde Guerre mondiale", correct: false },
      { label: "b", text: "L'abolition de la peine de mort", correct: false },
      { label: "c", text: "La création de la Ve République", correct: true },
      { label: "d", text: "L'entrée dans la Communauté Économique Européenne", correct: false },
    ]
  },
  {
    id: 127, section: 4, sectionName: "Histoire, géographie et culture", important: true,
    text: "Qui a été le premier président élu sous la Ve République ?",
    options: [
      { label: "a", text: "Georges Pompidou", correct: false },
      { label: "b", text: "Valéry Giscard d'Estaing", correct: false },
      { label: "c", text: "Charles de Gaulle", correct: true },
      { label: "d", text: "François Mitterrand", correct: false },
    ]
  },
  {
    id: 128, section: 4, sectionName: "Histoire, géographie et culture", important: false,
    text: "Qui a fondé la Ve République ?",
    options: [
      { label: "a", text: "Charles de Gaulle", correct: true },
      { label: "b", text: "Georges Pompidou", correct: false },
      { label: "c", text: "François Mitterrand", correct: false },
      { label: "d", text: "Jean Moulin", correct: false },
    ]
  },
  {
    id: 129, section: 4, sectionName: "Histoire, géographie et culture", important: false,
    text: "Dans quelle République est-on aujourd'hui ?",
    options: [
      { label: "a", text: "La IIIe République", correct: false },
      { label: "b", text: "La IVe République", correct: false },
      { label: "c", text: "La Ve République", correct: true },
      { label: "d", text: "La VIe République", correct: false },
    ]
  },
  {
    id: 130, section: 4, sectionName: "Histoire, géographie et culture", important: true,
    text: "Combien y a-t-il eu de républiques en France ?",
    options: [
      { label: "a", text: "3", correct: false },
      { label: "b", text: "4", correct: false },
      { label: "c", text: "5", correct: true },
      { label: "d", text: "6", correct: false },
    ]
  },
  {
    id: 131, section: 4, sectionName: "Histoire, géographie et culture", important: false,
    text: "Quel pays ou région du monde a été colonisé par la France ?",
    options: [
      { label: "a", text: "Le Brésil", correct: false },
      { label: "b", text: "L'Algérie", correct: true },
      { label: "c", text: "Le Mexique", correct: false },
      { label: "d", text: "L'Inde", correct: false },
    ]
  },
  {
    id: 132, section: 4, sectionName: "Histoire, géographie et culture", important: false,
    text: "Lequel de ces personnages historiques est français ?",
    options: [
      { label: "a", text: "Guillaume Tell", correct: false },
      { label: "b", text: "Napoléon Bonaparte", correct: true },
      { label: "c", text: "Otto von Bismarck", correct: false },
      { label: "d", text: "Jules César", correct: false },
    ]
  },
  {
    id: 133, section: 4, sectionName: "Histoire, géographie et culture", important: false,
    text: "Que célèbre-t-on le 14 juillet ?",
    options: [
      { label: "a", text: "La proclamation de la Ve République", correct: false },
      { label: "b", text: "La commémoration des soldats morts pour la France", correct: false },
      { label: "c", text: "La fête nationale française", correct: true },
      { label: "d", text: "La signature de la Déclaration des droits de l'homme", correct: false },
    ]
  },
  {
    id: 134, section: 4, sectionName: "Histoire, géographie et culture", important: false,
    text: "Quelle est la capitale de la France ?",
    options: [
      { label: "a", text: "Lyon", correct: false },
      { label: "b", text: "Marseille", correct: false },
      { label: "c", text: "Paris", correct: true },
      { label: "d", text: "Bordeaux", correct: false },
    ]
  },
  {
    id: 135, section: 4, sectionName: "Histoire, géographie et culture", important: false,
    text: "Qu'est-ce que Paris ?",
    options: [
      { label: "a", text: "La capitale de la France", correct: true },
      { label: "b", text: "La plus grande ville d'Europe", correct: false },
      { label: "c", text: "Le siège de l'Union européenne", correct: false },
      { label: "d", text: "La capitale historique de la Gaule romaine", correct: false },
    ]
  },
  {
    id: 136, section: 4, sectionName: "Histoire, géographie et culture", important: false,
    text: "Sur quel continent se situe la France métropolitaine ?",
    options: [
      { label: "a", text: "L'Afrique", correct: false },
      { label: "b", text: "L'Amérique", correct: false },
      { label: "c", text: "L'Europe", correct: true },
      { label: "d", text: "L'Asie", correct: false },
    ]
  },
  {
    id: 137, section: 4, sectionName: "Histoire, géographie et culture", important: false,
    text: "Quel océan borde la côte ouest française ?",
    options: [
      { label: "a", text: "L'océan Pacifique", correct: false },
      { label: "b", text: "L'océan Glacial Arctique", correct: false },
      { label: "c", text: "L'océan Atlantique", correct: true },
      { label: "d", text: "L'océan Indien", correct: false },
    ]
  },
  {
    id: 138, section: 4, sectionName: "Histoire, géographie et culture", important: false,
    text: "Quelle est la mer au sud de la France métropolitaine ?",
    options: [
      { label: "a", text: "La mer du Nord", correct: false },
      { label: "b", text: "La mer Noire", correct: false },
      { label: "c", text: "La mer Baltique", correct: false },
      { label: "d", text: "La mer Méditerranée", correct: true },
    ]
  },
  {
    id: 139, section: 4, sectionName: "Histoire, géographie et culture", important: false,
    text: "Quel fleuve coule en France ?",
    options: [
      { label: "a", text: "Le Danube", correct: false },
      { label: "b", text: "Le Rhin", correct: false },
      { label: "c", text: "La Seine", correct: true },
      { label: "d", text: "Le Tibre", correct: false },
    ]
  },
  {
    id: 140, section: 4, sectionName: "Histoire, géographie et culture", important: true,
    text: "Combien y a-t-il de régions en France métropolitaine ?",
    options: [
      { label: "a", text: "10 régions", correct: false },
      { label: "b", text: "12 régions", correct: false },
      { label: "c", text: "13 régions", correct: true },
      { label: "d", text: "15 régions", correct: false },
    ]
  },
  {
    id: 141, section: 4, sectionName: "Histoire, géographie et culture", important: false,
    text: "Quelle île est un département d'outre-mer français ?",
    options: [
      { label: "a", text: "Cuba", correct: false },
      { label: "b", text: "Madagascar", correct: false },
      { label: "c", text: "La Martinique", correct: true },
      { label: "d", text: "Haïti", correct: false },
    ]
  },
  {
    id: 142, section: 4, sectionName: "Histoire, géographie et culture", important: false,
    text: "Quelle ville est un grand port maritime ?",
    options: [
      { label: "a", text: "Lyon", correct: false },
      { label: "b", text: "Paris", correct: false },
      { label: "c", text: "Marseille", correct: true },
      { label: "d", text: "Strasbourg", correct: false },
    ]
  },
  {
    id: 143, section: 4, sectionName: "Histoire, géographie et culture", important: false,
    text: "Quelle ville est située au bord de la mer Méditerranée ?",
    options: [
      { label: "a", text: "Bordeaux", correct: false },
      { label: "b", text: "Nantes", correct: false },
      { label: "c", text: "Marseille", correct: true },
      { label: "d", text: "Rennes", correct: false },
    ]
  },
  {
    id: 144, section: 4, sectionName: "Histoire, géographie et culture", important: false,
    text: "Où se situe la Corse ?",
    options: [
      { label: "a", text: "Dans l'océan Atlantique", correct: false },
      { label: "b", text: "En mer Méditerranée", correct: true },
      { label: "c", text: "Dans la Manche", correct: false },
      { label: "d", text: "Dans l'océan Indien", correct: false },
    ]
  },
  {
    id: 145, section: 4, sectionName: "Histoire, géographie et culture", important: false,
    text: "Quelle chaîne de montagnes est située entre la France et l'Italie ?",
    options: [
      { label: "a", text: "Les Pyrénées", correct: false },
      { label: "b", text: "Le Massif central", correct: false },
      { label: "c", text: "Les Alpes", correct: true },
      { label: "d", text: "Les Vosges", correct: false },
    ]
  },
  {
    id: 146, section: 4, sectionName: "Histoire, géographie et culture", important: false,
    text: "Quelle ville est française ?",
    options: [
      { label: "a", text: "Genève", correct: false },
      { label: "b", text: "Bruxelles", correct: false },
      { label: "c", text: "Lyon", correct: true },
      { label: "d", text: "Lausanne", correct: false },
    ]
  },
  {
    id: 147, section: 4, sectionName: "Histoire, géographie et culture", important: false,
    text: "Dans quelle ville se trouve la tour Eiffel ?",
    options: [
      { label: "a", text: "Paris", correct: true },
      { label: "b", text: "Lyon", correct: false },
      { label: "c", text: "Marseille", correct: false },
      { label: "d", text: "Bordeaux", correct: false },
    ]
  },
  {
    id: 148, section: 4, sectionName: "Histoire, géographie et culture", important: false,
    text: "Qu'est-ce que le Louvre ?",
    options: [
      { label: "a", text: "Le palais officiel du président de la République", correct: false },
      { label: "b", text: "La résidence historique des rois de France à Paris", correct: false },
      { label: "c", text: "Un musée (le plus grand musée de Paris)", correct: true },
      { label: "d", text: "Le siège du gouvernement français", correct: false },
    ]
  },
  {
    id: 149, section: 4, sectionName: "Histoire, géographie et culture", important: false,
    text: "Qui était Molière ?",
    options: [
      { label: "a", text: "Un poète du XVIIIe siècle, auteur de tragédies", correct: false },
      { label: "b", text: "Un philosophe des Lumières", correct: false },
      { label: "c", text: "Un dramaturge et comédien du XVIIe siècle", correct: true },
      { label: "d", text: "Un romancier du XIXe siècle", correct: false },
    ]
  },
  {
    id: 150, section: 4, sectionName: "Histoire, géographie et culture", important: false,
    text: "Qui était Jean de la Fontaine ?",
    options: [
      { label: "a", text: "Un dramaturge du XVIIe siècle, auteur de comédies", correct: false },
      { label: "b", text: "Un philosophe et encyclopédiste du XVIIIe siècle", correct: false },
      { label: "c", text: "Un poète du XVIIe siècle, auteur de fables", correct: true },
      { label: "d", text: "Un romancier du XIXe siècle", correct: false },
    ]
  },
  {
    id: 151, section: 4, sectionName: "Histoire, géographie et culture", important: false,
    text: "Qui était Charles Baudelaire ?",
    options: [
      { label: "a", text: "Un dramaturge du XVIIe siècle", correct: false },
      { label: "b", text: "Un philosophe des Lumières du XVIIIe siècle", correct: false },
      { label: "c", text: "Un poète du XIXe siècle (Les Fleurs du mal)", correct: true },
      { label: "d", text: "Un romancier du XXe siècle", correct: false },
    ]
  },
  {
    id: 152, section: 4, sectionName: "Histoire, géographie et culture", important: false,
    text: "Qui était George Sand ?",
    options: [
      { label: "a", text: "Une peintre impressionniste du XXe siècle", correct: false },
      { label: "b", text: "Une philosophe et militante du XVIIIe siècle", correct: false },
      { label: "c", text: "Une écrivaine du XIXe siècle", correct: true },
      { label: "d", text: "Une chanteuse et actrice du XXe siècle", correct: false },
    ]
  },
  {
    id: 153, section: 4, sectionName: "Histoire, géographie et culture", important: false,
    text: "Qui était Simone de Beauvoir ?",
    options: [
      { label: "a", text: "Une résistante et chanteuse du XXe siècle", correct: false },
      { label: "b", text: "Une peintre et sculptrice du XXe siècle", correct: false },
      { label: "c", text: "Une écrivaine et philosophe féministe du XXe siècle", correct: true },
      { label: "d", text: "Une poétesse du XIXe siècle", correct: false },
    ]
  },
  {
    id: 154, section: 4, sectionName: "Histoire, géographie et culture", important: false,
    text: "Qui était Albert Camus ?",
    options: [
      { label: "a", text: "Un dramaturge du XVIIe siècle", correct: false },
      { label: "b", text: "Un peintre de l'école impressionniste", correct: false },
      { label: "c", text: "Un écrivain et philosophe, prix Nobel de littérature", correct: true },
      { label: "d", text: "Un général et homme politique du XXe siècle", correct: false },
    ]
  },
  {
    id: 155, section: 4, sectionName: "Histoire, géographie et culture", important: false,
    text: "Qui était Paul Cézanne ?",
    options: [
      { label: "a", text: "Un sculpteur du XIXe siècle", correct: false },
      { label: "b", text: "Un poète symboliste du XIXe siècle", correct: false },
      { label: "c", text: "Un peintre impressionniste/post-impressionniste", correct: true },
      { label: "d", text: "Un architecte du XXe siècle", correct: false },
    ]
  },
  {
    id: 156, section: 4, sectionName: "Histoire, géographie et culture", important: false,
    text: "Qui était Marc Chagall ?",
    options: [
      { label: "a", text: "Un sculpteur russe du XIXe siècle", correct: false },
      { label: "b", text: "Un peintre du XXe siècle", correct: true },
      { label: "c", text: "Un compositeur et musicien du XXe siècle", correct: false },
      { label: "d", text: "Un poète et dramaturge du XIXe siècle", correct: false },
    ]
  },
  {
    id: 157, section: 4, sectionName: "Histoire, géographie et culture", important: false,
    text: "Qui était Joséphine Baker ?",
    options: [
      { label: "a", text: "Une poétesse et romancière du XIXe siècle", correct: false },
      { label: "b", text: "Une peintre de l'École de Paris", correct: false },
      { label: "c", text: "Une chanteuse, danseuse et résistante", correct: true },
      { label: "d", text: "Une philosophe et militante pour les droits civiques", correct: false },
    ]
  },
  {
    id: 158, section: 4, sectionName: "Histoire, géographie et culture", important: false,
    text: "Qui était une chanteuse française célèbre ?",
    options: [
      { label: "a", text: "George Sand", correct: false },
      { label: "b", text: "Marie Curie", correct: false },
      { label: "c", text: "Édith Piaf", correct: true },
      { label: "d", text: "Simone de Beauvoir", correct: false },
    ]
  },
  {
    id: 159, section: 4, sectionName: "Histoire, géographie et culture", important: false,
    text: "Quel écrivain est français ?",
    options: [
      { label: "a", text: "William Shakespeare", correct: false },
      { label: "b", text: "Johann Wolfgang von Goethe", correct: false },
      { label: "c", text: "Victor Hugo", correct: true },
      { label: "d", text: "Miguel de Cervantes", correct: false },
    ]
  },
  {
    id: 160, section: 4, sectionName: "Histoire, géographie et culture", important: false,
    text: "Quand célèbre-t-on Noël ?",
    options: [
      { label: "a", text: "Le 24 décembre", correct: false },
      { label: "b", text: "Le 26 décembre", correct: false },
      { label: "c", text: "Le 25 décembre", correct: true },
      { label: "d", text: "Le 1er janvier", correct: false },
    ]
  },

  // ── Section 5 : Vivre dans la société française (Q161–Q190) ─────────────
  {
    id: 161, section: 5, sectionName: "Vivre dans la société française", important: true,
    text: "Quel numéro d'urgence permet d'appeler le SAMU ?",
    options: [
      { label: "a", text: "17", correct: false },
      { label: "b", text: "18", correct: false },
      { label: "c", text: "15", correct: true },
      { label: "d", text: "112", correct: false },
    ]
  },
  {
    id: 162, section: 5, sectionName: "Vivre dans la société française", important: true,
    text: "Quel numéro d'urgence permet d'appeler les pompiers ?",
    options: [
      { label: "a", text: "18", correct: true },
      { label: "b", text: "15", correct: false },
      { label: "c", text: "17", correct: false },
      { label: "d", text: "112", correct: false },
    ]
  },
  {
    id: 163, section: 5, sectionName: "Vivre dans la société française", important: false,
    text: "Qu'est-ce qu'un numéro d'urgence ?",
    options: [
      { label: "a", text: "Un numéro réservé aux services administratifs", correct: false },
      { label: "b", text: "Un numéro payant disponible en journée seulement", correct: false },
      { label: "c", text: "Un numéro gratuit pour joindre les secours 24h/24", correct: true },
      { label: "d", text: "Un numéro utilisable uniquement depuis un téléphone fixe", correct: false },
    ]
  },
  {
    id: 164, section: 5, sectionName: "Vivre dans la société française", important: true,
    text: "Quand faut-il déclarer son enfant au service d'état civil de la mairie ?",
    options: [
      { label: "a", text: "Dans les 3 jours suivant la naissance", correct: false },
      { label: "b", text: "Dans les 7 jours suivant la naissance", correct: false },
      { label: "c", text: "Dans les 5 jours suivant la naissance", correct: true },
      { label: "d", text: "Dans les 15 jours suivant la naissance", correct: false },
    ]
  },
  {
    id: 165, section: 5, sectionName: "Vivre dans la société française", important: false,
    text: "À quelles conditions un mariage est-il reconnu juridiquement en France ?",
    options: [
      { label: "a", text: "Il suffit d'un contrat signé devant notaire", correct: false },
      { label: "b", text: "Il doit être célébré à l'église ou dans un lieu de culte reconnu", correct: false },
      { label: "c", text: "Il doit être célébré à la mairie devant un officier d'état civil", correct: true },
      { label: "d", text: "Il doit être enregistré à la préfecture du département", correct: false },
    ]
  },
  {
    id: 166, section: 5, sectionName: "Vivre dans la société française", important: false,
    text: "Le travail non déclaré est :",
    options: [
      { label: "a", text: "Toléré pour les petits jobs occasionnels", correct: false },
      { label: "b", text: "Autorisé entre particuliers", correct: false },
      { label: "c", text: "Interdit par la loi", correct: true },
      { label: "d", text: "Légal si les deux parties sont d'accord", correct: false },
    ]
  },
  {
    id: 167, section: 5, sectionName: "Vivre dans la société française", important: false,
    text: "Que doit faire un employeur pour fixer un salaire ?",
    options: [
      { label: "a", text: "Demander l'autorisation à la préfecture", correct: false },
      { label: "b", text: "Respecter le SMIC (salaire minimum)", correct: true },
      { label: "c", text: "Consulter les syndicats de l'entreprise obligatoirement", correct: false },
      { label: "d", text: "Fixer un salaire basé uniquement sur les qualifications", correct: false },
    ]
  },
  {
    id: 168, section: 5, sectionName: "Vivre dans la société française", important: true,
    text: "Qu'est-ce que le SMIC ?",
    options: [
      { label: "a", text: "Le syndicat des travailleurs indépendants et commerciaux", correct: false },
      { label: "b", text: "Le contrat de travail minimum garanti pour les moins de 26 ans", correct: false },
      { label: "c", text: "Le salaire minimum interprofessionnel de croissance", correct: true },
      { label: "d", text: "La caisse nationale de retraite complémentaire", correct: false },
    ]
  },
  {
    id: 169, section: 5, sectionName: "Vivre dans la société française", important: false,
    text: "Quelle est la première démarche à réaliser pour chercher un emploi ?",
    options: [
      { label: "a", text: "S'inscrire à la mairie de sa commune", correct: false },
      { label: "b", text: "Contacter directement les entreprises", correct: false },
      { label: "c", text: "S'inscrire à France Travail (ex-Pôle emploi)", correct: true },
      { label: "d", text: "Déposer son dossier à la préfecture", correct: false },
    ]
  },
  {
    id: 170, section: 5, sectionName: "Vivre dans la société française", important: true,
    text: "Quelle est la durée légale du temps de travail par semaine ?",
    options: [
      { label: "a", text: "32 heures", correct: false },
      { label: "b", text: "39 heures", correct: false },
      { label: "c", text: "35 heures", correct: true },
      { label: "d", text: "40 heures", correct: false },
    ]
  },
  {
    id: 171, section: 5, sectionName: "Vivre dans la société française", important: false,
    text: "Qui est aidé par France Travail ?",
    options: [
      { label: "a", text: "Les personnes à la retraite", correct: false },
      { label: "b", text: "Les étudiants en recherche de stage", correct: false },
      { label: "c", text: "Les personnes à la recherche d'un emploi", correct: true },
      { label: "d", text: "Les travailleurs indépendants", correct: false },
    ]
  },
  {
    id: 172, section: 5, sectionName: "Vivre dans la société française", important: false,
    text: "Une personne étrangère en situation régulière peut créer son entreprise :",
    options: [
      { label: "a", text: "Non, la création d'entreprise est réservée aux citoyens français", correct: false },
      { label: "b", text: "Non, sauf si elle est ressortissante d'un pays de l'UE", correct: false },
      { label: "c", text: "Oui, sous certaines conditions", correct: true },
      { label: "d", text: "Oui, uniquement pour les auto-entrepreneurs", correct: false },
    ]
  },
  {
    id: 173, section: 5, sectionName: "Vivre dans la société française", important: false,
    text: "Une femme peut-elle créer son entreprise ?",
    options: [
      { label: "a", text: "Non, seulement si elle a un cofondateur masculin", correct: false },
      { label: "b", text: "Oui, mais avec des contraintes supplémentaires", correct: false },
      { label: "c", text: "Oui, au même titre qu'un homme", correct: true },
      { label: "d", text: "Oui, uniquement dans certains secteurs d'activité", correct: false },
    ]
  },
  {
    id: 174, section: 5, sectionName: "Vivre dans la société française", important: true,
    text: "À partir de quel âge un mineur peut-il travailler ?",
    options: [
      { label: "a", text: "14 ans", correct: false },
      { label: "b", text: "15 ans", correct: false },
      { label: "c", text: "16 ans", correct: true },
      { label: "d", text: "18 ans", correct: false },
    ]
  },
  {
    id: 175, section: 5, sectionName: "Vivre dans la société française", important: false,
    text: "Après avoir obtenu le permis de conduire, que faut-il faire pour pouvoir conduire sa voiture ?",
    options: [
      { label: "a", text: "Déclarer son véhicule à la préfecture", correct: false },
      { label: "b", text: "Obtenir une autorisation de circuler auprès de la mairie", correct: false },
      { label: "c", text: "Souscrire une assurance automobile", correct: true },
      { label: "d", text: "Passer une visite médicale annuelle", correct: false },
    ]
  },
  {
    id: 176, section: 5, sectionName: "Vivre dans la société française", important: false,
    text: "Auprès de quel organisme faut-il demander le remboursement des frais de santé ?",
    options: [
      { label: "a", text: "La mutuelle nationale", correct: false },
      { label: "b", text: "Le ministère de la Santé", correct: false },
      { label: "c", text: "La Sécurité sociale (l'Assurance maladie / la CPAM)", correct: true },
      { label: "d", text: "L'hôpital public directement", correct: false },
    ]
  },
  {
    id: 177, section: 5, sectionName: "Vivre dans la société française", important: false,
    text: "Concernant l'accès aux soins, quelle proposition est correcte ?",
    options: [
      { label: "a", text: "Seuls les assurés sociaux ont accès aux soins", correct: false },
      { label: "b", text: "L'accès aux soins est réservé aux résidents réguliers", correct: false },
      { label: "c", text: "Toute personne a droit à des soins, quelle que soit sa situation", correct: true },
      { label: "d", text: "Les étrangers doivent payer leurs soins intégralement", correct: false },
    ]
  },
  {
    id: 178, section: 5, sectionName: "Vivre dans la société française", important: false,
    text: "En cas de problème de santé non urgent, à qui faut-il s'adresser en premier ?",
    options: [
      { label: "a", text: "Aux urgences de l'hôpital", correct: false },
      { label: "b", text: "À la pharmacie", correct: false },
      { label: "c", text: "Son médecin traitant", correct: true },
      { label: "d", text: "À la CPAM", correct: false },
    ]
  },
  {
    id: 179, section: 5, sectionName: "Vivre dans la société française", important: false,
    text: "Quel est le rôle du médecin traitant ?",
    options: [
      { label: "a", text: "Pratiquer toutes les opérations chirurgicales", correct: false },
      { label: "b", text: "Gérer les remboursements de la Sécurité sociale", correct: false },
      { label: "c", text: "Coordonner les soins et orienter vers des spécialistes si nécessaire", correct: true },
      { label: "d", text: "Délivrer les médicaments sans ordonnance", correct: false },
    ]
  },
  {
    id: 180, section: 5, sectionName: "Vivre dans la société française", important: false,
    text: "Dans quelles situations doit-on se rendre aux urgences de l'hôpital ?",
    options: [
      { label: "a", text: "Pour tout problème de santé survenant le week-end", correct: false },
      { label: "b", text: "Pour obtenir un arrêt maladie rapidement", correct: false },
      { label: "c", text: "En cas d'urgence vitale ou de blessure grave", correct: true },
      { label: "d", text: "Quand son médecin traitant est indisponible", correct: false },
    ]
  },
  {
    id: 181, section: 5, sectionName: "Vivre dans la société française", important: false,
    text: "Quel est l'objectif des vaccinations obligatoires ?",
    options: [
      { label: "a", text: "Réduire les dépenses de la Sécurité sociale", correct: false },
      { label: "b", text: "Respecter une obligation internationale", correct: false },
      { label: "c", text: "Protéger la santé de tous (santé publique)", correct: true },
      { label: "d", text: "Prévenir uniquement les maladies mortelles", correct: false },
    ]
  },
  {
    id: 182, section: 5, sectionName: "Vivre dans la société française", important: false,
    text: "À quoi sert la carte Vitale ?",
    options: [
      { label: "a", text: "À obtenir des médicaments gratuitement sans ordonnance", correct: false },
      { label: "b", text: "À justifier ses droits à l'Assurance maladie pour le remboursement des soins", correct: true },
      { label: "c", text: "À prouver sa nationalité française", correct: false },
      { label: "d", text: "À bénéficier de soins urgents à l'étranger", correct: false },
    ]
  },
  {
    id: 183, section: 5, sectionName: "Vivre dans la société française", important: false,
    text: "À quoi sert une mutuelle santé ?",
    options: [
      { label: "a", text: "À remplacer entièrement la Sécurité sociale", correct: false },
      { label: "b", text: "À financer les soins à l'étranger", correct: false },
      { label: "c", text: "À compléter les remboursements de la Sécurité sociale", correct: true },
      { label: "d", text: "À payer les médicaments non remboursables par l'État", correct: false },
    ]
  },
  {
    id: 184, section: 5, sectionName: "Vivre dans la société française", important: true,
    text: "Jusqu'à quel âge l'école est-elle obligatoire ?",
    options: [
      { label: "a", text: "14 ans", correct: false },
      { label: "b", text: "15 ans", correct: false },
      { label: "c", text: "16 ans", correct: true },
      { label: "d", text: "18 ans", correct: false },
    ]
  },
  {
    id: 185, section: 5, sectionName: "Vivre dans la société française", important: false,
    text: "Pour qui l'école est-elle obligatoire ?",
    options: [
      { label: "a", text: "Pour les enfants français uniquement de 6 à 16 ans", correct: false },
      { label: "b", text: "Pour les enfants de 6 à 16 ans nés en France", correct: false },
      { label: "c", text: "Pour tous les enfants de 3 à 16 ans, résidant en France", correct: true },
      { label: "d", text: "Pour les enfants de nationalité française ou européenne de 6 à 18 ans", correct: false },
    ]
  },
  {
    id: 186, section: 5, sectionName: "Vivre dans la société française", important: false,
    text: "L'autorité parentale prévoit l'obligation :",
    options: [
      { label: "a", text: "D'inscrire l'enfant dans une école publique uniquement", correct: false },
      { label: "b", text: "De transmettre la nationalité française à l'enfant", correct: false },
      { label: "c", text: "D'assurer l'éducation et l'entretien de l'enfant", correct: true },
      { label: "d", text: "De déclarer les revenus de l'enfant aux impôts", correct: false },
    ]
  },
  {
    id: 187, section: 5, sectionName: "Vivre dans la société française", important: false,
    text: "Quel diplôme obtient-on à la fin du lycée ?",
    options: [
      { label: "a", text: "Le brevet des collèges", correct: false },
      { label: "b", text: "Le BEPC", correct: false },
      { label: "c", text: "Le diplôme national d'études secondaires", correct: false },
      { label: "d", text: "Le baccalauréat", correct: true },
    ]
  },
  {
    id: 188, section: 5, sectionName: "Vivre dans la société française", important: false,
    text: "Dans quels établissements scolaires vont les élèves après l'école élémentaire ?",
    options: [
      { label: "a", text: "Le collège", correct: true },
      { label: "b", text: "Le lycée", correct: false },
      { label: "c", text: "L'université", correct: false },
      { label: "d", text: "Le centre de formation professionnelle", correct: false },
    ]
  },
  {
    id: 189, section: 5, sectionName: "Vivre dans la société française", important: false,
    text: "Un enfant inscrit à l'école :",
    options: [
      { label: "a", text: "Peut s'absenter librement si les parents le justifient", correct: false },
      { label: "b", text: "Peut choisir les matières qui l'intéressent", correct: false },
      { label: "c", text: "Doit y aller régulièrement (assiduité obligatoire)", correct: true },
      { label: "d", text: "Peut être scolarisé à domicile sans condition", correct: false },
    ]
  },
  {
    id: 190, section: 5, sectionName: "Vivre dans la société française", important: false,
    text: "Les enfants qui ne parlent pas français :",
    options: [
      { label: "a", text: "Doivent passer un test de langue avant d'être admis à l'école", correct: false },
      { label: "b", text: "Doivent fréquenter une école spécialisée pendant un an", correct: false },
      { label: "c", text: "Sont accueillis à l'école et bénéficient d'un soutien en français", correct: true },
      { label: "d", text: "Sont orientés vers des classes d'attente", correct: false },
    ]
  },
];
