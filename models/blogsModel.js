import { Schema, model, models } from 'mongoose';

const blogSchema = new Schema({
  title: String,
  auhtor: {
    type: String,
  },
  content: String,
});

const Blog = models.Blog || model('portfolioBlog', blogSchema);

export default Blog;
