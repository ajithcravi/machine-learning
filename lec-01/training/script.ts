import path from "path";
import { loadJson } from "../../utils/json-file";
import { AverageModel } from "../model/model";

const trainingDataFilePath = path.join(__dirname, "../data/training-data.json");
const trainingData = loadJson(trainingDataFilePath);

const model = new AverageModel();

model.learn(trainingData);
