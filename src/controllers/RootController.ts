import { Request, Response } from "express";
import { controller, get, use } from "./decorators";
import { requireAuth } from "./middleware/requireAuth";

@controller("")
export class RootController {
  @get("/")
  getRoot(req: Request, res: Response) {
    const head = `
        <div>
          <header>
            <h1>Home sweet home...</h1>
          </header>
          <main>
            <p>No place like home!</p>
            <div>
      `;

    const tail = `
            </div>
          </main>
        </div>
      `;

    let content: string;
    if (req.session?.loggedIn) {
      content = `
              <p>You are logged in...</p>
              <a href="/auth/logout">Logout</a>
      `;
    } else {
      content = `
              <p>You are not logged in...</p>
              <a href="/auth/login">Login</a>
      `;
    }

    res.send(head + content + tail);
  }

  @get("/protected")
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send("Welcome to protected route");
  }
}
