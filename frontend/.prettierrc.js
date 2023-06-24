module.exports = {
    plugins: ["./node_modules/@trivago/prettier-plugin-sort-imports/"],
    importOrder: ["<THIRD_PARTY_MODULES>", "^[./]"],
    importOrderSeparation: true,
    printWidth: 120,
    tabWidth: 4,
    singleQuote: true,
};
