
const multer = require('multer')
const path = require('path')
/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const imageApi = async (req, res) => {
  const currentTime = Date.now()
  try {
  
    if (req?.file?.filename) {

      const storedData = {
        file_location: `${process.env.BACKEND}/uploads/${req.file.filename}`
      }
      res.status(200).json({
        success: true,
        result: storedData.file_location,
        message: "Image uploaded successfully",
      });
    } else {
        res.status(400).json({
            success: false,
            result: null,
            message: "Image not uploaded",
          });
    
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { imageApi }
