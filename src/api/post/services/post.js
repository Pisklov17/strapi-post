'use strict';

/**
 * post service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::post.post',({ strapi }) =>  ({
  async findPublishedPosts(ctx) {
    try {
      const publishedPosts = await strapi.db.query('api::post.post').findMany({
        where: { isPublished: true },
      });
      ctx.send(publishedPosts);
    } catch (error) {
      ctx.badRequest("Error fetching published posts");
    }
  },
  async userPlannedPosts(ctx){
    try {
      const userId = ctx.state.user.id;
      const plannedPosts = await strapi.db.query('api::post.post').findMany({
        where: {
          isPublished: false,
          user: userId,
        },
      });
      ctx.send(plannedPosts);
    } catch (error) {
      ctx.badRequest("Error fetching planned posts");
    }
  },

  async createPost(ctx){
    try {
      const { title, text, publishTime } = ctx.request.body.data;
      let isPublished;
      if (publishTime && new Date(publishTime) <= new Date()) {
        return ctx.badRequest("Publish time must be in the future.");
      }
      const userId = ctx.state.user.id; // Получаем ID текущего пользователя из контекста
      if (publishTime){
        isPublished = false
      }
      const newPost = await strapi.query('api::post.post').create({data:
          {
            title,
            text,
            publishTime,
            isPublished,
            user: userId
          }
      });
      ctx.send(newPost);
    } catch (error) {
      console.log(error)
      ctx.badRequest("Error creating post");
    }
  },

  async updatePost(ctx){
    try {
      const id = parseInt(ctx.params.id, 10);
      const { title, text, publishTime, isPublished} = ctx.request.body.data;
      const existingPost = await strapi.query('api::post.post').findOne({where: { id }, populate: {user: true}});
      if (!existingPost) {
        return ctx.notFound("Post not found");
      }
      if (existingPost.user.id !== ctx.state.user.id) {
        return ctx.forbidden("You don't have permission to edit this post");
      }
      const updatedPost = await strapi.query('api::post.post').update( {where: {id}, data: {
          title,
          text,
          isPublished,
          publishTime,
        }});
      ctx.send(updatedPost);
    } catch (error) {
      ctx.badRequest("Error updating post");
    }
  },

  async deletePost(ctx){
    try {
      const id = parseInt(ctx.params.id, 10);
      const existingPost = await strapi.query('api::post.post').findOne({ where: { id }, populate: { user: true } });
      if (!existingPost) {
        return ctx.notFound("Post not found");
      }
      if (existingPost.user.id !== ctx.state.user.id) {
        return ctx.forbidden("You don't have permission to delete this post");
      }
      await strapi.query('api::post.post').delete({ where:
          {
            id
          }
      });
      ctx.send("Post deleted successfully");
    } catch (error) {
      ctx.badRequest("Error deleting post");
    }
  }

}));
