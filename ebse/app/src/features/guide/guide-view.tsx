import type { UserChoices } from '../../shared/types/decisions';
import { useAllDecisions, useFilteredDecisions } from '../../shared/hooks/use-decisions';
import { GradeBadge } from '../../shared/components/grade-badge';

interface GuideViewProps {
  choices: UserChoices;
  onReset: () => void;
  onExport: () => void;
}

const domainLabels: Record<string, string> = {
  architecture: 'Architecture',
  security: 'Sécurité',
  design: 'Design & UI',
  testing: 'Testing',
  performance: 'Performance',
  reliability: 'Fiabilité',
  operations: 'Opérations',
  cicd: 'CI/CD',
  'code-quality': 'Qualité de code',
  data: 'Données',
  project: 'Gestion de projet',
  safety: 'Safety & Conformité',
  accessibility: 'Accessibilité',
};

export function GuideView({ choices, onReset, onExport }: GuideViewProps) {
  const allDecisions = useAllDecisions();
  const filtered = useFilteredDecisions(allDecisions, choices);

  // Group by domain
  const byDomain = filtered.reduce(
    (acc, rec) => {
      const domain = rec.decision.domain;
      if (!acc[domain]) acc[domain] = [];
      acc[domain].push(rec);
      return acc;
    },
    {} as Record<string, typeof filtered>,
  );

  const backendLabel = choices.backend?.replace(/-/g, ' ') ?? 'non défini';

  return (
    <div className="mx-auto max-w-4xl space-y-8 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Ton guide EBSE</h1>
          <p className="text-muted">
            Stack : {backendLabel} · {filtered.length} recommandations
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onExport}
            className="rounded-lg border border-border px-4 py-2 text-sm transition-colors hover:bg-card"
          >
            Exporter JSON
          </button>
          <button
            onClick={onReset}
            className="rounded-lg border border-border px-4 py-2 text-sm transition-colors hover:bg-card"
          >
            Reconfigurer
          </button>
        </div>
      </div>

      {Object.entries(byDomain)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([domain, recs]) => (
          <section key={domain} className="space-y-3">
            <h2 className="text-xl font-semibold">{domainLabels[domain] ?? domain}</h2>
            <div className="space-y-2">
              {recs.map((rec) => (
                <div
                  key={rec.decision.id}
                  className="rounded-lg border border-border bg-card p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="font-medium">{rec.recommendation}</div>
                      <div className="mt-1 text-sm text-muted">{rec.decision.question}</div>
                      {rec.implementation && (
                        <div className="mt-2 text-xs text-muted-foreground">
                          💡 {rec.implementation}
                        </div>
                      )}
                    </div>
                    <GradeBadge grade={rec.grade} level={rec.level} />
                  </div>
                  {rec.code && (
                    <pre className="mt-3 overflow-x-auto rounded bg-background p-3 text-xs">
                      <code>{rec.code}</code>
                    </pre>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}

      <footer className="border-t border-border pt-6 text-center text-xs text-muted">
        EBSE Guide · Evidence-Based Software Engineering (Kitchenham 2004) · Rien d'inventé, tout
        sourcé
      </footer>
    </div>
  );
}
