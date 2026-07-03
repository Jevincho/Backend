import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.MYSQLDATABASE, process.env.MYSQLUSER, process.env.MYSQLPASSWORD, {
  host: process.env.MYSQLHOST,
  dialect: "mysql",
  logging: false,
});

// Test the connection on startup so misconfiguration is caught immediately
try {
  await sequelize.authenticate();
  console.log("✓ Database connection successful");
} catch (error) {
  console.error("✗ Database connection failed:", error.message);
  process.exit(1);
}

export default sequelize;
