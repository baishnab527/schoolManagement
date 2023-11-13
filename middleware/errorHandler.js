// Make a error handler function
export const errorHandler = async(error, req, res, next) =>{
    // find status code;
    const status = res.statusCode ? res.statusCode: 5000;

    // send response
    res.status(status).json({Message: error.message});
};