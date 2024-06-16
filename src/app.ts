import { Hono } from "hono"
import user from "./routes/user";

const app = new Hono();

// routes
app.get("/", (ctx) => {
    return ctx.text("Hello, World!");
});

app.route('/user', user);

export default app;