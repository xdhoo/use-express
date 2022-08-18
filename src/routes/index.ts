import { Express, Router, Request, Response } from "express";
import User from "./user.routes";

interface RouterConf {
  path: string;
  router: Router;
  meta?: unknown;
}

const routerConf: Array<RouterConf> = [{ path: "/user", router: User }];

function routes(app: Express) {
  app.get("/", (req: Request, res: Response) =>
    res.status(200).send("Hello express!")
  );

  routerConf.forEach((conf: RouterConf) => app.use(conf.path, conf.router));
}

export default routes;
