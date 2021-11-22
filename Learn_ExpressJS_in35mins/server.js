const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(logger);// use Middleware logger globally

app.get('/', (req, res) => {
    console.log("Someone visit /");
    res.render("index", { username: "Leonardo da Vinci" });
    // res.status(200);//500代表internal server error
});

app.get('/download', (req, res) => {
    res.download("server.js");
    console.log("Someone download the server file");
});

app.get('/jsonExample', (req, res) => {
    res.json({
        message: "This is test msg for json",
        owo: "Nothing just wanna say owo"
    });
    console.log("Someone just see test json message");
});

const userRouter = require("./routes/users");
app.use("/users", userRouter);

function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}

app.listen(3000);