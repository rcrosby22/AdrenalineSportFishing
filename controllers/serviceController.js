const Service = require('../models/Service')

const getServiceById = (req, res) => {
  const { id } = req.params
  const service = Service.getById(id)

  if (!service) {
    return res.status(404).json({ error: 'Service not found.' })
  }

  res.render('/', { service })
}

module.exports = {
  getServiceById
}
