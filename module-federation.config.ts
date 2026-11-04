export const mfConfig = {
  name: "mf_colorlist",
  filename: "remoteEntry.js",
  remotes: {
  },
  exposes: {
    "./ColorList": "./src/components/ColorList.tsx"
  },
  shared: ["react", "react-dom"],
};
