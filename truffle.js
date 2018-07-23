const HDWalletProvider = require("truffle-hdwallet-provider");
require('dotenv').config();

module.exports = {
    networks: {
        ganache: {
            host: "localhost",
            port: 8444,
            network_id: "5777"
        },
        remote: {
            provider: function () {
                return new HDWalletProvider(process.env.MNENOMIC, process.env.NODE_URL, process.env.ACCOUNT)
            },
            network_id: process.env.NETWORK_ID,
            gasPrice: process.env.GAS_PRICE_IN_GWEI * (10 ** 9)
        },
    }
};
