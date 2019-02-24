const Article = require('../models/article');

class ArticleController {
  findAll(req, res) {
    Article.find({})
      .then(a => res.send(a))
      .catch(err => console.log(err));
  }

  findById(req, res) {
    const id = req.params.id;

    Article.findOne({_id: id})
      .then(a => res.send(a))
      .catch(err => console.log(err));
  }

  create(req, res) {
    if (!req.body) {
      return res.sendStatus(400);
    }

    const title = req.body.title;
    const content = req.body.content;
    const description = req.body.description;
    const urlToImage = req.body.urlToImage;
    const publishedAt = req.body.publishedAt;
    const author = req.body.author;
    const source = req.body.source;
    const isCustom = true;

    const article = new Article({
      title,
      content,
      description,
      urlToImage,
      publishedAt,
      author,
      source,
      isCustom
    });
    

    article.save()
      .then(a => res.send(a))
      .catch(err => console.log(err));
  }

  update(req, res) {
    if (!req.body) {
      return res.sendStatus(400);
    }
    const id = req.params.id;
    const title = req.body.title;
    const content = req.body.content;
    const description = req.body.description;
    const urlToImage = req.body.urlToImage;
    const publishedAt = req.body.publishedAt;
    const author = req.body.author;
    const source = req.body.source;
    const isCustom = true;
    const article = {
      title,
      content,
      description,
      urlToImage,
      publishedAt,
      author,
      source,
      isCustom
    };

    Article.findOneAndUpdate({_id: id}, article, {new: true})
      .then(a => res.send(a))
      .catch(err => console.log(err));
  }

  delete(req, res) {
    const id = req.params.id;

    Article.findByIdAndDelete(id)
      .then(a => res.send(a))
      .catch(err => console.log(err));
  }
}

module.exports = ArticleController;
