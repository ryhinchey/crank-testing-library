module.exports = {
    testPathIgnorePatterns: ['/node_modules/', '/public/'],
    transform: {
        '\\.(js|ts|tsx)?$': 'babel-jest',
      },
}