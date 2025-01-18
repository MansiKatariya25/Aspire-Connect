FROM maven:3-eclipse-temurin-23 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM eclipse-temurin:23-alpine
COPY  --from=build /target/*.jar demo.jar
EXPOSE 8000

ENTRYPOINT ["java","-jar","demo.jar"]
