// module.exports = {
//     preset: 'ts-jest',
//     testEnvironment: 'node',
//   };

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: 'tsconfig.json', // path to your tsconfig.json file
    }],
  },
  testMatch: ['**/tests/**/*.test.(ts|js)'],
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
};
