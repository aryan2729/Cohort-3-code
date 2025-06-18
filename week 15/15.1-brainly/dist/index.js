"use strict";
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
// we never publish the .ts files instead we publish .js & .d.ts file only 
// full procedure -> npm init -y , npm install -d typescript , npx tsc --init , npm install express , npm install -D @types/express , npm install mongoose , npm install jsonwebtoken , npm install -D @types/jsonwebtoken
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const zod_1 = __importDefault(require("zod"));
const db_1 = require("./db");
const config_1 = require("./config");
const middleware_1 = require("./middleware");
const app = (0, express_1.default)();
app.use(express_1.default.json()); // always add | Middleware to parse JSON request bodies.
// use async await in every mongodb thing or while you use it
app.post("/api/v1/signup", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const requireBody = zod_1.default.object({
            username: zod_1.default.string().min(4, "Username must be at least 4 characters  ").max(20),
            password: zod_1.default.string().min(4, "Passowrd must be at least 4 characters ").max(20)
        });
        const parsedDataWithSuccess = requireBody.safeParse(req.body);
        if (!parsedDataWithSuccess.success) {
            res.json({
                message: "Incorrect Format",
                error: parsedDataWithSuccess.error
            });
            return; // return exit 
        }
        const username = req.body.username;
        const password = req.body.password;
        try {
            yield db_1.UserModel.create({
                username: username,
                password: password
            });
            res.json({
                message: "User signed up"
            });
        }
        catch (error) {
            res.json({
                message: "Username already exists , kindly use different username"
            });
        }
    });
});
app.post("/api/v1/signin", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const username = req.body.username;
        const password = req.body.password;
        const existingUser = yield db_1.UserModel.findOne({
            username,
            password
        });
        if (existingUser) {
            const token = jsonwebtoken_1.default.sign({
                id: existingUser._id
            }, config_1.JWT_SECRET); // here jwt secret 
            res.json({
                token
            });
        }
        else {
            res.status(403).json({
                message: "Incorrect Credentials"
            });
        }
    });
});
app.post("/api/v1/content", middleware_1.userMiddleware, function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const title = req.body.title;
        const link = req.body.link;
        const type = req.body.type;
        yield db_1.ContentModel.create({
            title,
            link,
            type,
            //@ts-ignore
            userId: req.userId,
            tags: []
        });
        res.json({
            message: "Content added"
        });
    });
});
app.get("/api/v1/content", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const userId = req.userId;
    const content = yield db_1.ContentModel.find({
        userId: userId
    }).populate("userId", "username"); // here .populate take userId of that person who created and after that select thing means whom made this content username will show | like if want to know whom created this content if we shared our content 
    res.json({
        content
    });
}));
app.delete("/api/v1/content", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contentId = req.body.contentId;
    yield db_1.ContentModel.deleteMany({
        contentId,
        //@ts-ignore
        userId: req.userId
    });
    res.json({
        message: "Content deleted"
    });
}));
app.post("api/v1/brain/share", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
}));
app.get("api/v1/brain/:sharelink", (req, res) => {
});
app.listen(3000);
