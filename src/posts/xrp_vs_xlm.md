XRP and XLM are Blockchain technologies facilitating high transfer rates and the issuance and exchange of digital assets. Read our analysis of the technical differences between these cryptocurrencies.

<h2>Project Missions</h2>

At a high level, XRP and XLM both offer similar feature sets. Both can be used to send and receive payments of value, exchange digital assets and currencies, and facilitate decentralized financial management.

While both technologies can be uesd to serve a multitude of use cases, the stated goals of each & the surrounding institutions vary:

- XRP / Ripple Labs: <i>improving cross-border payments to optimize the financial rails of tommorow</i>
- XLM / Stellar Foundation: <i>advancing financial inclusion globally in a responsible and sustainable way</i>

<h2>Account Creation</h2>

Both XRP and XLM are cryptocurrencies that are implemented as Blockchain based databases managed through Distributed Ledger Technologies (DLTs). Nodes around the world track the state of these databases in a decentralized, peer-to-peer manner and facilitate the transfer of value through transactions.

New accounts are created when XRP/XLM meeting the minimum reserve requirements are sent to an non-existing address. With XRP this happens implicitly with a <b>Payment</b> transaction, with XLM this is an explicit action orchestrated via the <b>CreateAccount</b> operation. This XRP/XLM can be bought and transferred from an exchange or any existing account.

<b>The current reserve is 20 XRP and 1 XLM</b>.

Additional reserve requirements are enforced if the account is associated with various on-ledger constructs including offers, trust lines, signer lists, escrows/payment channels/checks (XRP only), and data entries (XLM only). For XRP this reserve, known as the <b>Owner Reserve</b>, is currently <b>5 XRP</b>. For XLM this reserve, known as the <b>Base Reserve</b>, is currently <b>0.5 XLM</b>.

<h2>Code Prerequisites</h2>

<h3>XRP Prerequisites</h3>

The examples below use the <b>ripple-lib</b> library which can be installed with:

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
  // Do stuff with 'api' here, see below
})
```

<h3>XLM Prerequisites</h3>

The examples below use the <b>stellar-sdk</b> library which can be installed with:

```
$ npm i stellar-sdk
```

And imported / initialized in the following manner:

```javascript
var StellarSdk = require('stellar-sdk')
var server = new StellarSdk.Server('https://horizon.stellar.org');

// Do stuff w/ 'server' here, see below
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

In large the corresponding data structures are simpler and quicker to parse than XLM. By contrast XLM transactions can contain multiple operations, each of which corresponds to one atomic ledger modification. Thus XLM transactions while more complicated provide more bang for their buck as several disparate operations can be combined into one ledger request.

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

The transaction itself is contained in the <i>transaction</i> field along with the common fields outlined above (Account, Fee, TransactionType, etc). See specific transactions below for details of other fields present here.

<i>meta</i> contains an array of affected nodes falling into three categories.

- CreateNodes: are those created in the Blockchain database with this transaction
- ModifiedNodes: are those updated in the Blockchain database with this transaction
- DeletedNodes: are those removed from the Blockchain database with this transaction

The actual nodes vary depending on the context of the transaction and include things like:

- AccountRoot: modified when account metadata is updated and XRP balances change
- TrustLine: created, modified, delete upon trust line state management
- Offer: created, modified, deleted as offer objects are created, accepted, replaced, and removed from the ledger
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

...
```json
{
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

For the purposes of the examples below, the XDR fields have been converted.

XLM transactions contain common fields in the top level object along w/ links to Horizon server resources related to the tx. Diving in from there:

- The <i>envelope</i> field contains the operations which actually modify the Blockchain database.
- The <i>result</i> field contains the list of results for each operation
- The <i>result_meta</i> fields containst the list of changes the transaction made to the Blockchain database, including those before the operations are applied, by the operations themselves, and after.

<h2>Common Transactions</h2>

There are many different transactions that can be issued by an account owner. The common ones represented in both XRP and XLM fall into four general categories:

<h3>Payments</h3>

<b>Payment</b> transactions allow value to be transferred from on account to another on the ledger. Payment Paths facilite the automatic conversion of assets using open offers and can be set in the Payment transaction itself on XRP or via the <b>PaymentPathStrictSend</b> and <b>PaymentPathStrictReceive</b> operations on XLM.

<h4>XRP Payments</h4>

The following is an example of an XRP payment transaction

```javascript
{
  "engine_result": "tesSUCCESS",
  "engine_result_code": 0,
  "engine_result_message": "The transaction was applied. Only final in a validated ledger.",
  "ledger_hash": "E04A5DE6BB1D72FCA27202281413E18A43FB6CB8816F4DFC363A83127C96FFAD",
  "ledger_index": 15148061,
  "meta": {
    "AffectedNodes": [
      {
        "ModifiedNode": {
          "FinalFields": {
            "Account": "rEB3GQRkiLcx4UpGhjUkTkKyDGUeKhVkx8",
            "Balance": "1854999580",
            "Flags": 0,
            "MessageKey": "0200000000000000000000000098314F9F897C4F5F72E21F04A500D36BBA3B8DAF",
            "OwnerCount": 0,
            "RegularKey": "rNWss9GXFetQie89geThLrZgYv2zsjhMam",
            "Sequence": 12409577
          },
          "LedgerEntryType": "AccountRoot",
          "LedgerIndex": "93389A7CDC10DD1287FB45B471A6E2970B7997DCD02F4A83E6B149FDDEFADB67",
          "PreviousFields": {
            "Balance": "1849999580"
          },
          "PreviousTxnID": "E1AD3F381B49ABE4954C15445BAC539BD3552F4C65175BC26D428CB5DFE71985",
          "PreviousTxnLgrSeq": 15148031
        }
      },
      {
        "ModifiedNode": {
          "FinalFields": {
            "Account": "rUyFVKFhUK7NmAUejgyQyJm87spAWQ7D3K",
            "Balance": "144999928",
            "Flags": 0,
            "OwnerCount": 0,
            "Sequence": 15147622
          },
          "LedgerEntryType": "AccountRoot",
          "LedgerIndex": "B2CDE01272DAE88ACA112DD80CACED5E8CF27DE2A1D46AD52C0FDAD415DBAB03",
          "PreviousFields": {
            "Balance": "149999940",
            "Sequence": 15147621
          },
          "PreviousTxnID": "E1AD3F381B49ABE4954C15445BAC539BD3552F4C65175BC26D428CB5DFE71985",
          "PreviousTxnLgrSeq": 15148031
        }
      }
    ],
    "TransactionIndex": 0,
    "TransactionResult": "tesSUCCESS",
    "delivered_amount": "5000000"
  },
  "status": "closed",
  "transaction": {
    "Account": "rUyFVKFhUK7NmAUejgyQyJm87spAWQ7D3K",
    "Amount": "5000000",
    "Destination": "rEB3GQRkiLcx4UpGhjUkTkKyDGUeKhVkx8",
    "Fee": "12",
    "Flags": 2147483648,
    "LastLedgerSequence": 15148062,
    "Sequence": 15147621,
    "SigningPubKey": "02E7FC96AF35D94BBFAC201ECF73ED1518B029FF2FBD7D3314666BFBB296061113",
    "TransactionType": "Payment",
    "TxnSignature": "3045022100ADF194D48DEC2E2F394067B0E61E675CD0BD0139341FB67B3707A8B97E8F33AC0220075737C4DDDE705B000EB2A28226D482E9E0ADE0B631DEEA522E229FADE1348D",
    "date": 667243711,
    "hash": "DC0F26EE42A9994BC7F528E98880BAB2ABE4E9D94B1DF518FFF769225B7F9A1E"
  },
  "type": "transaction",
  "validated": true
}
```

To issue a payment, use the following code:

```javascript
// Replace these with the corresponding account and payment info
const SENDER      = "rUyFVKFhUK7NmAUejgyQyJm87spAWQ7D3K";
const DESTINATION = "rEB3GQRkiLcx4UpGhjUkTkKyDGUeKhVkx8";
const SECRET      = "ssVmCxxHUuMp2xjt73ucC4hvRq1ww";
const AMOUNT      = 5;

// Prepare payment transaction
const prepared = await api.prepareTransaction({
  "TransactionType": "Payment",
  "Account": SENDER,
  "Amount": api.xrpToDrops(AMOUNT),
  "Destination": DESTINATION
})

