FROM node:alpine as react-webpack-app
WORKDIR /app
COPY . ./
COPY . /app
RUN npm install
RUN npm run build
COPY . /build

FROM nginx:alpine
#COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-webpack-app /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


