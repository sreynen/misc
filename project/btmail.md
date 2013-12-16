-----title

BTMail

-----description

Peer-to-peer encrypted messaging using BTSync and public key encryption, and a messaging UI.

Part 1: outbox

Everyone has a read-only BTSync repo, where they put their own public key and messages for others, encrypted with their public key. You subscribe to repos to see all messages for you in that repo. Others' messages will also be there, but you can only read the messages encrypted with your key.

The directory would look something like this:

* public.key
* vcard
* messages
  * recipient1repokey
    * message1
    * message2
  * recipient2repokey
    * message1
    * message2

Your client would check the messages directory for your key, and show those as inbound messages. The vcard could be optional, used to quickly add some identity to the repo. And the public key would be used to encrypt all messages in your own outbox sent to this repo.

Part 2: inbox

A second public-write repo (references from the first) could be one way to say "hey, I have messages for you in my outbox," though this could happen via any other channel as well. Your client could auto-subscribe to these repos, or queue them for review to avoid spam. Either way, you can easily unsubscribe from any repo.
