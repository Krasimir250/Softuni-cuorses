function solution() {
  class Post {
    constructor(title, content) {
      this.title = title;
      this.content = content;
    }

    toString() {
      return `Post: ${this.title}\nContent: ${this.content}`;
    }
  }

  class SocialMediaPost extends Post {
    constructor(title, content, likes, dislikes) {
      super(title, content);
      this.likes = likes;
      this.dislikes = dislikes;
      this.comments = [];
    }

    addComment(comment) {
      this.comments.push(comment);
    }

    toString() {
      let result = super.toString();
      result += `\nRating: ${this.likes - this.dislikes}`;

      if (this.comments.length > 0) {
        result += "\nComments:\n";
        result += this.comments.map((comment) => ` * ${comment}`).join("\n");
      }

      return result;
    }
  }

  class BlogPost extends Post {
    constructor(title, content, views) {
      super(title, content);
      this.views = views;
    }

    view() {
      this.views++;
      return this;
    }

    toString() {
      return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`;
    }
  }

  return {
    Post,
    SocialMediaPost,
    BlogPost,
  };
}

module.exports = solution;

const classes = solution();

let post = new classes.Post("Post", "Content");
console.log(post.toString());
// Output:
// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);
scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");
console.log(scm.toString());
// Output:
// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
// * Good post
// * Very good post
// * Wow!

let blogPost = new classes.BlogPost("Blog Post", "Blog Content", 100);
blogPost.view().view().view();
console.log(blogPost.toString());
// Output:
// Post: Blog Post
// Content: Blog Content
// Views: 103
