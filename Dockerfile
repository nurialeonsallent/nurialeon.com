FROM jekyll/jekyll:4.2.2

RUN npm install -g webp-converter-cli
RUN webpc -r
