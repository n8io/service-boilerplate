// https://gist.github.com/cletusw/e01a85e399ab563b1236
module.exports = {
  "root": true, // Don't look in parent folders for eslint config
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
  },

  // http://eslint.org/docs/rules/

  "ecmaFeatures": {
    "binaryLiterals": false,                    // enable binary literals
    "blockBindings": false,                     // enable let and const (aka block bindings)
    "defaultParams": true,                     // enable default function parameters
    "forOf": false,                             // enable for-of loops
    "generators": false,                        // enable generators
    "objectLiteralComputedProperties": false,   // enable computed object literal property names
    "objectLiteralDuplicateProperties": false,  // enable duplicate object literal properties in strict mode
    "objectLiteralShorthandMethods": false,     // enable object literal shorthand methods
    "objectLiteralShorthandProperties": false,  // enable object literal shorthand properties
    "octalLiterals": false,                     // enable octal literals
    "regexUFlag": false,                        // enable the regular expression u flag
    "regexYFlag": false,                        // enable the regular expression y flag
    "templateStrings": true,                   // enable template strings
    "unicodeCodePointEscapes": false,           // enable code point escapes
    "jsx": false                                // enable JSX
  },

  "env": {
    "browser": false,     // browser global variables.
    "node": true,        // Node.js global variables and Node.js-specific rules.
    "amd": false,         // defines require() and define() as global variables as per the amd spec.
    "mocha": false,       // adds all of the Mocha testing global variables.
    "jasmine": false,     // adds all of the Jasmine testing global variables for version 1.3 and 2.0.
    "phantomjs": false,   // phantomjs global variables.
    "jquery": false,      // jquery global variables.
    "prototypejs": false, // prototypejs global variables.
    "shelljs": false,     // shelljs global variables.
  },

  "globals": {
    // e.g. "angular": true
  },

  "plugins": [
    // e.g. "react" (must run `npm install eslint-plugin-react` first)
  ],

  "rules": {
    ////////// Possible Errors //////////

    "no-comma-dangle": 0,         // disallow trailing commas in object literals
    "no-cond-assign": "error",          // disallow assignment in conditional expressions
    "no-console": 0,              // disallow use of console (off by default in the node environment)
    "no-constant-condition": 0,   // disallow use of constant expressions in conditions
    "no-control-regex": 0,        // disallow control characters in regular expressions
    "no-debugger": "error",             // disallow use of debugger
    "no-dupe-keys": 0,            // disallow duplicate keys when creating object literals
    "no-empty": "error",                // disallow empty statements
    "no-empty-class": 0,          // disallow the use of empty character classes in regular expressions
    "no-ex-assign": "error",            // disallow assigning to the exception in a catch block
    "no-extra-boolean-cast": 0,   // disallow double-negation boolean casts in a boolean context
    "no-extra-parens": 0,         // disallow unnecessary parentheses (off by default)
    "no-extra-semi": "error",           // disallow unnecessary semicolons
    "no-func-assign": "error",          // disallow overwriting functions written as function declarations
    "no-inner-declarations": 0,   // disallow function or variable declarations in nested blocks
    "no-invalid-regexp": 0,       // disallow invalid regular expression strings in the RegExp constructor
    "no-irregular-whitespace": "error", // disallow irregular whitespace outside of strings and comments
    "no-negated-in-lhs": "warn",       // disallow negation of the left operand of an in expression
    "no-obj-calls": 0,            // disallow the use of object properties of the global object (Math and JSON) as functions
    "no-regex-spaces": 0,         // disallow multiple spaces in a regular expression literal
    "no-reserved-keys": 0,        // disallow reserved words being used as object literal keys (off by default)
    "no-sparse-arrays": 0,        // disallow sparse arrays
    "no-unreachable": "error",          // disallow unreachable statements after a return, throw, continue, or break statement
    "use-isnan": "error",               // disallow comparisons with the value NaN
    "valid-jsdoc": 0,             // Ensure JSDoc comments are valid (off by default)
    "valid-typeof": "error",            // Ensure that the results of typeof are compared against a valid string

    ////////// Best Practices //////////

    "block-scoped-var": 0,      // treat var statements as if they were block scoped (off by default)
    "complexity": 0,            // specify the maximum cyclomatic complexity allowed in a program (off by default)
    "consistent-return": "error",     // require return statements to either always or never specify values
    "curly": "error",                 // specify curly brace conventions for all control statements
    "default-case": 0,          // require default case in switch statements (off by default)
    "dot-notation": ["error", {"allowPattern": "^[a-z]+([_][a-z0-9]+)+$"}],          // encourages use of dot notation whenever possible
    "eqeqeq": "error",                // require the use of === and !==
    "guard-for-in": 0,          // make sure for-in loops have an if statement (off by default)
    "no-alert": "error",              // disallow the use of alert, confirm, and prompt
    "no-caller": "error",             // disallow use of arguments.caller or arguments.callee
    "no-div-regex": 0,          // disallow division operators explicitly at beginning of regular expression (off by default)
    "no-else-return": 0,        // disallow else after a return in an if (off by default)
    "no-empty-label": 0,        // disallow use of labels for anything other then loops and switches
    "no-eq-null": "error",            // disallow comparisons to null without a type-checking operator (off by default)
    "no-eval": "error",               // disallow use of eval()
    "no-extend-native": "error",      // disallow adding to native types
    "no-extra-bind": "error",         // disallow unnecessary function binding
    "no-fallthrough": 0,        // disallow fallthrough of case statements
    "no-floating-decimal": "error",   // disallow the use of leading or trailing decimal points in numeric literals (off by default)
    "no-implied-eval": 0,       // disallow use of eval()-like methods
    "no-iterator": 0,           // disallow usage of __iterator__ property
    "no-labels": 0,             // disallow use of labeled statements
    "no-lone-blocks": 0,        // disallow unnecessary nested blocks
    "no-loop-func": 0,          // disallow creation of functions within loops
    "no-multi-spaces": "error",       // disallow use of multiple spaces
    "no-multi-str": "error",          // disallow use of multiline strings
    "no-native-reassign": 0,    // disallow reassignments of native objects
    "no-new": 0,                // disallow use of new operator when not part of the assignment or comparison
    "no-new-func": "error",           // disallow use of new operator for Function object
    "no-new-wrappers": "error",       // disallows creating new instances of String, Number, and Boolean
    "no-octal": 0,              // disallow use of octal literals
    "no-octal-escape": 0,       // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
    "no-process-env": "error",        // disallow use of process.env (off by default)
    "no-proto": "error",              // disallow usage of __proto__ property
    "no-redeclare": "error",          // disallow declaring the same variable more then once
    "no-return-assign": "error",      // disallow use of assignment in return statement
    "no-script-url": 0,         // disallow use of javascript: urls.
    "no-self-compare": 0,       // disallow comparisons where both sides are exactly the same (off by default)
    "no-sequences": "error",          // disallow use of comma operator
    "no-unused-expressions": ["error", {"allowShortCircuit": true, "allowTernary": true}], // disallow usage of expressions in statement position
    "no-void": "error",               // disallow use of void operator (off by default)
    "no-warning-comments": 0,   // disallow usage of configurable warning terms in comments, e.g. TODO or FIXME (off by default)
    "no-with": 0,               // disallow use of the with statement
    "radix": "error",                 // require use of the second argument for parseInt() (off by default)
    "vars-on-top": "warn",           // requires to declare all vars on top of their containing scope (off by default)
    "wrap-iife": 0,             // require immediate function invocation to be wrapped in parentheses (off by default)
    "yoda": 0,                  // require or disallow Yoda conditions

    ////////// Strict Mode //////////

    "strict": 0,          // controls location of Use Strict Directives

    ////////// Variables //////////

    "no-catch-shadow": 0,             // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
    "no-delete-var": 0,               // disallow deletion of variables
    "no-label-var": 0,                // disallow labels that share a name with a variable
    "no-shadow": 0,                   // disallow declaration of variables already declared in the outer scope
    "no-shadow-restricted-names": 0,  // disallow shadowing of names such as arguments
    "no-undef": "error",                    // disallow use of undeclared variables unless mentioned in a /*global */ block
    "no-undef-init": "error",               // disallow use of undefined when initializing variables
    "no-undefined": 0,                // disallow use of undefined variable (off by default)
    "no-unused-vars": "error",              // disallow declaration of variables that are not used in the code
    "no-use-before-define": ["error", {functions: false}],        // disallow use of variables before they are defined

    ////////// Node.js //////////

    // "handle-callback-err": 0,   // enforces error handling in callbacks (off by default) (on by default in the node environment)
    // "no-mixed-requires": 0,     // disallow mixing regular variable and require declarations (off by default) (on by default in the node environment)
    // "no-new-require": 0,        // disallow use of new operator with the require function (off by default) (on by default in the node environment)
    // "no-path-concat": 0,        // disallow string concatenation with __dirname and __filename (off by default) (on by default in the node environment)
    // "no-process-exit": "error",       // disallow process.exit() (on by default in the node environment)
    "no-restricted-modules": 0, // restrict usage of specified node modules (off by default)
    "no-sync": 0,               // disallow use of synchronous methods (off by default)


    ////////// Stylistic Issues //////////

    "array-bracket-spacing": "error",   // require or disallow spaces inside brackets (off by default)
    "brace-style": ["error", "stroustrup"],               // enforce one true brace style (off by default)
    "camelcase": "error",                 // require camel case names
    "comma-spacing": ["error", {before: false, after: true}],             // enforce spacing before and after comma
    "comma-style": ["error", "last"],               // enforce one true comma style (off by default)
    "computed-property-spacing": ["error", "never"], // disallows spaces inside computed property brackets
    "consistent-this": 0,           // enforces consistent naming when capturing the current execution context (off by default)
    "eol-last": "error",                  // enforce newline at the end of file, with no multiple empty lines
    "func-names": ["error", "never"],                // require function expressions to have a name (off by default)
    "func-style": ["error", "declaration", { "allowArrowFunctions": true }],                // enforces use of function declarations or expressions (off by default)
    "key-spacing": "error",               // enforces spacing between keys and values in object literal properties
    "keyword-spacing": "error",      // require a space after certain keywords (off by default)
    "max-nested-callbacks": 0,      // specify the maximum depth callbacks can be nested (off by default)
    "new-cap": "error",                   // require a capital letter for constructors
    "new-parens": "error",                // disallow the omission of parentheses when invoking a constructor with no arguments
    "no-array-constructor": "error",      // disallow use of the Array constructor
    "no-inline-comments": 0,        // disallow comments inline after code (off by default)
    "no-lonely-if": "error",              // disallow if as the only statement in an else block (off by default)
    "no-mixed-spaces-and-tabs": "error",  // disallow mixed spaces and tabs for indentation
    "no-multiple-empty-lines": "error",   // disallow multiple empty lines (off by default)
    "no-nested-ternary": "error",         // disallow nested ternary expressions (off by default)
    "no-new-object": "error",             // disallow use of the Object constructor
    "no-spaced-func": "error",            // disallow space between function identifier and application
    "no-ternary": 0,                // disallow the use of ternary operators (off by default)
    "no-trailing-spaces": "error",        // disallow trailing whitespace at the end of lines
    "no-underscore-dangle": "error",      // disallow dangling underscores in identifiers
    "no-wrap-func": 0,              // disallow wrapping of non-IIFE statements in parens
    "object-curly-spacing": "error",     // disallow spacing between curly braces and key values
    "one-var": 0,                   // allow just one var statement per function (off by default)
    "operator-assignment": 0,       // require assignment operator shorthand where possible or prohibit it entirely (off by default)
    "padded-blocks": ["error", "never"],             // enforce padding within blocks (off by default)
    "quote-props": ["error", "as-needed"],               // require quotes around object literal property names (off by default)
    "quotes": ["error", "single"],                    // specify whether double or single quotes should be used
    "semi-spacing": "error",      // disallow space before semicolon
    "semi": "error",
    "sort-vars": 0,                 // sort variables within the same declaration block (off by default)
    "space-before-function-paren": ["error", "never"], // require a space after function names (off by default)
    "space-before-blocks": "error",       // require or disallow space before blocks (off by default)
    "space-in-parens": ["error", "never"],           // require or disallow spaces inside parentheses (off by default)
    "space-infix-ops": "error",           // require spaces around operators
    "space-unary-ops": "error",           // Require or disallow spaces before/after unary operators (words on by default, nonwords off by default)
    "spaced-comment": ["error", "always"],       // require or disallow a space immediately following the // in a line comment (off by default)
    "wrap-regex": 0,                // require regex literals to be wrapped in parentheses (off by default)


    ////////// ECMAScript 6 //////////

    "no-var": "error",          // require let or const instead of var (off by default)
    "generator-star-spacing": ["error", "after"],  // enforce the position of the * in generator functions (off by default)


    ////////// Legacy //////////

    "max-depth": 0,       // specify the maximum depth that blocks can be nested (off by default)
    "max-len": ["error", 130],         // specify the maximum length of a line in your program (off by default)
    "max-params": 0,      // limits the number of parameters that can be used in the function declaration. (off by default)
    "max-statements": 0,  // specify the maximum number of statement allowed in a function (off by default)
    "no-bitwise": 0,      // disallow use of bitwise operators (off by default)
    "no-plusplus": 0      // disallow use of unary operators, ++ and -- (off by default)
  }
};
