'use strict'

const User = use('App/Models/User')

class UserController {

	async index ({ request, response, view }) {
	  const posts = await User.all()
	  return posts
	}

	async store ({ request, response }) {
    const id = request.input('id')
    const data = request.only(['username', 'email', 'password'])
    const post = await User.create({...data, id:id})
    return post
  }

  async show ({ params, request, response, view }) {
    const post = await User.findOrFail(params.id)
    return post
  }

  async update ({ params, request, response }) {
    const post = await User.findOrFail(params.id)
    const data = request.only(['title', 'body'])
    post.merge(data)
    await post.save()
    return post
  }

  async destroy ({ params, request, response }) {
    const post = await User.findOrFaiç(params.id)
    await post.delete()
  }

}

module.exports = UserController
