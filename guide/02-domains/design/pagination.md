# Pagination

**[RECOMMANDE]** Offset pour listes simples, cursor-based pour infinite scroll | Score GRADE : 4/7

## Arbre de decision

```
Type de liste ?
├── Liste admin, tableau triable → Offset (Spring Pageable)
├── Feed, fil de discussion, infinite scroll → Cursor-based
└── Export / batch → Cursor-based (stabilite des resultats)
```

## Backend — Spring Data Pageable (offset)

```java
@GetMapping("/exercices")
public Page<ExerciceDto> lister(
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "20") int size) {
    return exerciceService.lister(PageRequest.of(page, size, Sort.by("createdAt").descending()));
}
```

## Backend — Cursor-based

```java
@GetMapping("/messages")
public CursorPage<MessageDto> lister(
        @RequestParam(required = false) UUID cursor,
        @RequestParam(defaultValue = "20") int limit) {
    // WHERE created_at < :cursor ORDER BY created_at DESC LIMIT :limit+1
    var items = messageRepository.findAfterCursor(cursor, limit + 1);
    boolean hasNext = items.size() > limit;
    return new CursorPage<>(items.subList(0, Math.min(items.size(), limit)), hasNext);
}
```

| Methode | Avantage | Inconvenient |
|---------|----------|--------------|
| Offset | Simple, page N directe | Lent sur gros datasets, resultats instables si insertion |
| Cursor | Performant, stable | Pas de saut a page N |

Sources : Spring Data docs — Pageable (niv. 3), Baymard Institute — pagination UX research (niv. 4), Slack Engineering — cursor pagination at scale (niv. 4)
