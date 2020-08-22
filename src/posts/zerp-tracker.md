Last month Dev Null Productions launched our latest product [Zerp Tracker](https://zerptracker.com), a persistent XRP transaction tracker through which server-side filters can be setup for instant notification of ledger activity. With Zerp Tracker, expressions are created to hone in on specific transactions to match and alerts sent via email, sms (text message), and webhooks (for programmatic integration). This tool is perfect to monitor your account (or any others) for incoming and outgoing transactions, receive notifications on the movement of money, or watch for any other type of activity that you are interested in.

To begin, sign up for an account at [zerptracker.com](https://zerptracker.com) by clicking the **Register Link** in the upper right. On mobile devices, this may be accessed through the mobile popup menu:

![login](@/assets/posts/zerp-tracker/login.png)
![mobile menu](@/assets/posts/zerp-tracker/mobile-menu.png)

You will need to provide a valid email, and confirm your account by clicking the link sent to that. Once confirmed, login and click on **Add New Filter** to setup your first filter to match XRP Blockchain activity:

![add new filter](@/assets/posts/zerp-tracker/add-new-filter.png)
![mobile add new filter](@/assets/posts/zerp-tracker/mobile-add-new-filter.png)

Zerp Tracker provides several example expressions to get you started, to access click the (?) icon under the filter input box on the main page:

![jsonpath-help1](@/assets/posts/zerp-tracker/jsonpath-help1.png)

![jsonpath-help2](@/assets/posts/zerp-tracker/jsonpath-help2.png)

The filter input here can be used to test expressions in real time against the live transaction stream, but it should be noted that until you save the form creating a new filter, you will not receive alerts via email, text message, etc. and once you navigate away from this page your filter will be gone!

![filter tester](@/assets/posts/zerp-tracker/filter-tester.png)

Expressions are specified via **JSONPath** a powerful language which can be used to match the exact transaction fields and hone in on exactly the types of transactions you are interested in. You can read more about JSONPath via our help portal [here](https://zerptracker.com/jsonpath). Also be sure to read common **gotchyas** to mitigate any issues you may have in crafting the exact expression to match the activity you are interested in.

If you are not interested in setting up expressions, don't fret! Zerp Tracker ships with a library of pre-built pluggable expression-templates to select from. Simply pick the category of activity which you are interested in, fill in fields for the *account to monitor*, *currencies to watch*, and more, and Zerp Tracker will take care of crafting the expression required to match your criteria!

![create filter categories](@/assets/posts/zerp-tracker/create-filter-categories.png)

Finally select the endpoint(s) which you would like to receive notifications, whether it be via email, text message, or URL. The later option is perfect for setting up a trading bot, forensics solution, or any other automated system to be notified on XRPL activity.

Click **Save** and you're done... Zerp Tracker will take care of the rest! Soon after XRPL transactions are matched, you will receive notification via the configured endpoint. If you would like to change the rate at which you receive notifications click **Settings** to configure batch size and notification time:

![settings1](@/assets/posts/zerp-tracker/settings1.png)
![settings2](@/assets/posts/zerp-tracker/settings2.png)
![settings3](@/assets/posts/zerp-tracker/settings3.png)

To view filter details, simply click the transaction name (or if on a mobile device, select the filter from the list). From here you can inspect actual live transactions which your filter matched and test your filter against a variety of pre-captured transactions built-into Zerp Tracker by clicking 'test' in the navigation.

![filter details1](@/assets/posts/zerp-tracker/filter-details1.png)
![filter details2](@/assets/posts/zerp-tracker/filter-details2.png)
![filter test](@/assets/posts/zerp-tracker/filter-test1.png)

Finally be sure to checkout the [help](https://zerptracker.com/help) page for in-depth details pertaining to these topics and more. Any questions may be addressed to Dev Null Productions by submitting the following [form](https://zerptracker.com/about#contact).

Happy Zerping!
