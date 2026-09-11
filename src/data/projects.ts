import { Project, ManifestoPillar } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'fruzi-relaunch-campaign',
    title: 'Fruzi — Relaunch Campaign',
    subtitle: {
      fr: 'Campagne globale de relance de marque & direction artistique pétillante',
      en: 'Global Brand Relaunch Campaign & Vibrant Art Direction',
      es: 'Campaña global de relanzamiento de marca y dirección artística vibrante',
      ar: 'حملة شاملة لإعادة إطلاق العلامة التجارية وإدارة فنية حيوية',
    },
    client: 'Fruzi',
    year: '2026',
    category: 'direction-artistique',
    categoryLabel: {
      fr: 'Direction Artistique & Campagne',
      en: 'Art Direction & Campaign',
      es: 'Dirección de Arte y Campaña',
      ar: 'الإدارة الفنية والحملات',
    },
    featured: true,
    coverImage: 'https://mir-s3-cdn-cf.behance.net/projects/original/66a53c252095251.Y3JvcCwxMDgwLDg0NCwwLDI1MQ.png',
    gallery: [
      {
        url: 'https://mir-s3-cdn-cf.behance.net/projects/original/66a53c252095251.Y3JvcCwxMDgwLDg0NCwwLDI1MQ.png',
        caption: {
          fr: 'Key Visual officiel — Dynamisme fruitier et explosion sensorielle de la nouvelle formule.',
          en: 'Official Key Visual — Fruity vibrancy and sensory explosion of the new recipe.',
          es: 'Key Visual oficial: vitalidad frutal y explosión sensorial de la nueva fórmula.',
          ar: 'المفتاح البصري الرسمي — حيوية الفاكهة والانفجار الحسي للتركيبة الجديدة.',
        }
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/66a53c252095251.Y3JvcCwxMDgwLDg0NCwwLDI1MQ.png',
        caption: {
          fr: 'Déclinaison packaging & étiquetage pop sur fond contrasté.',
          en: 'Pop packaging & labeling adaptation on contrasted backdrop.',
          es: 'Adaptación de packaging y etiquetado pop sobre fondo contrastado.',
          ar: 'تطبيقات التغليف والملصقات البوب على خلفية متباينة.',
        }
      }
    ],
    role: {
      fr: 'Direction Artistique, Stratégie Créative & Campagne 360°',
      en: 'Art Direction, Creative Strategy & 360° Campaign',
      es: 'Dirección de Arte, Estrategia Creativa y Campaña 360°',
      ar: 'الإدارة الفنية والاستراتيجية الإبداعية وحملة 360 درجة',
    },
    statement: {
      fr: 'Redéfinir l’énergie fruitée à travers un univers graphique solaire, pop et mémorable qui reconnecte la marque avec la jeune génération.',
      en: 'Redefining fruity vitality through a sunny, pop, and memorable visual language that bridges the brand with the next generation.',
      es: 'Redefinir la vitalidad frutal a través de un lenguaje visual solar, pop y memorable que reconecta la marca con las nuevas generaciones.',
      ar: 'إعادة صياغة الطاقة المنعشة للفواكه من خلال لغة بصرية شمسية وبوب مميزة تربط العلامة التجارية بجيل الشباب.',
    },
    concept: {
      fr: 'La campagne de relance de Fruzi s’articule autour d’une promesse d’intensité et de fraîcheur immédiate. Le traitement artistique associe des aplats de couleurs saturées, une typographie expressive aux empattements affirmés et un stylisme visuel mettant en scène les fruits gorgés de jus dans un élan cinétique.',
      en: 'The Fruzi relaunch campaign hinges on immediate intensity and thirst-quenching freshness. The visual execution blends high-saturation color blocks, punchy expressive typography, and kinetic food photography capturing fresh fruit in mid-air motion.',
      es: 'La campaña de relanzamiento de Fruzi se basa en la intensidad y frescura inmediata. La ejecución visual combina bloques de color saturados, tipografía expresiva y fotografía en movimiento.',
      ar: 'تتمحور حملة إعادة إطلاق فروزي حول وعد بالانتعاش الفوري والحيوية. يجمع المعالجة الفنية بين مساحات لونية مشبعة، وتايبوغرافي تعبيري، وتصوير حركي للفواكه الطازجة.',
    },
    deliverables: {
      fr: [
        'Direction artistique globale de la campagne de relance',
        'Campagne d’affichage national (OOH) 4x3 et mobilier urbain',
        'Direction du shooting produit & packshots publicitaires',
        'Déclinaisons digitales animées (Social Media, Display)'
      ],
      en: [
        'Global relaunch campaign art direction',
        'National billboard (OOH) and urban transit campaign',
        'Product photoshoot & advertising packshot direction',
        'Motion social media assets & digital display formats'
      ],
      es: [
        'Dirección de arte global de la campaña de relanzamiento',
        'Campaña nacional de vallas publicitarias (OOH) y mobiliario urbano',
        'Dirección de sesión fotográfica de producto y packshots publicitarios',
        'Contenidos digitales animados para redes sociales y display'
      ],
      ar: [
        'الإدارة الفنية الشاملة لحملة إعادة الإطلاق',
        'حملة إعلانات طرقية وطنية وشاشات المدينة',
        'إدارة جلسات تصوير المنتجات والإعلانات التجارية',
        'تصاميم رقمية ومتحركة لمنصات التواصل الاجتماعي'
      ]
    },
    typography: 'Futura Bold & Neue Haas Grotesk',
    palette: ['#E84824', '#FFAA00', '#189B48', '#FFFFFF'],
    behanceUrl: 'https://www.behance.net/gallery/252095251/Fruzi-Relaunch-Campaign',
    collaborators: ['riahi montassar', 'Hakim Manaa', 'Khalil Ayed', 'Emna Nouralhouda Bettaïeb', 'Mehdi Hrz', 'Emna Ben Salah'],
    stats: {
      views: 234,
      appreciations: 17
    }
  },
  {
    id: 'president-gouter-carre',
    title: 'Président Goûter Carré',
    subtitle: {
      fr: 'Campagne de lancement produit & univers gourmand familial pour Président',
      en: 'Product Launch Campaign & Gourmet Snacking World for Président',
      es: 'Campaña de lanzamiento de producto y universo gastronómico familiar para Président',
      ar: 'حملة إطلاق المنتج وعالم التسالي العائلية لعلامة بريزيدون',
    },
    client: 'Président (Lactalis)',
    year: '2026',
    category: 'direction-artistique',
    categoryLabel: {
      fr: 'Direction Artistique & Packaging',
      en: 'Art Direction & Packaging',
      es: 'Dirección de Arte y Packaging',
      ar: 'الإدارة الفنية والتغليف',
    },
    featured: true,
    coverImage: 'https://mir-s3-cdn-cf.behance.net/projects/original/721331248243927.Y3JvcCwxMDIyLDgwMCwxODcsMA.jpg',
    gallery: [
      {
        url: 'https://mir-s3-cdn-cf.behance.net/projects/original/721331248243927.Y3JvcCwxMDIyLDgwMCwxODcsMA.jpg',
        caption: {
          fr: 'Key Visual Président Goûter Carré — La gourmandise croustillante au cœur du goûter.',
          en: 'Président Goûter Carré Key Visual — Crispy snack pleasure at teatime.',
          es: 'Key Visual Président Goûter Carré — Placer crujiente para toda la familia.',
          ar: 'المفتاح البصري لبريزيدون غوتيه كاريه — متعة القرمشة اللذيذة في وقت الاستراحة.',
        }
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/721331248243927.Y3JvcCwxMDIyLDgwMCwxODcsMA.jpg',
        caption: {
          fr: 'Mise en scène packaging & univers chromatique rouge et doré de la marque.',
          en: 'Packaging staging & signature red and gold chromatic branding.',
          es: 'Puesta en escena del packaging y universo cromático rojo y dorado.',
          ar: 'تنسيق التغليف والألوان المميزة الحمراء والذهبية للعلامة.',
        }
      }
    ],
    role: {
      fr: 'Direction Artistique, Conception Visuelle & Campagne Publicitaire',
      en: 'Art Direction, Visual Concept & Advertising Campaign',
      es: 'Dirección de Arte, Concepto Visual y Campaña Publicitaria',
      ar: 'الإدارة الفنية والتصور البصري والحملة الإعلانية',
    },
    statement: {
      fr: 'Transformer la pause goûter en un rituel croustillant, généreux et complice qui rassemble petits et grands.',
      en: 'Transforming snack time into a crispy, generous, and joyful family ritual across all generations.',
      es: 'Transformar la merienda en un ritual crujiente, generoso y cercano que une a toda la familia.',
      ar: 'تحويل استراحة الشاي والوجبات الخفيفة إلى طقس مقرمش وغني يجمع العائلة والأجيال.',
    },
    concept: {
      fr: 'Pour le nouveau produit Goûter Carré de la prestigieuse marque Président, la direction artistique s’est attachée à sublimer la texture du produit, la fonte du fromage et le croustillant de la gaufrette. Une photographie culinaire minutieuse, soutenue par une identité typographique chaleureuse et complice.',
      en: 'For the new Goûter Carré by world-renowned brand Président, art direction focused on product texture, melting cheese, and golden wafer crispness. Meticulous food photography supported by warm, reassuring typographic hierarchy.',
      es: 'Para el nuevo Goûter Carré de la prestigiosa marca Président, la dirección de arte realzó la textura del producto, el queso fundido y el barquillo crujiente.',
      ar: 'بالنسبة للمنتج الجديد لعلامة بريزيدون، ركزت الإدارة الفنية على إبراز قوام المنتج والجبن الذائب وقرمشة الويفر مع تصوير طعام عالي الاحترافية.',
    },
    deliverables: {
      fr: [
        'Direction artistique de la campagne 360° de lancement',
        'Stylisme culinaire & direction des prises de vue studio',
        'Affichage national 4x3 & PLV grande distribution',
        'Spots vidéo publicitaires & formats digitaux'
      ],
      en: [
        '360° launch campaign art direction',
        'Culinary styling & commercial studio shoot direction',
        'National billboard network & retail supermarket POS',
        'Commercial video spots & digital campaign formats'
      ],
      es: [
        'Dirección de arte de la campaña 360° de lanzamiento',
        'Estilismo culinario y dirección de fotografía en estudio',
        'Red nacional de vallas publicitarias y material PLV para supermercados',
        'Spots publicitarios en video y formatos digitales'
      ],
      ar: [
        'الإدارة الفنية لحملة الإطلاق المتكاملة 360°',
        'تنسيق الأطعمة وإدارة التصوير في الاستوديو',
        'شبكة إعلانات طرقية وطنية ومواد نقطة البيع للمتاجر الكبرى',
        'مقاطع فيديو إعلانية وتنسيقات رقمية'
      ]
    },
    typography: 'Circular Std & Editorial Serif',
    palette: ['#BE0028', '#F5C518', '#2B1A0E', '#F7F4EA'],
    behanceUrl: 'https://www.behance.net/gallery/248243927/Prsident-Gouter-Carr',
    collaborators: ['Mohamed Ahmed Aounallah', 'Mehdi Hrz', 'Hakim Manaa', 'Khammassi Taieb', 'riahi montassar', 'Mohamed Ali KOUBAA'],
    stats: {
      views: 202,
      appreciations: 17
    }
  },
  {
    id: 'roche-breast-cancer-awareness',
    title: 'Roche Tunisie — Breast Cancer Awareness',
    subtitle: {
      fr: 'Campagne de sensibilisation Octobre Rose à fort engagement émotionnel',
      en: 'Pink October Breast Cancer Awareness & Public Health Campaign',
      es: 'Campaña de concienciación de Octubre Rosa y salud pública con alto impacto emocional',
      ar: 'حملة التوعية بسرطان الثدي لشهر أكتوبر الوردي ذات الأثر الإنساني العميق',
    },
    client: 'Roche Tunisie',
    year: '2025',
    category: 'direction-artistique',
    categoryLabel: {
      fr: 'Direction Artistique & Impact Social',
      en: 'Art Direction & Social Impact',
      es: 'Dirección de Arte e Impacto Social',
      ar: 'الإدارة الفنية والأثر الاجتماعي',
    },
    featured: true,
    coverImage: 'https://mir-s3-cdn-cf.behance.net/projects/original/6ffad9236913449.69ee43974b15d.jpg',
    gallery: [
      {
        url: 'https://mir-s3-cdn-cf.behance.net/projects/original/6ffad9236913449.69ee43974b15d.jpg',
        caption: {
          fr: 'Visuel principal de campagne — Dignité, sororité et clarté du message préventif.',
          en: 'Lead campaign visual — Dignity, sisterhood, and clear preventive messaging.',
          es: 'Visual principal de campaña: dignidad, sororidad y claridad del mensaje preventivo.',
          ar: 'البوستر الرئيسي للحملة — الكرامة والتضامن والوضوح في رسالة الكشف المبكر.',
        }
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/6ffad9236913449.69ee43974b15d.jpg',
        caption: {
          fr: 'Déclinaison affiche institutionnelle et guide de dépistage précoce.',
          en: 'Institutional poster layout and early detection screening guide.',
          es: 'Diseño de cartel institucional y guía de detección temprana.',
          ar: 'تطبيق الملصق المؤسسي ودليل التقصي والتشخيص المبكر.',
        }
      }
    ],
    role: {
      fr: 'Direction Artistique, Concept Narratif & Direction de Campagne',
      en: 'Art Direction, Narrative Concept & Campaign Direction',
      es: 'Dirección de Arte, Concepto Narrativo y Dirección de Campaña',
      ar: 'الإدارة الفنية والتصور السردي وإدارة الحملة',
    },
    statement: {
      fr: 'Briser le tabou du dépistage par la dignité du regard, la grâce du symbole et la force indomptable de la sororité.',
      en: 'Dismantling screening stigmas with dignified gazes, graceful symbolism, and the unstoppable force of sisterhood.',
      es: 'Romper el tabú de la detección temprana con dignidad, simbolismo y la fuerza indomable de la solidaridad.',
      ar: 'كسر حاجز الخوف من الفحص المبكر بنبل النظرة وجمالية الرمز وقوة التضامن الإنساني النسوي.',
    },
    concept: {
      fr: 'Pour Roche Tunisie dans le cadre d’Octobre Rose, le parti pris créatif s’est éloigné du pathos conventionnel pour privilégier l’espoir, le courage et la responsabilité collective. Un travail délicat sur les nuances de rose poudré et de noir profond, offrant aux visages une présence noble et rassurante.',
      en: 'For Roche Tunisia during Pink October, the creative angle intentionally departs from medical gloom, elevating hope, courage, and collective support. Soft powder pinks juxtaposed against deep charcoal tones lend each portrait commanding elegance.',
      es: 'Para Roche Túnez durante Octubre Rosa, la dirección artística se alejó del dramatismo médico para resaltar la esperanza, el valor y la solidaridad colectiva con tonos rosa y carbón.',
      ar: 'لصالح شركة روش تونس خلال أكتوبر الوردي، ابتعد التوجه الفني عن النمطية الطبية ليحتفي بالأمل والشجاعة والتكافل المجتمعي عبر تباين رقيق بين الوردي الناعم والأسود الملكي.',
    },
    deliverables: {
      fr: [
        'Direction artistique de la campagne nationale de sensibilisation',
        'Création du key visual et de la charte de communication Octobre Rose',
        'Capsules vidéo de témoignages & contenus digitaux éducatifs',
        'Supports print pour le corps médical, hôpitaux et cliniques'
      ],
      en: [
        'National public health campaign art direction',
        'Key visual and Pink October awareness identity guideline',
        'Advocacy video vignettes & educational digital content',
        'Printed clinical collateral for healthcare professionals & hospitals'
      ],
      es: [
        'Dirección de arte de la campaña nacional de concienciación',
        'Creación del visual principal e identidad de comunicación de Octubre Rosa',
        'Cápsulas de video testimoniales y contenido educativo digital',
        'Materiales impresos para personal médico, hospitales y clínicas'
      ],
      ar: [
        'الإدارة الفنية للحملة الوطنية للتوعية',
        'ابتكار المفتاح البصري وهوية التواصل لشهر أكتوبر الوردي',
        'فيديوهات توثيقية لشهادات حية ومحتوى رقمي تثقيفي',
        'مطبوعات موجهة للكوادر الطبية والمستشفيات والعيادات'
      ]
    },
    typography: 'PP Neue Montreal & Canela Roman',
    palette: ['#C62D67', '#FCE7F0', '#1C1917', '#E5E5E5'],
    behanceUrl: 'https://www.behance.net/gallery/236913449/Breast-cancer-awareness-campaign-for-ROCHE-TUNISIA',
    collaborators: ['Mehdi Hrz', 'riahi montassar', 'Noor Bousarsar', 'Hakim Manaa'],
    stats: {
      views: 113,
      appreciations: 8
    }
  },
  {
    id: 'colors-of-marrakech',
    title: 'Colors of MARRAKECH',
    subtitle: {
      fr: 'Série photographique mobile — Lumières ocres, textures et ombres médinales',
      en: 'Mobile Photography Series — Ochre Light, Medina Textures & Shadows',
      es: 'Serie de fotografía móvil — Luz ocre, texturas y sombras de la Medina',
      ar: 'سلسلة فوتوغرافية بالهاتف المحمول — أضواء المغرة، ملامس وظلال المدينة العتيقة',
    },
    client: 'Projet d’Auteur / Mehdi Harzallah',
    year: '2026',
    category: 'photographie-campagne',
    categoryLabel: {
      fr: 'Photographie d’Auteur',
      en: 'Author Photography',
      es: 'Fotografía de Autor',
      ar: 'فوتوغرافيا فنية ومستقلة',
    },
    featured: false,
    coverImage: 'https://mir-s3-cdn-cf.behance.net/projects/original/afb0fb246955519.Y3JvcCw3MjgsNTY5LDAsNTA.png',
    gallery: [
      {
        url: 'https://mir-s3-cdn-cf.behance.net/projects/original/afb0fb246955519.Y3JvcCw3MjgsNTY5LDAsNTA.png',
        caption: {
          fr: 'Ruelles de la Médina — Géométrie des tentures et vibrations ocres sous le soleil marocain.',
          en: 'Medina alleyways — Geometry of hanging textiles and ochre vibrations under Moroccan sun.',
          es: 'Callejones de la Medina: geometría de telas y vibraciones ocres bajo el sol marroquí.',
          ar: 'أزقة المدينة العتيقة بمراكش — هندسة المنسوجات واهتزازات المغرة تحت شمس المغرب.',
        }
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/afb0fb246955519.Y3JvcCw3MjgsNTY5LDAsNTA.png',
        caption: {
          fr: 'Ombres portées et matières traditionnelles capturées au smartphone.',
          en: 'Cast shadows and heritage textures captured on mobile.',
          es: 'Sombras proyectadas y texturas tradicionales capturadas con smartphone.',
          ar: 'ظلال ممتدة ومواد تراثية تم التقاطها بعدسة الهاتف المحمول.',
        }
      }
    ],
    role: {
      fr: 'Photographe d’Auteur, Cadrage & Étalonnage Visuel',
      en: 'Fine Art Photographer, Framing & Visual Grading',
      es: 'Fotógrafo de Autor, Encuadre y Calibración Visual',
      ar: 'مصور فوتوغرافي فني، تأطير ومعالجة لونية بصرية',
    },
    statement: {
      fr: 'Explorer la cité ocre par l’instinct immédiat du capteur mobile, captant la géométrie secrète des ruelles et la vibration de la poussière dorée.',
      en: 'Exploring the ochre imperial city through spontaneous mobile framing, capturing intimate geometry and the vibration of golden dust.',
      es: 'Explorar la ciudad ocre mediante el encuadre espontáneo del móvil, captando la geometría íntima y la vibración del polvo dorado.',
      ar: 'استكشاف المدينة الحمراء عبر عفوية عدسة الهاتف، وتوثيق الهندسة السرية للأزقة وتوهج غبار الشمس الذهبي.',
    },
    concept: {
      fr: 'Une déambulation spontanée dans les labyrinthes de Marrakech réalisée exclusivement avec un smartphone. Le projet interroge la capacité du regard photographique à transcender l’outil technique, révélant la noblesse des murs en pisé, les reflets des soies tissées et les silhouettes fugaces.',
      en: 'An intuitive photographic wander through the labyrinthine Medina of Marrakech using solely a smartphone. The study highlights how artistic vision transcends technical hardware, revealing the richness of clay walls and fugitive silhouettes.',
      es: 'Un recorrido intuitivo por la medina de Marrakech utilizando exclusivamente un smartphone. El proyecto demuestra cómo la mirada artística trasciende la herramienta técnica.',
      ar: 'جولة بصرية عفوية في متاهات مدينة مراكش باستخدام الهاتف المحمول حصراً. يبحث المشروع في قدرة العين الإبداعية على تجاوز الأداة التقنية وإبراز بهاء الجدران الطينية.',
    },
    deliverables: {
      fr: [
        'Série photographique d’auteur (32 clichés sélectionnés)',
        'Direction du traitement chromatique et étalonnage mobile',
        'Exposition virtuelle & publication monographique sur Behance',
        'Tirages d’art en édition limitée pour collectionneurs'
      ],
      en: [
        'Author photo collection (32 curated captures)',
        'Chromatic grading & mobile image editing pipeline',
        'Virtual gallery curation & monographic Behance release',
        'Limited-edition archival art prints for collectors'
      ],
      es: [
        'Serie fotográfica de autor (32 imágenes seleccionadas)',
        'Dirección del tratamiento cromático y calibración móvil',
        'Exposición virtual y monografía en Behance',
        'Copias artísticas de archivo en edición limitada para coleccionistas'
      ],
      ar: [
        'سلسلة فوتوغرافية فنية (32 لقطة مختارة)',
        'إدارة المعالجة اللونية والتدريج اللوني بالهاتف',
        'معرض افتراضي وإصدار أفرودة فنية على بيهانس',
        'طبعات فنية أرشيفية محدودة لهواة الاقتناء'
      ]
    },
    typography: 'Cormorant Garamond & Neue Haas Unica',
    palette: ['#B84A39', '#DF8244', '#3E4E59', '#EEDCC8'],
    behanceUrl: 'https://www.behance.net/gallery/246955519/Mobile-Photography-Colors-of-MARRAKECH',
    collaborators: ['Mehdi Hrz'],
    stats: {
      views: 22,
      appreciations: 1
    }
  },
  {
    id: 'enfant-de-lune',
    title: 'ولد القمرة / Enfant de lune',
    subtitle: {
      fr: 'Sensibilisation au Xeroderma Pigmentosum — Enfants de la nuit et de la lune',
      en: 'Xeroderma Pigmentosum Awareness — Children of Night and Moonlight',
      es: 'Concienciación sobre el Xeroderma Pigmentoso — Hijos de la noche y de la luna',
      ar: 'التوعية بمرض أطفال القمر — أبناء الليل ونور القمر',
    },
    client: 'Association Enfant de Lune / Projet Humanitaire',
    year: '2025',
    category: 'photographie-campagne',
    categoryLabel: {
      fr: 'Photographie & Cause Sociale',
      en: 'Photography & Social Cause',
      es: 'Fotografía y Causa Social',
      ar: 'فوتوغرافيا وقضية إنسانية',
    },
    featured: true,
    coverImage: 'https://mir-s3-cdn-cf.behance.net/projects/original/20c004239289329.Y3JvcCwxNzU5LDEzNzYsNTAwLDUy.png',
    gallery: [
      {
        url: 'https://mir-s3-cdn-cf.behance.net/projects/original/20c004239289329.Y3JvcCwxNzU5LDEzNzYsNTAwLDUy.png',
        caption: {
          fr: 'ولد القمرة — Portrait sous visière protectrice anti-UV dans la pénombre bienveillante.',
          en: 'Moonchild — Portrait under anti-UV protective visor in gentle twilight.',
          es: 'Hijo de la Luna — Retrato bajo visera de protección anti-UV en la penumbra.',
          ar: 'ولد القمرة — بورتريه تحت القناع الواقي من الأشعة فوق البنفسجية في عتمة الليل الآمنة.',
        }
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/20c004239289329.Y3JvcCwxNzU5LDEzNzYsNTAwLDUy.png',
        caption: {
          fr: 'Composition poétique entre nuit protectrice et espoir de liberté.',
          en: 'Poetic composition balancing protective nocturnal darkness and yearning for freedom.',
          es: 'Composición poética entre la noche protectora y el anhelo de libertad.',
          ar: 'تكوين شاعري بين ظلام الليل الحامي والتوق إلى الحرية.',
        }
      }
    ],
    role: {
      fr: 'Direction Artistique, Photographie & Scénario Visuel',
      en: 'Art Direction, Photography & Visual Narrative',
      es: 'Dirección de Arte, Fotografía y Narrativa Visual',
      ar: 'الإدارة الفنية والتصوير الفوتوغرافي والسيناريو البصري',
    },
    statement: {
      fr: 'Révéler la poésie et le combat silencieux de ces enfants pour qui la lune est le seul soleil qui ne brûle pas.',
      en: 'Illuminating the silent courage and delicate poetry of children for whom the moon is the only gentle sun.',
      es: 'Revelar la poesía y la lucha silenciosa de estos niños para quienes la luna es el único sol que no quema.',
      ar: 'إبراز الشاعرية والمعاناة الصامتة لهؤلاء الأطفال الذين يعتبر القمر شمسهم الوحيدة التي لا تحرق.',
    },
    concept: {
      fr: 'Ce projet rend hommage aux enfants atteints de Xeroderma Pigmentosum, une maladie génétique rare qui leur interdit toute exposition au rayonnement ultraviolet du soleil. Par un jeu délicat de clair-obscur et de reflets sur les casques de protection, les photographies magnifient leur innocence et sensibilisent le public à leur réalité.',
      en: 'This emotional project honors children with Xeroderma Pigmentosum, a rare genetic disorder preventing any exposure to sunlight UV rays. Through nuanced chiaroscuro lighting and reflections on protective shields, the imagery celebrates their innocence and raises critical awareness.',
      es: 'Este proyecto rinde homenaje a los niños con Xeroderma Pigmentoso, una rara afección genética que les impide exponerse a los rayos UV. Con un juego de claroscuros y reflejos, las fotografías ensalzan su inocencia.',
      ar: 'يحتفي هذا المشروع الإنساني بأطفال القمر المصابين بمرض جيني نادر يحرمهم من التعرض لأشعة الشمس. من خلال إضاءة الظلال والانعكاسات على الأقنعة الواقية، يبرز العمل براءتهم ويوقظ الضمير الإنساني.',
    },
    deliverables: {
      fr: [
        'Direction artistique & scénarisation du projet documentaire',
        'Série de portraits photographiques en basse lumière',
        'Campagne de sensibilisation digitale & plaidoyer associatif',
        'Dossier d’appel aux dons pour l’acquisition d’équipements protecteurs'
      ],
      en: [
        'Art direction & narrative scripting for documentary initiative',
        'Fine art low-light photographic portrait series',
        'Digital advocacy campaign & nonprofit awareness assets',
        'Fundraising campaign collateral for specialized protective gear'
      ],
      es: [
        'Dirección de arte y guionización del proyecto documental',
        'Serie de retratos fotográficos en baja luminosidad',
        'Campaña de concienciación digital y abogacía asociativa',
        'Dossier de recaudación de fondos para equipamiento de protección'
      ],
      ar: [
        'الإدارة الفنية وكتابة السيناريو للمشروع الوثائقي',
        'سلسلة بورتريهات فوتوغرافية في الإضاءة الخافتة',
        'حملة توعية رقمية ودعم جمعياتي',
        'ملف لجمع التبرعات لتوفير المعدات الواقية'
      ]
    },
    typography: 'Amiri & Helvetica Neue Pro',
    palette: ['#050811', '#1A2A44', '#C9D6DF', '#F2E8CF'],
    behanceUrl: 'https://www.behance.net/gallery/239289329/-Enfant-de-lune',
    collaborators: ['Mehdi Hrz'],
    stats: {
      views: 59,
      appreciations: 5
    }
  },
  {
    id: 'mercedes-privilege-days',
    title: 'Mercedes-Benz / Privilege Days',
    subtitle: {
      fr: 'Campagne de distinction & événement exclusif annuel Mercedes-Benz',
      en: 'Exclusive Distinction Campaign & Annual Mercedes-Benz Showcase',
      es: 'Campaña de distinción y evento exclusivo anual de Mercedes-Benz',
      ar: 'حملة التميز والحدث السنوي الحصري لمرسيدس-بنز',
    },
    client: 'Mercedes-Benz (Le Moteur)',
    year: '2025',
    category: 'direction-artistique',
    categoryLabel: {
      fr: 'Direction Artistique & Luxe Automobile',
      en: 'Art Direction & Luxury Automotive',
      es: 'Dirección de Arte y Lujo Automotriz',
      ar: 'الإدارة الفنية والسيارات الفاخرة',
    },
    featured: true,
    coverImage: 'https://mir-s3-cdn-cf.behance.net/projects/original/64214a236901887.Y3JvcCwxNTE0LDExODQsNzI3LDUy.jpg',
    gallery: [
      {
        url: 'https://mir-s3-cdn-cf.behance.net/projects/original/64214a236901887.Y3JvcCwxNTE0LDExODQsNzI3LDUy.jpg',
        caption: {
          fr: 'Affiche de prestige Privilege Days — Épure sculpturale et reflets argentés de l’étoile.',
          en: 'Privilege Days prestige key visual — Sculptural minimalism and silver star reflections.',
          es: 'Cartel de prestigio Privilege Days: minimalismo escultural y reflejos plateados de la estrella.',
          ar: 'ملصق الفخامة لأيام الامتياز — البساطة النحتية وانعكاسات الفضة لنجمة مرسيدس.',
        }
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/64214a236901887.Y3JvcCwxNTE0LDExODQsNzI3LDUy.jpg',
        caption: {
          fr: 'Mise en page éditoriale prestige pour invitation VIP et catalogue d’exception.',
          en: 'Prestige editorial layout for VIP invitations and fine catalog.',
          es: 'Diseño editorial de prestigio para invitaciones VIP y catálogo de lujo.',
          ar: 'تصميم تحريري فاخر لدعوات كبار الشخصيات والكتالوج الحصري.',
        }
      }
    ],
    role: {
      fr: 'Direction Artistique, Conception Visuelle & Campagne Premium',
      en: 'Art Direction, Visual Concept & Premium Campaign',
      es: 'Dirección de Arte, Concepto Visual y Campaña Premium',
      ar: 'الإدارة الفنية والتصور البصري وحملة الفخامة',
    },
    statement: {
      fr: 'Sublimer l’ingénierie et le raffinement de l’étoile dans un écrin de distinction graphique absolue.',
      en: 'Elevating the engineering and refinement of the three-pointed star in a realm of pure distinction.',
      es: 'Sublimar la ingeniería y el refinamiento de la estrella en un marco de distinción gráfica absoluta.',
      ar: 'الارتقاء بالهندسة الدقيقة وأناقة النجمة الثلاثية في إطار من التميز الغرافيكي المطلق.',
    },
    concept: {
      fr: 'Pour le rendez-vous commercial et relationnel le plus prestigieux de Mercedes-Benz Tunisie, la direction artistique a privilégié une esthétique radicale : noir minéral profond, typographie statutaire et découpes géométriques célébrant les courbes des berlines et SUV d’exception.',
      en: 'For Mercedes-Benz Tunisia’s most prestigious commercial and client appointment, art direction embraced a radical aesthetic: deep mineral black, stately typography, and razor-sharp geometric cuts celebrating the silhouette of luxury sedans and SUVs.',
      es: 'Para la cita más prestigiosa de Mercedes-Benz Túnez, la dirección de arte optó por una estética radical: negro mineral profundo, tipografía estatutaria y cortes geométricos.',
      ar: 'للموعد الأكثر فخامة لمرسيدس-بنز تونس، تم اعتماد أسلوب جمالي راديكالي: سواد معدني عميق، تايبوغرافي رفيع، وتراكيب هندسية تحتفي بانحناءات سيارات السيدان والدفع الرباعي.',
    },
    deliverables: {
      fr: [
        'Identité graphique complète des Privilege Days',
        'Campagne d’affichage OOH prestige & insertions presse haut de gamme',
        'Dispositif digital, invitations VIP personnalisées & landing page',
        'Scénographie showroom et signalétique architecturale'
      ],
      en: [
        'Complete graphic identity system for Privilege Days',
        'Prestige OOH billboard & luxury editorial press insertions',
        'Digital experience, bespoke VIP invitations & landing page',
        'Showroom spatial scenography and architectural signage'
      ],
      es: [
        'Identidad gráfica completa de los Privilege Days',
        'Campaña de vallas publicitarias OOH de prestigio e inserciones en prensa de lujo',
        'Dispositivo digital, invitaciones VIP personalizadas y landing page',
        'Escenografía de showroom y señalética arquitectónica'
      ],
      ar: [
        'الهوية البصرية المتكاملة لأيام الامتياز',
        'حملة إعلانات طرقية فاخرة وإعلانات صحفية راقية',
        'منظومة رقمية ودعوات مخصصة لكبار الشخصيات وصفحة هبوط',
        'سينوغرافيا قاعات العرض واللافتات المعمارية'
      ]
    },
    typography: 'Corporate A / Mercedes-Benz Serif & Neue Haas Grotesk',
    palette: ['#000000', '#1F2421', '#9E9E9E', '#EAEAEA'],
    behanceUrl: 'https://www.behance.net/gallery/236901887/Mercedes-PRIVILEGE-DAYS',
    collaborators: ['Mehdi Hrz', 'Selim Hadhri', 'Emna Nouralhouda Bettaïeb'],
    stats: {
      views: 140,
      appreciations: 5
    }
  },
  {
    id: 'agil-energy-road-safety-2k25',
    title: 'Agil Energy — Road Safety Campaign 2K25',
    subtitle: {
      fr: 'Campagne nationale de sécurité routière & civisme citoyen au volant',
      en: 'National Road Safety & Civic Driving Awareness Campaign 2K25',
      es: 'Campaña nacional de seguridad vial y civismo al volante 2K25',
      ar: 'الحملة الوطنية للسلامة المرورية والوعي المدني أثناء القيادة 2K25',
    },
    client: 'Agil Energy (SNDP)',
    year: '2025',
    category: 'direction-artistique',
    categoryLabel: {
      fr: 'Direction Artistique & Campagne Nationale',
      en: 'Art Direction & National Campaign',
      es: 'Dirección de Arte y Campaña Nacional',
      ar: 'الإدارة الفنية والحملة الوطنية',
    },
    featured: false,
    coverImage: 'https://mir-s3-cdn-cf.behance.net/projects/original/0e4637230322329.Y3JvcCwxNDM4LDExMjUsMTgxLDA.jpg',
    gallery: [
      {
        url: 'https://mir-s3-cdn-cf.behance.net/projects/original/0e4637230322329.Y3JvcCwxNDM4LDExMjUsMTgxLDA.jpg',
        caption: {
          fr: 'Key Visual officiel — Métaphore visuelle poignante de la vigilance au volant.',
          en: 'Official Key Visual — Poignant visual metaphor for road vigilance.',
          es: 'Key Visual oficial: conmovedora metáfora visual sobre la precaución al volante.',
          ar: 'المفتاح البصري الرسمي — استعارة بصرية مؤثرة لليقظة أثناء القيادة.',
        }
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/0e4637230322329.Y3JvcCwxNDM4LDExMjUsMTgxLDA.jpg',
        caption: {
          fr: 'Affiche 4x3 pour le réseau autoroutier national et les stations Agil.',
          en: 'National highway billboard and Agil fuel stations poster.',
          es: 'Cartel 4x3 para la red nacional de autopistas y estaciones Agil.',
          ar: 'ملصق إعلاني 4x3 لشبكة الطرق السريعة ومحطات وقود عجيل.',
        }
      }
    ],
    role: {
      fr: 'Direction Artistique, Idéation & Stratégie Publicitaire',
      en: 'Art Direction, Ideation & Advertising Strategy',
      es: 'Dirección de Arte, Ideación y Estrategia Publicitaria',
      ar: 'الإدارة الفنية وابتكار الأفكار والاستراتيجية الإعلانية',
    },
    statement: {
      fr: 'Rappeler la valeur irremplaçable de la vie humaine à travers un choc visuel intelligent et porteur d’espoir.',
      en: 'Reminding drivers of the irreplaceable value of life through an intelligent, hopeful, and resonant visual cue.',
      es: 'Recordar el valor insustituible de la vida humana a través de un impacto visual inteligente y lleno de esperanza.',
      ar: 'التذكير بالقيمة التي لا تعوض للحياة البشرية من خلال صدمة بصرية ذكية ومحملة بالأمل.',
    },
    concept: {
      fr: 'Pour le leader national de l’énergie Agil, conception d’une campagne d’utilité publique incitant les usagers de la route à modérer leur vitesse et respecter le code. L’impact visuel repose sur une allégorie percutante qui évite le sensationnalisme morbide pour valoriser la protection des êtres chers.',
      en: 'For national energy leader Agil, designing a major public safety campaign encouraging motorists to reduce speed and respect the road. Visual impact centers on an evocative allegory that bypasses shock-value in favor of protecting loved ones.',
      es: 'Para el líder nacional de energía Agil, diseño de una campaña de interés público para moderar la velocidad y respetar el código vial, evitando el sensacionalismo.',
      ar: 'لصالح الشركة الوطنية للطاقة عجيل، تم تصميم حملة توعية للمنفعة العامة تحث السائقين على تخفيف السرعة واحترام قانون المرور عبر مجاز بصري مؤثر يحمي الأحباء.',
    },
    deliverables: {
      fr: [
        'Conception du message & direction artistique de la campagne',
        'Campagne d’affichage 4x3 sur l’ensemble du réseau autoroutier',
        'Habillage des stations-service Agil & supports de contact direct',
        'Vidéos courtes de sensibilisation diffusées sur les réseaux sociaux'
      ],
      en: [
        'Core concept articulation & campaign art direction',
        'National 4x3 billboard network across all major highways',
        'Service station spatial branding & customer touchpoint leaflets',
        'Short-form awareness videos deployed on digital channels'
      ],
      es: [
        'Conceptualización del mensaje y dirección artística de la campaña',
        'Campaña de vallas 4x3 en toda la red de autopistas',
        'Branding espacial en estaciones de servicio Agil y folletos informativos',
        'Videos cortos de concienciación para redes sociales'
      ],
      ar: [
        'صياغة الرسالة التوعوية والإدارة الفنية للحملة',
        'حملة لافتات 4x3 على كامل شبكة الطرق السريعة الوطنية',
        'تزيين وهوية محطات وقود عجيل ومطبوعات الاتصال المباشر',
        'مقاطع فيديو توعوية قصيرة لمنصات التواصل الاجتماعي'
      ]
    },
    typography: 'DIN Pro Bold & Gotham',
    palette: ['#0047BA', '#FED100', '#D32F2F', '#FFFFFF'],
    behanceUrl: 'https://www.behance.net/gallery/230322329/Agil-Energy-Road-Safety-Campaign-2K25',
    collaborators: ['Khalil Ayed', 'Mehdi Hrz', 'Hakim Manaa'],
    stats: {
      views: 166,
      appreciations: 14
    }
  },
  {
    id: 'mercedes-eq-technology',
    title: 'Mercedes-Benz / The New Code (EQ Technology)',
    subtitle: {
      fr: 'Lancement de la technologie 100% électrique Mercedes-EQ — Le nouveau code du luxe',
      en: '100% Electric Mercedes-EQ Launch — The New Code of Electric Luxury',
      es: 'Lanzamiento de la tecnología 100% eléctrica Mercedes-EQ — El nuevo código del lujo',
      ar: 'إطلاق تكنولوجيا السيارات الكهربائية 100% من مرسيدس-EQ — المفهوم الجديد للفخامة',
    },
    client: 'Mercedes-Benz EQ',
    year: '2025',
    category: 'identite-branding',
    categoryLabel: {
      fr: 'Innovation & Identité Automobile',
      en: 'Innovation & Automotive Identity',
      es: 'Innovación e Identidad Automotriz',
      ar: 'الابتكار والهوية البصرية للسيارات',
    },
    featured: true,
    coverImage: 'https://mir-s3-cdn-cf.behance.net/projects/original/04fb19229366621.Y3JvcCwzNjIyLDI4MzMsMTIwMSw1Mzg.jpg',
    gallery: [
      {
        url: 'https://mir-s3-cdn-cf.behance.net/projects/original/04fb19229366621.Y3JvcCwzNjIyLDI4MzMsMTIwMSw1Mzg.jpg',
        caption: {
          fr: 'The New Code — L’alliance de la lumière électrique et du design aérodynamique pur.',
          en: 'The New Code — The fusion of electric luminescence and aerodynamic purity.',
          es: 'The New Code: la fusión de luminiscencia eléctrica y pureza aerodinámica.',
          ar: 'الكود الجديد — التقاء الإضاءة الكهربائية والنقاء الديناميكي الهوائي.',
        }
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/04fb19229366621.Y3JvcCwzNjIyLDI4MzMsMTIwMSw1Mzg.jpg',
        caption: {
          fr: 'Composition graphique high-tech célébrant la transition vers le zéro émission.',
          en: 'High-tech graphic composition celebrating the zero-emission transition.',
          es: 'Composición gráfica de alta tecnología celebrando la transición cero emisiones.',
          ar: 'تكوين غرافيكي بتقنية متطورة يحتفي بالتحول نحو انعدام الانبعاثات الكربونية.',
        }
      }
    ],
    role: {
      fr: 'Direction Artistique & Stratégie Visuelle de Lancement',
      en: 'Art Direction & Launch Visual Strategy',
      es: 'Dirección de Arte y Estrategia Visual de Lanzamiento',
      ar: 'الإدارة الفنية والاستراتيجية البصرية للإطلاق',
    },
    statement: {
      fr: 'L’électromobilité ne renonce à rien : elle invente une nouvelle grammaire où le silence devient la forme suprême du luxe.',
      en: 'Electromobility compromises nothing: it pioneers a syntax where silence becomes the ultimate expression of luxury.',
      es: 'La movilidad eléctrica no renuncia a nada: inventa una nueva sintaxis donde el silencio es la máxima expresión del lujo.',
      ar: 'التنقل الكهربائي لا يساوم على شيء: إنه يبتكر لغة جديدة يصبح فيها الهدوء التام أرقى درجات الفخامة.',
    },
    concept: {
      fr: 'Campagne de marque pour la gamme électrique Mercedes-EQ. Sous le leitmotiv « The New Code », l’univers visuel utilise des halos bleu électrique, des dégradés de lumière futuristes et une grille de composition minimaliste traduisant l’intelligence artificielle embarquée et la fluidité des lignes aérodynamiques.',
      en: 'Brand campaign for the all-electric Mercedes-EQ range. Under the premise "The New Code", the aesthetic deploys electric blue luminescence, sleek gradients, and minimalist structural pacing embodying onboard AI intelligence and aerodynamic grace.',
      es: 'Campaña de marca para la gama eléctrica Mercedes-EQ. Bajo el lema "The New Code", el universo visual recurre a halos azul eléctrico, degradados futuristas y composición minimalista.',
      ar: 'حملة ترويجية للمجموعة الكهربائية بالكامل مرسيدس-EQ تحت شعار "الكود الجديد". يستخدم العالم البصري إضاءات زرقاء كهربائية وتدرجات مستقبلية تعبر عن الذكاء الاصطناعي وانسيابية التصميم.',
    },
    deliverables: {
      fr: [
        'Direction artistique globale de la campagne The New Code',
        'Création des visuels clés 3D et compositions photographiques',
        'Expérience digitale interactive & configurateur de modèle',
        'Campagne d’affichage digital urbain et formats interactifs'
      ],
      en: [
        'Global art direction for The New Code campaign',
        '3D key visual creation and cinematic automotive compositing',
        'Interactive digital experience & vehicle showcase portal',
        'Digital out-of-home urban network & rich media ads'
      ],
      es: [
        'Dirección de arte global de la campaña The New Code',
        'Creación de key visuals en 3D y composición fotográfica automotriz',
        'Experiencia digital interactiva y configurador de modelos',
        'Red digital urbana exterior (DOOH) y formatos interactivos'
      ],
      ar: [
        'الإدارة الفنية الشاملة لحملة "الكود الجديد"',
        'ابتكار المفاتيح البصرية ثلاثية الأبعاد والتراكيب الفوتوغرافية',
        'تجربة رقمية تفاعلية ومنصة استعراض الطرازات',
        'حملة شاشات رقمية تفاعلية وإعلانات وسائط غنية'
      ]
    },
    typography: 'Mercedes-Benz Corporate S & Space Mono',
    palette: ['#030914', '#00A3E0', '#00D1B2', '#FFFFFF'],
    behanceUrl: 'https://www.behance.net/gallery/229366621/Mercedes-The-New-Code-with-EQ-technology',
    collaborators: ['Mehdi Hrz', 'Aymen Bejaoui', 'nour Kacem', 'Noor Bousarsar', 'Hakim Manaa'],
    stats: {
      views: 134,
      appreciations: 5
    }
  },
  {
    id: 'the-unleashed-world',
    title: 'The Unleashed World',
    subtitle: {
      fr: 'Recherche visuelle & exploration plastique d’un univers créatif sans entraves',
      en: 'Visual Research & Bold Exploration of an Unbound Creative Realm',
      es: 'Investigación visual y exploración de un universo creativo sin límites',
      ar: 'بحث بصري واستكشاف تشكيلي لعالم إبداعي متحرر من القيود',
    },
    client: 'The Unleashed World / Studio',
    year: '2025',
    category: 'identite-branding',
    categoryLabel: {
      fr: 'Direction Créative & Concept',
      en: 'Creative Direction & Concept',
      es: 'Dirección Creativa y Conceptual',
      ar: 'الإدارة الإبداعية والتصور الفني',
    },
    featured: false,
    coverImage: 'https://mir-s3-cdn-cf.behance.net/projects/original/e78827222874203.Y3JvcCwxMzM4LDEwNDcsMjg0LDA.jpg',
    gallery: [
      {
        url: 'https://mir-s3-cdn-cf.behance.net/projects/original/e78827222874203.Y3JvcCwxMzM4LDEwNDcsMjg0LDA.jpg',
        caption: {
          fr: 'The Unleashed World — Déconstruction typographique et tension cinétique.',
          en: 'The Unleashed World — Typographic deconstruction and kinetic tension.',
          es: 'The Unleashed World: deconstrucción tipográfica y tensión cinética.',
          ar: 'العالم المتحرر — تفكيك تايبوغرافي وتوتر حركي بصري.',
        }
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/e78827222874203.Y3JvcCwxMzM4LDEwNDcsMjg0LDA.jpg',
        caption: {
          fr: 'Poster expérimental explorant les textures industrielles et le contraste d’échelles.',
          en: 'Experimental poster exploring industrial textures and scale contrast.',
          es: 'Cartel experimental que explora texturas industriales y contraste de escalas.',
          ar: 'ملصق تجريبي يستكشف الملامس الصناعية وتباين المقاييس.',
        }
      }
    ],
    role: {
      fr: 'Direction Artistique & Expérimentation Graphique',
      en: 'Art Direction & Graphic Experimentation',
      es: 'Dirección de Arte y Experimentación Gráfica',
      ar: 'الإدارة الفنية والتجريب الغرافيكي',
    },
    statement: {
      fr: 'Dépasser les limites du cadre : libérer l’énergie visuelle dans une esthétique à la fois brute, tellurique et maîtrisée.',
      en: 'Transcending the boundary of the canvas: unleashing raw visual energy through disciplined yet radical balance.',
      es: 'Superar los límites del encuadre: liberar la energía visual en una estética cruda y dominada.',
      ar: 'تجاوز حدود الإطار التقليدي: إطلاق العنان للطاقة البصرية في قالب جمالي خام ومتقن.',
    },
    concept: {
      fr: 'Projet d’exploration plastique sur la notion de libération spatiale et de rupture avec les formats conventionnels. Le graphisme hybride des éléments de design industriel brutaliste avec des aplats chromatiques vifs, créant une tension visuelle propice aux marques avant-gardistes.',
      en: 'A plastic research project questioning spatial constraints and conventional layout boundaries. The artwork marries brutalist industrial design nuances with fierce color pops, generating magnetic visual tension suited for avant-garde brands.',
      es: 'Proyecto de exploración plástica sobre la ruptura con los formatos convencionales, fusionando diseño industrial brutalista y colores intensos.',
      ar: 'مشروع بحث تشكيلي حول التحرر المكاني وكسر الأنماط المألوفة، يمزج بين التصميم الصناعي التفكيكي والألوان الحيوية المشبعة.',
    },
    deliverables: {
      fr: [
        'Système d’identité expérimentale et manifeste visuel',
        'Série de posters artistiques sérigraphiés grand format',
        'Animations graphiques en boucle pour interfaces digitales',
        'Direction du moodboard et recherche de textures matières'
      ],
      en: [
        'Experimental identity system & visual manifesto',
        'Silkscreened large-format limited art poster series',
        'Looping motion graphic sequences for digital surfaces',
        'Curated moodboard direction & tactile material research'
      ],
      es: [
        'Sistema de identidad experimental y manifiesto visual',
        'Serie de carteles artísticos serigrafiados en gran formato',
        'Animaciones gráficas en bucle para soportes digitales',
        'Dirección de moodboard e investigación de texturas táctiles'
      ],
      ar: [
        'نظام هوية بصرية تجريبي وبيان فني',
        'سلسلة ملصقات فنية مطبوعة بالشاشة الحريرية بقياس كبير',
        'حركات غرافيكية متكررة للشاشات والوسائط الرقمية',
        'إدارة لوحة المزاج والبحث في ملامس المواد'
      ]
    },
    typography: 'Monument Extended & Editorial Serif',
    palette: ['#0D0D0E', '#E63946', '#F1FAEE', '#457B9D'],
    behanceUrl: 'https://www.behance.net/gallery/222874203/The-Unleashed-world',
    collaborators: ['Mehdi Hrz', 'Mohamed Ali KOUBAA', 'Hakim Manaa'],
    stats: {
      views: 101,
      appreciations: 3
    }
  },
  {
    id: 'biat-cool-lifestyle',
    title: 'BIAT — Cool Lifestyle by Samy Chaffai',
    subtitle: {
      fr: 'Campagne bancaire nouvelle génération & storytelling lifestyle jeune',
      en: 'Next-Gen Banking Lifestyle & Youth Storytelling Campaign',
      es: 'Campaña bancaria de nueva generación y narrativa lifestyle juvenil',
      ar: 'حملة بنكية للجيل الجديد وسرد قصصي شبابي مفعم بالحيوية',
    },
    client: 'BIAT (Banque Internationale Arabe de Tunisie)',
    year: '2024',
    category: 'digital-experience',
    categoryLabel: {
      fr: 'Digital, Lifestyle & Banque',
      en: 'Digital, Lifestyle & Banking',
      es: 'Digital, Estilo de Vida y Banca',
      ar: 'رقمي، نمط الحياة والبنوك',
    },
    featured: true,
    coverImage: 'https://mir-s3-cdn-cf.behance.net/projects/original/5f43af213019197.Y3JvcCwzMTcwLDI0ODAsMTQ5LDA.jpg',
    gallery: [
      {
        url: 'https://mir-s3-cdn-cf.behance.net/projects/original/5f43af213019197.Y3JvcCwzMTcwLDI0ODAsMTQ5LDA.jpg',
        caption: {
          fr: 'Campagne BIAT x Samy Chaffai — Célébration de l’autonomie créative et de la jeunesse.',
          en: 'BIAT x Samy Chaffai Campaign — Celebrating creative independence and youth energy.',
          es: 'Campaña BIAT x Samy Chaffai: celebración de la autonomía creativa y la energía joven.',
          ar: 'حملة بنك تونس العربي الدولي مع سامي الشافعي — الاحتفاء بالاستقلالية الإبداعية وطاقة الشباب.',
        }
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/5f43af213019197.Y3JvcCwzMTcwLDI0ODAsMTQ5LDA.jpg',
        caption: {
          fr: 'Déclinaison pour carte bancaire jeune et application mobile BIAT.',
          en: 'Design adaptation for youth banking cards and the BIAT mobile experience.',
          es: 'Adaptación de diseño para tarjeta bancaria joven y app móvil de BIAT.',
          ar: 'تصميم البطاقة البنكية المخصصة للشباب والتطبيق الهاتفي لبنك تونس العربي الدولي.',
        }
      }
    ],
    role: {
      fr: 'Direction Artistique, Concept de Campagne & Direction de Shooting',
      en: 'Art Direction, Campaign Concept & Shoot Direction',
      es: 'Dirección de Arte, Concepto de Campaña y Dirección de Rodaje',
      ar: 'الإدارة الفنية، مفهوم الحملة وإدارة جلسات التصوير',
    },
    statement: {
      fr: 'Réconcilier les jeunes avec le secteur bancaire en substituant la rigueur institutionnelle par la spontanéité, le voyage et l’optimisme.',
      en: 'Reconnecting youth with banking by replacing institutional coldness with spontaneity, travel, and optimism.',
      es: 'Reconectar a los jóvenes con el banco sustituyendo la rigidez institucional por espontaneidad, viajes y optimismo.',
      ar: 'تقريب الشباب من الخدمات المصرفية عبر استبدال الرسمية المؤسسية بالعفوية وحب السفر والتفاؤل.',
    },
    concept: {
      fr: 'En collaboration avec le créateur de contenu influent Samy Chaffai, la première banque privée tunisienne BIAT réinvente sa relation avec les 18-30 ans. La direction artistique propose une esthétique solaire, inspirée de la culture skate et voyage, plaçant les passions créatives au premier plan.',
      en: 'Partnering with influential creator Samy Chaffai, leading private banking group BIAT reimagined youth banking communication. The art direction adopted a sunny, skate and travel-inspired lifestyle tone, placing creative ambition at center stage.',
      es: 'En colaboración con el creador Samy Chaffai, el banco BIAT renueva su vínculo con los jóvenes de 18 a 30 años con un tono solar y desenfadado.',
      ar: 'بالتعاون مع صانع المحتوى المؤثر سامي الشافعي، يجدد بنك تونس العربي الدولي علاقته مع فئة 18-30 سنة من خلال هوية مشمسة مستوحاة من ثقافة السفر والمغامرة.',
    },
    deliverables: {
      fr: [
        'Direction artistique de la campagne digitale 360°',
        'Direction du shooting photo lifestyle et stylisme urbain',
        'Série de capsules vidéo pour TikTok, Instagram Reels et YouTube',
        'Habillage des agences universitaires & supports de communication'
      ],
      en: [
        '360° digital campaign art direction',
        'Lifestyle photoshoot direction and urban streetwear styling',
        'Short-form video series for TikTok, Instagram Reels & YouTube',
        'University branch spatial makeover & promotional collateral'
      ],
      es: [
        'Dirección de arte de la campaña digital 360°',
        'Dirección de sesión de fotos lifestyle y estilismo urbano',
        'Serie de cápsulas en video para TikTok, Instagram Reels y YouTube',
        'Ambientación de sucursales universitarias y soportes de comunicación'
      ],
      ar: [
        'الإدارة الفنية للحملة الرقمية المتكاملة 360°',
        'إدارة جلسات التصوير بنمط الحياة وتنسيق الأزياء الحضرية',
        'سلسلة مقاطع فيديو قصيرة لتيك توك وإنستغرام ريلز ويوتيوب',
        'تجديد فروع البنك في الجامعات ومطبوعات الدعاية'
      ]
    },
    typography: 'Syne Heavy & Inter Display',
    palette: ['#002B49', '#FF6B35', '#00A896', '#F8F9FA'],
    behanceUrl: 'https://www.behance.net/gallery/213019197/Cool-lifestyle-with-BIAT-by-Samy-Chaffai',
    collaborators: ['Mehdi Hrz'],
    stats: {
      views: 131,
      appreciations: 10
    }
  },
  {
    id: 'magic-hotels-resorts-leftover',
    title: 'MAGIC Hotels & Resorts — Be Over with Your Leftover',
    subtitle: {
      fr: 'Campagne de sensibilisation anti-gaspillage alimentaire dans l’hôtellerie',
      en: 'Hospitality Anti-Food Waste Awareness Campaign',
      es: 'Campaña de concienciación contra el desperdicio de alimentos en la hostelería',
      ar: 'حملة توعية للحد من الهدر الغذائي في الفنادق والمنتجعات السياحية',
    },
    client: 'MAGIC Hotels & Resorts',
    year: '2024',
    category: 'direction-artistique',
    categoryLabel: {
      fr: 'Direction Artistique & Éco-Responsabilité',
      en: 'Art Direction & Sustainability',
      es: 'Dirección de Arte y Sostenibilidad',
      ar: 'الإدارة الفنية والاستدامة البيئية',
    },
    featured: false,
    coverImage: 'https://mir-s3-cdn-cf.behance.net/projects/original/bcd74f212780421.Y3JvcCwxNTQ1LDEyMDksMjQ4LDEzMw.jpg',
    gallery: [
      {
        url: 'https://mir-s3-cdn-cf.behance.net/projects/original/bcd74f212780421.Y3JvcCwxNTQ1LDEyMDksMjQ4LDEzMw.jpg',
        caption: {
          fr: 'Be over with your leftover — Affiche d’incitation bienveillante pour buffets hôteliers.',
          en: 'Be over with your leftover — Gentle nudging poster for resort buffets.',
          es: 'Be over with your leftover: cartel de concienciación amable para buffets de hotel.',
          ar: 'كفى هدراً لطعامك — ملصق تحفيزي لطيف لبوفيهات الفنادق.',
        }
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/bcd74f212780421.Y3JvcCwxNTQ1LDEyMDksMjQ4LDEzMw.jpg',
        caption: {
          fr: 'Signalétique de table et déclinaisons imprimées sur papier recyclé.',
          en: 'Tabletop signage and printed assets on recycled paper.',
          es: 'Señalización de mesa y piezas impresas en papel reciclado.',
          ar: 'لافتات طاولات الطعام وتطبيقات مطبوعة على ورق معاد تدويره.',
        }
      }
    ],
    role: {
      fr: 'Direction Artistique, Concept Visuel & Rédaction de Campagne',
      en: 'Art Direction, Visual Concept & Campaign Copywriting',
      es: 'Dirección de Arte, Concepto Visual y Redacción de Campaña',
      ar: 'الإدارة الفنية، التصور البصري وكتابة النصوص الإعلانية',
    },
    statement: {
      fr: 'Sensibiliser sans culpabiliser : faire du respect de la nourriture un acte d’élégance, de partage et de conscience environnementale.',
      en: 'Sensitizing without guilt: turning food mindfulness into an act of elegance, sharing, and environmental care.',
      es: 'Concienciar sin culpabilizar: convertir el respeto por la comida en un acto de elegancia, convivencia y cuidado ambiental.',
      ar: 'التوعية الإيجابية دون إشعار بالذنب: تحويل احترام الطعام إلى سلوك حضاري وأنيق وواعٍ بيئياً.',
    },
    concept: {
      fr: 'Pour le groupe hôtelier international MAGIC Hotels & Resorts, conception d’un programme visuel percutant pour encourager les vacanciers à ne se servir que ce qu’ils consomment. Utilisation d’illustrations minimalistes et d’accroches spirituelles pour instaurer une culture vertueuse dans les espaces de restauration.',
      en: 'For international hospitality brand MAGIC Hotels & Resorts, creating an engaging visual nudging system in buffets to combat food waste. Minimalist illustrations combined with witty taglines foster a culture of mindful appreciation in dining halls.',
      es: 'Para el grupo hotelero MAGIC Hotels & Resorts, diseño de un programa visual persuasivo en buffets para reducir el desperdicio alimentario con elegancia e ingenio.',
      ar: 'لصالح مجموعة فنادق ماجيك الدولية، تم ابتكار منظومة بصرية تحفيزية في البوفيهات للحد من هدر الطعام بالاعتماد على رسوم تبسيطية وعبارات ذكية وجذابة.',
    },
    deliverables: {
      fr: [
        'Conception de l’identité & du slogan « Be over with your leftover »',
        'Signalétique pour buffets, restaurants et suites d’hôtels',
        'Animations visuelles pour les écrans dynamiques des resorts',
        'Supports de communication imprimés éco-responsables'
      ],
      en: [
        'Identity & punchy slogan creation "Be over with your leftover"',
        'Buffet, restaurant, and hotel suite environmental signage',
        'Digital signage animations for resort video displays',
        'Eco-friendly printed communication assets on natural stock'
      ],
      es: [
        'Creación de identidad y eslogan "Be over with your leftover"',
        'Señalética ambiental para buffets, restaurantes y suites',
        'Animaciones para pantallas digitales dinámicas en resorts',
        'Materiales de comunicación impresos ecológicos y sostenibles'
      ],
      ar: [
        'ابتكار الهوية والشعار الترويجي "كفى هدراً لطعامك"',
        'لافتات توجيهية للبوفيهات والمطاعم والأجنحة الفندقية',
        'حركات ورسوم متحركة للشاشات الرقمية بالمنتجعات',
        'مطبوعات اتصالية صديقة للبيئة على ورق طبيعي'
      ]
    },
    typography: 'Recoleta & Brandon Grotesque',
    palette: ['#1B4332', '#74C69D', '#D8F3DC', '#2D3142'],
    behanceUrl: 'https://www.behance.net/gallery/212780421/MAGIC-Hotels-Resorts-Be-over-with-your-leftover',
    collaborators: ['Mehdi Hrz'],
    stats: {
      views: 66,
      appreciations: 6
    }
  },
  {
    id: 'golden-chips-mayfadhlakech',
    title: 'GOLDEN CHIPS — Mayfadhlakech',
    subtitle: {
      fr: 'Campagne de marque croustillante & activation humoristique FMCG',
      en: 'Crispy Snack Activation & High-Impact FMCG Brand Campaign',
      es: 'Campaña de marca crujiente y activación humorística de gran consumo (FMCG)',
      ar: 'حملة علامة تجارية مقرمشة وتنشيط فكاهي للمنتجات الاستهلاكية واسعة الانتشار',
    },
    client: 'Golden Chips',
    year: '2024',
    category: 'direction-artistique',
    categoryLabel: {
      fr: 'Direction Artistique & FMCG',
      en: 'Art Direction & FMCG Campaign',
      es: 'Dirección de Arte y Campaña FMCG',
      ar: 'الإدارة الفنية والمنتجات الاستهلاكية',
    },
    featured: false,
    coverImage: 'https://mir-s3-cdn-cf.behance.net/projects/original/b1e81d212765245.Y3JvcCw4MDYsNjMwLDU5MSwxNw.jpg',
    gallery: [
      {
        url: 'https://mir-s3-cdn-cf.behance.net/projects/original/b1e81d212765245.Y3JvcCw4MDYsNjMwLDU5MSwxNw.jpg',
        caption: {
          fr: 'Mayfadhlakech — L’explosion de saveurs d’un produit culte dont on ne laisse rien.',
          en: 'Mayfadhlakech — Flavor explosion of a cult snack with nothing left behind.',
          es: 'Mayfadhlakech: explosión de sabor de un aperitivo de culto del que no queda nada.',
          ar: 'ما يفضلكش — انفجار النكهات لمنتج ذي شعبية طاغية لا يترك منه شيء.',
        }
      },
      {
        url: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/b1e81d212765245.Y3JvcCw4MDYsNjMwLDU5MSwxNw.jpg',
        caption: {
          fr: 'Campagne d’affichage urbain haute visibilité et habillage rayons.',
          en: 'High-visibility urban billboard campaign and retail aisle branding.',
          es: 'Campaña de vallas urbanas de gran visibilidad y branding en lineales de supermercado.',
          ar: 'حملة إعلانات حضرية عالية الوضوح وتصميم مساحات العرض بالمتاجر.',
        }
      }
    ],
    role: {
      fr: 'Direction Artistique, Stratégie Publicitaire & Conception 360°',
      en: 'Art Direction, Advertising Strategy & 360° Campaign',
      es: 'Dirección de Arte, Estrategia Publicitaria y Diseño de Campaña 360°',
      ar: 'الإدارة الفنية، الاستراتيجية الإعلانية والتصميم الشامل 360°',
    },
    statement: {
      fr: 'Le plaisir du croustillant irrésistible dont on ne laisse pas une seule miette : une célébration populaire de la gourmandise.',
      en: 'The thrill of irresistible crunch so tasty that not a single crumb is ever left: a joyful cultural celebration of snacking.',
      es: 'El placer de un crujido irresistible del que no queda ni una miga: una celebración popular del sabor.',
      ar: 'متعة القرمشة التي لا تقاوم والتي لا تبقي حبة واحدة: احتفال شعبي عفوي بالمذاق الطيب.',
    },
    concept: {
      fr: 'Pour Golden Chips, déploiement d’une campagne grand public fondée sur l’expression populaire « Mayfadhlakech » (Il ne t’en laissera pas). La direction artistique met en scène la gourmandise exacerbée, les couleurs chaudes et l’énergie complice des moments entre amis.',
      en: 'For Golden Chips, launching a massive consumer campaign rooted in the popular catchphrase "Mayfadhlakech" (No crumbs left behind). The visuals celebrate irresistible craveability, vibrant warm tones, and friendly camaraderie.',
      es: 'Para Golden Chips, campaña masiva basada en la expresión popular "Mayfadhlakech" (No te dejará nada), celebrando colores cálidos y complicidad entre amigos.',
      ar: 'لصالح غولدن شيبس، إطلاق حملة جماهيرية كبرى مستوحاة من العبارة التونسية الشعبية "ما يفضلكش"، تحتفي بالألوان الدافئة والطاقة الأخوية بين الأصدقاء.',
    },
    deliverables: {
      fr: [
        'Direction artistique de la campagne publicitaire 360°',
        'Campagne nationale d’affichage 4x3 & mobilier urbain',
        'Vidéos humoristiques & déclinaisons sur les réseaux sociaux',
        'Conception de présentoirs pour points de vente et supermarchés'
      ],
      en: [
        '360° advertising campaign art direction',
        'National 4x3 billboard and bus shelter poster rollout',
        'Humorous video commercials & social media activations',
        'Point-of-sale retail display structures and supermarket stands'
      ],
      es: [
        'Dirección de arte de la campaña publicitaria 360°',
        'Campaña nacional de vallas 4x3 y marquesinas de autobús',
        'Videos humorísticos y activaciones en redes sociales',
        'Diseño de expositores para puntos de venta y supermercados'
      ],
      ar: [
        'الإدارة الفنية للحملة الإعلانية الشاملة 360°',
        'حملة لافتات وطنية 4x3 وشاشات المحطات الحضرية',
        'مقاطع فيديو كوميدية وتطبيقات لمنصات التواصل الاجتماعي',
        'تصميم منصات العرض لنقاط البيع والمساحات التجارية الكبرى'
      ]
    },
    typography: 'Impact Titling & Montserrat Bold',
    palette: ['#F39C12', '#C0392B', '#27AE60', '#F9E79F'],
    behanceUrl: 'https://www.behance.net/gallery/212765245/GOLDEN-CHIPS-MAYFADHLAKECH',
    collaborators: ['Mehdi Hrz', 'Hakim Manaa', 'Mohamed Ali KOUBAA', 'Aymen Bejaoui'],
    stats: {
      views: 130,
      appreciations: 8
    }
  }
];

