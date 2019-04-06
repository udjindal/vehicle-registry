FROM node:8

RUN mkdir -p /home/vehicle-registry

COPY . /home/vehicle-registry/

WORKDIR /home/vehicle-registry/views

RUN npm install

RUN ls

RUN npm run-script build

WORKDIR /home/vehicle-registry

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]

