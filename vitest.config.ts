import { fileURLToPath } from "node:url";
import { mergeConfig, defineConfig, configDefaults } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			globals: true,
			environment: "jsdom",
			exclude: [...configDefaults.exclude, "e2e/*"],
			root: fileURLToPath(new URL("./", import.meta.url)),
			setupFiles: ["vitest-localstorage-mock"],
			coverage: {
				exclude: [
					...configDefaults.exclude,
					"postcss.config.js",
					"tailwind.config.js",
					"env.d.ts",
					".eslintrc.cjs",
					"src/main.ts",
					"src/router/*",
				],
			},
		},
	}),
);