export const MANIFESTO_PILLARS: ManifestoPillar[] = [
  {
    number: '01',
    title: {
      fr: 'Le silence comme matière première',
      en: 'Silence as primordial material',
      es: 'El silencio como materia prima',
      ar: 'الصمت كمادة أولى للتكوين',
    },
    subtitle: {
      fr: 'Le vide n’est pas une absence, c’est une respiration nécessaire',
      en: 'Void is not absence, it is necessary breath',
      es: 'El vacío no es ausencia, es una respiración necesaria',
      ar: 'الفراغ ليس غيابًا، بل تنفس حيوي وضروري',
    },
    description: {
      fr: 'Dans un monde saturé de stimuli éphémères et d’injonctions algorithmiques, la vraie création commence par la retenue. Donner de l’espace à une typographie, c’est lui offrir une voix. Refuser le superflu, c’est permettre à l’essentiel d’exister avec autorité et majesté.',
      en: 'In an era overwhelmed by disposable stimuli and algorithmic noise, authentic creation begins with restraint. Giving space to a typeface gives it resonance. Dispensing with the superfluous empowers the essential to stand with calm authority.',
      es: 'En un mundo saturado de estímulos efímeros e imposiciones algorítmicas, la verdadera creación comienza por la contención. Dar espacio a una tipografía es darle voz. Renunciar a lo superfluo es permitir que lo esencial exista con serena autoridad y majestad.',
      ar: 'في عالم مثقل بالمحفزات السريعة والضوضاء الخوارزمية، يبدأ الإبداع الحقيقي بالاتزان والتأمل. منح الحرف مساحته هو منحه صوتًا ورنينًا. ونبذ الزوائد هو ما يتيح للجوهر أن يسطع بهيبة وسكينة.',
    }
  },
  {
    number: '02',
    title: {
      fr: 'La vérité de l’image',
      en: 'The truth of the image',
      es: 'La verdad de la imagen',
      ar: 'صدق الصورة ونقاؤها',
    },
    subtitle: {
      fr: 'Au-delà du vernis publicitaire, capturer la pulsation du réel',
      en: 'Beyond commercial polish, capturing the living pulse',
      es: 'Más allá del barniz comercial, capturar el pulso de lo real',
      ar: 'تجاوز البريق الإعلاني السطحي لالتقاط نبض الواقع',
    },
    description: {
      fr: 'Qu’il s’agisse d’une campagne pour une marque automobile de luxe ou d’une série documentaire sur les enfants de la lune, chaque image doit posséder une âme. La lumière naturelle, la justesse du grain et l’honnêteté du cadre créent un lien émotionnel indélébile avec le spectateur.',
      en: 'Whether directing a luxury automotive campaign or documenting children of the moon, every image must carry a soul. Natural light, tactile grain, and sincere framing forge an indelible emotional connection with the beholder.',
      es: 'Ya sea dirigiendo una campaña para una marca de automóviles de lujo o documentando a los niños de la luna, cada imagen debe poseer un alma. La luz natural, la precisión del grano y la sinceridad del encuadre forjan un vínculo emocional indeleble con el espectador.',
      ar: 'سواء أكان الأمر إدارة حملة لعلامة سيارات فاخرة أو توثيقًا لمعاناة أطفال القمر، يجب أن تحمل كل لقطة روحًا حية. فالنور الطبيعي ودقة التكوين وصدق العدسة تخلق رابطًا عاطفيًا لا يُمحى مع المشاهد.',
    }
  },
  {
    number: '03',
    title: {
      fr: 'La rigueur architecturale',
      en: 'Architectural rigor',
      es: 'El rigor arquitectónico',
      ar: 'الصرامة المعمارية والهندسية',
    },
    subtitle: {
      fr: 'La beauté durable est toujours mathématique et proportionnelle',
      en: 'Enduring beauty is always mathematical and proportional',
      es: 'La belleza perdurable es siempre matemática y proporcional',
      ar: 'الجمال الخالد يقوم دائمًا على النسب الرياضية والتناغم',
    },
    description: {
      fr: 'De la grille éditoriale d’un livre d’art aux micro-rythmes d’une interface numérique, chaque proportion répond à une exigence d’harmonie universelle. L’artisanat de la direction artistique réside dans cette précision invisible qui transforme le fonctionnel en mémorable.',
      en: 'From the editorial grid of an art volume to the micro-rhythms of a digital canvas, every proportion honors universal harmony. The craft of art direction lives in this invisible precision that elevates function into lasting memory.',
      es: 'Desde la retícula editorial de un libro de arte hasta los micro-ritmos de una interfaz digital, cada proporción responde a una exigencia de armonía universal. El oficio de la dirección artística reside en esta precisión invisible que transforma lo funcional en memorable.',
      ar: 'من الشبكة التحريرية لكتاب فني إلى الإيقاعات الدقيقة للواجهات الرقمية، يستجيب كل مقياس لنداء التناغم الإنساني. تكمن براعة الإدارة الفنية في تلك الدقة الخفية التي ترتقي بالوظيفة لتصبح أثرًا خالدًا في الذاكرة.',
    }
  },
  {
    number: '04',
    title: {
      fr: 'Le respect du support',
      en: 'Reverence for the medium',
      es: 'El respeto por el soporte',
      ar: 'احترام الوسيط والمادة',
    },
    subtitle: {
      fr: 'Le dialogue organique entre l’écran, le papier et l’espace',
      en: 'The organic dialogue between screen, paper, and physical space',
      es: 'El diálogo orgánico entre la pantalla, el papel y el espacio físico',
      ar: 'الحوار العضوي المتناغم بين الشاشة، الورق، والمكان الواقعي',
    },
    description: {
      fr: 'Du grand format d’affichage urbain aux écrans tactiles haute définition, chaque support exige une attention particulière. La direction artistique contemporaine traite le pixel et l’encre avec la même noblesse d’intention.',
      en: 'From national urban billboards to high-density OLED screens, every surface commands respect. Contemporary art direction honors pixels and ink with identical nobility of intention.',
      es: 'Desde los grandes formatos de publicidad urbana hasta las pantallas táctiles de alta definición, cada soporte exige una atención minuciosa. La dirección artística contemporánea trata el píxel y la tinta con la misma nobleza de intención.',
      ar: 'من اللوحات الإعلانية الحضرية الضخمة إلى الشاشات التفاعلية عالية الدقة، يفرض كل وسيط احترامه الخاص. فالإدارة الفنية المعاصرة تمنح البكسل والحبر نفس النبل والاهتمام الصادق.',
    }
  }
];

