# Stage 1 - the build process
FROM node:10.15-alpine as build-deps
WORKDIR /src
COPY package.json yarn.lock nginx.conf ./

RUN yarn
COPY . ./
RUN yarn build

# Stage 2 - the production environment
FROM nginx:1.15-alpine
COPY --from=build-deps /src/build /var/www
COPY --from=build-deps /src/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]