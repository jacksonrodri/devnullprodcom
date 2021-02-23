Be sure to read out [introduction](/post/xrp_vs_xlm_pt1) to this series as well as [part 2](/post/xrp_vs_xlm_pt2) in which we discuss common transactions and [part 3](/post/xrp_vs_xlm_pt3) where we explore transactions specific to each standard.

In the final article, we finish with miscellanea details of the protocols including result codes, streaming, flags and settings, network topology, and source code

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

Both XRP and XLM allow clients to stream events from the network such that as they occur, clients are automatically notified.

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
