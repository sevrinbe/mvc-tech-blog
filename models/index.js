const User = require('./User');
const UserPosts = require('./UserPosts');

module.exports = { User, UserPosts };

User.hasMany(UserPosts, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

module.exports = {
  User,
  UserPosts,
};
