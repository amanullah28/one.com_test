const permissionMapping = {
  POST: 'create',
  PUT: 'update',
  PATCH: 'update',
  DELETE: 'delete',
  GET: 'fetch',
};
module.exports = async (req, res, next) => {
  try {
    let resourceCreationReq = permissionMapping[req.method];
    let userPermission = req.user.permission.split(',');
    // console.log(resourceCreationReq, userPermission);
    if (!userPermission.includes(resourceCreationReq)) {
      let error = new Error('Not authorized to access endpoint');
      error.statusCode = 401;
      throw error;
    }
    next();
  } catch (err) {
    next(err);
  }
};
