import { useState } from 'react';
import type { DecisionTree, UserChoices, TreeNode } from '../../shared/types/decisions';
import decisionTreeData from '../../../../data/decision-tree.json';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const tree = decisionTreeData as any as DecisionTree;

interface ConfiguratorProps {
  onComplete: (choices: UserChoices) => void;
}

export function Configurator({ onComplete }: ConfiguratorProps) {
  const [currentNodeId, setCurrentNodeId] = useState('start');
  const [choices, setChoices] = useState<UserChoices>({});
  const [history, setHistory] = useState<string[]>([]);

  const currentNode: TreeNode | undefined = tree.nodes[currentNodeId];

  if (!currentNode) return <div>Erreur : noeud introuvable</div>;

  // Router node — auto-redirect based on condition
  if (currentNode.type === 'router' && currentNode.condition && currentNode.routes) {
    const value = choices[currentNode.condition] ?? '';
    const nextNode = currentNode.routes[value] ?? Object.values(currentNode.routes)[0];
    if (nextNode && nextNode !== currentNodeId) {
      // Use setTimeout to avoid state update during render
      setTimeout(() => setCurrentNodeId(nextNode), 0);
      return null;
    }
  }

  // Result node — finalize choices
  if (currentNode.type === 'result') {
    const finalChoices = { ...choices, ...currentNode.sets };
    return (
      <div className="mx-auto max-w-2xl space-y-6 p-8">
        <h2 className="text-2xl font-bold">Ton profil</h2>
        <div className="space-y-2 rounded-lg border border-border bg-card p-6">
          {Object.entries(finalChoices)
            .filter(([, v]) => v)
            .map(([key, value]) => (
              <div key={key} className="flex justify-between">
                <span className="text-muted">{key}</span>
                <span className="font-medium">{value}</span>
              </div>
            ))}
        </div>
        <button
          onClick={() => onComplete(finalChoices)}
          className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Voir mon guide personnalisé →
        </button>
      </div>
    );
  }

  // Choice node — display question + options
  const handleSelect = (option: { sets: Record<string, string>; next: string }) => {
    setChoices((prev) => ({ ...prev, ...option.sets }));
    setHistory((prev) => [...prev, currentNodeId]);
    setCurrentNodeId(option.next);
  };

  const handleBack = () => {
    const prev = history[history.length - 1];
    if (prev) {
      setHistory((h) => h.slice(0, -1));
      setCurrentNodeId(prev);
    }
  };

  return (
    <div className="mx-auto max-w-2xl space-y-6 p-8">
      {history.length > 0 && (
        <button onClick={handleBack} className="text-sm text-muted hover:text-foreground">
          ← Retour
        </button>
      )}

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">{currentNode.question}</h2>
        {currentNode.source && (
          <p className="text-sm text-muted">Source : {currentNode.source}</p>
        )}
      </div>

      <div className="space-y-3">
        {currentNode.options?.map((option, i) => (
          <button
            key={i}
            onClick={() => handleSelect(option)}
            className="w-full rounded-lg border border-border bg-card p-4 text-left transition-colors hover:border-primary hover:bg-card/80"
          >
            <div className="font-medium">{option.label}</div>
            {option.description && (
              <div className="mt-1 text-sm text-muted">{option.description}</div>
            )}
          </button>
        ))}
      </div>

      <div className="text-xs text-muted">
        Étape {history.length + 1} · Chaque question est sourcée via EBSE
      </div>
    </div>
  );
}
