FROM openjdk:8-jdk-alpine
MAINTAINER baelgung.com
COPY /target/Hola-0.0.1-SNAPSHOT.war service.war
ENTRYPOINT ["java","-jar","/service.war"]