// Sign and submit prepared transaction
const response = api.sign(prepared.txJSON, SECRET);
const result = await api.submit(response.signedTransaction)

// Validate result here
```

<h4>XLM Payments</h4>

The following is an example of an XLM payment transaction

```javascript
{
  "id": "cd92d5098409cca56ce19f43a1827603e1a14e6279f2b60a1226ab3d8b83d2d1",
  "paging_token": "8215903070064640",
  "successful": true,
  "hash": "cd92d5098409cca56ce19f43a1827603e1a14e6279f2b60a1226ab3d8b83d2d1",
  "ledger": 1912914,
  "created_at": "2021-02-21T18:28:20Z",
  "source_account": "GDP4NQHSFF2AOTW5PYZR5O7FHDMKSNHHGJIAP5HB5HHMYHRNUT5H4SCX",
  "source_account_sequence": "8214833623203844",
  "fee_account": "GDP4NQHSFF2AOTW5PYZR5O7FHDMKSNHHGJIAP5HB5HHMYHRNUT5H4SCX",
  "fee_charged": "100",
  "max_fee": "100",
  "operation_count": 1,
  "memo_type": "none",
  "signatures": [
    "/4jrdQsQ7uHo3yU7hvy84kEj7Yh3FAAe0eFMrTShfi5HJDZYnlHNi+hb9SC7m+gxTuMKYMlIU2iQQSiovsEeBw=="
  ],
  "valid_after": "1970-01-01T00:00:00Z",
  "valid_before": "2021-02-21T18:31:18Z",
  "envelope": {
    "_type": "envelopeTypeTx",
    "v1": {
      "tx": {
        "sourceAccount": {
          "_type": "keyTypeEd25519",
          "ed25519": "38bA8il0B07dfjMeu+U42Kk05zJQB/Th6c7MHi2k+n4="
        },
        "fee": 100,
        "seqNum": "8214833623203844",
        "timeBounds": {
          "minTime": "0",
          "maxTime": "1613932278"
        },
        "memo": {
          "_type": "memoNone"
        },
        "operations": [
          {
            "body": {
              "_type": "payment",
              "paymentOp": {
                "destination": {
                  "_type": "keyTypeEd25519",
                  "ed25519": "LbikBAaCBNMTXiee0Ls8m+8k5PGR7nyHjF9NLGv8m1I="
                },
                "asset": {
                  "_type": "assetTypeNative"
                },
                "amount": "100000000"
              }
            }
          }
        ],
        "ext": {
          "_type": 0
        }
      },
      "signatures": [
        {
          "hint": "LaT6fg==",
          "signature": "/4jrdQsQ7uHo3yU7hvy84kEj7Yh3FAAe0eFMrTShfi5HJDZYnlHNi+hb9SC7m+gxTuMKYMlIU2iQQSiovsEeBw=="
        }
      ]
    }
  },
  "result": {
    "feeCharged": "100",
    "result": {
      "_type": "txSuccess",
      "results": [
        {
          "_type": "opInner",
          "tr": {
            "_type": "payment",
            "paymentResult": {
              "_type": "paymentSuccess"
            }
          }
        }
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
        {
          "_type": "ledgerEntryState",
          "state": {
            "lastModifiedLedgerSeq": 1912914,
            "data": {
              "_type": "account",
              "account": {
                "accountId": {
                  "_type": "publicKeyTypeEd25519",
                  "ed25519": "38bA8il0B07dfjMeu+U42Kk05zJQB/Th6c7MHi2k+n4="
                },
                "balance": "99699999600",
                "seqNum": "8214833623203843",
                "numSubEntries": 0,
                "flags": 0,
                "homeDomain": "",
                "thresholds": "AQAAAA==",
                "signers": [],
                "ext": {
                  "_type": 0
                }
              }
            },
            "ext": {
              "_type": 0
            }
          }
        },
        {
          "_type": "ledgerEntryUpdated",
          "updated": {
            "lastModifiedLedgerSeq": 1912914,
            "data": {
              "_type": "account",
              "account": {
                "accountId": {
                  "_type": "publicKeyTypeEd25519",
                  "ed25519": "38bA8il0B07dfjMeu+U42Kk05zJQB/Th6c7MHi2k+n4="
                },
                "balance": "99699999600",
                "seqNum": "8214833623203844",
                "numSubEntries": 0,
                "flags": 0,
                "homeDomain": "",
                "thresholds": "AQAAAA==",
                "signers": [],
                "ext": {
                  "_type": 0
                }
              }
            },
            "ext": {
              "_type": 0
            }
          }
        }
      ],
      "operations": [
        {
          "changes": [
            {
              "_type": "ledgerEntryState",
              "state": {
                "lastModifiedLedgerSeq": 1912911,
                "data": {
                  "_type": "account",
                  "account": {
                    "accountId": {
                      "_type": "publicKeyTypeEd25519",
                      "ed25519": "LbikBAaCBNMTXiee0Ls8m+8k5PGR7nyHjF9NLGv8m1I="
                    },
                    "balance": "100300000000",
                    "seqNum": "8214850803073024",
                    "numSubEntries": 0,
                    "flags": 0,
                    "homeDomain": "",
                    "thresholds": "AQAAAA==",
                    "signers": [],
                    "ext": {
                      "_type": 0
                    }
                  }
                },
                "ext": {
                  "_type": 0
                }
              }
            },
            {
              "_type": "ledgerEntryUpdated",
              "updated": {
                "lastModifiedLedgerSeq": 1912914,
                "data": {
                  "_type": "account",
                  "account": {
                    "accountId": {
                      "_type": "publicKeyTypeEd25519",
                      "ed25519": "LbikBAaCBNMTXiee0Ls8m+8k5PGR7nyHjF9NLGv8m1I="
                    },
                    "balance": "100400000000",
                    "seqNum": "8214850803073024",
                    "numSubEntries": 0,
                    "flags": 0,
                    "homeDomain": "",
                    "thresholds": "AQAAAA==",
                    "signers": [],
                    "ext": {
                      "_type": 0
                    }
                  }
                },
                "ext": {
                  "_type": 0
                }
              }
            },
            {
              "_type": "ledgerEntryState",
              "state": {
                "lastModifiedLedgerSeq": 1912914,
                "data": {
                  "_type": "account",
                  "account": {
                    "accountId": {
                      "_type": "publicKeyTypeEd25519",
                      "ed25519": "38bA8il0B07dfjMeu+U42Kk05zJQB/Th6c7MHi2k+n4="
                    },
                    "balance": "99699999600",
                    "seqNum": "8214833623203844",
                    "numSubEntries": 0,
                    "flags": 0,
                    "homeDomain": "",
                    "thresholds": "AQAAAA==",
                    "signers": [],
                    "ext": {
                      "_type": 0
                    }
                  }
                },
                "ext": {
                  "_type": 0
                }
              }
            },
            {
              "_type": "ledgerEntryUpdated",
              "updated": {
                "lastModifiedLedgerSeq": 1912914,
                "data": {
                  "_type": "account",
                  "account": {
                    "accountId": {
                      "_type": "publicKeyTypeEd25519",
                      "ed25519": "38bA8il0B07dfjMeu+U42Kk05zJQB/Th6c7MHi2k+n4="
                    },
                    "balance": "99599999600",
                    "seqNum": "8214833623203844",
                    "numSubEntries": 0,
                    "flags": 0,
                    "homeDomain": "",
                    "thresholds": "AQAAAA==",
                    "signers": [],
                    "ext": {
                      "_type": 0
                    }
                  }
                },
                "ext": {
                  "_type": 0
                }
              }
            }
          ]
        }
      ],
      "txChangesAfter": []
    }
  }
}
```

To issue a payment, the following code can be used:

```javascript
// Replace these with the corresponding account and payment info
const source = StellarSdk.Keypair.fromSecret("SBTNIVZVAFVBH3O5AGIVZ3IJYZH7ODPRFSY7UUBVHTE3GXFL2X5ZXLD2");
const destination = "GAW3RJAEA2BAJUYTLYTZ5UF3HSN66JHE6GI647EHRRPU2LDL7SNVEQD2";
const amount = "10";

