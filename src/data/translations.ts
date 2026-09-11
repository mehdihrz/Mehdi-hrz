import { Language, LocalizedString, LocalizedStringList } from '../types';

export function getLocalized(field: LocalizedString | undefined | null, lang: Language, fallback = ''): string {
  if (!field) return fallback;
  if (field[lang]) return field[lang]!;
  if (field.fr) return field.fr;
  if (field.en) return field.en;
  if (field.es) return field.es!;
  if (field.ar) return field.ar!;
  return fallback;
}

export function getLocalizedList(field: LocalizedStringList | undefined | null, lang: Language): string[] {
  if (!field) return [];
  if (field[lang] && field[lang]!.length > 0) return field[lang]!;
  if (field.fr && field.fr.length > 0) return field.fr;
  if (field.en && field.en.length > 0) return field.en;
  if (field.es && field.es!.length > 0) return field.es!;
  if (field.ar && field.ar!.length > 0) return field.ar!;
  return [];
}

export interface LanguageOption {
  code: Language;
  label: string;
  shortLabel: string;
  dir: 'ltr' | 'rtl';
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'fr', label: 'Français', shortLabel: 'FR', dir: 'ltr' },
  { code: 'en', label: 'English', shortLabel: 'EN', dir: 'ltr' },
  { code: 'es', label: 'Español', shortLabel: 'ES', dir: 'ltr' },
  { code: 'ar', label: 'العربية', shortLabel: 'عربي', dir: 'rtl' },
];

