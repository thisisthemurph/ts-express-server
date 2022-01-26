import { Request, Response, NextFunction } from "express";

export function requireAuth(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (req.session?.loggedIn) {
    next();
    return;
  }

  res.status(403).send("403 - Forbidden!");
}
