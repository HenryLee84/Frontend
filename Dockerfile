FROM node:lts-alpine AS build
WORKDIR /app
COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine
EXPOSE 80

COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]