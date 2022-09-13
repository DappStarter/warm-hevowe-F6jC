require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz argue opera food main robot saddle uncover coral light army gift'; 
let testAccounts = [
"0x9571f40a25b01b3d56e761b82b6ce63faf64497a7e15c8baf9d9424e36555e29",
"0x315c85d169c7f55fe8dddd1e25788b807242b15531d666c7786e900c055a7f45",
"0xbf5944e677d8883e28e88608de78134041df98d3b13c1b0a1370f0ee6eaab69e",
"0x9954626e22cf3beace628af7b69f4a5150b6b584bffa8da411406b08265fe902",
"0xa04428fa327d80cbb1ac7104ca31eea1f588d7f9a099acbd57e89e03cb8062dd",
"0xec0acba4205beb481c9345a3bb5cee6bcf68daff41b3a2c84718324f7029f397",
"0x412955df4e69e5eb90824878ee53b871a5ff42088075ea949a449dd93ac2796e",
"0xea0473a916b7b535d7e2910a7c5fe1a613f076c4c7afeee3a692b850ae23680a",
"0x50594289e3e247fb26449e015bbbbf1628986093852645162b21333c3b86d98b",
"0x7be12471f41b94ee959c08c768915b9af0cc5026d124d4d66fa96943fe0e5bd5"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

