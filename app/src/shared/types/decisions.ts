export interface Source {
  name: string;
  pyramid: number;
  year: number;
  quote?: string;
  url?: string;
}

export interface Principle {
  text: string;
  grade: number;
  level: 'STANDARD' | 'RECOMMANDE' | 'BONNE_PRATIQUE' | 'CHOIX_EQUIPE';
  sources: Source[];
}

export interface StackVariant {
  recommendation: string;
  grade: number;
  level: 'STANDARD' | 'RECOMMANDE' | 'BONNE_PRATIQUE' | 'CHOIX_EQUIPE';
  implementation?: string;
  code?: string;
  sources: Source[];
}

export interface Decision {
  id: string;
  domain: string;
  question: string;
  depends_on?: string[];
  tags: string[];
  classification: 'universal' | 'mixed' | 'stack-specific';
  universal: {
    principles: Principle[];
  };
  variants: Record<string, StackVariant>;
}

export interface TreeNode {
  type: 'choice' | 'router' | 'result';
  question?: string;
  source?: string;
  description?: string;
  options?: TreeOption[];
  condition?: string;
  routes?: Record<string, string>;
  sets?: Record<string, string>;
}

export interface TreeOption {
  label: string;
  description?: string;
  sets: Record<string, string>;
  next: string;
}

export interface DecisionTree {
  version: string;
  nodes: Record<string, TreeNode>;
}

export interface UserChoices {
  approach?: 'optimal' | 'constrained';
  project_type?: string;
  scale?: string;
  backend?: string;
  frontend?: string;
  database?: string;
  budget?: string;
  [key: string]: string | undefined;
}

export interface Profile {
  name: string;
  created: string;
  choices: UserChoices;
}
