module.exports = {
  "1 * * * * *": async () => {
    console.log(1)
    const draftArticleToPublish = await strapi.query('api::post.post').findMany({where: {isPublished: false, publishTime_lte: new Date()}});
    draftArticleToPublish.forEach(async article => {
        await strapi.query('post').update({where: {id: article.id}, data: { isPublished: true}})
      }

    )
  }
};