// Load source account
server.loadAccount(source.publicKey())
      .then(function (src) {
        // Set up the payment operation
        const payment = StellarSdk.Operation.payment({
          destination: destination,
          asset: StellarSdk.Asset.native(),
          amount: amount
        });

        // Setup the transaction and add the payment operation
        const tx = new StellarSdk.TransactionBuilder(src, {
          fee: StellarSdk.BASE_FEE,
          networkPassphrase: StellarSdk.Networks.TESTNET,
        }).addOperation(payment)
          .setTimeout(180)
          .build();

        // Sign and submit the transaction to the server
        tx.sign(source);
        return server.submitTransaction(tx);

      }).then(function (result) {
        // verfiy result transaction here
      })
```

<h3>Trust Management</h3>

Sending and receiving non-native assets (anything other than XRP and XLM respectively) on the ledger requires custodians, called <b>gateways</b> on XRP and <b>anchors</b> on XLM. These institution hold and manage the asset offline, in 'the real world'.

An account may extend trust to a custodian to issue managed assets to their account. Once issued, the account may send and receive those assets in a similar manner to the native assets. Whoever holds issued assets may redeem them with the custodian but sending them back, assumably resulting in a balance credit in an external ledger.

Trust can be extended to other accounts with the <b>TrustSet</b> transaction on the XRP ledger and the <b>ChangeTrust</b> transaction on XLM.

Both cryptocurrencies also support asset authorization in which an issuer to authorize other accounts to perform various operations with issued assets. With XRP this is accomplished by setting the <b>RequireAuth</b> flag on both the custodian and trusting accounts following by the gateway creating a trustline to the truster.

On XLM asset authorization is configured with the <b>Authorization Required</b> account flag and per trust line with the <b>AllowTrust</b> operation.

<h4>XRP Trust Lines</h4>

The following transaction initiates trust on the XRP ledger:

```javascript
{
  "engine_result": "tesSUCCESS",
  "engine_result_code": 0,
  "engine_result_message": "The transaction was applied. Only final in a validated ledger.",
  "ledger_hash": "7456AB3C1063FBFE77092CE764F072CB0958D9D7B05C85E841EBCC344F8DD44F",
  "ledger_index": 15149585,
  "meta": {
    "AffectedNodes": [
      {
        "ModifiedNode": {
          "FinalFields": {
            "Account": "rUyFVKFhUK7NmAUejgyQyJm87spAWQ7D3K",
            "Balance": "144999904",
            "Flags": 0,
            "OwnerCount": 1,
            "Sequence": 15147624
          },
          "LedgerEntryType": "AccountRoot",
          "LedgerIndex": "B2CDE01272DAE88ACA112DD80CACED5E8CF27DE2A1D46AD52C0FDAD415DBAB03",
          "PreviousFields": {
            "Balance": "144999916",
            "Sequence": 15147623
          },
          "PreviousTxnID": "609C5D443E291E30AAF21044EB4B634D24CC662A88552FB49F8C205E599074D7",
          "PreviousTxnLgrSeq": 15149581
        }
      }
    ],
    "TransactionIndex": 0,
    "TransactionResult": "tesSUCCESS"
  },
  "status": "closed",
  "transaction": {
    "Account": "rUyFVKFhUK7NmAUejgyQyJm87spAWQ7D3K",
    "Fee": "12",
    "Flags": 2147483648,
    "LastLedgerSequence": 15149586,
    "LimitAmount": {
      "currency": "BTC",
      "issuer": "rEB3GQRkiLcx4UpGhjUkTkKyDGUeKhVkx8",
      "value": "420"
    },
    "Sequence": 15147623,
    "SigningPubKey": "02E7FC96AF35D94BBFAC201ECF73ED1518B029FF2FBD7D3314666BFBB296061113",
    "TransactionType": "TrustSet",
    "TxnSignature": "3045022100CB1204667E6E396DE2CFC72413BF00213692CC765C302BB0480203FA9B23B5E8022060D33ACD21A6F95E70D94657B92D6B200ECEEE82150176CD063417EE719E5C4F",
    "date": 667248362,
    "hash": "1D39328BE4BE5DC07FDA703B44625B2AF1EBD9CA79957748B36CA5AE871888A1"
  },
  "type": "transaction",
  "validated": true
}
```

It was established with the following logic:

```javasacript
// Replace these with the corresponding account and trustline info
const TRUSTER = "rUyFVKFhUK7NmAUejgyQyJm87spAWQ7D3K";
const ISSUER  = "rEB3GQRkiLcx4UpGhjUkTkKyDGUeKhVkx8";
const SECRET  = "ssVmCxxHUuMp2xjt73ucC4hvRq1ww";
const ASSET   = "BTC";
const LIMIT   = "420";

// Prepare the TrustSet transaction
const prepared = await api.prepareTransaction({
  "TransactionType": "TrustSet",
  "Account": TRUSTER,
  "LimitAmount": {
    "currency" : ASSET,
    "issuer" : ISSUER,
    "value" : LIMIT
  }
})

// Sign and submit the transaction
const response = api.sign(prepared.txJSON, SECRET);
const result = await api.submit(response.signedTransaction)