export const UI = {
  header: {
    title: {
      fr: 'Directeur Créatif',
      en: 'Creative Director',
      es: 'Director Creativo',
      ar: 'مدير إبداعي',
    },
    nav: {
      travaux: { fr: 'Travaux', en: 'Works', es: 'Proyectos', ar: 'الأعمال' },
      manifeste: { fr: 'Manifeste', en: 'Manifesto', es: 'Manifiesto', ar: 'البيان' },
      apropos: { fr: 'À Propos', en: 'About', es: 'Sobre Mí', ar: 'عني' },
      contact: { fr: 'Contact', en: 'Contact', es: 'Contacto', ar: 'تواصل' },
    },
    theme: {
      dark: { fr: 'Noir', en: 'Dark', es: 'Oscuro', ar: 'داكن' },
      light: { fr: 'Blanc', en: 'Light', es: 'Claro', ar: 'فاتح' },
      tooltip: {
        fr: 'Choisir le fond (Noir ou Blanc)',
        en: 'Select background (Dark or Light)',
        es: 'Elegir fondo (Oscuro o Claro)',
        ar: 'اختر المظهر (داكن أو فاتح)',
      },
    },
    langLabel: {
      fr: 'Langue',
      en: 'Language',
      es: 'Idioma',
      ar: 'اللغة',
    },
    ambient: {
      tooltip: {
        fr: "Ambiance sonore contemplative d'atelier",
        en: 'Contemplative atelier soundscape',
        es: 'Ambiente sonoro contemplativo de estudio',
        ar: 'خلفية صوتية تأملية للأتيليه',
      },
      active: {
        fr: 'Ambiance Active',
        en: 'Sound Active',
        es: 'Sonido Activo',
        ar: 'الصوت نشط',
      },
      inactive: {
        fr: 'Son Atelier',
        en: 'Atelier Sound',
        es: 'Sonido Estudio',
        ar: 'صوت الأتيليه',
      },
    },
  },

  hero: {
    badge: {
      fr: 'Paris & Tunis — Disponible pour mandats sélectifs',
      en: 'Paris & Tunis — Available for selective commissions',
      es: 'París y Túnez — Disponible para encargos selectivos',
      ar: 'باريس وتونس — متاح للمشاريع والتعاونات الانتقائية',
    },
    tag: {
      fr: 'ATELIER DE CRÉATION',
      en: 'CREATIVE ATELIER',
      es: 'ESTUDIO CREATIVO',
      ar: 'محترف الإبداع والتصميم',
    },
    title1: {
      fr: 'Sculpter l’',
      en: 'Sculpting the ',
      es: 'Esculpir lo ',
      ar: 'نحت ',
    },
    titleHighlight: {
      fr: 'essentiel',
      en: 'essential',
      es: 'esencial',
      ar: 'الجوهر',
    },
    title2: {
      fr: 'Donner un visage au silence.',
      en: 'Giving form to silence.',
      es: 'Dar forma al silencio.',
      ar: 'إعطاء وجه وملامح للصمت.',
    },
    title3: {
      fr: 'Diriger le regard.',
      en: 'Directing the gaze.',
      es: 'Dirigir la mirada.',
      ar: 'توجيه البصر والوجدان.',
    },
    description: {
      fr: "Direction créative, identités de marque d'exception, photographie d'auteur et expériences numériques pensées pour résister à l'épreuve du temps.",
      en: 'Creative direction, high-craft brand identities, author photography, and digital experiences conceived to transcend fleeting algorithmic trends.',
      es: 'Dirección creativa, identidades de marca exclusivas, fotografía de autor y experiencias digitales concebidas para perdurar en el tiempo.',
      ar: 'إدارة إبداعية، وهويات بصرية متميزة، وتصوير فوتوغرافي مؤلف، وتجارب رقمية مصممة لتصمد في وجه الزمن وتتجاوز الصيحات العابرة.',
    },
    exploreBtn: {
      fr: 'Explorer les Travaux',
      en: 'Explore Works',
      es: 'Explorar Trabajos',
      ar: 'استكشف الأعمال',
    },
    manifestoBtn: {
      fr: 'Le Vrai Sens de la Création',
      en: 'The Essence of Creation',
      es: 'El Sentido de la Creación',
      ar: 'المعنى الحقيقي للإبداع',
    },
    metrics: {
      years: {
        value: '10+',
        label: {
          fr: 'Années de Direction Créative',
          en: 'Years of Creative Direction',
          es: 'Años de Dirección Creativa',
          ar: 'سنوات في الإدارة الإبداعية',
        },
      },
      scope: {
        value: '360°',
        label: {
          fr: 'Identité, Campagne & Digital',
          en: 'Identity, Campaign & Digital',
          es: 'Identidad, Campaña y Digital',
          ar: 'هوية، حملات وتجارب رقمية',
        },
      },
      exhibitions: {
        value: 'Art & Jazz',
        label: {
          fr: 'Expositions & Monographies',
          en: 'Exhibitions & Monographs',
          es: 'Exposiciones y Monografías',
          ar: 'معارض ودراسات أحادية',
        },
      },
      precision: {
        value: {
          fr: 'Haute Précision',
          en: 'High Precision',
          es: 'Alta Precisión',
          ar: 'دقة فائقة',
        },
        label: {
          fr: 'Typographie & Métrique Visuelle',
          en: 'Typography & Visual Metrology',
          es: 'Tipografía y Métrica Visual',
          ar: 'تايبوغرافي ومقاييس بصرية',
        },
      },
    },
  },

  projects: {
    eyebrow: {
      fr: '01 / TRAVAUX & RÉALISATIONS COMPLÈTES (12)',
      en: '01 / ALL WORKS & CASE STUDIES (12)',
      es: '01 / PROYECTOS Y REALIZACIONES COMPLETAS (12)',
      ar: '01 / كافة الأعمال والمشاريع الكاملة (12)',
    },
    title: {
      fr: 'Les 12 Projets & Directions',
      en: 'All 12 Projects & Directions',
      es: 'Los 12 Proyectos y Direcciones',
      ar: 'المشاريع والاتجاهات الإبداعية الـ12',
    },
    subtitle: {
      fr: "L’ensemble des 12 études de cas issues de Behance. Cliquez sur la grande photo de chaque projet pour accéder directement à sa page Behance.",
      en: 'The complete set of 12 case studies from Behance. Click the large photo of any project to view it directly on Behance.',
      es: 'La colección completa de 12 casos de estudio en Behance. Haga clic en la imagen de cada proyecto para abrirlo directamente en Behance.',
      ar: 'المجموعة الكاملة للمشاريع الـ12 المنشورة على بيهانس. انقر على الصورة الكبرى لأي مشروع للاطلاع عليه مباشرة على بيهانس.',
    },
    viewLabel: {
      fr: 'Affichage :',
      en: 'View :',
      es: 'Vista :',
      ar: 'طريقة العرض :',
    },
    views: {
      editorial: { fr: 'Éditorial', en: 'Editorial', es: 'Editorial', ar: 'تحريري' },
      grid: { fr: 'Grille', en: 'Grid', es: 'Cuadrícula', ar: 'شبكة' },
      index: { fr: 'Index', en: 'Index', es: 'Índice', ar: 'فهرس' },
    },
    categories: {
      all: { fr: 'Tous les Travaux', en: 'All Works', es: 'Todos los Trabajos', ar: 'جميع الأعمال' },
      'direction-artistique': { fr: 'Direction Artistique', en: 'Art Direction', es: 'Dirección Artística', ar: 'الإدارة الفنية' },
      'identite-branding': { fr: 'Identité & Branding', en: 'Identity & Branding', es: 'Identidad y Branding', ar: 'الهوية والعلامة التجارية' },
      'photographie-campagne': { fr: 'Photographie & Campagne', en: 'Photography & Campaign', es: 'Fotografía y Campaña', ar: 'التصوير والحملات' },
      'digital-experience': { fr: 'Digital & Expérience', en: 'Digital Experience', es: 'Experiencia Digital', ar: 'التجارب الرقمية' },
    },
    card: {
      openBehance: {
        fr: 'Ouvrir ce projet sur Behance',
        en: 'Open project on Behance',
        es: 'Abrir este proyecto en Behance',
        ar: 'فتح هذا المشروع على بيهانس',
      },
      viewOnBehance: {
        fr: 'Consulter le projet sur Behance',
        en: 'View project on Behance',
        es: 'Ver proyecto en Behance',
        ar: 'معاينة المشروع على بيهانس',
      },
      client: { fr: 'Client', en: 'Client', es: 'Cliente', ar: 'العميل' },
      role: { fr: 'Rôle', en: 'Role', es: 'Rol', ar: 'الدور' },
      caseStudy: { fr: 'Étude de Cas', en: 'Case Study', es: 'Caso de Estudio', ar: 'دراسة المشروع' },
    },
    index: {
      project: { fr: 'Projet', en: 'Project', es: 'Proyecto', ar: 'المشروع' },
      discipline: { fr: 'Discipline', en: 'Discipline', es: 'Disciplina', ar: 'المجال' },
      client: { fr: 'Client', en: 'Client', es: 'Cliente', ar: 'العميل' },
      year: { fr: 'Année', en: 'Year', es: 'Año', ar: 'السنة' },
      view: { fr: 'Consulter', en: 'View', es: 'Ver', ar: 'معاينة' },
    },
    archive: {
      text: {
        fr: 'Archive étendue comprenant des dizaines de projets, croquis et recherches de marque.',
        en: 'Extended archive including dozens of case studies, sketches, and brand inquiries.',
        es: 'Archivo ampliado que incluye docenas de proyectos, bocetos e investigaciones de marca.',
        ar: 'أرشيف ممتد يضم عشرات المشاريع والمسودات والأبحاث البصرية للعلامات.',
      },
      button: {
        fr: 'Consulter le Portfolio Behance',
        en: 'Explore Full Behance Portfolio',
        es: 'Consultar Portafolio en Behance',
        ar: 'استكشف الملف الكامل على بيهانس',
      },
    },
  },

  manifesto: {
    eyebrow: {
      fr: '02 / MANIFESTE DE DIRECTION',
      en: '02 / DIRECTION MANIFESTO',
      es: '02 / MANIFIESTO DE DIRECCIÓN',
      ar: '02 / بيان التوجه الإبداعي',
    },
    title1: {
      fr: 'Le vrai sens ',
      en: 'The true essence ',
      es: 'El verdadero sentido ',
      ar: 'المعنى الحقيقي ',
    },
    titleHighlight: {
      fr: 'de la création',
      en: 'of creation',
      es: 'de la creación',
      ar: 'للإبداع',
    },
    quote: {
      fr: "« Créer n'est pas décorer le monde. C'est dépouiller la forme jusqu'à ce qu'il ne reste que la pureté du sentiment. Le design sans âme n'est que du bruit. »",
      en: '“To create is not to decorate the world. It is to strip away form until nothing remains but the purity of sentiment. Design without soul is merely noise.”',
      es: '«Crear no es decorar el mundo. Es despojar la forma hasta que no quede más que la pureza del sentimiento. El diseño sin alma es solo ruido.»',
      ar: '«الإبداع ليس تزيينًا للعالم، بل هو تجريد للشكل حتى لا يبقى سوى نقاء الشعور. التصميم الخالي من الروح ليس سوى ضجيج عابر.»',
    },
    cite: {
      fr: "Mehdi Harzallah — Note d'Intention",
      en: "Mehdi Harzallah — Artist's Statement",
      es: 'Mehdi Harzallah — Declaración de Intenciones',
      ar: 'مهدي حرز الله — بيان الرؤية والنية',
    },
    p1: {
      fr: "À une époque saturée d'images synthétiques consommées en un battement de cil, la direction créative doit redevenir un acte de courage : celui de ralentir, d'oser le silence et d'exiger l'excellence de chaque proportion.",
      en: 'In an era saturated with synthetic imagery consumed in the blink of an eye, creative direction must once again become an act of courage: the audacity to slow down, to command silence, and to demand uncompromising precision in every proportion.',
      es: 'En una época saturada de imágenes sintéticas consumidas en un abrir y cerrar de ojos, la dirección creativa debe volver a ser un acto de valentía: el atrevimiento de frenar, atreverse al silencio y exigir la excelencia en cada proporción.',
      ar: 'في عصر باتت تغمره الصور الاصطناعية السريعة التي تُستهلك في غمضة عين، يجب أن تعود الإدارة الإبداعية عملاً شجاعًا: شجاعة التمهل، واعتناق الصمت، وفرض أرقى درجات التناغم في كل تفصيل.',
    },
    p2: {
      fr: "Mon travail s'articule autour de quatre principes fondamentaux qui guident chaque identité de marque, chaque cadre photographique et chaque système interactif.",
      en: 'My work revolves around four fundamental tenets that guide every brand identity, every photographic frame, and every interactive system.',
      es: 'Mi trabajo se articula en torno a cuatro principios fundamentales que guían cada identidad de marca, cada encuadre fotográfico y cada sistema interactivo.',
      ar: 'يرتكز عملي على أربعة مبادئ تأسيسية ترشد وتلهم كل هوية علامة تجارية، وكل إطار فوتوغرافي، وكل نظام تفاعلي.',
    },
    pillarBadge: {
      fr: "Principe Fondateur d'Atelier",
      en: 'Foundational Atelier Principle',
      es: 'Principio Fundacional del Estudio',
      ar: 'مبدأ تأسيسي للأتيليه',
    },
  },

  about: {
    eyebrow: {
      fr: '03 / PARCOURS & MÉTIER',
      en: '03 / TRAJECTORY & CRAFT',
      es: '03 / TRAYECTORIA Y OFICIO',
      ar: '03 / المسار المهني والحرفة',
    },
    subtitle: {
      fr: 'Directeur Créatif & Senior Art Director',
      en: 'Creative Director & Senior Art Director',
      es: 'Director Creativo y Director de Arte Senior',
      ar: 'مدير إبداعي ومدير فني أول',
    },
    atelier: {
      fr: 'Atelier & Studio',
      en: 'Atelier & Studio',
      es: 'Taller y Estudio',
      ar: 'المرسم والأتيليه',
    },
    views: {
      fr: 'vues Behance',
      en: 'Behance views',
      es: 'vistas en Behance',
      ar: 'مشاهدة على بيهانس',
    },
    appreciations: {
      fr: 'appréciations',
      en: 'appreciations',
      es: 'apreciaciones',
      ar: 'إعجاب وتقدير',
    },
    quote: {
      fr: "« Réconcilier la poésie de l'image avec la clarté stratégique d'une grande campagne de marque. »",
      en: '“Reconciling the poetry of the image with the strategic clarity of a global brand campaign.”',
      es: '«Reconciliar la poesía de la imagen con la claridad estratégica de una gran campaña de marca.»',
      ar: '«التوفيق بين شاعرية الصورة والوضوح الاستراتيجي لحملة كبرى للعلامة التجارية.»',
    },
    p1: {
      fr: "Directeur Créatif et Senior Art Director chevronné, j'ai forgé ma vision au sein d'agences internationales de premier plan telles que TBWA, MediaNet, JWT (J. Walter Thompson), Tracy Publicis et Havas Worldwide. J'accompagne les marques emblématiques dans la conception de campagnes publicitaires 360°, d'identités visuelles mémorables et de stratégies de contenu impactantes.",
      en: 'Seasoned Creative Director and Senior Art Director, I forged my vision within leading global agencies such as TBWA, MediaNet, JWT (J. Walter Thompson), Tracy Publicis, and Havas Worldwide. I partner with iconic brands to architect 360° advertising campaigns, memorable visual identities, and high-impact brand storytelling.',
      es: 'Director Creativo y Director de Arte Senior con amplia experiencia, he forjado mi visión en agencias internacionales líderes como TBWA, MediaNet, JWT (J. Walter Thompson), Tracy Publicis y Havas Worldwide. Acompaño a marcas emblemáticas en el desarrollo de campañas publicitarias 360°, identidades visuales memorables y estrategias de contenido de alto impacto.',
      ar: 'مدير إبداعي ومدير فني أول متمرس، صقلت رؤيتي الإبداعية ضمن كبرى الوكالات العالمية مثل TBWA، وMediaNet، وJWT (J. Walter Thompson)، وTracy Publicis، وHavas Worldwide. أرافق كبرى العلامات التجارية في ابتكار حملات إعلانية متكاملة 360 درجة، وهويات بصرية راسخة واستراتيجيات محتوى مؤثرة.',
    },
    p2: {
      fr: "Mon travail s’étend de grandes campagnes automobiles pour Mercedes-Benz aux causes humanitaires poignantes (Roche Tunisie, Association Enfant de Lune), jusqu’aux lancements de produits de grande consommation (Président, Fruzi, Golden Chips, Agil Energy).",
      en: 'My work spans flagship automotive campaigns for Mercedes-Benz to poignant humanitarian advocacy (Roche Tunisia, Moonchild Association), through to national consumer goods launches (Président, Fruzi, Golden Chips, Agil Energy).',
      es: 'Mi trabajo abarca desde importantes campañas automovilísticas para Mercedes-Benz hasta causas humanitarias conmovedoras (Roche Tunisie, Asociación Enfant de Lune), pasando por lanzamientos de productos de gran consumo (Président, Fruzi, Golden Chips, Agil Energy).',
      ar: 'يمتد عملي من كبرى الحملات الإعلانية لقطاع السيارات لمرسيدس بنز، إلى القضايا الإنسانية المؤثرة (روش تونس، جمعية أطفال القمر)، وصولاً إلى إطلاق المنتجات الاستهلاكية الوطنية (بريزيدون، فروزي، جولدن شيبس، عجيل للطاقة).',
    },
    p3: {
      fr: "Chaque projet est conçu avec une exigence artisanale : équilibre typographique millimétré, vérité de la lumière photographique, et narration authentique qui éveille l’émotion sans artifice.",
      en: 'Every project is crafted with artisanal precision: millimetric typographic balance, photographic sincerity, and authentic storytelling that evokes pure resonance without superficial gimmicks.',
      es: 'Cada proyecto se diseña con una exigencia artesanal: equilibrio tipográfico milimétrico, verdad de la luz fotográfica y narración auténtica que despierta la emoción sin artificios.',
      ar: 'يُصمم كل مشروع بعناية حرفية دقيقة: توازن تايبوغرافي متقن بالمليمتر، إضاءة فوتوغرافية صادقة، وسرد قصصي أصيل يوقظ المشاعر دون تصنع.',
    },
    trajectory: {
      fr: 'Parcours en Agences & Postes Clés',
      en: 'Agency Trajectory & Key Positions',
      es: 'Trayectoria en Agencias y Cargos Clave',
      ar: 'المسار المهني والمناصب الرئيسية في الوكالات',
    },
    current: {
      fr: 'Actuel',
      en: 'Current',
      es: 'Actual',
      ar: 'حاليًا',
    },
    practiceEyebrow: {
      fr: "03.1 / DOMAINES D'INTERVENTION",
      en: '03.1 / PRACTICE AREAS',
      es: '03.1 / ÁREAS DE ESPECIALIDAD',
      ar: '03.1 / مجالات التخصص والعمل',
    },
    practiceTitle: {
      fr: "Expertise & Métiers de l'Atelier",
      en: 'Expertise & Studio Services',
      es: 'Especialidades y Servicios del Estudio',
      ar: 'الخبرات والخدمات الإبداعية للأتيليه',
    },
    collabEyebrow: {
      fr: '03.2 / COLLABORATIONS & MAISONS',
      en: '03.2 / COLLABORATIONS & HOUSES',
      es: '03.2 / COLABORACIONES Y MARCAS',
      ar: '03.2 / التعاونات والعلامات البارزة',
    },
  },

  contact: {
    eyebrow: {
      fr: '04 / INITIALISER UN MANDAT',
      en: '04 / COMMISSION & INQUIRY',
      es: '04 / INICIAR UN PROYECTO',
      ar: '04 / بدء مشروع أو استشارة',
    },
    title1: {
      fr: 'Initier un ',
      en: 'Initiate a ',
      es: 'Iniciar un ',
      ar: 'بدء ',
    },
    titleHighlight: {
      fr: 'dialogue',
      en: 'dialogue',
      es: 'diálogo',
      ar: 'حوار إبداعي',
    },
    description: {
      fr: "Disponible pour des directions de création intégrales, le design d'identités d'exception, des séries photographiques et des mandats de conseil sélectifs.",
      en: 'Available for comprehensive creative direction, luxury identity design, bespoke photography monographs, and selective strategic advisory.',
      es: 'Disponible para dirección creativa integral, diseño de identidades exclusivas, series fotográficas y consultoría estratégica selectiva.',
      ar: 'متاح لإدارة الإبداع الشاملة، وتصميم الهويات البصرية الاستثنائية، والمجموعات الفوتوغرافية، والاستشارات الإبداعية الانتقائية.',
    },
    directEmail: {
      fr: 'Courriel Direct',
      en: 'Direct Email',
      es: 'Correo Directo',
      ar: 'البريد الإلكتروني المباشر',
    },
    copyBtn: {
      fr: "Copier l'adresse",
      en: 'Copy address',
      es: 'Copiar dirección',
      ar: 'نسخ البريد',
    },
    copied: {
      fr: 'Adresse copiée',
      en: 'Email copied',
      es: 'Dirección copiada',
      ar: 'تم نسخ البريد',
    },
    writeEmail: {
      fr: 'Écrire',
      en: 'Write email',
      es: 'Escribir',
      ar: 'مراسلة',
    },
    locationLabel: {
      fr: 'Atelier',
      en: 'Atelier',
      es: 'Estudio',
      ar: 'الاستوديو',
    },
    mobility: {
      fr: 'Mobilité Internationale',
      en: 'International Mobility',
      es: 'Movilidad Internacional',
      ar: 'جاهزية للتنقل الدولي',
    },
    timezoneTitle: {
      fr: 'Fuseau',
      en: 'Timezone',
      es: 'Zona Horaria',
      ar: 'التوقيت',
    },
    responseNotice: {
      fr: 'Réponse sous 24-48h',
      en: 'Reply within 24-48h',
      es: 'Respuesta en 24-48h',
      ar: 'الرد خلال 24-48 ساعة',
    },
    formSuccessTitle: {
      fr: 'Message transmis avec succès',
      en: 'Message successfully received',
      es: 'Mensaje transmitido con éxito',
      ar: 'تم استلام الرسالة بنجاح',
    },
    formSuccessDesc: {
      fr: 'Merci pour votre intérêt. Mehdi Harzallah examinera votre proposition et vous répondra dans les plus brefs délais.',
      en: 'Thank you for your interest. Mehdi Harzallah will review your proposal and respond promptly.',
      es: 'Gracias por su interés. Mehdi Harzallah revisará su propuesta y le responderá a la brevedad.',
      ar: 'شكرًا لاهتمامكم. سيقوم مهدي حرز الله بمراجعة مقترحكم والرد في أقرب وقت ممكن.',
    },
    anotherInquiry: {
      fr: 'Envoyer une autre demande',
      en: 'Send another inquiry',
      es: 'Enviar otra solicitud',
      ar: 'إرسال طلب آخر',
    },
    formEyebrow: {
      fr: 'Formulaire de Contact',
      en: 'Inquiry Form',
      es: 'Formulario de Contacto',
      ar: 'نموذج التواصل',
    },
    formVision: {
      fr: 'Parlez-moi de votre vision',
      en: 'Tell me about your vision',
      es: 'Cuénteme sobre su visión',
      ar: 'شاركني رؤيتك الإبداعية',
    },
    locations: {
      fr: 'Tunis • Marrakech • Paris (Sur rendez-vous)',
      en: 'Tunis • Marrakech • Paris (By appointment)',
      es: 'Túnez • Marrakech • París (Con cita previa)',
      ar: 'تونس • مراكش • باريس (بموعد مسبق)',
    },
    timezone: {
      fr: 'Fuseau Horaire',
      en: 'Timezone',
      es: 'Zona Horaria',
      ar: 'المنطقة الزمنية',
    },
    responseTime: {
      fr: 'Délai de réponse : sous 24 à 48 heures',
      en: 'Response time: within 24 to 48 hours',
      es: 'Tiempo de respuesta: 24 a 48 horas',
      ar: 'مدة الرد: خلال 24 إلى 48 ساعة',
    },
    formTitle: {
      fr: 'Transmettre une proposition de mandat',
      en: 'Submit an inquiry',
      es: 'Enviar propuesta de encargo',
      ar: 'إرسال مقترح مشروع أو تعاون',
    },
    name: {
      fr: 'Votre Nom / Maison',
      en: 'Your Name / Organization',
      es: 'Su Nombre / Empresa',
      ar: 'الاسم / المؤسسة',
    },
    namePlaceholder: {
      fr: 'ex. Maison de Création, Studio...',
      en: 'e.g. Design Studio, Brand...',
      es: 'ej. Estudio Creativo, Marca...',
      ar: 'مثال: دار التصميم، الشركة...',
    },
    email: {
      fr: 'Votre Courriel Professionnel',
      en: 'Your Business Email',
      es: 'Su Correo Profesional',
      ar: 'البريد الإلكتروني المهني',
    },
    discipline: {
      fr: 'Discipline Principale',
      en: 'Primary Discipline',
      es: 'Disciplina Principal',
      ar: 'المجال الإبداعي المطلوب',
    },
    disciplines: {
      'direction-creative': {
        fr: 'Direction Créative Globale (360°)',
        en: 'Global Creative Direction (360°)',
        es: 'Dirección Creativa Global (360°)',
        ar: 'إدارة إبداعية شاملة (360°)',
      },
      'identite-visuelle': {
        fr: 'Identité de Marque & Branding',
        en: 'Brand Identity & Design System',
        es: 'Identidad de Marca y Branding',
        ar: 'هوية العلامة التجارية ونظام التصميم',
      },
      'campagne-publicitaire': {
        fr: 'Campagne Publicitaire & OOH',
        en: 'Advertising Campaign & Billboard',
        es: 'Campaña Publicitaria y OOH',
        ar: 'حملة إعلانية ولوحات كبرى',
      },
      'photographie-auteur': {
        fr: 'Série Photographique & Direction Artistique',
        en: 'Author Photography & Art Direction',
        es: 'Fotografía de Autor y Dirección de Arte',
        ar: 'تصوير فوتوغرافي مؤلف وإدارة فنية',
      },
      'digital-uiux': {
        fr: 'Expérience Digitale & Direction Web',
        en: 'Digital Experience & Web Direction',
        es: 'Experiencia Digital y Dirección Web',
        ar: 'تجربة رقمية وإدارة تصميم الويب',
      },
      'conseil-direction': {
        fr: 'Conseil Stratégique & Atelier Créatif',
        en: 'Strategic Advisory & Creative Atelier',
        es: 'Asesoría Estratégica y Taller Creativo',
        ar: 'استشارات استراتيجية وورش عمل',
      },
    },
    message: {
      fr: 'Description du Projet & Calendrier Estimé',
      en: 'Project Brief & Timeline',
      es: 'Descripción del Proyecto y Plazos',
      ar: 'تفاصيل المشروع والجدول الزمني التقديري',
    },
    messagePlaceholder: {
      fr: 'Détaillez vos objectifs de marque, l’envergure du projet et les échéances clés...',
      en: 'Detail your brand objectives, project scope, and key deliverables...',
      es: 'Detalle sus objetivos de marca, el alcance del proyecto y las fechas clave...',
      ar: 'يرجى توضيح أهداف علامتك التجارية، ونطاق المشروع، والمواعيد المستهدفة...',
    },
    submit: {
      fr: 'Transmettre le Mandat',
      en: 'Send Commission Inquiry',
      es: 'Enviar Solicitud',
      ar: 'إرسال تفاصيل المشروع',
    },
    success: {
      fr: 'Votre message a été transmis avec succès. Une réponse confidentielle vous parviendra sous 24 à 48 heures.',
      en: 'Your message was transmitted successfully. A confidential reply will reach you within 24 to 48 hours.',
      es: 'Su mensaje ha sido enviado con éxito. Recibirá una respuesta confidencial en un plazo de 24 a 48 horas.',
      ar: 'تم إرسال رسالتكم بنجاح. سيتم الرد عليكم بسرية واهتمام خلال 24 إلى 48 ساعة.',
    },
  },

  footer: {
    role: {
      fr: 'Directeur Créatif & Directeur Artistique',
      en: 'Creative Director & Art Director',
      es: 'Director Creativo y Director de Arte',
      ar: 'مدير إبداعي ومدير فني',
    },
    status: {
      fr: 'STATUT',
      en: 'STATUS',
      es: 'ESTADO',
      ar: 'الحالة',
    },
    active: {
      fr: 'Actif',
      en: 'Active',
      es: 'Activo',
      ar: 'متاح ونشط',
    },
    top: {
      fr: 'Haut de page',
      en: 'Back to top',
      es: 'Volver arriba',
      ar: 'العودة للأعلى',
    },
    copyright: {
      fr: 'Direction artistique & conception : Mehdi Harzallah. Tous droits réservés.',
      en: 'Art direction & design: Mehdi Harzallah. All rights reserved.',
      es: 'Dirección artística y diseño: Mehdi Harzallah. Todos los derechos reservados.',
      ar: 'الإدارة الفنية والتصميم: مهدي حرز الله. جميع الحقوق محفوظة.',
    },
  },

  modal: {
    linkCopied: {
      fr: 'Lien copié',
      en: 'Link copied',
      es: 'Enlace copiado',
      ar: 'تم نسخ الرابط',
    },
    share: {
      fr: 'Partager',
      en: 'Share',
      es: 'Compartir',
      ar: 'مشاركة',
    },
    viewOnBehance: {
      fr: 'Consulter sur Behance',
      en: 'View on Behance',
      es: 'Ver en Behance',
      ar: 'معاينة على بيهانس',
    },
    officialLink: {
      fr: 'Lien officiel Behance',
      en: 'Official Behance project link',
      es: 'Enlace oficial del proyecto en Behance',
      ar: 'الرابط الرسمي للمشروع على بيهانس',
    },
    statement: {
      fr: "Note d'Intention & Vision",
      en: 'Statement of Intent & Vision',
      es: 'Declaración de Intenciones y Visión',
      ar: 'بيان الرؤية والنية الإبداعية',
    },
    concept: {
      fr: 'Concept Créatif & Stratégie Artistique',
      en: 'Creative Concept & Artistic Strategy',
      es: 'Concepto Creativo y Estrategia Artística',
      ar: 'المفهوم الإبداعي والاستراتيجية الفنية',
    },
    deliverables: {
      fr: 'Livrables & Déploiement du Projet',
      en: 'Deliverables & Project Execution',
      es: 'Entregables y Ejecución del Proyecto',
      ar: 'المخرجات والتنفيذ الإبداعي',
    },
    specs: {
      fr: 'Spécifications Visuelles & Métriques',
      en: 'Visual Specs & Metrology',
      es: 'Especificaciones Visuales y Métricas',
      ar: 'المواصفات البصرية والمقاييس',
    },
    typography: {
      fr: 'Typographie de Référence',
      en: 'Reference Typography',
      es: 'Tipografía de Referencia',
      ar: 'التايبوغرافي المعتمد',
    },
    palette: {
      fr: 'Palette Chromatique Signature',
      en: 'Signature Chromatic Palette',
      es: 'Paleta Cromática Distintiva',
      ar: 'لوحة الألوان المميزة',
    },
    prev: {
      fr: 'Projet Précédent',
      en: 'Previous Project',
      es: 'Proyecto Anterior',
      ar: 'المشروع السابق',
    },
    next: {
      fr: 'Projet Suivant',
      en: 'Next Project',
      es: 'Proyecto Siguiente',
      ar: 'المشروع التالي',
    },
    prevMobile: {
      fr: 'Précédent',
      en: 'Previous',
      es: 'Anterior',
      ar: 'السابق',
    },
    nextMobile: {
      fr: 'Suivant',
      en: 'Next',
      es: 'Siguiente',
      ar: 'التالي',
    },
    role: {
      fr: 'Rôle',
      en: 'Role',
      es: 'Rol',
      ar: 'الدور',
    },
    client: {
      fr: 'Client',
      en: 'Client',
      es: 'Cliente',
      ar: 'العميل',
    },
    team: {
      fr: 'Équipe & Collaborateurs',
      en: 'Team & Collaborators',
      es: 'Equipo y Colaboradores',
      ar: 'فريق العمل والمتعاونون',
    },
    openOnBehance: {
      fr: 'Ouvrir ce projet sur Behance',
      en: 'Open project on Behance',
      es: 'Abrir este proyecto en Behance',
      ar: 'فتح المشروع على بيهانس',
    },
  },
};
