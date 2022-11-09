FROM jekyll/jekyll:latest

RUN npm install -g webp-converter-cli
RUN webpc -r
