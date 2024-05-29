FROM node

WORKDIR /app


COPY package*.json ./

# Instala las dependencias 
RUN npm install


COPY . .

EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "index.js"]
