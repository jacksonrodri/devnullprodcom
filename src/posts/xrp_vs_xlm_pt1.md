XRP and XLM are Blockchain technologies facilitating high transfer rates and the issuance and exchange of digital assets. Read our analysis of the technical differences between these cryptocurrencies.

<h2>Project Missions</h2>

At a high level, XRP and XLM both offer similar feature sets. Both can be used to send and receive payments of value, exchange digital assets and currencies, and facilitate decentralized financial management.

While both technologies can be uesd to serve a multitude of use cases, the stated goals of each & the surrounding institutions vary:

![ripple stellar](@/assets/posts/xrp_vs_xlm_pt1/ripple-stellar.png)

- XRP / Ripple Labs: <i>improving cross-border payments to optimize the financial rails of tommorow</i>
- XLM / Stellar Foundation: <i>advancing financial inclusion globally in a responsible and sustainable way</i>

<h2>Account Creation</h2>

Both XRP and XLM are cryptocurrencies that are implemented as Blockchain based databases managed through Distributed Ledger Technologies (DLTs). Nodes around the world track the state of these databases in a decentralized, peer-to-peer manner and facilitate the transfer of value through transactions.

New accounts are created when XRP/XLM meeting the minimum reserve requirements are sent to an non-existing address. With XRP this happens implicitly with a <b>Payment</b> transaction, with XLM this is an explicit action orchestrated via the <b>CreateAccount</b> operation. This XRP/XLM can be bought and transferred from an exchange or any existing account.

<b>The current reserve is 20 XRP and 1 XLM</b>.

![banks](@/assets/posts/xrp_vs_xlm_pt1/bank.png)

Additional reserve requirements are enforced if the account is associated with various on-ledger constructs including offers, trust lines, signer lists, escrows/payment channels/checks (XRP only), and data entries (XLM only). For XRP this reserve, known as the <b>Owner Reserve</b>, is currently <b>5 XRP</b>. For XLM this reserve, known as the <b>Base Reserve</b>, is currently <b>0.5 XLM</b>.

<h2>Code Prerequisites</h2>

<h3>XRP Prerequisites</h3>

The examples in the articles in this series use the <b>ripple-lib</b> library which can be installed with:

```
$ npm i ripple-lib
```

And imported / initialized in the following manner:

```javascript
const rpi = require('ripple-lib').RippleAPI;
api = new rpi({
  server: "wss://s1.ripple.com"
});

api.connect().then(async () => {
  // Do stuff with 'api' here
})
```

<h3>XLM Prerequisites</h3>

The examples in the next articles use the <b>stellar-sdk</b> library which can be installed with:

```
$ npm i stellar-sdk
```

And imported / initialized in the following manner:

```javascript
var StellarSdk = require('stellar-sdk')
var server = new StellarSdk.Server('https://horizon.stellar.org');

// Do stuff w/ 'server' here
```

<h3>Testnet</h3>
Both XRP and XLM facilitate the connection to an alternate <b>testnet</b> which is seperate than the "real" <b>mainnet</b> used by exchanges, issuers, and other facilitators of value. On the testnet XRP/XLM is allocated on demand and thus can be used to test clients, applications, and other expiremental software. The testnet can be connected to via the following URLs (replace those in the code above with these):

- XRP: <b>wss://s.altnet.rippletest.net:51233</b>
- XLM: <b>https://horizon-testnet.stellar.org/</b>

<h4>Faucets</h4>

On these networks special services called faucets can be used to generate accounts and seed them with initial funds for testing purposes. These can be found here:

