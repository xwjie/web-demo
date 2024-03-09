import fs from "fs";
import path from "path";
import { PROJECT_DIR } from "./config.js";

console.log(PROJECT_DIR)

export function readFile(filepath){
    return fs.readFileSync(path.join(PROJECT_DIR, filepath), "utf-8");
}

export function fileExists(filepath){
    return fs.existsSync(path.join(PROJECT_DIR, filepath));
}