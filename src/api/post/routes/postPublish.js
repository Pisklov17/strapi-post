module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/isPublished',
      handler: 'post.getPublishedPosts',
    },    {
      method: 'GET',
      path: '/plannedPosts',
      handler: 'post.getUserPlannedPosts',
    },
  ]
}