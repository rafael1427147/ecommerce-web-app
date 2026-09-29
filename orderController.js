// Controlador para gestión de pedidos
const Order = require('../models/Order');

// Crear un nuevo pedido
exports.createOrder = async (req, res) => {
  try {
    const { userId, products, total } = req.body;
    const newOrder = new Order({
      userId,
      products,
      total,
      status: 'pending',
      createdAt: new Date()
    });
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear pedido', error });
  }
};

// Obtener pedidos por usuario
exports.getOrdersByUser = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener pedidos', error });
  }
};
