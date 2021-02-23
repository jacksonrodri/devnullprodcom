Be sure to read out [introduction](/post/xrp_vs_xlm_pt1) to this series as well as [part 2](/post/xrp_vs_xlm_pt2) in which we discuss common transactions.

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

<h2>Coming Soon</h2>

  Stay tuned for our next and final post in this series in which we will discuss various miscellanea surrounding both standards including result codes, streaming, flags and settings, network topology, and source code.
