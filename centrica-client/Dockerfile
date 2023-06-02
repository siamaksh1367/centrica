# Stage 1: Build the Angular app
FROM node:16 AS build
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application
COPY . .

# Build the Angular app for production
RUN npm run build --prod

# Stage 2: Serve the built app using Nginx
FROM nginx:alpine
COPY --from=build /app/dist/centrica-client /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
