import resolve from "rollup-plugin-node-resolve";
import fs from "fs";

const srcFolder = "./js";

const createConfig = ({ input, output }) => ({
  input,
  output,
  plugins: [resolve()]
});

const configs = fs
  .readdirSync(srcFolder, { withFileTypes: true })
  .map((file) => {
    if (file.isFile) {
      const [fileName, fileExtension, ...rest] = file.name.split(".");
      if (fileExtension === "js") {
        return createConfig({
          input: `${srcFolder}/${file.name}`,
          output: {
            file: `force-app/main/default/lwc/${fileName}/${file.name}`,
            format: "es"
          }
        });
      }
    }
  });

export default configs;
