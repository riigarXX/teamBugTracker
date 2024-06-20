import fs from "fs";
import { promisify } from "util";

const appendFileAsync = promisify(fs.appendFile);
const mkdirAsync = promisify(fs.mkdir);
const renameAsync = promisify(fs.rename);

export const ensureDirectoryExists = async (dirPath: string) => {
  if (!fs.existsSync(dirPath)) {
    await mkdirAsync(dirPath, { recursive: true });
  }
};

export const appendToFile = async (filePath: string, content: string) => {
  await appendFileAsync(filePath, content);
};

export const renameFile = async (oldPath: string, newPath: string) => {
  await renameAsync(oldPath, newPath);
};
