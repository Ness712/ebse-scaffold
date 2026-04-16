# Client HTTP

**[RECOMMANDE]** Backend: WebClient (reactive) ou RestClient (blocking). Frontend: fetch natif | Score GRADE : 4/7

## Backend — Spring Boot

```java
// RestClient (Spring 6.1+, remplacement moderne de RestTemplate)
@Bean
public RestClient restClient() {
    return RestClient.builder()
        .baseUrl("https://api.externe.com")
        .defaultHeader(HttpHeaders.ACCEPT, MediaType.APPLICATION_JSON_VALUE)
        .requestInterceptor(new LoggingInterceptor())
        .build();
}

var response = restClient.get()
    .uri("/resources/{id}", id)
    .retrieve()
    .body(ResourceDto.class);
```

## Frontend — fetch natif

```ts
// Pas besoin d'axios avec les APIs modernes
const response = await fetch('/api/exercices', {
  headers: { 'Content-Type': 'application/json' },
});
if (!response.ok) throw new HttpError(response.status);
const data: Exercice[] = await response.json();
```

| Option | Contexte | Statut |
|--------|----------|--------|
| RestClient | Spring blocking (nouveau) | Recommande depuis Spring 6.1 |
| WebClient | Spring reactive (WebFlux) | Recommande si reactive |
| RestTemplate | Spring blocking (ancien) | En maintenance, pas deprecie |
| fetch | Navigateur natif | Standard, zero dependance |
| axios | Navigateur + Node | Superflu si fetch suffit |

Sources : Spring Boot 3.2+ docs — RestClient (niv. 3), MDN fetch API (niv. 3), Spring WebClient docs (niv. 3), Twelve-Factor IV — services externes = attached resources (niv. 5)
