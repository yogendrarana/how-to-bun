import { Hono } from "hono"
import user from "./routes/user";
import HomePage from "./ui/pages/home";

const app = new Hono();

// routes
app.get("/", (ctx) => {
    return ctx.html(<HomePage />);
});

app.route('/user', user);

export default app;