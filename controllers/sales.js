import Overall from "../models/Overallinfo.js";
import Break from "../models/Breakdown.js";

export const getSales = async (request, response) => {
  try {
    const OverallInfo = await Overall.find({ intensity: 15 });
    response.status(200).json(OverallInfo);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const getBreakdown = async (request, response) => {
  try {
    const BreakInfo = await Break.find({ relevance: 5 });
    response.status(200).json(BreakInfo);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};
