# Code Ownership

**[BONNE PRATIQUE]** CODEOWNERS file, 1 reviewer min, rotation des reviewers, ownership collectif avec experts domaine | Score GRADE : 3/7

## Modele recommande

Ownership collectif avec des **domain experts** identifies. Pas de "seul proprietaire" qui cree un bus factor de 1, mais des referents par zone du code.

## CODEOWNERS

```
# .github/CODEOWNERS
/backend/src/chat/       @dev-chat-expert
/frontend/src/features/  @dev-frontend-lead
*.yml                    @devops-lead
```

## Regles

| Regle | Source |
|-------|--------|
| CODEOWNERS pour auto-assign les reviewers | GitHub docs — automation review |
| 1 reviewer minimum par PR | Bird et al. — correle avec moins de bugs |
| Rotation des reviewers pour diffuser la connaissance | Bird et al. — reduire le bus factor |
| Ownership collectif (pas de silos) | Microsoft study — code avec 1 owner a +65% defauts |

## Point cle

L'etude Microsoft (Bird et al., 2011) sur Windows Vista montre que le nombre de contributeurs et le manque d'ownership sont les meilleurs predicteurs de defauts. Un equilibre ownership + rotation est optimal.

Sources : GitHub CODEOWNERS docs (niv. 5), Bird et al. 2011 Microsoft code ownership study (niv. 4)
