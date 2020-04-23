'use strict'

//Palavra chave 1 'futebol'

const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.resource('users', 'UserController')
	.apiOnly()

Route.resource('posts', 'PostController')
	.apiOnly()
