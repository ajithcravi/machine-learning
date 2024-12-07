import * as fs from "fs";
import * as path from "path";

// Utility function to load JSON file
export function loadJson(filePath: string): any {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data); // Parsing the file content into a JavaScript object
  } catch (err) {
    console.error(`Error loading JSON file from ${filePath}:`, err);
    throw err;
  }
}

// Utility function to save JSON to a file
export function saveJson(filePath: string, data: any): void {
  try {
    const jsonData = JSON.stringify(data, null, 2); // Pretty-print with 2 spaces indentation
    fs.writeFileSync(filePath, jsonData, "utf-8");
    console.log(`JSON data successfully saved to ${filePath}`);
  } catch (err) {
    console.error(`Error saving JSON to ${filePath}:`, err);
    throw err;
  }
}
