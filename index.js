require("dotenv").config();
const express = require("express");
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
const urls = require("./routes/urls");
const port = process.env.PORT || 5000;

const app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
//handlebars setting

app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
    defaultLayout: "index",
    layoutDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
    helpers: {
      matchRequestUri(sentUrl, fullUrl) {
        return sentUrl === fullUrl;
      },
    },
  })
);
app.set("view engine", ".hbs");
app.set("views", "./views");

app.use(urls);
app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
