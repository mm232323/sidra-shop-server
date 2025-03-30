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
exports.db2 = exports.db1 = exports.connectToDB = void 0;
const mongodb_1 = require("mongodb");
const envconfig_1 = __importDefault(require("../envconfig"));
const client = new mongodb_1.MongoClient(envconfig_1.default.db_uri);
const connectToDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        console.log(`Connecting to Sidra Honey Shop database... 🍯🍯🐝🐝`);
    }
    catch (err) {
        console.log("Error occured when connecting to DB: " + err);
    }
});
exports.connectToDB = connectToDB;
exports.db1 = client.db("Sidra-Shop");
exports.db2 = client.db("Sidra-Admin-DB");
