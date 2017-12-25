import * as express from "express";
import * as ejs from "ejs";
import * as path from "path";

import * as homeController from "./controllers/home";

const app = express();

app.set("port", process.env.PORT || 8081);

app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "public"), { maxAge: 31557600000 }));

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.get("/", homeController.index);

const server = app.listen(app.get("port"), () => {
    console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
    console.log("  Press CTRL-C to stop\n");
});

export = app;

