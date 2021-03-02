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

# serve with hot reload at localhost:8081
$ yarn start
```
- ### Test
```bash
# Running in
http://localhost:8081/get_gallons?area=854.6
```
