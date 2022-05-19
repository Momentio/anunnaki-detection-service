"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = __importDefault(require("dotenv"));
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
dotenv_1["default"].config();
var port = Number(process.env.PORT);
var buildPath = path_1["default"].join(__dirname, '../../frontend/build');
var serverApp = (0, express_1["default"])();
serverApp.use('/', express_1["default"].static(buildPath));
serverApp.listen(port);
