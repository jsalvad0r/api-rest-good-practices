import { loadModel } from "../db/loadModel.js";

async function initDB() {
  try {
    const sequelize = await loadModel();
    await sequelize.sync({ force: true });
  } catch (e) {
    console.log(
      "[initDB] - An error ocurred while synchronizing the database:",
      e
    );
  }
  console.log("[initDB] - Execution finished.");
}

await initDB();