// Validate result here
```

To remove a trust line:

- The corresponding balance of the issued asset must be zero
- The limit must be set to zero
- The line cannot be frozen
- The line does not allow rippling, unless the account's *DefaultRipple* flag is set, in which case it must allow rippling

<h4>XLM Trust Lines</h4>

The following transaction initiates trust on the XLM ledger:

```javascript
{
  "id": "b2c442e979fb5bd62c056025c464f4c7b212b57cbad3e3a7c18ca6f78b5ccfac",
  "paging_token": "8217062711238656",
  "successful": true,
  "hash": "b2c442e979fb5bd62c056025c464f4c7b212b57cbad3e3a7c18ca6f78b5ccfac",
  "ledger": 1913184,
  "created_at": "2021-02-21T18:51:56Z",
  "source_account": "GDP4NQHSFF2AOTW5PYZR5O7FHDMKSNHHGJIAP5HB5HHMYHRNUT5H4SCX",
  "source_account_sequence": "8214833623203846",
  "fee_account": "GDP4NQHSFF2AOTW5PYZR5O7FHDMKSNHHGJIAP5HB5HHMYHRNUT5H4SCX",
  "fee_charged": "100",
  "max_fee": "100",
  "operation_count": 1,
  "memo_type": "none",
  "signatures": [
    "oFV4hdw0ctCCg/3mlHbc8OB/QQAqfbRk2DT1gvh38TZ6e9L8xXjSts7jq7zOjf29GUS2hSB0k6lRhmoBGW/bBA=="
  ],
  "valid_after": "1970-01-01T00:00:00Z",
  "valid_before": "2021-02-21T18:54:50Z",
  "envelope": {
    "_type": "envelopeTypeTx",
    "v1": {
      "tx": {
        "sourceAccount": {
          "_type": "keyTypeEd25519",
          "ed25519": "38bA8il0B07dfjMeu+U42Kk05zJQB/Th6c7MHi2k+n4="
        },
        "fee": 100,
        "seqNum": "8214833623203846",
        "timeBounds": {
          "minTime": "0",
          "maxTime": "1613933690"
        },
        "memo": {
          "_type": "memoNone"
        },
        "operations": [
          {
            "body": {
              "_type": "changeTrust",
              "changeTrustOp": {
                "line": {
                  "_type": "assetTypeCreditAlphanum4",
                  "alphaNum4": {
                    "assetCode": "QlRDAA==",
                    "issuer": {
                      "_type": "publicKeyTypeEd25519",
                      "ed25519": "LbikBAaCBNMTXiee0Ls8m+8k5PGR7nyHjF9NLGv8m1I="
                    }
                  }
                },
                "limit": "4200000000"
              }
            }
          }
        ],
        "ext": {
          "_type": 0
        }
      },
      "signatures": [
        {
          "hint": "LaT6fg==",
          "signature": "oFV4hdw0ctCCg/3mlHbc8OB/QQAqfbRk2DT1gvh38TZ6e9L8xXjSts7jq7zOjf29GUS2hSB0k6lRhmoBGW/bBA=="
        }
      ]
    }
  },
  "result": {
    "feeCharged": "100",
    "result": {
      "_type": "txSuccess",
      "results": [
        {
          "_type": "opInner",
          "tr": {
            "_type": "changeTrust",
            "changeTrustResult": {
              "_type": "changeTrustSuccess"
            }
          }
        }
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
        {
          "_type": "ledgerEntryState",
          "state": {
            "lastModifiedLedgerSeq": 1913184,
            "data": {
              "_type": "account",
              "account": {
                "accountId": {
                  "_type": "publicKeyTypeEd25519",
                  "ed25519": "38bA8il0B07dfjMeu+U42Kk05zJQB/Th6c7MHi2k+n4="
                },
                "balance": "99499999400",
                "seqNum": "8214833623203845",
                "numSubEntries": 0,
                "flags": 0,
                "homeDomain": "",
                "thresholds": "AQAAAA==",
                "signers": [],
                "ext": {
                  "_type": 0
                }
              }
            },
            "ext": {
              "_type": 0
            }
          }
        },
        {
          "_type": "ledgerEntryUpdated",
          "updated": {
            "lastModifiedLedgerSeq": 1913184,
            "data": {
              "_type": "account",
              "account": {
                "accountId": {
                  "_type": "publicKeyTypeEd25519",
                  "ed25519": "38bA8il0B07dfjMeu+U42Kk05zJQB/Th6c7MHi2k+n4="
                },
                "balance": "99499999400",
                "seqNum": "8214833623203846",
                "numSubEntries": 0,
                "flags": 0,
                "homeDomain": "",
                "thresholds": "AQAAAA==",
                "signers": [],
                "ext": {
                  "_type": 0
                }
              }
            },
            "ext": {
              "_type": 0
            }
          }
        }
      ],
      "operations": [
        {
          "changes": [
            {
              "_type": "ledgerEntryState",
              "state": {
                "lastModifiedLedgerSeq": 1913184,
                "data": {
                  "_type": "account",
                  "account": {
                    "accountId": {
                      "_type": "publicKeyTypeEd25519",
                      "ed25519": "38bA8il0B07dfjMeu+U42Kk05zJQB/Th6c7MHi2k+n4="
                    },
                    "balance": "99499999400",
                    "seqNum": "8214833623203846",
                    "numSubEntries": 0,
                    "flags": 0,
                    "homeDomain": "",
                    "thresholds": "AQAAAA==",
                    "signers": [],
                    "ext": {
                      "_type": 0
                    }
                  }
                },
                "ext": {
                  "_type": 0
                }
              }
            },
            {
              "_type": "ledgerEntryUpdated",
              "updated": {
                "lastModifiedLedgerSeq": 1913184,
                "data": {
                  "_type": "account",
                  "account": {
                    "accountId": {
                      "_type": "publicKeyTypeEd25519",
                      "ed25519": "38bA8il0B07dfjMeu+U42Kk05zJQB/Th6c7MHi2k+n4="
                    },
                    "balance": "99499999400",
                    "seqNum": "8214833623203846",
                    "numSubEntries": 1,
                    "flags": 0,
                    "homeDomain": "",
                    "thresholds": "AQAAAA==",
                    "signers": [],
                    "ext": {
                      "_type": 0
                    }
                  }
                },
                "ext": {
                  "_type": 0
                }
              }
            },
            {
              "_type": "ledgerEntryCreated",
              "created": {
                "lastModifiedLedgerSeq": 1913184,
                "data": {
                  "_type": "trustline",
                  "trustLine": {
                    "accountId": {
                      "_type": "publicKeyTypeEd25519",
                      "ed25519": "38bA8il0B07dfjMeu+U42Kk05zJQB/Th6c7MHi2k+n4="
                    },
                    "asset": {
                      "_type": "assetTypeCreditAlphanum4",
                      "alphaNum4": {
                        "assetCode": "QlRDAA==",
                        "issuer": {
                          "_type": "publicKeyTypeEd25519",
                          "ed25519": "LbikBAaCBNMTXiee0Ls8m+8k5PGR7nyHjF9NLGv8m1I="
                        }
                      }
                    },
                    "balance": "0",
                    "limit": "4200000000",
                    "flags": 1,
                    "ext": {
                      "_type": 0
                    }
                  }
                },
                "ext": {
                  "_type": 0
                }
              }
            }
          ]
        }
      ],
      "txChangesAfter": []
    }
  }
}
```

It was established with the following logic:

```javascript
// Replace these with the corresponding account and trust info
const truster = StellarSdk.Keypair.fromSecret("SBTNIVZVAFVBH3O5AGIVZ3IJYZH7ODPRFSY7UUBVHTE3GXFL2X5ZXLD2");
const issuer = "GAW3RJAEA2BAJUYTLYTZ5UF3HSN66JHE6GI647EHRRPU2LDL7SNVEQD2";
const asset = "BTC"
const limit = "420";

// Load truster (source) account
server.loadAccount(truster.publicKey())
      .then(function (src) {
        // Setup ChangeTrust operation
        const change_trust = StellarSdk.Operation.changeTrust({
          asset : new StellarSdk.Asset(asset, issuer),
          limit : limit
        });

        // Setup the transaction and add the ChangeTrust operation
        const tx = new StellarSdk.TransactionBuilder(src, {
          fee: StellarSdk.BASE_FEE,
          networkPassphrase: StellarSdk.Networks.TESTNET,
        }).addOperation(change_trust)
          .setTimeout(180)
          .build();

        // Sign and submit the transaction to the server
        tx.sign(truster);
        return server.submitTransaction(tx);

      }).then(function (result) {
        // Verify result transaction here
      })
```

To delete an existing TrustLine simply set the limit to 0.


<h3>Offers</h3>

Offers for native and non-native assets involve the creation and management of limit orders on the ledger. With XRP these are managed via <b>OfferCreate</b> and <b>OfferCancel</b> transactions and with XLM the corresponding transactions are <b>ManageBuyOffer</b>, <b>ManageSellOffer</b>, and <b>CreatePassiveSellOffer</b>.

<b>Note</b>: To create the offers below, first establish trust from the source account to the issuer and then send a payment for the asset in question from the issuer. Otherwise the offer creation will fail due to insufficient source funds.

<h4>XRP Offers</h4>

The following transaction creates an offer on the XRP ledger:

```javascript
{
  "engine_result": "tesSUCCESS",
  "engine_result_code": 0,
  "engine_result_message": "The transaction was applied. Only final in a validated ledger.",
  "ledger_hash": "FBD4A60FA9457C0813C84CC11F48DD84B197AF8AE6A6D8C097DB3D4D4A651399",
  "ledger_index": 15150550,
  "meta": {
    "AffectedNodes": [
      {
        "ModifiedNode": {
          "FinalFields": {
            "Flags": 0,
            "Owner": "rUyFVKFhUK7NmAUejgyQyJm87spAWQ7D3K",
            "RootIndex": "484CD9C2511F394A7F1D4A0F3D16642D05BF8B22B9296392FA114E87A3883161"
          },
          "LedgerEntryType": "DirectoryNode",
          "LedgerIndex": "484CD9C2511F394A7F1D4A0F3D16642D05BF8B22B9296392FA114E87A3883161"
        }
      },
      {
        "CreatedNode": {
          "LedgerEntryType": "Offer",
          "LedgerIndex": "5E88D713EE1324D78C4A501F369C4F27E2D3F7EF1D17CD6AC3DFB5CB52B09434",
          "NewFields": {
            "Account": "rUyFVKFhUK7NmAUejgyQyJm87spAWQ7D3K",
            "BookDirectory": "C4ED07C0A34CCEA819762A04D30D7195D42C51775907BE875611C37937E08000",
            "Sequence": 15147626,
            "TakerGets": {
              "currency": "BTC",
              "issuer": "rEB3GQRkiLcx4UpGhjUkTkKyDGUeKhVkx8",
              "value": "2"
            },
            "TakerPays": "100"
          }
        }
      },
      {
        "ModifiedNode": {
          "FinalFields": {
            "Account": "rUyFVKFhUK7NmAUejgyQyJm87spAWQ7D3K",
            "Balance": "144999868",
            "Flags": 0,
            "OwnerCount": 2,
            "Sequence": 15147627
          },
          "LedgerEntryType": "AccountRoot",
          "LedgerIndex": "B2CDE01272DAE88ACA112DD80CACED5E8CF27DE2A1D46AD52C0FDAD415DBAB03",
          "PreviousFields": {
            "Balance": "144999880",
            "OwnerCount": 1,
            "Sequence": 15147626
          },
          "PreviousTxnID": "1C418E5F5F2DD559F1CD25134F8CF05E733A49E6E778F34E42375CB2CFE0F21B",
          "PreviousTxnLgrSeq": 15150152
        }
      },
      {
        "CreatedNode": {
          "LedgerEntryType": "DirectoryNode",
          "LedgerIndex": "C4ED07C0A34CCEA819762A04D30D7195D42C51775907BE875611C37937E08000",
          "NewFields": {
            "ExchangeRate": "5611c37937e08000",
            "RootIndex": "C4ED07C0A34CCEA819762A04D30D7195D42C51775907BE875611C37937E08000",
            "TakerGetsCurrency": "0000000000000000000000004254430000000000",
            "TakerGetsIssuer": "9B7BFC4FFB6AFA675AACA4D6542B6BB372E2572A"
          }
        }
      }
    ],
    "TransactionIndex": 0,
    "TransactionResult": "tesSUCCESS"
  },
  "status": "closed",
  "transaction": {
    "Account": "rUyFVKFhUK7NmAUejgyQyJm87spAWQ7D3K",
    "Fee": "12",
    "Flags": 2147483648,
    "LastLedgerSequence": 15150551,
    "Sequence": 15147626,
    "SigningPubKey": "02E7FC96AF35D94BBFAC201ECF73ED1518B029FF2FBD7D3314666BFBB296061113",
    "TakerGets": {
      "currency": "BTC",
      "issuer": "rEB3GQRkiLcx4UpGhjUkTkKyDGUeKhVkx8",
      "value": "2"
    },
    "TakerPays": "100",
    "TransactionType": "OfferCreate",
    "TxnSignature": "30450221009D022587768BC29BAA589B24B5385D44E95532BD439FB6ED53E1C4C87F116C9E02206CE4881E85DA13D6CB9D38F7F04047F107BD858784D0155025E1BC1517D56289",
    "date": 667251311,
    "hash": "8A84807F036021850FB40A932E30BFB3D848486199FB93C79E6E867E1689E677",
    "owner_funds": "10"
  },
  "type": "transaction",
  "validated": true
}
```

This transaction can be constructed with the following code:

```javascript
// Replace these with the corresponding account and asset info
const SOURCE      = "rUyFVKFhUK7NmAUejgyQyJm87spAWQ7D3K";
const ISSUER      = "rEB3GQRkiLcx4UpGhjUkTkKyDGUeKhVkx8";
const SECRET      = "ssVmCxxHUuMp2xjt73ucC4hvRq1ww";
const GETS_ASSET  = "BTC";
const GETS_AMOUNT = "2";
const PAYS        = "100";

