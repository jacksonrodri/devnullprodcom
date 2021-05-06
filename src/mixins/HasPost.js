import Posts from "@/assets/posts"

export default {
  props: {
    _post : Object
  },

  computed : {
    post: function(){
      if(this._post) return this._post;

      var path = this.$route.path.split("/")
          path = path[path.length-1]

      return Posts.find(function(post){
        return post.path == path;
      })
    },

    parsed_date : function(){
      return new Date(Date.parse(this.post.date));
    },
  },

  methods : {
    post_img : function(post){
      return require('../assets/posts/' + post.path + '.png')
    }
  }
}
