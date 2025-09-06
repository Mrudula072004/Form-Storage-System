FROM node

ENV MONGO_DB_USENAME=mrudula_admin \
    MONGO_DB_PWD=mrudula_password

RUN mkdir -p  dock/nodeapp

COPY . /dock/nodeapp/

CMD ["node","/dock/nodeapp/server.js"]