// Prepare the OfferCreate transaction
const prepared = await api.prepareTransaction({
  "TransactionType": "OfferCreate",
  "Account": SOURCE,
  "TakerGets": {
    "currency" : GETS_ASSET,
    "issuer" : ISSUER,
    "value" : GETS_AMOUNT
  },
  "TakerPays" : PAYS
})

// Sign and submit it to the network
const response = api.sign(prepared.txJSON, SECRET);
const result = await api.submit(response.signedTransaction)

// Verify result here
```

Inorder to cancel an existing offer, an OfferCancel transaction can be issued or the <b>OfferSequence</b> field can be specified to OfferCreate, in which case the new offer (if successful) will replace the specified one.

<h4>XLM Offers</h4>

XLM distinguishes between 'bid' and 'ask' offers on the ledger with 'buy' and 'sell' offers accordingly.

The following transaction creates a buy offer:

```javascript
{
  "id": "08eae09a2c6947850fd18787a9029ce37f23b2ad61641bafca967e42210f6527",
  "paging_token": "8220399900827648",
  "successful": true,
  "hash": "08eae09a2c6947850fd18787a9029ce37f23b2ad61641bafca967e42210f6527",
  "ledger": 1913961,
  "created_at": "2021-02-21T19:59:47Z",
  "source_account": "GDP4NQHSFF2AOTW5PYZR5O7FHDMKSNHHGJIAP5HB5HHMYHRNUT5H4SCX",
  "source_account_sequence": "8214833623203852",
  "fee_account": "GDP4NQHSFF2AOTW5PYZR5O7FHDMKSNHHGJIAP5HB5HHMYHRNUT5H4SCX",
  "fee_charged": "100",
  "max_fee": "100",
  "operation_count": 1,
  "memo_type": "none",
  "signatures": [
    "rXxrm0TgQog1EbEhB9t02U5gQOPDBc385QaPF9Jhe9r1et9hpbzwJERqInEIHb+VXCSBNLlTNIDxnLr9hLEgBg=="
  ],
  "valid_after": "1970-01-01T00:00:00Z",
  "valid_before": "2021-02-21T20:02:43Z",
  "offerResults": [
    {
      "offersClaimed": [],
      "effect": "manageOfferCreated",
      "operationIndex": 0,
      "currentOffer": {
        "offerId": "9134400",
        "selling": {
          "type": "credit_alphanum4",
          "assetCode": "BTC",
          "issuer": "GAW3RJAEA2BAJUYTLYTZ5UF3HSN66JHE6GI647EHRRPU2LDL7SNVEQD2"
        },
        "buying": {
          "type": "native",
          "assetCode": "XLM"
        },
        "amount": "250",
        "price": {
          "n": 2,
          "d": 100
        }
      },
      "amountBought": "0",
      "amountSold": "0",
      "isFullyOpen": true,
      "wasPartiallyFilled": false,
      "wasImmediatelyFilled": false,
      "wasImmediatelyDeleted": false
    }
  ],
  "envelope": {
    "_type": "envelopeTypeTx",
    "v1": {
      "tx": {
        "sourceAccount": {
          "_type": "keyTypeEd25519",
          "ed25519": "38bA8il0B07dfjMeu+U42Kk05zJQB/Th6c7MHi2k+n4="
        },
        "fee": 100,
        "seqNum": "8214833623203852",
        "timeBounds": {
          "minTime": "0",
          "maxTime": "1613937763"
        },
        "memo": {
          "_type": "memoNone"
        },
        "operations": [
          {
            "body": {
              "_type": "manageBuyOffer",
              "manageBuyOfferOp": {
                "selling": {
                  "_type": "assetTypeCreditAlphanum4",
                  "alphaNum4": {
                    "assetCode": "QlRDAA==",
                    "issuer": {
                      "_type": "publicKeyTypeEd25519",
                      "ed25519": "LbikBAaCBNMTXiee0Ls8m+8k5PGR7nyHjF9NLGv8m1I="
                    }
                  }
                },
                "buying": {
                  "_type": "assetTypeNative"
                },
                "buyAmount": "50000000",
                "price": {
                  "n": 100,
                  "d": 2
                },
                "offerId": "0"
              }
            }
          }
        ],
        "ext": {
          "_type": 0
        }
      },
      "signatures": [
        {
          "hint": "LaT6fg==",
          "signature": "rXxrm0TgQog1EbEhB9t02U5gQOPDBc385QaPF9Jhe9r1et9hpbzwJERqInEIHb+VXCSBNLlTNIDxnLr9hLEgBg=="
        }
      ]
    }
  },
  "result": {
    "feeCharged": "100",
    "result": {
      "_type": "txSuccess",
      "results": [
        {
          "_type": "opInner",
          "tr": {
            "_type": "manageBuyOffer",
            "manageBuyOfferResult": {
              "_type": "manageBuyOfferSuccess",
              "success": {
                "offersClaimed": [],
                "offer": {
                  "_type": "manageOfferCreated",
                  "offer": {
                    "sellerId": {
                      "_type": "publicKeyTypeEd25519",
                      "ed25519": "38bA8il0B07dfjMeu+U42Kk05zJQB/Th6c7MHi2k+n4="
                    },
                    "offerId": "9134400",
                    "selling": {
                      "_type": "assetTypeCreditAlphanum4",
                      "alphaNum4": {
                        "assetCode": "QlRDAA==",
                        "issuer": {
                          "_type": "publicKeyTypeEd25519",
                          "ed25519": "LbikBAaCBNMTXiee0Ls8m+8k5PGR7nyHjF9NLGv8m1I="
                        }
                      }
                    },
                    "buying": {
                      "_type": "assetTypeNative"
                    },
                    "amount": "2500000000",
                    "price": {
                      "n": 2,
                      "d": 100
                    },
                    "flags": 0,
                    "ext": {
                      "_type": 0
                    }
                  }
                }
              }
            }
          }
        }
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
        {
          "_type": "ledgerEntryState",
          "state": {
            "lastModifiedLedgerSeq": 1913961,
            "data": {
              "_type": "account",
              "account": {
                "accountId": {
                  "_type": "publicKeyTypeEd25519",
                  "ed25519": "38bA8il0B07dfjMeu+U42Kk05zJQB/Th6c7MHi2k+n4="
                },
                "balance": "99499998800",
                "seqNum": "8214833623203851",
                "numSubEntries": 1,
                "flags": 0,
                "homeDomain": "",
                "thresholds": "AQAAAA==",
                "signers": [],
                "ext": {
                  "_type": 0
                }
              }
            },
            "ext": {
              "_type": 0
            }
          }
        },
        {
          "_type": "ledgerEntryUpdated",
          "updated": {
            "lastModifiedLedgerSeq": 1913961,
            "data": {
              "_type": "account",
              "account": {
                "accountId": {
                  "_type": "publicKeyTypeEd25519",
                  "ed25519": "38bA8il0B07dfjMeu+U42Kk05zJQB/Th6c7MHi2k+n4="
                },
                "balance": "99499998800",
                "seqNum": "8214833623203852",
                "numSubEntries": 1,
                "flags": 0,
                "homeDomain": "",
                "thresholds": "AQAAAA==",
                "signers": [],
                "ext": {
                  "_type": 0
                }
              }
            },
            "ext": {
              "_type": 0
            }
          }
        }
      ],
      "operations": [
        {
          "changes": [
            {
              "_type": "ledgerEntryState",
              "state": {
                "lastModifiedLedgerSeq": 1913961,
                "data": {
                  "_type": "account",
                  "account": {
                    "accountId": {
                      "_type": "publicKeyTypeEd25519",
                      "ed25519": "38bA8il0B07dfjMeu+U42Kk05zJQB/Th6c7MHi2k+n4="
                    },
                    "balance": "99499998800",
                    "seqNum": "8214833623203852",
                    "numSubEntries": 1,
                    "flags": 0,
                    "homeDomain": "",
                    "thresholds": "AQAAAA==",
                    "signers": [],
                    "ext": {
                      "_type": 0
                    }
                  }
                },
                "ext": {
                  "_type": 0
                }
              }
            },
            {
              "_type": "ledgerEntryUpdated",
              "updated": {
                "lastModifiedLedgerSeq": 1913961,
                "data": {
                  "_type": "account",
                  "account": {
                    "accountId": {
                      "_type": "publicKeyTypeEd25519",
                      "ed25519": "38bA8il0B07dfjMeu+U42Kk05zJQB/Th6c7MHi2k+n4="
                    },
                    "balance": "99499998800",
                    "seqNum": "8214833623203852",
                    "numSubEntries": 2,
                    "flags": 0,
                    "homeDomain": "",
                    "thresholds": "AQAAAA==",
                    "signers": [],
                    "ext": {
                      "_type": 1,
                      "v1": {
                        "liabilities": {
                          "buying": "50000000",
                          "selling": "0"
                        },
                        "ext": {
                          "_type": 0
                        }
                      }
                    }
                  }
                },
                "ext": {
                  "_type": 0
                }
              }
            },
            {
              "_type": "ledgerEntryCreated",
              "created": {
                "lastModifiedLedgerSeq": 1913961,
                "data": {
                  "_type": "offer",
                  "offer": {
                    "sellerId": {
                      "_type": "publicKeyTypeEd25519",
                      "ed25519": "38bA8il0B07dfjMeu+U42Kk05zJQB/Th6c7MHi2k+n4="
                    },
                    "offerId": "9134400",
                    "selling": {
                      "_type": "assetTypeCreditAlphanum4",
                      "alphaNum4": {
                        "assetCode": "QlRDAA==",
                        "issuer": {
                          "_type": "publicKeyTypeEd25519",
                          "ed25519": "LbikBAaCBNMTXiee0Ls8m+8k5PGR7nyHjF9NLGv8m1I="
                        }
                      }
                    },
                    "buying": {
                      "_type": "assetTypeNative"
                    },
                    "amount": "2500000000",
                    "price": {
                      "n": 2,
                      "d": 100
                    },
                    "flags": 0,
                    "ext": {
                      "_type": 0
                    }
                  }
                },
                "ext": {
                  "_type": 0
                }
              }
            },
            {
              "_type": "ledgerEntryState",
              "state": {
                "lastModifiedLedgerSeq": 1913958,
                "data": {
                  "_type": "trustline",
                  "trustLine": {
                    "accountId": {
                      "_type": "publicKeyTypeEd25519",
                      "ed25519": "38bA8il0B07dfjMeu+U42Kk05zJQB/Th6c7MHi2k+n4="
                    },
                    "asset": {
                      "_type": "assetTypeCreditAlphanum4",
                      "alphaNum4": {
                        "assetCode": "QlRDAA==",
                        "issuer": {
                          "_type": "publicKeyTypeEd25519",
                          "ed25519": "LbikBAaCBNMTXiee0Ls8m+8k5PGR7nyHjF9NLGv8m1I="
                        }
                      }
                    },
                    "balance": "4200000000",
                    "limit": "4200000000",
                    "flags": 1,
                    "ext": {
                      "_type": 0
                    }
                  }
                },
                "ext": {
                  "_type": 0
                }
              }
            },
            {
              "_type": "ledgerEntryUpdated",
              "updated": {
                "lastModifiedLedgerSeq": 1913961,
                "data": {
                  "_type": "trustline",
                  "trustLine": {
                    "accountId": {
                      "_type": "publicKeyTypeEd25519",
                      "ed25519": "38bA8il0B07dfjMeu+U42Kk05zJQB/Th6c7MHi2k+n4="
                    },
                    "asset": {
                      "_type": "assetTypeCreditAlphanum4",
                      "alphaNum4": {
                        "assetCode": "QlRDAA==",
                        "issuer": {
                          "_type": "publicKeyTypeEd25519",
                          "ed25519": "LbikBAaCBNMTXiee0Ls8m+8k5PGR7nyHjF9NLGv8m1I="
                        }
                      }
                    },
                    "balance": "4200000000",
                    "limit": "4200000000",
                    "flags": 1,
                    "ext": {
                      "_type": 1,
                      "v1": {
                        "liabilities": {
                          "buying": "0",
                          "selling": "2500000000"
                        },
                        "ext": {
                          "_type": 0
                        }
                      }
                    }
                  }
                },
                "ext": {
                  "_type": 0
                }
              }
            }
          ]
        }
      ],
      "txChangesAfter": []
    }
  }
}
```

This transaction can be constructed with the following code:

```javascript
// Replace these with the corresponding account and asset info
const source = StellarSdk.Keypair.fromSecret("SBTNIVZVAFVBH3O5AGIVZ3IJYZH7ODPRFSY7UUBVHTE3GXFL2X5ZXLD2");
const issuer = "GAW3RJAEA2BAJUYTLYTZ5UF3HSN66JHE6GI647EHRRPU2LDL7SNVEQD2";
const asset = "BTC"
const amount = "5";
const price = {n:100, d:2}

