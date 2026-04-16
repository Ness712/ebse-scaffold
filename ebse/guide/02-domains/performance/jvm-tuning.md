# JVM Tuning

**[BONNE PRATIQUE]** G1GC par defaut, heap fixe, container-aware | Score GRADE : 3/7

Java 21 : G1GC est le GC par defaut. Container-aware depuis Java 10 (respecte les limites cgroups Docker).

## Configuration recommandee

```dockerfile
# Dockerfile — JVM dans container
FROM eclipse-temurin:21-jre-alpine
COPY target/*.jar app.jar

# Heap fixe = eviter le resize en prod
# MaxRAMPercentage si on veut s'adapter au container
ENV JAVA_OPTS="-Xms512m -Xmx512m -XX:+UseG1GC \
  -XX:MaxGCPauseMillis=200 \
  -XX:+UseStringDeduplication"

ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -jar app.jar"]
```

## Regles cles

| Regle | Detail |
|-------|--------|
| Heap fixe (Xms = Xmx) | Evite le resize, comportement previsible |
| G1GC | Defaut Java 21, bon compromis latence/throughput |
| Container limits | Docker memory limit >= Xmx + ~200MB (metaspace, threads) |
| MaxRAMPercentage | Alternative a Xmx : `-XX:MaxRAMPercentage=75.0` |

Sources : Oracle JVM Tuning Guide Java 21 (niv. 3), Spring Boot Docker docs — container-aware JVM (niv. 3), Eclipse Temurin — distribution recommandee (niv. 3), Twelve-Factor V — build/release/run (niv. 5)
