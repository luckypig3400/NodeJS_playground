const express = require('express');
const router = express.Router();

router.use(usersLogger);//use middleware for all "/users" routes

router.get("/", (req, res) => {
    res.send("<h1>Users List</h1>");
});

router.get("/new", (req, res) => {
    res.render("users/new");
});
// To avoid dynamic route block your specific routes,
// you should put your dynamic route code below specific one
// Because the code is run from top to down ~~~

router.post("/", (req, res) => {
    const isValid = true;
    if (isValid) {
        var newUserName = req.body.firstName;
        console.log(newUserName);

        users.push({ firstName: req.body.firstName });
        res.redirect(`/users/${users.length - 1}`);
    } else {
        console.log("Error");
        res.render("users/new", { firstName: req.body.firstName });
    }

});

// router.get("/:id", (req, res) => {
//     res.send(`Get User with ID:${req.params.id}`);
// });

// router.put("/:id", (req, res) => {
//     res.send(`Update User With ID:${req.params.id}`);
// });

// router.delete("/:id", (req, res) => {
//     res.send(`Delete User With ID:${req.params.id}`);
// });

// Express provides an easier way to do the same route but different http methods like the code commented above
router.route("/:id")
    .get((req, res) => {
        console.log(req.user);// output result from the middware
        res.send(`Get User with ID:${req.params.id}`);
    })
    .put((req, res) => {
        res.send(`Update User With ID:${req.params.id}`);
    })
    .delete((req, res) => {
        res.send(`Delete User With ID:${req.params.id}`);
    })

const users = [{ name: "Kyle" }, { name: "Sally" }, { name: "YuRou" }, { name: "YaoCheng" }];
router.param("id", (req, res, next, id) => {
    req.user = users[id];
    next();// continue to run the following codes for this route
});

function usersLogger(req, res, next) {
    console.log(req.originalUrl);
    next();
}

module.exports = router;