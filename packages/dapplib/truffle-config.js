require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid clog tackle spray green note oven pull install derive slot gentle'; 
let testAccounts = [
"0x2fcafd6a05b8bb878326b1708595a0ba3113f4527aff955cd8fb409e363a4d7c",
"0x00d400b2547d3dce883b2b3a412b377cde8471dd45cd537be4ec7baeb1ae55d0",
"0x01b1195c2030d91e7efe9afb447a596bd8263d30426b54ed183d1a2c7add17a6",
"0x80c89374b6783f0565ed9a5ce06437f8d9b6d09fb4a11cb1e3fe74dc29f15ffe",
"0xb2379952fccb78d206f6e3a630a665ffcf769c96189d0c92d3c6676babbbde64",
"0x6220a902650e89d6ed0ae52ebd9ee306705eb7870d67c56bb7f04714a53bf0b3",
"0x426683d841c180fcfcf7c38b71eadd63a9f9cb9687329b54f740d498b4d21b02",
"0xf88b081b71ebef9d411d3b5b73f112c5157888e5802f0ef5a924bff36cb8f980",
"0x4d1264564cbe9a0eba301f3700eb7b7e976cf2d3e44f9f98e9adaafb68d66625",
"0x97cd9294bceb2d38546d6fadd0262e7f9f92024687497b4c39d67c180fc08e94"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


