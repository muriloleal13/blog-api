'use strict'

const Post = use('App/Models/Post')

class PostController {

  async index ({ request, response, view }) {
    const posts = await Post.all()
    return posts
  }

  async store ({ request, response }) {
    const id = request.input('id')
    const data = request.only(['title', 'body'])
    const post = await Post.create({...data, user_id:id})
    return post
  }

  async show ({ params, request, response, view }) {
    const post = await Post.findOrFail(params.id)
    return post
  }

  async update ({ params, request, response }) {
    const post = await Post.findOrFail(params.id)
    const data = request.only(['title', 'body'])
    post.merge(data)
    await post.save()
    return post
  }

  async destroy ({ params, request, response }) {
    const post = await Post.findOrFail(params.id)
    await post.delete()
  }
    
}

module.exports = PostController