export const SKILLS_LIST = [
  {
    category: {
      fr: 'Direction Créative & Stratégie 360°',
      en: 'Creative Direction & 360° Strategy',
      es: 'Dirección Creativa y Estrategia 360°',
      ar: 'الإدارة الإبداعية والاستراتيجية الشاملة 360°',
    },
    items: [
      {
        fr: 'Direction de Création de Campagnes 360°',
        en: '360° Campaign Creative Direction',
        es: 'Dirección Creativa de Campañas 360°',
        ar: 'إدارة إبداعية لحملات إعلانية متكاملة 360°',
      },
      {
        fr: 'Stratégie de Marque & Positionnement Clé',
        en: 'Brand Strategy & Key Positioning',
        es: 'Estrategia de Marca y Posicionamiento',
        ar: 'استراتيجية العلامة والتموضع الريادي',
      },
      {
        fr: 'Storytelling & Narration Publicitaire',
        en: 'Storytelling & Commercial Narration',
        es: 'Storytelling y Narrativa Publicitaria',
        ar: 'السرد القصصي والرواية الإعلانية',
      },
      {
        fr: 'Direction Éditoriale & Manifestes de Marque',
        en: 'Editorial Direction & Brand Manifestos',
        es: 'Dirección Editorial y Manifiestos de Marca',
        ar: 'الإدارة التحريرية وبيانات العلامة',
      }
    ]
  },
  {
    category: {
      fr: 'Direction Artistique & Identité',
      en: 'Art Direction & Brand Identity',
      es: 'Dirección de Arte e Identidad',
      ar: 'الإدارة الفنية وهوية العلامات التجارية',
    },
    items: [
      {
        fr: 'Systèmes Visuels de Marque & Guidelines',
        en: 'Brand Visual Systems & Guidelines',
        es: 'Sistemas Visuales de Marca y Guías de Estilo',
        ar: 'الأنظمة البصرية ودلائل الهوية القياسية',
      },
      {
        fr: 'Direction Typographique & Compositions Éditoriales',
        en: 'Typographic Direction & Editorial Layouts',
        es: 'Dirección Tipográfica y Diseño Editorial',
        ar: 'الإدارة التايبوغرافية والتصميم التحريري',
      },
      {
        fr: 'Conception d’Affichage Grand Format (OOH)',
        en: 'Large-Format Billboard Design (OOH)',
        es: 'Diseño Publicitario de Gran Formato (OOH)',
        ar: 'تصميم الإعلانات الطرقية الكبرى (OOH)',
      },
      {
        fr: 'Packaging & Stylisme Visuel Produit',
        en: 'Packaging & Product Visual Styling',
        es: 'Packaging y Estilismo Visual de Producto',
        ar: 'تصميم التغليف وتنسيق مظهر المنتجات',
      }
    ]
  },
  {
    category: {
      fr: 'Image, Cinéma & Photographie',
      en: 'Image, Film & Photography',
      es: 'Imagen, Cine y Fotografía',
      ar: 'الصورة، السينما والتصوير الفوتوغرافي',
    },
    items: [
      {
        fr: 'Direction Photographique & Prises de Vue Studio',
        en: 'Photographic Direction & Studio Shoots',
        es: 'Dirección Fotográfica y Tomas en Estudio',
        ar: 'الإدارة الفوتوغرافية وجلسات الاستوديو',
      },
      {
        fr: 'Séries d’Auteur & Photographie Mobile',
        en: 'Author Photo Series & Mobile Photography',
        es: 'Series de Autor y Fotografía Móvil',
        ar: 'المجموعات الفنية المستقلة وتصوير الهواتف',
      },
      {
        fr: 'Direction de Spots Publicitaires & Storyboarding',
        en: 'Commercial Spots & Storyboard Direction',
        es: 'Dirección de Spots Comerciales y Storyboarding',
        ar: 'إخراج الإعلانات المصورة ورسم المشاهد',
      },
      {
        fr: 'Étalonnage Chromatique & Retouche Haute Précision',
        en: 'Chromatic Color Grading & High-Precision Retouching',
        es: 'Corrección de Color y Retoque de Alta Precisión',
        ar: 'التدرج اللوني والمعالجة الدقيقة للصور',
      }
    ]
  },
  {
    category: {
      fr: 'Expérience Digitale & Innovation',
      en: 'Digital Experience & Innovation',
      es: 'Experiencia Digital e Innovación',
      ar: 'التجربة الرقمية والابتكار التفاعلي',
    },
    items: [
      {
        fr: 'Design d’Interface Éditoriale & UI/UX',
        en: 'Editorial UI/UX Interface Design',
        es: 'Diseño de Interfaz Editorial y UI/UX',
        ar: 'تصميم الواجهات التحريرية والتجربة الرقمية UI/UX',
      },
      {
        fr: 'Direction de Design Systems Web & Mobile',
        en: 'Web & Mobile Design Systems Direction',
        es: 'Dirección de Sistemas de Diseño Web y Móvil',
        ar: 'إدارة أنظمة التصميم للمواقع والتطبيقات',
      },
      {
        fr: 'Direction des Formats Réseaux Sociaux & Reels',
        en: 'Social Formats & Short-Form Video Direction',
        es: 'Dirección de Formatos Sociales y Video Corto',
        ar: 'إدارة محتوى المنصات الاجتماعية والفيديو القصير',
      },
      {
        fr: 'Activations de Marque & Événements Hybrides',
        en: 'Brand Activations & Hybrid Event Direction',
        es: 'Activaciones de Marca y Eventos Híbridos',
        ar: 'تنشيط العلامات والفعاليات الهجينة',
      }
    ]
  }
];

