
const {getUserServices}= require("../services/getUserServices")
exports.getUser = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await getUserServices(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  

