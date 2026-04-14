# Transactions

**[RECOMMANDE]** @Transactional au service layer, idempotency keys pour mutations | Score GRADE : 4/7

## Regles

```
Ou placer @Transactional ?
├── Controller → JAMAIS (boundary HTTP, pas business)
├── Service → OUI (boundary transactionnelle)
└── Repository → NON (trop granulaire, chaque query = 1 tx)
```

## Implementation

```java
@Service
@Transactional(readOnly = true) // defaut lecture seule
public class ExerciceService {

    @Transactional // ecrase readOnly pour les mutations
    public ExerciceDto creer(ExerciceCreateDto dto) {
        var exercice = exerciceMapper.toEntity(dto);
        return exerciceMapper.toDto(exerciceRepository.save(exercice));
    }

    public Page<ExerciceDto> lister(Pageable pageable) {
        return exerciceRepository.findAll(pageable).map(exerciceMapper::toDto);
    }
}
```

## Idempotency key (mutations API)

```java
@PostMapping("/commandes")
public ResponseEntity<CommandeDto> creer(
        @RequestHeader("Idempotency-Key") UUID idempotencyKey,
        @RequestBody CommandeCreateDto dto) {
    return commandeService.creerIdempotent(idempotencyKey, dto);
}
// Service verifie si idempotencyKey existe deja → retourne le resultat existant
```

| Piege | Solution |
|-------|----------|
| @Transactional sur methode private | Ne fonctionne pas (proxy Spring) |
| Exception checked non propagee | Ajouter rollbackFor = Exception.class |
| Transaction trop longue | Decouper, eviter les appels externes dans la tx |

Sources : Spring @Transactional docs — propagation, isolation (niv. 3), SWEBOK v4 — ACID properties (niv. 1), IETF draft — Idempotency-Key header (niv. 2), Fowler — Saga pattern for distributed tx (niv. 5)
