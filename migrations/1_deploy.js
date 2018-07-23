const Token = artifacts.require("./Token.sol");

module.exports = function (deployer) {
    const tokenDecimals = process.env.TOKEN_DECIMALS;
    const tokensTotalSupply = process.env.TOKEN_TOTAL_SUPPLY * (10 ** tokenDecimals);
    deployer.deploy(Token, tokensTotalSupply, process.env.TOKEN_NAME, process.env.TOKEN_SYMBOL, tokenDecimals)
        .then(() => {
            throw "finished!";
        });
};
