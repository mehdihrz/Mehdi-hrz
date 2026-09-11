export type Language = 'fr' | 'en' | 'es' | 'ar';
export type Theme = 'dark' | 'light';

export type ViewMode = 'editorial' | 'grid' | 'index';

export type DisciplineCategory = 
  | 'all'
  | 'direction-artistique'
  | 'identite-branding'
  | 'photographie-campagne'
  | 'digital-experience';

export interface LocalizedString {
  fr: string;
  en: string;
  es?: string;
  ar?: string;
}

export interface LocalizedStringList {
  fr: string[];
  en: string[];
  es?: string[];
  ar?: string[];
}

export interface ProjectImage {
  url: string;
  caption: LocalizedString;
  aspectRatio?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: LocalizedString;
  client: string;
  year: string;
  category: DisciplineCategory;
  categoryLabel: LocalizedString;
  featured: boolean;
  coverImage: string;
  gallery: ProjectImage[];
  role: LocalizedString;
  statement: LocalizedString;
  concept: LocalizedString;
  deliverables: LocalizedStringList;
  typography: string;
  palette: string[];
  behanceUrl?: string;
  linkedinMention?: string;
  collaborators?: string[];
  stats?: {
    views?: number;
    appreciations?: number;
  };
}

export interface ManifestoPillar {
  number: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  description: LocalizedString;
}
