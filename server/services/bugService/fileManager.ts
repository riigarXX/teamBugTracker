import fs from "fs";
import {
  ensureDirectoryExists,
  appendToFile,
  renameFile,
} from "../../utils/fileUtils";
import moment from "moment";

const folderPath = "./bug_reports";
const historyFolderPath = `${folderPath}/history`;
let currentSprint: number | null = null;

export const manageBugFile = async (sprintNumber: number, content: string) => {
  const newFileName = `BugSprint-${sprintNumber}.md`;
  const newFilePath = `${folderPath}/${newFileName}`;

  // Asegurar que los directorios existen
  await ensureDirectoryExists(folderPath);
  await ensureDirectoryExists(historyFolderPath);

  // Verificar si el sprint ha cambiado
  if (currentSprint !== null && currentSprint !== sprintNumber) {
    const oldFileName = `BugSprint-${currentSprint}.md`;
    const oldFilePath = `${folderPath}/${oldFileName}`;
    if (fs.existsSync(oldFilePath)) {
      const timestamp = moment().format("DD-MM-YYYY");
      const historyFileName = `${oldFileName.replace(
        ".md",
        ""
      )}_${timestamp}.md`;
      const historyFilePath = `${historyFolderPath}/${historyFileName}`;
      await renameFile(oldFilePath, historyFilePath);
    }
  }

  // Actualizar el sprint actual
  currentSprint = sprintNumber;

  // Crear o agregar el nuevo contenido en el archivo de sprint actual
  await appendToFile(newFilePath, content + "\n\n");
};
