FROM node:alpine

WORKDIR /JollyWheelOfWonders
COPY ./webapp ./webapp
COPY ./nodeJS ./nodeJS
RUN cd /JollyWheelOfWonders/webapp && npm ci && npm run build
RUN cd /JollyWheelOfWonders/nodeJS && npm ci
RUN rm /JollyWheelOfWonders/webapp -rf

EXPOSE 8080

CMD cd /JollyWheelOfWonders/nodeJS && npm start
