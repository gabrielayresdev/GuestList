module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@assets": "./assets",
            "@components": "./src/components",
            "@hooks": "./src/hooks",
            "@screens": "./src/screens",
            "@utils": "./src/utils",
            "@types": "./src/types",
            "@storage": "./src/storage",
            "@routes": "./src/routes",
            "@theme": "./src/theme",
          },
        },
      ],
    ],
  };
};
