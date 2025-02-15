export function validateDto(dto) {
  return (req, res, next) => {
    const { error } = dto.validate(req.body);

    if (error) {
      console.log(error);

      return res.status(400).json({
        error: "Bad Request",
        details: error.details[0].message,
      });
    }

    next();
  };
}
