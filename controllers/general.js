import User from "../models/User.js";

export const getUser = async (request, response) => {
  try {
    const product = await User.find();
    response.status(200).json(product);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const getDashboardStats = async (request, response) => {
  try {
    
    const intenSity = 16;
    const endYear = 2017;

   
    const overallStat = await User.find({ start_year: 2016 });

    const {
      sector,
      topic,
      insight,
      url,
      region,
      start_year,
      impact,
      added,
      published,
      country,
      relevance,
      pestle,
      source,
      title,
      likelihood,
    } = overallStat;

    const end_year = overallStat[0].monthlyData.find(({ end_year }) => {
      return end_year === endYear;
    });

    const intensity = overallStat[0].dailyData.find(({ intensity }) => {
      return intensity === intenSity;
    });

    response.status(200).json({
      end_year,
      intensity,
      sector,
      topic,
      insight,
      url,
      region,
      start_year,
      impact,
      added,
      published,
      country,
      relevance,
      pestle,
      source,
      title,
      likelihood,
    });
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};
