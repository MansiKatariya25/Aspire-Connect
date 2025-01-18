FROM maven:3-eclipse-temurin-23 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM eclipse-temurin:23-alpine
COPY --from=build target/your-app-name-0.0.1-SNAPSHOT.jar /app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]
