
 FROM node:15.4 as appfrontend
 WORKDIR /app
 COPY . /app
 RUN yarn install --production
 RUN yarn build
 


FROM nginx

ENV PORT = 80
#hello
COPY nginx.conf /etc/nginx/conf.d/configfile.template
COPY --from=appfrontend /app/build /usr/share/nginx/html