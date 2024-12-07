import path from "path";
import { loadJson, saveJson } from "../../utils/json-file";

export class AverageModel {
  modelData: { value: number } | null = null;

  private fit(data: number[]) {
    if (data.length === 0) {
      this.modelData = { value: 0 };
    } else {
      const sum = data.reduce((acc, num) => acc + num, 0);
      this.modelData = { value: sum / data.length };
    }
  }

  private save() {
    const modelOutputPath = path.join(__dirname, "./knowledge.json");
    saveJson(modelOutputPath, this.modelData);
  }

  learn(data: number[]) {
    this.fit(data);
    this.save();
  }

  predict(): number | null {
    const modelDataFilePath = path.join(__dirname, "./knowledge.json");
    const modelData: { value: number } = loadJson(modelDataFilePath);

    if (!modelData?.value) return null;

    return modelData.value;
  }
}
