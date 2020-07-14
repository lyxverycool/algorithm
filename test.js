const next = () => 22

const apiMiddleware = api => next => {
  next(222)
}


console.log(apiMiddleware()())