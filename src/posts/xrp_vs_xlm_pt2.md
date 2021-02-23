Be sure to read out [first post](/post/xrp_vs_xlm_pt1) in this series in which we introduce technical differences between these Blockchain technologies.

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

<h2>Coming Soon</h2>

Stay tuned for our next post in this series in which we will discuss transactions exclusive to XRP and XLM
