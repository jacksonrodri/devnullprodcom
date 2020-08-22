Can you believe it's almost December already! Lets look at many of the great events and happenings that we participated in this past year.

## XRP Community Meetup - Amersfoort

Earlier last spring Dev Null took a trip to the scenic country of the Netherlands to attend the **XRP Community Meetup** in Amersfoort, hosted by none other than [Wieste](https://twitter.com/WietseWind) of [XRPL Labs](https://xrpl-labs.com/en/) and (Tom Kuster)[https://twitter.com/Tom_Kuster]. Denmark is a beautiful country, full of history and culture, especially in the financial world, as it was one of the original homes of the modern banking industry. The meetup was a great experience as it faciliated an opportunity to put faces to all the Twitter handles and form bonds which will last a lifetime.

![amersfoort](@/assets/posts/dnp-a-year-in-retrospect/xrp-meetup-amersfoort.jpg)

## Development Releases - XRBP, Wipple, xrp1ntel

Spring of this year also saw a flury of releases of [XRBP](https://github.com/DevNullProd/XRBP), our Open Source interface to the XRPL, written in Ruby. Early releases included base level support for the [XRP websocket API](https://xrpl.org/public-rippled-methods.html) as well as related web based resources (the [DataV2](https://xrpl.org/data-api.html) API, exchange data, etc). Subsequent releases incorporated functionality allowing the client to:

- Crawl / traverse the peer-to-peer network of XRPL nodes
- Directly parse the XRP binary database (<i>the nodestore</i>)
- Generate node and account keys pairs and addresses
- Access the [sqlite](https://www.sqlite.org/index.html) database embedded in XRPL instances
- And much more!

Additionally, the intial prototype version of our analytics engine, dubbed (Wipple)[https://wipple.devnull.network/] (originally stemming from the combination of '**W**allet' and 'R**ipple**') saw much growth at the beginning of the year up to the summer. Most of this early development was spent spec'ing out and prototyping many features and ideas that we were brainstorming. Over the summer this product underwent a rewrite and redesign, and morphed into our new flagship analytics product [xrp1ntel](https://xrp1ntel.com) which is under active development to this day.

![original wipple](@/assets/posts/dnp-a-year-in-retrospect/original-wipple.jpg)
![new wipple](@/assets/posts/dnp-a-year-in-retrospect/new-wipple.png)
![xrp1ntel report](@/assets/posts/dnp-a-year-in-retrospect/xrp1ntel-report.png)

*The evolution of the XRP Analytics Engine*

## Dev Null Prod relocates &amp; the beginning of NYC/XRP

This past summer also saw the relocation of Dev Null Productions from Upstate NY to NYC. While we will always have a presence upstate and it will always have a special place in our heart, this was decision was executed so as to maximize growth of the business and network, and we have been having so much fun that we haven't looked back!

Part of the fun has included organizing and running the [NYC/XRP](https://www.meetup.com/NYC-XRP/) meetup, consisting of a group of XRP enthusiasts in the tri-state area. Meetups are held at an interval of every other month and consists of a variety of social gatherings and tech talks used to bring the community together for networking and growth. To this date the meetups we've held included

- July - Our first community social / meet &amp; greet
- September - Our first tech talk held in Chelsea, the presentation of the night was titled **XRP - An Intro**
- November - An informal dinner which we held at a great steakhouse in midtown

The next meetup will be held in January, and most likely will be in a tech talk format again. Be sure to **join the meetup group to stay in the loop**!

![NYC/XRP](@/assets/posts/dnp-a-year-in-retrospect/nyc-xrp.jpg)

## Conference Galore

The past year has seen our attendance at several major conferences. From the 1st and 2nd [SFBW](https://sfblockchainweek.io/) conferences in San Francisco, CA, to [Money 20/20](https://www.money2020.com/) in Las Vegas, NV, to the [AWS Summit](https://aws.amazon.com/events/summits/new-york/) in our new home city, we never missed an opportunity to promote XRP technology and **#XRPCommunity** efforts to build the ecosystem. We're big on conference attendance, not only are they great ways to meet a spectrum of professionals from many industries but they are excellent opportunities to quickly get our startup's brand infront of alot of organizations, both small and large. We're planning and are very eager to attend **[DLTCONLA](https://www.eventbrite.com/e/dltconla-2020-tickets-74699926491)** (Los Angeles, CA) with several members from the NYC/XRP community this spring and will be sure to continue attending the hottest events as we hear about them!

![dltconla](@/assets/posts/dnp-a-year-in-retrospect/dltconla.jpg)

## Rippled Contributions

One final endeavor that we'd like to point out is our continued involvement in the development of the core rippled codebase driving the XRPL Blockchain. Serving dual purposes, firstly to <b>contribute to and support the growth of the ecosystem</b>, as well as for us to stay in the loop at the ground level (there is no better way to do that than to be working on the core repo!), we've submitted several patches/pull-requests to the codebase which have been subsequently merged / integrated into the core product (props to the Ripple Labs engineering team who are top notch and very friendly/open to development synergy). These features include:

- Code cleanups &amp; fixes, addressing issues as we encountered them during our <a href="https://wipple.devnull.network/research/rippled.html">source code analysis</a></li>
- Refactoring of the <a href="https://cmake.org/">CMake</a>-based build system, to faciliate modularization, compartmentalization, and easier-understanding by new contributors</li>
- Implementation of the <a href="https://github.com/ripple/rippled/commit/15c5f9c1111eeea0743dbd9d9b0028756ff72ade">consensus stream</a>, allowing the user to subscribe to real-time updates of consensus state</li>

## Fin

And that's all for now! This past year has seen <b>momentous growth</b> both in terms of the <b>#XRPCommunity</b> and Dev Null Productions, we can't wait to continue driving things forward and seeing the ecosystem evolve next year!

Until next time... **Happy Zerping**!