- [XRP](https://xrpl.org/xrp-testnet-faucet.html)
- [XLM](https://laboratory.stellar.org/#account-creator?network=test)

<h2>Transactions</h2>

After an account is created, it can issue transactions to modify the Blockchain in specific ways. <b>With XRP each transaction contains a single operation modifying the ledger whereas in XLM a transaction can specify multiple operations.</b>

![transaction](@/assets/posts/xrp_vs_xlm_pt1/transaction.jpg)

In large, corresponding data structures are simpler and quicker to parse in XRP than in XLM. By contrast XLM transactions can contain multiple operations, each of which corresponds to one atomic ledger modification. Thus XLM transactions, while more complicated, provide more bang for their buck as several disparate operations can be combined into one ledger request.

For the purposes of this section we will refer to 'operations' as 'transactions'.

<h2>General format and Metadata</h2>

<h3>XRP</h3>

The XRP transaction format is as follows:

```json
{
  "engine_result": "tesSUCCESS",
  "engine_result_code": 0,
  "engine_result_message": "The transaction was applied. Only final in a validated ledger.",
  "ledger_hash": "<LEDGER HASH>",
  "ledger_index": <BLOCK IDENTIFIER>,
  "meta": {
    "AffectedNodes": [
      <CREATED, MODIFIED, AND DELETED NODES>
    ],
    "TransactionIndex": 0,
    "TransactionResult": "tesSUCCESS",
    "delivered_amount": "5085"
  },
  "status": "closed",
  "transaction": {
    "Account": "<SOURCE ACCOUNT>",
    "Fee": "<FEE PAID>",
    "Flags": <TX FLAGS>,
    "Sequence": <TX SEQUENCE>,
    "SigningPubKey": "<SIGNING PUBLIC KEY>",
    "TransactionType": "<TX TYPE>",
    "TxnSignature": "<TX SIGNATURE>",
    "date": <TX DATE>,
    "hash": "<TX HASH>",
    <OTHER TX FIELDS>
  },
  "type": "transaction",
  "validated": true
}
```

<b>Note</b>: The transaction format as sent when listening to a subscription stream is slightly different than that when retrieving a transaction by id explicitly from the server. The format above in an example of the former.

The transaction itself is contained in the <i>transaction</i> field along with the common fields outlined above (Account, Fee, TransactionType, etc). See specific transactions in the next articles for details of other fields present here.

<i>meta</i> contains an array of affected nodes falling into three categories.

- <b>CreateNodes</b>: are those created in the Blockchain database with this transaction
- <b>ModifiedNodes</b>: are those updated in the Blockchain database with this transaction
- <b>DeletedNodes</b>: are those removed from the Blockchain database with this transaction

The actual nodes vary depending on the context of the transaction and include things like:

- <b>AccountRoot</b>: modified when account metadata is updated and XRP balances change
- <b>TrustLine</b>: created, modified, delete upon trust line state management
- <b>Offer</b>: created, modified, deleted as offer objects are created, accepted, replaced, and removed from the ledger
- & more

<h3>XLM</h3>

The XLM transaction format is as follows:

```json
  "_links": {
    "self": {
      "href": "https://horizon-testnet.stellar.org/transactions/<TX HASH>"
    },
    "account": {
      "href": "https://horizon-testnet.stellar.org/accounts/<SOURCE ACCOUNT>"
    },
    "ledger": {
      "href": "https://horizon-testnet.stellar.org/ledgers/1849749"
    },
    "operations": {
      "href": "https://horizon-testnet.stellar.org/transactions/<TX HASH>/operations{?cursor,limit,order}",
      "templated": true
    },
    "effects": {
      "href": "https://horizon-testnet.stellar.org/transactions/<TX HASH>/effects{?cursor,limit,order}",
      "templated": true
    },
    "precedes": {
      "href": "https://horizon-testnet.stellar.org/transactions?order=asc&cursor=<TX CURSOR>"
    },
    "succeeds": {
      "href": "https://horizon-testnet.stellar.org/transactions?order=desc&cursor=<TX CURSOR>"
    },
    "transaction": {
      "href": "https://horizon-testnet.stellar.org/transactions/<TX HASH>"
    }
  },
  "id": "<TX HASH>",
  "paging_token": "<TX CURSOR>",
  "successful": true,
  "hash": "<TX HASH>",
  "created_at": "<TX TIMESTAMP>",
  "source_account": "<SOURCE ACCOUNT>",
  "source_account_sequence": "<TX SEQUENCE>",
  "fee_account": "<FEE ACCOUNT>",
  "fee_charged": "<TX FEE>",
  "max_fee": "100000",
  "operation_count": 1,
  "envelope_xdr": "AAAAAgAAAAB4RfNTdxjy9SvB8Olnr7X31L83EzfWxlts6hlqU+fQcwABhqAAEizuAAAAbQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAABAAAAABB90WssODNIgi6BHveqzxTRmIpvAFRyVNM+Hm2GVuCcAAAAAAAAAACHOsQnodX7lPSDhMzkb1Rd40RnjLNM3/d5GKN4WEfzIgAAABdIdugAAAAAAAAAAAJT59BzAAAAQGpfw4z2d/T1/Z4N3y1tpR+ndg+ka75nmBeVmN1BBB++V5vNJ65Z5mW56Po3rwdFt4LUFtA1+fOdt4UcTQ+3uwGGVuCcAAAAQFxg3Vzn2rtf8W6rr0jWmCnowVY6+vXZeYWsZkImRkihSxB2muRaN4kHIVIbqyQIZ7va1qKMozllXMsH/5QrgQc=",
  "result_xdr": "AAAAAAAAAGQAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAA=",
  "result_meta_xdr": "AAAAAgAAAAIAAAADABw5lQAAAAAAAAAAeEXzU3cY8vUrwfDpZ6+199S/NxM31sZbbOoZalPn0HMAAAAAPCTR+QASLO4AAABsAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAABABw5lQAAAAAAAAAAeEXzU3cY8vUrwfDpZ6+199S/NxM31sZbbOoZalPn0HMAAAAAPCTR+QASLO4AAABtAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAABAAAAAwAAAAMAHDmUAAAAAAAAAAAQfdFrLDgzSIIugR73qs8U0ZiKbwBUclTTPh5thlbgnACED7j3t9zfAAAAbAAABK8AAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAEAHDmVAAAAAAAAAAAQfdFrLDgzSIIugR73qs8U0ZiKbwBUclTTPh5thlbgnACED6GvQPTfAAAAbAAABK8AAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAHDmVAAAAAAAAAACHOsQnodX7lPSDhMzkb1Rd40RnjLNM3/d5GKN4WEfzIgAAABdIdugAABw5lQAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAA=",
  "fee_meta_xdr": "AAAAAgAAAAMAHCVEAAAAAAAAAAB4RfNTdxjy9SvB8Olnr7X31L83EzfWxlts6hlqU+fQcwAAAAA8JNJdABIs7gAAAGwAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAEAHDmVAAAAAAAAAAB4RfNTdxjy9SvB8Olnr7X31L83EzfWxlts6hlqU+fQcwAAAAA8JNH5ABIs7gAAAGwAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAA==",
  "memo_type": "none",
  "signatures": [
    <SIGNATURE LIST>
  ],
  "valid_after": "1970-01-01T00:00:00Z",
  "ledger_attr": <TX LEDGER>
}
```

XLM transactions encode the <i>envelope</i>, <i>result</i>, <i>result_meta</i>, and <i>fee_meta</i> fields in the optimized <i>[XDR](https://en.wikipedia.org/wiki/External_Data_Representation)</i> format. Converting these fields to a human friendly format results in a transaction that looks like the following:

```json
{
  "id": "<TX HASH>",
  "paging_token": "<TX CURSOR>",
  "successful": true,
  "hash": "<TX HASH>",
  "created_at": "<TX TIMESTAMP>",
  "source_account": "<SOURCE ACCOUNT>",
  "source_account_sequence": "5115950294630509",
  "fee_account": "<FEE ACCOUNT>",
  "fee_charged": "<TX FEE>",
  "max_fee": "100000",
  "operation_count": 1,
  "memo_type": "none",
  "signatures": [
    <SIGNATURE LIST>
  ],
  "valid_after": "1970-01-01T00:00:00Z",
  "ledger_attr": <TX LEDGER>,
  "envelope": {
    "_type": "envelopeTypeTx",
    "v1": {
      "tx": {
        "sourceAccount": {
          "_type": "keyTypeEd25519",
          "ed25519": "<SOURCE ACCOUNT ED25519>"
        },
        "fee": 100000,
        "seqNum": "5115950294630509",
        "timeBounds": {
          "minTime": "0",
          "maxTime": "0"
        },
        "memo": {
          "_type": "memoNone"
        },
        "operations": [
          <TX OPERATIONS LIST>
        ],
        "ext": {
          "_type": 0
        }
      },
      "signatures": [
        <SIGNATURE LIST>
      ]
    }
  },
  "result": {
    "feeCharged": "100",
    "result": {
      "_type": "txSuccess",
      "results": [
        <RESULT LIST>
      ]
    },
    "ext": {
      "_type": 0
    }
  },
  "result_meta": {
    "_type": 2,
    "v2": {
      "txChangesBefore": [
        <TX LEVEL CHANGES BEFORE OPERATIONS>
      ],
      "operations": [
        <CHANGES AS RESULT OF OPERATIONS>
      ],
      "txChangesAfter": [
        <TX LEVEL CHANGES AFTER OPERATIONS>
      ]
    }
  }
}
```

For the purposes of the forthcoming examples, the XDR fields have been converted.

XLM transactions contain common fields in the top level object along w/ links to Horizon server resources related to the tx. Diving in from there:

- The <b>envelope</b> field contains the operations which actually modify the Blockchain database.
- The <b>result</b> field contains the list of results for each operation
- The <b>result_meta</b> fields containst the list of changes the transaction made to the Blockchain database, including those before the operations are applied, by the operations themselves, and after.

<h2>Coming Soon</h2>

Stay tuned for our next post in this series in which we will discuss specific transactions common to both XRP and XLM.
