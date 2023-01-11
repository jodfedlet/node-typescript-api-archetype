"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Bootstrap {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.json());
        this.loadRoutes();
    }
    listen(port) {
        this.app.listen(port, () => {
            console.log(`The api project is running at the port: ${port}`);
        });
    }
    loadRoutes() {
        this.app.route("/").get((req, res) => {
            res.send({ version: "0.0.1" });
        });
    }
}
exports.default = new Bootstrap();
