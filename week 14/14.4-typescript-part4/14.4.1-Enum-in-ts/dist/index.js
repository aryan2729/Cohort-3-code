"use strict";
// enum -> lets you define a set of named constants. It’s used to make code more readable and maintainable, especially when you have a group of related values. | enum donesn't exist in js it only in .ts
// instead writing up down mannually it helps to write it as string or numbers so you don't need to change it in all code only change in enum 
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 1) e.g. 
var Direction;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction["Down"] = "Down";
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
function doSomething(keyPressed) {
    if (keyPressed == Direction.Up) {
        //up code 
    }
}
console.log(Direction.Up);
console.log(Direction.Down);
// 2nd e.g.
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus[ResponseStatus["Success"] = 200] = "Success";
    ResponseStatus[ResponseStatus["NotFound"] = 404] = "NotFound";
    ResponseStatus[ResponseStatus["Error"] = 500] = "Error";
})(ResponseStatus || (ResponseStatus = {}));
app.get("/check", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(ResponseStatus.NotFound).json({});
}));
app.get("/re", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(ResponseStatus.Success).json({
        success: "success"
    });
}));
app.listen(3000);
