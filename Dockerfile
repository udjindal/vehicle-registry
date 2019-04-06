FROM udjindal/ubuntu-vehicle-registry:version2

WORKDIR /home/vehicle-registry

EXPOSE 3000

CMD ["npm", "start"]
