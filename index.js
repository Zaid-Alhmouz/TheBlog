import express from "express";
import bodyParser from "body-parser";

const PORT = 3000;
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


// Set the view engine to EJS
app.set('view engine', 'ejs');

app.get("/", (req, res)=> {
    res.render("index.ejs");
});

app.get("/editor.ejs", (req, res)=>{
    res.render("editor.ejs");
});

app.get("/index.ejs", (req, res)=>{
    res.render("index.ejs");
});

app.get("/myblogs.ejs", (req,res)=>{
    res.render("myblogs.ejs");
});

app.get("/Post", (req, res)=> {
    res.render("myblogs.ejs");
});

app.post("/Post", (req, res)=>{
    const title = req.body["title"];
    const article = req.body["article"];
    res.render("myblogs.ejs", {
        blogTitle: title,
        blogArticle: article
    });
});


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack
    res.status(500).send('Something broke!'); // Respond with a 500 error
  });

app.listen(PORT, ()=>{
    console.log(`listening on the port ${PORT}.`);
});