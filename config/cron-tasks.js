
module.exports = {
  "0 * * * * *": async () => {
    const currentTime = new Date();
    currentTime.setMilliseconds(0);
    const plannedPosts = await strapi.query('api::post.post').findMany({where: {isPublished: false,  publishTime: {
          $gte: currentTime.toISOString(),
          $lt: new Date(currentTime.getTime() + 60000).toISOString(),
        },}});
    for(const post of plannedPosts){
      const updatedPost = await strapi.query('api::post.post').update({where: {id: post.id}, data: { isPublished: true}});
    }
  }
};
