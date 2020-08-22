We are pleased to announce the general availability of Wipple 0.13.1, now [live](https://wipple.devnull.network).

This release brings many exciting new features and more stabilizations to the entire application.

To start off, we've made many improvements to the general look and feel of the website. The [account](https://wipple.devnull.network/live/accounts/rPVMhWBsfF9iMXYj3aAzJVkPDTFNSyWdKy), [tips](https://wipple.devnull.network/live/tips/XRPTrump, and [transactions](https://wipple.devnull.network/live/transactions) pages have been updated to streamline data delivery in an aesthetically pleasing manner.

![accounts](@/assets/posts/wipple-version-0-13-1/accounts.png)

![tips](@/assets/posts/wipple-version-0-13-1/tips.png)

On the accounts page we've added an experimental new widget allowing to to explore account transactions by time. It may be activated by clicking 'Timeline' under the list of account transactions.

*Note this is an early prototype, and it will receive fixes / enhancements in the near future*

![timeline](@/assets/posts/wipple-version-0-13-1/timeline.png)

New enhancements to the transactions page include:

- A *compact* description of listed transactions, providing a quick visual overview of what's happening on the network at a glance. The original <i>detailed</i> view can be toggled via the settings (⚙️ ) icon in the upper right.

  ![tx settings](@/assets/posts/wipple-version-0-13-1/tx-settings.png)

- A title bar allowing you to monitor and filter transactions by specific category as well as those present in any given ledger. This navigational component presents the tally of received transactions and allows the user to simply view just those transactions.

  ![tx bar](@/assets/posts/wipple-version-0-13-1/tx-bar.png)

- New settings allowing you to highlight particular transaction categories for increased visibility in the ledger. Also toggleable via the settings in the upper right

  ![tx highlight](@/assets/posts/wipple-version-0-13-1/tx-highlight.png)

In the Reporting section, we've added the ability to view higher timeframes of data. By default our analytics engine samples the XRP network every five minutes for ledger activity, which we've taken and resampled to hourly, daily, weekly, and monthly timeframes which can now be selected in the UI. Now you can monitor trends and patterns on much longer timescales!

![report timeframes](@/assets/posts/wipple-version-0-13-1/report-timeframes.png)

The report metrics UI has received some general enhancements including additional hover/click effects and the ability to blow up graphs, by clicing on the <i>expand</i> icon in the lower right

![report expand](@/assets/posts/wipple-version-0-13-1/report-expand.png)

Overall the application has received many improvements including but not limited to:

- Expanded help, which can be accessed via the <b>?</b> icon in the upper right of the UI, provides more information as to what is represented on each page and how to use the application.
- Mobile improvements: our goal is for 100% mobile compatability. We ask that anything that looks "wrong" on mobile interfaces be reported to <a href="mailto:devnullproductions@gmail.com">devnullproductions@gmail.com</a> so that we can promply address. If you've experienced issues w/ mobile access in the past, you may want to revisit the site as many outstanding issues have been fixed in this release (including incorrect styling in the <i>research</i> section).
- Better backend improvements: our data collection and aggregation system has been thoroughly tested and vetted to ensure all ledger edge cases have been handled and our database stays consistently in sync with the XRP network. We've written scripts and verification logic to provide us confidence that our data and metrics and accurate. This release sets the basis for running our analytics engine against the last several years worth of ledger traffic to generate long term stats (coming in the near future).

And that wraps up another successful release! Make sure to stay tuned, <b>0.13.2</b> is not that far away!
