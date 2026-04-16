interface GradeBadgeProps {
  grade: number;
  level: string;
}

const levelColors: Record<string, string> = {
  STANDARD: 'bg-green-600/20 text-green-400 border-green-600/30',
  RECOMMANDE: 'bg-blue-600/20 text-blue-400 border-blue-600/30',
  BONNE_PRATIQUE: 'bg-yellow-600/20 text-yellow-400 border-yellow-600/30',
  CHOIX_EQUIPE: 'bg-gray-600/20 text-gray-400 border-gray-600/30',
};

const levelLabels: Record<string, string> = {
  STANDARD: 'Standard',
  RECOMMANDE: 'Recommandé',
  BONNE_PRATIQUE: 'Bonne pratique',
  CHOIX_EQUIPE: "Choix d'équipe",
};

export function GradeBadge({ grade, level }: GradeBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${levelColors[level] ?? levelColors.CHOIX_EQUIPE}`}
    >
      {levelLabels[level] ?? level} · {grade}/7
    </span>
  );
}
