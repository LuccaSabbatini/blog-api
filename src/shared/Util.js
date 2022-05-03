function nowDate() {
  return new Date().toJSON();
}

function filterReqBody(req, table) {
  switch (table) {
    case "user":
      return {
        name: req.body.name,
        biography: req.body.biography,
        creationDate: nowDate(),
        deletionDate: null,
      };
    case "post":
      return {
        title: req.body.title,
        content: req.body.content,
        authorId: req.body.authorId,
        creationDate: nowDate(),
        deletionDate: null,
      };
    default:
      return null;
  }
}

module.exports = { filterReqBody, nowDate };
