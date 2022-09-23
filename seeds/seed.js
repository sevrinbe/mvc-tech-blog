const sequelize = require('../config/connection');
const { User, UserPosts } = require('../models');

const userData = require('./userData.json');
const postData = require('./postsSeed.json')


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const posts = await UserPosts.bulkCreate(postData, {
  });


  process.exit(0);
};

seedDatabase();