// Load source account
server.loadAccount(source.publicKey())
      .then(function (src) {
        // Create the ManageBuyOffer operation
        const offer = StellarSdk.Operation.manageBuyOffer({
          selling : new StellarSdk.Asset(asset, issuer),
          buying : StellarSdk.Asset.native(),
          buyAmount: amount,
          price : price
        });

        // Create the transaction and add the ManageBuyOfferOperation
        const tx = new StellarSdk.TransactionBuilder(src, {
          fee: StellarSdk.BASE_FEE,
          networkPassphrase: StellarSdk.Networks.TESTNET,
        }).addOperation(offer)
          .setTimeout(180)
          .build();

        // Sign and submit the transaction
        tx.sign(source);
        return server.submitTransaction(tx);

      }).then(function (result) {
        // Verify result transaction here
      })
```

<h3>Account Modifications</h3>

Account behaviour can be tailored by configuring flags and settings via <b>AccountSet</b> transactions with XRP and <b>SetOptions</b> transactions with XLM. Accounts can be deleted and their remaining balances sent to others with <b>AccountDelete</b> transactions on the XRP ledger and <b>AccountMerge</b> transactions on the XLM ledger.

<h2>XRP specific transactions</h2>

XRP faciliates the following following functionality on ledger:

<h3>Checks</h3>

Like paper checks XRP checks allow users to create deferred payments that can be cashed or cancelled by the intended recipients. Checks are created with the <b>CheckCreate</b> transaction, cashed with the <b>CheckCash</b> transaction, and cancelled with the <b>CheckCancel</b> transaction.

<h3>Escrows</h3>

Escrows allow the locking of XRP for a fixed amount of time and/or until certain conditions are met. They can be created with the <b>EscrowCreate</b> transaction, finalized with the <b>EscrowFinish</b> transaction, and cancelled with the <b>EscrowCancel</b> transaction.

The following is an example of an EscrowCreate transaction:

```javascript
{
  "engine_result": "tesSUCCESS",
  "engine_result_code": 0,
  "engine_result_message": "The transaction was applied. Only final in a validated ledger.",
  "ledger_hash": "3C54B3A75C932BDF013F00AADFFB4E97A98FF29D387C320D35CD74D73B66C136",
  "ledger_index": 15152057,
  "meta": {
    "AffectedNodes": [
      {
        "CreatedNode": {
          "LedgerEntryType": "DirectoryNode",
          "LedgerIndex": "58919FF4E090DB91ECBF2D67C8788CEA2F73A831C2E7DBD7E695FD06005C31BC",
          "NewFields": {
            "Owner": "rG3ycoFb9aMCxFb6c1rrd2WjuzL5Lzk1q",
            "RootIndex": "58919FF4E090DB91ECBF2D67C8788CEA2F73A831C2E7DBD7E695FD06005C31BC"
          }
        }
      },
      {
        "ModifiedNode": {
          "LedgerEntryType": "AccountRoot",
          "LedgerIndex": "93389A7CDC10DD1287FB45B471A6E2970B7997DCD02F4A83E6B149FDDEFADB67",
          "PreviousTxnID": "D3E3B65DD2EB9ABDA3D8471B9E3AF4F42F06DDD6468CA361ECF4B789FFC83661",
          "PreviousTxnLgrSeq": 15150546
        }
      },
      {
        "ModifiedNode": {
          "FinalFields": {
            "Flags": 0,
            "Owner": "rEB3GQRkiLcx4UpGhjUkTkKyDGUeKhVkx8",
            "RootIndex": "C1FF41EE2453996CFFE20865768E53273574F3CDD11E41418C02889CBBCDE654"
          },
          "LedgerEntryType": "DirectoryNode",
          "LedgerIndex": "C1FF41EE2453996CFFE20865768E53273574F3CDD11E41418C02889CBBCDE654"
        }
      },
      {
        "CreatedNode": {
          "LedgerEntryType": "Escrow",
          "LedgerIndex": "E1904E5125D45A6D5BE220747DD94071BADD4B87355BEAC89EABCF7A3E4B43A0",
          "NewFields": {
            "Account": "rG3ycoFb9aMCxFb6c1rrd2WjuzL5Lzk1q",
            "Amount": "5000000",
            "CancelAfter": 1451260800,
            "Destination": "rEB3GQRkiLcx4UpGhjUkTkKyDGUeKhVkx8",
            "FinishAfter": 1419724800
          }
        }
      },
      {
        "ModifiedNode": {
          "FinalFields": {
            "Account": "rG3ycoFb9aMCxFb6c1rrd2WjuzL5Lzk1q",
            "Balance": "994999976",
            "Flags": 0,
            "OwnerCount": 1,
            "Sequence": 15151886
          },
          "LedgerEntryType": "AccountRoot",
          "LedgerIndex": "F955430051377297851BE967AD949521B846EC5F5C5BC65E29CAB3578FC6F67E",
          "PreviousFields": {
            "Balance": "999999988",
            "OwnerCount": 0,
            "Sequence": 15151885
          },
          "PreviousTxnID": "8B6748322F9B19150B7DC95B7731A849F9EFBEC9AEC5174DC3AE8409685E51CF",
          "PreviousTxnLgrSeq": 15151901
        }
      }
    ],
    "TransactionIndex": 0,
    "TransactionResult": "tesSUCCESS"
  },
  "status": "closed",
  "transaction": {
    "Account": "rG3ycoFb9aMCxFb6c1rrd2WjuzL5Lzk1q",
    "Amount": "5000000",
    "CancelAfter": 1451260800,
    "Destination": "rEB3GQRkiLcx4UpGhjUkTkKyDGUeKhVkx8",
    "Fee": "12",
    "FinishAfter": 1419724800,
    "Flags": 2147483648,
    "LastLedgerSequence": 15152058,
    "Sequence": 15151885,
    "SigningPubKey": "03F14F1320D7E8F90D3ACD36797EACB6557357AD5A2109C69B5F99256A00B2A804",
    "TransactionType": "EscrowCreate",
    "TxnSignature": "30450221008A5E7E1B38796FAA0438CA7D8D8E62065EFEB8739C88EAA85AC5ECA9BC9BBDE502200F1D29CC9CC7EB7577190FF57BB78B713861598758F54C0060AD6C89A8A5BA21",
    "date": 667255920,
    "hash": "2E74C8035D256434C0D94960048D0356A6D93006ED9D3B675E3EEFFC023D1678"
  },
  "type": "transaction",
  "validated": true
}
```

Which is setup with the following code:

```javascript
// Replace these with the corresponding account and escrow info
const SENDER      = "rG3ycoFb9aMCxFb6c1rrd2WjuzL5Lzk1q";
const DESTINATION = "rEB3GQRkiLcx4UpGhjUkTkKyDGUeKhVkx8";
const SECRET      = "ssXHMmmHaKGUpn2KoBtXm3VtomuJx";
const AMOUNT      = 5;

