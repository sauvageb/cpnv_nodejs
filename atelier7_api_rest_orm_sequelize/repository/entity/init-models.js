import _sequelize from "sequelize";
import _category from "./category.js";
import _user from "./user.js";

const DataTypes = _sequelize.DataTypes;

export default function initModels(sequelize) {
    const category = _category.init(sequelize, DataTypes);
    const user = _user.init(sequelize, DataTypes);

    category.belongsTo(user, {as: "user", foreignKey: "user_id"});
    user.hasMany(category, {as: "categories", foreignKey: "user_id"});

    return {
        category,
        user,
    };
}
