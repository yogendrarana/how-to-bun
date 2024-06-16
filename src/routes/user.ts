import { Hono } from "hono";
const user = new Hono();

// import controller
import * as userController from "../controllers/user";

// routes
user.get("/", userController.getUsers);

// export
export default user;