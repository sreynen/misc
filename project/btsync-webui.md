-----title

BitTorrent Sync Web UI

-----description

[BitTorrent Sync](http://www.bittorrent.com/sync) is a distributed alternative to Dropbox. There's no central server needed, which means no one to pay and no central point of failure, but also someone needs to have a seed online when you want to sync.

So ... that all seems a lot like how Git compares to centralized version control systems like SVN or CVS. This project would b to make something like GitHub or <a href="http://gitolite.com/">gitolite</a> for BTSync. This would be a web interface you could use as a central server for your BTSync directories.

The server would need to implement BTSync server-side, which [has been done](http://blog.bittorrent.com/2013/09/17/sync-hacks-how-to-set-up-bittorrent-sync-on-ubuntu-server-13-04/), and then provide a UI for managing files and access.

If this ends up being a package you install rather than a hosted service, ease of install would be key. The goal is to make it easy enough that someone familiar with Dropbox could easily switch to BTSync.

-----idea

Scott
