import posts from '../assets/posts.json'

export default {
  data() {
    return {
      count: 5,
    }
  },
  computed : {
    enabled_posts : function(){
      return posts.filter(function(post){
        return !post.disabled;
      })
    },

    sorted_enabled_posts : function(){
      return this.enabled_posts.slice().sort(function(p1, p2){
        return this.parsed_dates[p2.path] - this.parsed_dates[p1.path];
      }.bind(this)).filter((_, index) => index < this.count)
    },

    recent_enabled_posts : function(){
      return this.enabled_posts.slice().sort(function(p1, p2){
        return this.parsed_dates[p2.path] - this.parsed_dates[p1.path];
      }.bind(this)).filter((_, index) => index < 3)
    },

    parsed_dates : function(){
      return Object.fromEntries(posts.map(function(post){
        return [post.path, new Date(Date.parse(post.date))];
      }));
    }
  },

  methods : {
    post_img : function(post){
      return require('../assets/posts/' + post.path + '.png')
    },
    loadMore: function () {
      this.count = this.count + 5;
    }
  }
}
