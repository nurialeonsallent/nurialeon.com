FROM jekyll/jekyll:4.2.0

RUN npm install -g webp-converter-cli
RUN webpc -r
