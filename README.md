# Inkmate API

- ### Get the repo
```bash
$ git clone https://github.com/cardosorrenan/inkmate_api.git

$ cd inkmate_api
```
- ### Build setup
```bash
# Builds an image from a Dockerfile 
$ docker build -t inkmate_api . --rm=true  

# Up a container over the specified image
$ docker run -p 8081:8081 -d inkmate_api
```
or
```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```
- ### Test
```bash
# Running in
http://localhost:8081/get_gallons?area=854.6
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
