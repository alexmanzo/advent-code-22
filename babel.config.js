module.exports = {
    "plugins": [
        [
            "module-resolver",
            {
                "root": ["."],
                "extensions": [".js", ".jsx", ".ts", ".tsx"]
            }
        ],
        "@babel/plugin-transform-modules-commonjs"
    ],
}
