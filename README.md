![http://i.imgur.com/Iof0YCb.png](http://i.imgur.com/Iof0YCb.png)

# Hodor

This project uses [Yarn](https://yarnpkg.com/), [Gulp](http://gulpjs.com/), [Sass](http://sass-lang.com/) and [Pug](https://pugjs.org/).


## Installation

### 1. Install the dependencies to run this stask

- [NodeJS](https://nodejs.org/en/)
- [Gulp](http://gulpjs.com/)
- [Yarn](https://yarnpkg.com/)

### 2. Clone this repository

```sh
$ git clone https://github.com/vicainelli/hodor.git
```

### 3. Install gulp globally (If you do not yet)

```sh
$ npm install -g gulp
```

### 4. Install dependencies inside `app` path

```sh
$ cd hodor/app
$ yarn
```

## Taks

### Build (default)

Run this task to build static files

```sh
$ gulp
```

### Watch (views and styles)

Run this task to buil and watch all changes in `.sass` and `.pug` files

```sh
$ gulp watch
```