// Prepare escrow transaction
const prepared = await api.prepareTransaction({
  "TransactionType": "EscrowCreate",
  "Account": SENDER,
  "Amount": api.xrpToDrops(AMOUNT),
  "Destination": DESTINATION,
  "CancelAfter": 1451260800,
  "FinishAfter": 1419724800
})

// Sign and submit prepared transaction
const response = api.sign(prepared.txJSON, SECRET);
const result = await api.submit(response.signedTransaction)

// Validate result here
```

The XLM <i>ClaimableBalance</i> feature is somewhat similar to Escrows, with some caveats. See below for more information.

<h3>Payment Channels</h3>

Payment Channels facilitate high throughput payments with deferred settlement. To create, claim, and fund a payment channel use the <b>PaymentChannelCreate</b>, <b>PaymentChannelClaim</b>, and <b>PaymentChannelFund</b> transactions accordingly.

<h3>Other Transactions</h3>

XRP also supports the following additional transactions:

- DepositPreauth - Blocks all transfers from accounts other than those that are preauthorized
- SetRegularKey - Sets/Unsets the Regular Key Pair associated with an account, which can be used to sign transactions

<h2>XLM specific operations</h2>

XLM faciliates the following on ledger:

<h3>Creating Accounts</h3>

As discussed above, account creation on XLM is an explicit operation, orchestrated by calling the <b>CreateAccount</b> operation like so:

```javascript
// Replace these with the corresponding account and destination
const source = StellarSdk.Keypair.fromSecret("SBTNIVZVAFVBH3O5AGIVZ3IJYZH7ODPRFSY7UUBVHTE3GXFL2X5ZXLD2");
const destination = "GA3AFJ6YJKUB23I52L2HQCQJ3TLJDCXX6ZXDGPHIYCMY3KRXMLVKMM2A";
const balance = "50";

server.loadAccount(source.publicKey())
      .then(function (src) {
        const create_account = StellarSdk.Operation.createAccount({
          destination : destination,
          startingBalance : balance
        });

        const tx = new StellarSdk.TransactionBuilder(src, {
          fee: StellarSdk.BASE_FEE,
          networkPassphrase: StellarSdk.Networks.TESTNET,
        }).addOperation(create_account)
          .setTimeout(180)
          .build();

        tx.sign(source);
        return server.submitTransaction(tx);

      }).then(function (result) {
        // Verify result transaction here
      })
```

<h3>Data Storage</h3>

XLM allows accounts to store generic data blobs on the ledger at the expense of an increased reserve requirement. This is accomplished via the <b>ManageData</b> operation:

```javascript
// Replace these with the corresponding account and data
const source = StellarSdk.Keypair.fromSecret("SBTNIVZVAFVBH3O5AGIVZ3IJYZH7ODPRFSY7UUBVHTE3GXFL2X5ZXLD2");
const name = "theanswer";
const value = "42";

