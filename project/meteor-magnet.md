-----title

Meteor Magnet

-----idea

Ryan

-----status

We have a working prototype. Needs some interface work to be more usable by a lot of people.

-----description

It's a magnetic poetry thing using Meteor.js. 

Next steps:

* Get it running at misc.ellaneous.org/magnetpoem/ or whatever.
* Make magnetpo.me redirect to misc.ellaneous.org URL.
* Only load words near current canvas position
* Make arrows scroll on hold
* Improve user display, make it easier to say “I’m this user”, still without login
* “This is good” system to lock words
* Or flagging system to remove griefers?
* Track canvas state by time
* Add timestamp to URLs
* Interface for watching changes over time
* Add more word sources
  * These sources can’t do JSONP:
    * http://autosug.ebay.com/autosug?kwd=cat&callback=p
    * http://newyork.craigslist.org/suggest-search?v=3&cat=sss&term=cat&callback=p
    * http://sg.media-imdb.com/suggests/c/cat.json
    * http://www.booking.com/autocomplete?lang=xu&aid=304142&e_seca=1&term=cat&callback=p
    * http://www.nytimes.com/svc/suggest/v1/homepage?query=cat&callback=p

-----repo

[https://github.com/kid-icarus/meteor-magnet](https://github.com/kid-icarus/meteor-magnet)

-----demo

[http://kid-icarus.meteor.com/](http://kid-icarus.meteor.com/)
