exports.getRecommendations = async (req, res, next) => {
  try {
    const recommendations = await Recommendation.find({ student: req.user.id });
    res.status(200).json({ success: true, data: recommendations });
  } catch (error) {
    next(error);
  }
};

exports.logAudit = async (userId, action, entity, entityId, ipAddress) => {
  await AuditLog.create({ user: userId, action, entity, entityId, ipAddress });
};
