import express from "express";

import packageJson from "../package.json";

class Bootstrap {
  public readonly app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());

    this.loadRoutes();
  }

  listen(port: string) {
    this.app.listen(port, () => {
      console.log(`The api project is running at the port: ${port}`);
    });
  }

  loadRoutes() {
    const { version, name } = packageJson;
    this.app.route("/").get((req, res) => {
      res.send({
        message: `Welcome to ${name}`,
        version: version,
      });
    });
  }
}

export default new Bootstrap();
