const schema = `
  type File {
    crc32: String
    format: String
    md5: String
    mtime: Int
    name: String
    original: String
    private: Boolean
    rotation: Int
    sha1: String
    size: Int
    source: String
  }
`;

module.exports = schema;
