const userServices=require("../services/user");



const getUsers = async (req, res) => {
    try {
        const users = await userServices.getUsers();
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving users", error: error.message });
    }
};

module.exports = { getUsers };
