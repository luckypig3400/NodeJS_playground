const express = require('express');
const router = express.Router();
const posts = [
    {
        id: 1,
        author: 'John',
        title: 'Templating with pug',
        body: 'Blog post 1'
    },
    {
        id: 2,
        author: 'Peter',
        title: 'React: Starting from the Bottom',
        body: 'Blog post 2'
    },
    {
        id: 3,
        author: 'Violet',
        title: 'Node.js Streams',
        body: 'Blog post 3'
    }
]

/* GET home page. */
// Returns a list of posts to the view.
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express', posts: posts });
});

module.exports = router;