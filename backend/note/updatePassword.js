const updateUsers = async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(200).json({
          success: false,
          message: "Errors",
          errors: errors.array(),
        });
      }
  
      const { id } = req.params;
      const { name, email, currentPassword, newPassword } = req.body;
      let imagePath = req.file ? `/uploads/${req.file.filename}` : null;
  
      const userExists = await User.findById(id);
      if (!userExists) {
        return res.status(400).json({
          success: false,
          message: "User not exists",
        });
      }
  
      // Validate current password before allowing update
      const isPasswordValid = await bcrypt.compare(currentPassword, userExists.password);
      if (!isPasswordValid) {
        return res.status(400).json({
          success: false,
          message: "Current password is incorrect",
        });
      }
  
      const updateObj = { name, email };
  
      // Update image path if a new image is provided
      if (imagePath) {
        updateObj.image = imagePath;
  
        // Delete the old image if it exists
        if (userExists.image) {
          const oldImagePath = path.join(__dirname, "../uploads", userExists.image);
          fs.unlink(oldImagePath, (err) => {
            if (err) {
              console.error("Failed to delete old image:", err);
            }
          });
        }
      }
  
      // Update role and status if provided in the request body
      if (req.body.role !== undefined) {
        updateObj.role = req.body.role;
      }
  
      if (req.body.status !== undefined) {
        updateObj.status = req.body.status;
      }
  
      // Update password if a new password is provided
      if (newPassword) {
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        updateObj.password = hashedPassword;
      }
  
      const updatedUser = await User.updateOne({ _id: id }, { $set: updateObj });
  
      if (updatedUser.modifiedCount === 1) {
        return res.status(200).json({
          success: true,
          message: "User updated successfully",
        });
      } else {
        return res.status(400).json({
          success: false,
          message: "Failed to update user",
        });
      }
    } catch (error) {
      return res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  };