# Gestion d'etat

**[RECOMMANDE]** **Zustand** pour React | Score GRADE : 4/7

Lightweight (4kb), zero boilerplate, pas de Provider wrapper. Compatible React 19 et concurrent mode.

```ts
// store/useAuthStore.ts
import { create } from 'zustand';

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
```

## Arbre de decision

```
Etat a gerer ?
├── Local au composant → useState / useReducer
├── Partage entre composants proches → props / context
├── Etat global applicatif → Zustand
├── Cache serveur (API data) → React Query (TanStack Query)
└── Etat tres complexe avec middleware → Redux Toolkit
```

| Solution | Taille | Boilerplate | Cas d'usage |
|----------|--------|-------------|-------------|
| Zustand | 4kb | Minimal | Etat global simple a moyen |
| Redux Toolkit | 40kb+ | Moyen | Apps tres complexes, devtools avances |
| Jotai | 8kb | Minimal | Etat atomique, bottom-up |

Sources : npm trends 2025-2026 — Zustand #1 croissance (niv. 4), State of JS 2024 — satisfaction Zustand 96% (niv. 4), Zustand docs — "no providers, no boilerplate" (niv. 3), React docs — useState pour etat local (niv. 3)
