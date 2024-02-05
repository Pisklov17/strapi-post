const { createCoreController } = require("@strapi/strapi").factories;
const schedule = require('node-schedule');

module.exports = createCoreController(
  "api::post.post",
  ({ strapi }) => ({
    getPublishedPosts(ctx) {
      return strapi.service('api::post.post').findPublishedPosts(ctx);
    },

    getUserPlannedPosts(ctx){
      return strapi.service('api::post.post').userPlannedPosts(ctx);
    },

    create(ctx) {
      return strapi.service('api::post.post').createPost(ctx);
    },

    update(ctx) {
      return strapi.service('api::post.post').updatePost(ctx);
    },

    delete(ctx) {
      return strapi.service('api::post.post').deletePost(ctx);
    },
  })
);

