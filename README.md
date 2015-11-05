# Bitcore Library

[Bitcore Library](https://github.com/bitpay/bitcore-lib) (v0.13.8) is a pure and powerful JavaScript Bitcoin library.

## Principles

Bitcoin is a powerful new peer-to-peer platform for the next generation of financial technology. The decentralized nature of the Bitcoin network allows for highly resilient bitcoin infrastructure, and the developer community needs reliable, open-source tools to implement bitcoin apps and services.

## Installation

`meteor add frabrunelle:bitcore-lib`

## Usage

I personally use Bitcore Library to validate Bitcoin addresses in my Meteor apps. And it works on both the client and the server, thanks to [Cosmos Browserify](https://github.com/elidoran/cosmos-browserify).

```javascript
bitcore.Address.isValid('126vMmY1fyznpZiFTTnty3cm1Rw8wuheev')
```

## Documentation

- [Address](https://bitcore.io/api/lib/address)
- [Block](https://bitcore.io/api/lib/block)
- [Crypto](https://bitcore.io/api/lib/crypto)
- [Encoding](https://bitcore.io/api/lib/encoding)
- [HD Keys](https://bitcore.io/api/lib/hd-keys)
- [Networks](https://bitcore.io/api/lib/networks)
- [Private Key](https://bitcore.io/api/lib/private-key)
- [Public Key](https://bitcore.io/api/lib/public-key)
- [Script](https://bitcore.io/api/lib/script)
- [Transaction](https://bitcore.io/api/lib/transaction)
- [Bitcoin Units](https://bitcore.io/api/lib/unit)
- [Unspent Outputs](https://bitcore.io/api/lib/unspent-output)
- [Bitcoin URIs](https://bitcore.io/api/lib/uri)

To get community assistance and ask for help with implementation questions, please use the [Bitcore Forum](https://forum.bitcore.io/).

## Examples

* [Generate a random address](https://github.com/bitpay/bitcore-lib/blob/master/docs/examples.md#generate-a-random-address)
* [Generate a address from a SHA256 hash](https://github.com/bitpay/bitcore-lib/blob/master/docs/examples.md#generate-a-address-from-a-sha256-hash)
* [Import an address via WIF](https://github.com/bitpay/bitcore-lib/blob/master/docs/examples.md#import-an-address-via-wif)
* [Create a Transaction](https://github.com/bitpay/bitcore-lib/blob/master/docs/examples.md#create-a-transaction)
* [Sign a Bitcoin message](https://github.com/bitpay/bitcore-lib/blob/master/docs/examples.md#sign-a-bitcoin-message)
* [Verify a Bitcoin message](https://github.com/bitpay/bitcore-lib/blob/master/docs/examples.md#verify-a-bitcoin-message)
* [Create an OP RETURN transaction](https://github.com/bitpay/bitcore-lib/blob/master/docs/examples.md#create-an-op-return-transaction)
* [Create a 2-of-3 multisig P2SH address](https://github.com/bitpay/bitcore-lib/blob/master/docs/examples.md#create-a-2-of-3-multisig-p2sh-address)
* [Spend from a 2-of-2 multisig P2SH address](https://github.com/bitpay/bitcore-lib/blob/master/docs/examples.md#spend-from-a-2-of-2-multisig-p2sh-address)

## License

Code released under [the MIT license](https://github.com/bitpay/bitcore-lib/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
