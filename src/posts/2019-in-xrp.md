Last month XRP Community member and author of [XRPArcade.com](https://www.xrparcade.com/), [LeoHadjiloizou](https://twitter.com/LeoHadjiloizou/) contacted us indicating that he was writing a [yearly summary](https://www.xrparcade.com/news/xrp-2019-yearly-report/) of the XRP ecosystem in 2019 and was looking for some data pertaining to on-ledger activity. Given that this is our area of expertise we immediately jumped to the call and started looking into what would be required to compile such data. Unfortunately due to the timing of the development and deployment of [our analytics system](https://xrp1ntel.com) last year, we were missing the first few months of ledger data which had to be synced and benchmarked before the final report could be compiled. We setup a system locally to do this and a week later we were ready to go!

To start off, the baseline metric our analytics engine provides is **Ledgers Closed** which is fairly consistent and with low variance, given the continuous 2-4 second consensus time enforced by the network. In the past year **8,339,126** total ledgers were closed with a monthly average of **694,927.17** ledgers and weekly average of **159,915.02** ledgers. The standard deviation from the monthly average was **23,077.53** ledgers, representing a **3%** variance.

![ledgers closed monthly](@/assets/posts/2019-in-xrp/ledgers.closed.monthly.png)
![ledgers closed weekly](@/assets/posts/2019-in-xrp/ledgers.closed.weekly.png)

The next metric computed is total transactions, which amounted to **352,039,969** last year, with an average TX rate of **42.68** transactions per ledger. November was the month seeing the highest number of transactions: **63,227,755** (avg: **95.79** per ledger) with December coming in at a close second: **55,662,502** (avg: **81.88** per ledger). Followers of our [twitter](https://twitter.com/DevNullProd) may recall our (reporting)[https://twitter.com/DevNullProd/status/1200809278287822853] on a plethora of questionable transactions going through the network last November, many similar in nature, consisting of BTC micropayments from an unknown issuer being sent back and forth between a set of accounts. February saw the fewest total transactions, **14,556,183** while March saw the smallest average transaction rate, **20.29** per ledger.

![transactions monthly](@/assets/posts/2019-in-xrp/transactions.monthly.png)
![transactions weekly](@/assets/posts/2019-in-xrp/transactions.weekly.png)
![tx rate monthly](@/assets/posts/2019-in-xrp/tx.rate.monthly.png)
![tx rate weekly](@/assets/posts/2019-in-xrp/tx.rate.weekly.png)

Related to transactions are fees, which the network enforces on a per-tx basis. Fees more or less aligned with transaction patterns with the exception of July which saw an anomalous spike, most likely due to a misconfigured client on the network. Overall **601,755.70** XRP (**601,755,695,276** drops) was consumed in fees with a monthly average of **50,146.30** XRP and a weekly average of **11,537.63** XRP.

![fees monthly](@/assets/posts/2019-in-xrp/fees.monthly.png)
![fees weekly](@/assets/posts/2019-in-xrp/fees.weekly.png)

Breaking transactions down by type, the XRPL processed **68,216,082** total payments last year, with an average of **5,684,673.5** per month. The number of payments in November (**34,103,937**) dwarfed the previous months combined (**17,023,428**) by a factor of 100%. There was less variance in the number of offers created by month (total: **209,979,957**), the standard deviation being: **7,447,452.46**, or **3%**. March saw the fewest offers created (**8,061,435**) with December having the most (**29,537,933**) and July being a close second (**27,313,359**).

![payments monthly](@/assets/posts/2019-in-xrp/payments.monthly.png)
![payments weekly](@/assets/posts/2019-in-xrp/payments.weekly.png)
![offers monthly](@/assets/posts/2019-in-xrp/offers.monthly.png)
![offers weekly](@/assets/posts/2019-in-xrp/offers.weekly.png)

The network saw a plethora of currencies go through it, including all the major fiat and digital ones. The total XRP payment volume was **456,718,135,629.3340**. Large anomalous transactions resulted in spikes in the USD and CNY currencies in July and February respectively. Consistent payments in AUD, JPY, BTC, ETH, and XLM were present on the network throughout the year.

Offers on the other hand were dominated by the **XRP/CNY** and **CNY/XRP** pairs, whose volumes (**94,382,927** and **86,523,240**) dwarfed the next largest **XRP/USD** (**8,156,685**) and **USD/XRP** (**2,874,124**) by several orders of magnitude. Crypto/crypto and fiat/crypto pairings seemed to dominate the order books to a larger degree than fiat/fiat.

![payments by currency](@/assets/posts/2019-in-xrp/payments.by.currency.png)
![offers by pair](@/assets/posts/2019-in-xrp/offers.by.pair.png)

Finally we have accounts created which saw a spike last summer in the May &amp; June timeframe, each month seeing approx **80K** new accounts, a rate of 1 account every **10** ledgers. September saw the fewest new accounts, merely **13,927**, a rate of 1 account every **50** ledgers. In total **408,872** new accounts were created last year, at an average rate of **0.049** accounts per ledger, or 1 account every **20.4** ledgers.

![accounts monthly](@/assets/posts/2019-in-xrp/accounts.monthly.png)
![accounts weekly](@/assets/posts/2019-in-xrp/accounts.weekly.png)
![account rate monthly](@/assets/posts/2019-in-xrp/account.rate.monthly.png)
![account rate weekly](@/assets/posts/2019-in-xrp/account.rate.weekly.png)

The complete yearly dataset can be found [here](@/assets/posts/2019.xrp/stats.xlsx). You can also see various metrics and benchmarks on the XRPArcade [2019 Yearly Report](https://www.xrparcade.com/news/xrp-2019-yearly-report/) (under **XRP Intelligence**). Going forward be sure to look for consistent XRP data and stats coming from Dev Null Productions as well as new metrics and an expanded and optimized reporting system (for quicker and better reports). Keep Zerping!
