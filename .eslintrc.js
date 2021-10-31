module.exports = {
  env: {
		browser: true, // Browser global variables like `window` etc.
		commonjs: true, // CommonJS global variables and CommonJS scoping.Allows require, exports and module.
		es6: true, // Enable all ECMAScript 6 features except for modules.
		jest: true, // Jest global variables like `it` etc.
		node: true // Defines things like process.env when generating through node
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    // "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended",
    "plugin:testing-library/react",
  ],
  parser: "babel-eslint", // Uses babel-eslint transforms.
  parserOptions: {
      ecmaFeatures: {
          jsx: true
      },
      ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
      sourceType: "module" // Allows for the use of imports
  },
  plugins: [
    "import" // eslint-plugin-import plugin. https://www.npmjs.com/package/eslint-plugin-import
  ],  
  root: true, // For configuration cascading.
  rules: {
    "comma-dangle": [
      "warn",
      "always-multiline"
    ],
    "eol-last": "warn",
    "import/order": [
			"warn",
			{
				alphabetize: {
					caseInsensitive: true,
					order: "asc"
				},
				groups: [
					"builtin",
					"external",
					"internal",
					"parent",
					"sibling",
					"index",
				],
			},
    ],
    indent: [
			"warn",
			2,
			{
				ignoredNodes: ["JSXAttribute"],
			},
    ],
    "jsx-quotes": [
        "warn",
        "prefer-single"
    ],
    "no-console": "warn",
    "no-duplicate-imports": "error",
    "no-unused-vars": "warn",
    "object-curly-spacing": [
        "warn",
        "always"
    ],
    quotes: [
        "warn",
        "single",
    ],
    // TODO: check this
    "key-spacing": [
			"warn", 
			{ 
				"beforeColon": false, 
				"afterColon": true,
			}
		],
    "react/jsx-curly-spacing": [
			"warn", 
			{
				"when": "never",
				"children": {
					"when": "always"
				}
    	}
		],
    "react/jsx-filename-extension": [
        "error",
        {
            extensions: [
                ".js",
                ".jsx",
                ".ts",
                ".tsx"
            ]
        }
    ],
    "react/jsx-indent": [
			"warn",
			2,
    ],
    "react/jsx-indent-props": [
			"warn",
			4,
    ],
    "react/prop-types": "off",
    semi: [
      "warn",
      "always",
    ],
    "sort-imports": [
			"warn",
			{
				ignoreCase: false,
				ignoreDeclarationSort: true,
				ignoreMemberSort: false,
			}
    ],
  },
  settings: {
		react: {
			version: "detect" // Detect react version
		}
  },
  overrides: [
    {
			files: [ "**/*.ts?(x)" ],
			parser: "@typescript-eslint/parser",
			parserOptions: {
				ecmaFeatures: {
						jsx: true
				},
				ecmaVersion: 2018,
				sourceType: "module",
			},
			plugins: [
				"@typescript-eslint",
			],
		}
  ],
};