export const CLIENTS_COLLABORATORS = [
  'Es Saadi Resort Marrakech',
  'Mercedes-Benz',
  'Roche Tunisie',
  'Président (Lactalis)',
  'Agil Energy',
  'BIAT Banque',
  'Fruzi',
  'MAGIC Hotels & Resorts',
  'GOLDEN CHIPS',
  'Orange Tunisie',
  'Tunisie Télécom',
  'Ooredoo',
  'Honda',
  'Alfa Romeo',
  'Fiat',
  'Coca-Cola',
  'Shell',
  'Boga',
  'Topnet',
  'Géant',
  'Monoprix',
  'Condor'
];

export const AGENCY_EXPERIENCE = [
  {
    role: {
      fr: 'Responsable Pôle Studio',
      en: 'Head of Studio Department',
      es: 'Responsable del Área de Estudio',
      ar: 'مدير قسم الاستوديو الإبداعي',
    },
    agency: 'Es Saadi Resort Marrakech',
    location: 'Marrakech'
  },
  {
    role: {
      fr: 'Senior Art Director',
      en: 'Senior Art Director',
      es: 'Director de Arte Senior',
      ar: 'مدير فني أول',
    },
    agency: 'TBWA',
    location: 'Tunisie'
  },
  {
    role: {
      fr: 'Senior Art Director & Tech Lead Design',
      en: 'Senior Art Director & Tech Lead Design',
      es: 'Director de Arte Senior y Líder Técnico de Diseño',
      ar: 'مدير فني أول ومسؤول التصميم التقني',
    },
    agency: 'MediaNet',
    location: 'Tunis, Tunisie'
  },
  {
    role: {
      fr: 'Creative Director',
      en: 'Creative Director',
      es: 'Director Creativo',
      ar: 'مدير إبداعي',
    },
    agency: 'W User Agency',
    location: 'Tunisie'
  },
  {
    role: {
      fr: 'Art Director',
      en: 'Art Director',
      es: 'Director de Arte',
      ar: 'مدير فني',
    },
    agency: 'JWT (J. Walter Thompson)',
    location: 'Tunisie'
  },
  {
    role: {
      fr: 'Digital Art Director',
      en: 'Digital Art Director',
      es: 'Director de Arte Digital',
      ar: 'مدير فني رقمي',
    },
    agency: 'Tracy Publicis',
    location: 'Algérie'
  },
  {
    role: {
      fr: 'Project Manager Design & Communication',
      en: 'Project Manager Design & Communication',
      es: 'Gerente de Proyectos de Diseño y Comunicación',
      ar: 'مدير مشاريع التصميم والاتصال',
    },
    agency: 'Orange',
    location: 'Tunisie'
  },
  {
    role: {
      fr: 'Digital Art Director / UI/UX Designer',
      en: 'Digital Art Director / UI/UX Designer',
      es: 'Director de Arte Digital / Diseñador UI/UX',
      ar: 'مدير فني رقمي ومصمم واجهات UI/UX',
    },
    agency: 'Havas Worldwide',
    location: 'Tunisie'
  },
  {
    role: {
      fr: 'Art Director / UI/UX Designer',
      en: 'Art Director / UI/UX Designer',
      es: 'Director de Arte / Diseñador UI/UX',
      ar: 'مدير فني ومصمم واجهات UI/UX',
    },
    agency: 'Loyalcraft',
    location: 'Tunisie'
  }
];