server.loadAccount(source.publicKey())
      .then(function (src) {
        const manage_data = StellarSdk.Operation.manageData({
          name : name,
          value : value
        });

        const tx = new StellarSdk.TransactionBuilder(src, {
          fee: StellarSdk.BASE_FEE,
          networkPassphrase: StellarSdk.Networks.TESTNET,
        }).addOperation(manage_data)
          .setTimeout(180)
          .build();

        tx.sign(source);
        return server.submitTransaction(tx);

      }).then(function (result) {
        // Verify result transaction here
      })
```

<h3>Sequence Management</h3>

Both XRP and XLM associate a sequence number with accounts which is incremented with each transaction. XLM facilitates manually increasing the sequence number to a specified value with the <b>BumpSequence</b> operation. The specified sequence number must be greater than that associated with the account being modified, otherwise no change is made.

<h3>Claimable Balances</h3>

Claimable Balances in XLM work in a similar manner to Escrows in XRP in that an originating account sets aside an asset (unlike XRP, non-native assets are permitted here) to be claimed upon certain conditions. XLM claimable balances facilitate complex / recursive predicates to allow any number of destination accounts to claim the asset balance upon satisfaction.

To create a Claimable Balance, use the <b>CreateClaimableBalance</b> operation and to claim it, us the <b>ClaimClaimableBalance</b> operation.

<h3>Future Reserves</h3>

The XLM ledger allows accounts to sponsor the reserve requirements of other accounts. This relationship is established, terminated, and revoked via the <b>BeginSponsoringFutureReserves</b>, <b>EndSponsoringFutureReserves</b>, and <b>RevokeSponsorship</b> operations respectively.

<h2>Transaction Results</h2>

Both XRP and XLM define a set of codes which are associated with transactions based on the result of their operations. These sets comprehensively cover all the outcomes which transactions and operations can result in and while they are too extensive to list here we'll outline some common ones.

<h3>XRP Result Codes</h3>

The full list of XRP result codes can be found [here](https://xrpl.org/transaction-results.html).

- tesSUCCESS - the only code that indicates a transaction succeeded
- tecDST_TAG_NEEDED - the payment transaction omitted a destination tag that is required
- tecNO_PERMISSION - the sender does not have permission to do this operation
- tecPATH_DRY - the transaction failed because the provided paths did not have enough liquidity to send anything at all
- tefMASTER_DISABLED - the transaction was signed with the account's master key, but the account has disabled it
- telINSUF_FEE_P - the Fee from the transaction is not high enough to meet the server's current transaction cost requirement

<h3>XRP Result Codes</h3>

The full list of XLM transaction result codes can be found [here](https://developers.stellar.org/api/errors/result-codes/)

- tx_success - The transaction succeeded.
- tx_failed - One of the operations failed (none were applied).
- tx_insufficient_balance - fee would bring account below reserve
- tx_no_source_account - source account not found

Additionally, individual XLM operation result codes can be found [here](https://developers.stellar.org/api/errors/result-codes/operations/), and operation-specific result codes can be found [here](https://developers.stellar.org/api/errors/result-codes/operation-specific/)

- op_inner - The inner object result is valid and the operation was a success.
- op_no_source_account - The operation is not supported at this time.
- op_exceeded_work_limit - operation did too much work
- OpSuccess - the specific operation was a success
- OpNoDestination - The destination account does not exist.

<h2>Streaming</h2>

Both XRP and XLM allow clients to stream events from the network such that as they occur clients are automatically notified.

<h3>XRP Streaming</h3>

XRP permits subscription to the following events:

- server: status changes
- ledger: validated ledger consensus
- transactions: included in a closed ledger
- transactions_proposed: same as transactions as well as txs that have been proposed
- validations: server receives a validation votes
- manifests: server receives a manifest
- peer_status: peer consensus information received

To subscribe to transactions, use the following logic:

```javascript
api.connection.on('transaction', (tx) => {
  // handle transactions as they are received
})

api.request('subscribe', {
  streams : ['transactions']
})
```

<h3>XLM Streaming</h3>

XLM permits subscription to updates to the following entities:

- ledgers
- transactions
- operations
- payments
- effects
- accounts
- offers
- trades
- order books

To subscribe to transactions, use the following logic:

```javascript
function on_tx(tx){
  // handle transactions as they are received
}

server.transactions()
   .cursor('now')
   .stream({
     onmessage: on_tx
   })
```

<h2>Account Flags and Settings</h2>

With both XRP and XLM, account behaviour can be configured via server flags and other settings.

<h3>XRP Flags / Settings</h3>

XRP defines the following account flags:

- AccountTxnID: Track the ID of this account's most recent transaction.
- DefaultRipple: Enable rippling on this account's trust lines by default.
- DepositAuth: Enable Deposit Authorization on this account.
- DisableMaster: Disallow use of the master key pair.
- DisallowXRP: XRP should not be sent to this account.
- GlobalFreeze: Freeze all assets issued by this account.
- NoFreeze: Permanently give up the ability to freeze individual trust lines or disable Global Freeze.
- RequireAuth: Require authorization for users to hold balances issued by this address.
- RequireDest: Require a destination tag to send transactions to this account.

Additionally the following properties can be set on an XRP account using the <b>AccountSet</b> transaction:

- Domain: The domain that owns this account
- Email hash: Hash of an email address to be used for generating an avatar image.
- MessageKey: Public key for sending encrypted messages to this account.
- TransferRate: The fee to charge when users transfer this account's issued currencies
- TickSize: Tick size to use for offers involving a currency issued by this address

<h3>XLM Flags / Settings</h3>

XLM defines the following account flags:

- Authorization required: Requires the issuing account to grant an account permission to hold an asset.
- Authorization revocable: Allows the issuing account to reduce the authorization level of an account.
- Authorization immutable: Prevents the issuer from setting either of the above flags or deleting the issuing account.

Additionally the following properties can be set on an XRP account using the <b>SetOptions</b> transaction:

- Master weight: Weight of the master key.
- Low threshold: Threshold this account sets on all operations it performs that have a low threshold.
- Medium threshold: Threshold this account sets on all operations it performs that have a medium threshold.
- High threshold: Threshold this account sets on all operations it performs that have a high threshold.
- Home domain: The home domain of an account.
- Signer: Add, update, or remove a signer from an account

In accordance to the properties above, XLM categorizes operation into multiple categories corresponding to low, medium, and high security (threshholds) accordingly:

- Low security: AllowTrust, BumpSequence, ClaimClaimableBalance
- Medium security: Everything else
- High security: AccountMerge, SetOptions

<h2>Network topology & services</h2>

Both the XRP and XLM networks are governed by nodes communicating in a peer-to-peer manner that are responsible for accepting client transactions and relaying them around the network.

The XRP network is goverened by the <a href="https://github.com/ripple/rippled">rippled</a> server and XLM is goverened by <a href="https://github.com/stellar/stellar-core">stellar-core</a>. These applications are responsible for:

- Maintaining the on-disk Blockchain database
- Accepting and relaying transactions to/from clients
- Communicating with other nodes in a peer-to-peer manner
- Establishing consensus to validate transactions and close blockks
- All other supporting operations

With both XRP and XLM, nodes can be configured to run in multiple modes depending on the intent of the operator. The modes slightly differ between XRP and XLM

XRP Operating Modes:

- Stock server - Follows the network but does not participate in consensus
- Validator - Participates in transaction and block consensus
- Stand-alone - Does not communicate with the larger network, used for testing

Any operating server can be configured to retain a variable amount of history, including the full dataset going back to the genesis block.

XLM Operating Modes include:

- Watcher - follows the network and can accept / relay transactions but does not participate in consensus
- Basic Validator - same as watcher but also participates in consensus
- Full Validator - same as basic validator but also provides historical snapshots of ledger activity
- Archiver - provides historical snapshots of ledger activity but does not participate in consensus

In addition to the stellar-core services, the XLM network integrates a client-facing frontend server called <a href="https://github.com/stellar/go">Horizon</a> which responsible for presenting data via a HTTP interface in a human / developer friendly manner, in contrast to the performance-optimized representations used by stellar-core.

<h3>Source Code</h3>

Both rippled and stellar-core are implmeneted C++, while Horizon is written in GoLang. Javascript libraries are provided as primary front-facing client interfaces to the network (for XRP <a href="https://github.com/ripple/ripple-lib">here</a> and for XLM <a href="https://github.com/stellar/js-stellar-sdk">here</a>) and libraries for many other languages are also available.
