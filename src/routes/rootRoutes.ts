import { Request, Response, Router } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

router.get("/", (req: Request, res: Response) => {
  if (req.session?.loggedIn) {
    res.send(`
      <div>
        <header>
          <h1>Home sweet home...</h1>
        </header>
        <main>
          <p>No place like home!</p>
          <div>
            <p>You are logged in...</p>
            <a href="/logout">Logout</a>
          </div>
        </main>
      </div>
    `);
  } else {
    res.send(`
      <div>
        <header>
          <h1>Home sweet home...</h1>
        </header>
        <main>
          <p>No place like home!</p>
          <div>
            <p>You are not logged in...</p>
            <a href="/login">Login</a>
          </div>
        </main>
      </div>
    `);
  }
});

export { router };
