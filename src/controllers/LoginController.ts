import { Request, Response } from "express";
import { bodyValidator, controller, get, post, use } from "./decorators";

@controller("/auth")
export class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="post">
        <h2>Login</h2>
        <div>
          <label>Email</label>
          <input type="text" name="email" /> 
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" />
        </div>
        <button>Submit</button>
      </form>
    `);
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email === "me@email.com" && password === "password") {
      req.session = { loggedIn: true };
      res.redirect("/");
    } else {
      res.send("Invalid email address or password");
    }
  }

  @get("/logout")
  getLogout(req: Request, res: Response) {
    req.session = null;
    res.redirect("/");
  }
}
