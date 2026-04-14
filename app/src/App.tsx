import { useState } from 'react';
import type { UserChoices } from './shared/types/decisions';
import { Configurator } from './features/configurator/configurator';
import { GuideView } from './features/guide/guide-view';

type AppState = 'configurator' | 'guide';

export default function App() {
  const [state, setState] = useState<AppState>('configurator');
  const [choices, setChoices] = useState<UserChoices>({});

  const handleComplete = (newChoices: UserChoices) => {
    setChoices(newChoices);
    setState('guide');
  };

  const handleReset = () => {
    setChoices({});
    setState('configurator');
  };

  const handleExport = () => {
    const data = {
      profile: choices,
      exported_at: new Date().toISOString(),
      methodology: 'EBSE (Kitchenham 2004)',
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ebse-profile-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen">
      <header className="border-b border-border p-4">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <h1 className="text-lg font-bold">
            EBSE Guide <span className="text-sm font-normal text-muted">Evidence-Based</span>
          </h1>
          {state === 'guide' && (
            <button onClick={handleReset} className="text-sm text-muted hover:text-foreground">
              ← Nouveau projet
            </button>
          )}
        </div>
      </header>

      <main>
        {state === 'configurator' && <Configurator onComplete={handleComplete} />}
        {state === 'guide' && (
          <GuideView choices={choices} onReset={handleReset} onExport={handleExport} />
        )}
      </main>
    </div>
  );
}
