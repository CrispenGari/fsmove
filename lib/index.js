#!/usr/bin/env ts-node
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
exports.move = void 0;
const promises_1 = require("fs/promises");
const path_1 = __importDefault(require("path"));
const move = (source, destination) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, promises_1.rename)(path_1.default.resolve(source), path_1.default.resolve(destination));
        return true;
    }
    catch (error) {
        console.error(error);
        return false;
    }
});
exports.move = move;
//# sourceMappingURL=index.js.map