Dev Null Productions is pleased to announce the general availability of <b>XRBP</b> a library aimed at providing an accessible, fault-tolerant interface to the XRP ledger. XRBP allows the developer to read and write data to/from the XRP network in real time, synchronizing ledger data including accounts, transactions, objects, and more. Data is presented via both synchronous and asynchronous mechanisms with multiple-connection load balancing and fault tolerance baked in behind the scenes.

But some code is worth a 1000 words! The following allows you to pull server info pertaining to the instance of [rippled](https://github.com/ripple/rippled) you are connected to:

```ruby
require 'xrbp'

ws = XRBP::WebSocket::Connection.new "wss://s1.ripple.com:443"
ws.add_plugin :autoconnect, :command_dispatcher

ws.cmd XRBP::WebSocket::Cmds::ServerInfo.new
```

Above we see

- the XRBP library is included
- a new websocket connection to <b>s1.ripple.com</b> is established
- and the <b>ServerInfo</b> command is dispatched and the results printed

To facilitate fully-customizable and configurable applications XRBP incorporates a pluggable architecture where modules customizing the request/response workflow and validating/transforming result sets may be registed with connection objects. As of the current date, plugins exist to:

- Automatically timeout inactive connections and reestablish the link
- Automatically retry failed requests (with configurable max tries and timeout)
- Allow the user to register custom data parsers to transform received data
- Paginate results behind the scenes so large data sets (transactions, account objects, etc) can all be seemlessly retrieved and aggregated before the results are returned
- Dispatch and validate XRP specific commands, extracting specific data out of the result set for client consumption

Furthemore XRBP facilitates fault tolerant communications by implementing serveral multi-connection strategies behind these scenes. Each strategy manages an internal pool of connections and cycles through them according to different criteria.

To use multiple XRP servers in a 'round-robin' manner where subsequent connections will always be delegated to the next connection in the list:

```
ws = XRBP::WebSocket::RoundRobin.new "wss://s1.ripple.com:443",
                                     "wss://s2.ripple.com:443"

ws.add_plugin :command_dispatcher
ws.connect

puts ws.cmd(XRBP::WebSocket::Cmds::AccountInfo.new("rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B"))
puts ws.cmd(XRBP::WebSocket::Cmds::AccountInfo.new("rhub8VRN55s94qWKDv6jmDy1pUykJzF3wq"))
```

In the above example we will retrieve info pertaining to the first account (<b>rvYAf...</b>) from <b>s1.ripple.com</b> and the second account (<b>rhub8...</b>) from <b>s2.ripple.com</b>. With the RoundRobin strategy, once all connections are used, we will cycle back to the first, in this case the next request will be issued to <b>s1.ripple.com</b>.

To automatically leverage backup servers if a request fails, we can use the <b>Prioritized</b> strategy:

```
ws = XRBP::WebSocket::Prioritized.new "wss://s1.ripple.com:443",
                                      "wss://s2.ripple.com:443"

ws.add_plugin :command_dispatcher, :result_parser
ws.parse_results { |res|
  JSON.parse(res)["result"]["ledger"]
}
ws.connect

puts ws.cmd(XRBP::WebSocket::Cmds::Ledger.new(28327070))
```

In this example we see that we establish a Prioritized connection set, and register a plugin to automatically parse data retrieved from the server. If we are not able to retrieve a valid ledger, the parser will throw an error and we will automaticlaly try the next connection behind the scenes. Thus if we query for a ledger which has been deleted from our primary rippled server, we can fall back to a full-history node.

This is just the icing on the cake as far as multi-connection strategies, there are several more included in the public [XRBP API](https://www.rubydoc.info/gems/xrbp) and developing custom strategies is as simple as inheriting [XRBP::WebSocket::MultiConnection](https://www.rubydoc.info/gems/xrbp/XRBP/WebSocket/MultiConnection and defining <b>next_connection</b>.

XRBP can do much more ontop of all this. We can sync validators, gateways, etc from the [DataV2 API](https://developers.ripple.com/data-api.html), sync market quotes from exchanges, crawl the network and much more!

**Listing Validators**

```
connection = XRBP::WebClient::Connection.new
XRBP::Model::Validator.all(:connection => connection)
                      .each do |v|
  puts v
end
```

**Crawling Nodes**

```
connection = XRBP::WebClient::Connection.new
connection.timeout = 3

connection.on :peer do |node, peer|
  puts "#{node.url} peer: #{peer.url}"
end

XRBP::Model::Node.crawl("wss://s1.ripple.com:51235",
                        :connection => connection)
```

See project documentation and examples/ for complete details. And make sure to stay tuned there are alot more great features coming!
