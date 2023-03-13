Server: A powerful computer that runs an API

API: The "hidden" portion of a website that is meant for computer consumption

Client: A program that exchanges data with a server through an API

A protocol is the rules that computers have while talking to each other.

Hyper-Text Transfer Protocol=HTTP

It is easier that everybody uses HTTP so developers only have to learn that API.

To make a valid request, the client needs to include four things:
```
URL (Uniform Resource Locator) 1   
URLs are an easy way for the client to tell the server which resources it wants to interact with.

Method
GET - Asks the server to retrieve a resource
POST - Asks the server to create a new resource
PUT - Asks the server to edit/update an existing resource
DELETE - Asks the server to delete a resource

List of Headers
Headers provide meta-information about a request. They are a simple list of items like the time the client sent the request and the size of the request body.


Body
The request body contains the data the client wants to send the server.
```

HTTPS das s steht für secure. Bedeutet die Nachricht ist verschlüsselt


JSON (JavaScript Object Notation) aer the most used Format for APIs

JSON: JavaScript Object Notation
Object: a thing or noun (person, pizza order...)
Key: an attribute about an object (color, toppings...)
Value: the value of an attribute (blue, pepperoni...)
Associative array: a nested object
XML: Extensible Markup Language
    since 1966 immer aufgebessert

Authentification: Provin you identity
Basic Auth is risky (keys to the whole building
API Key Auth: scheme that uses a unique key for credentials
Authorization Header: the HTTP header used to hold credentials)

Polling: Repeatedly requesting a resource at a short interval
Long Polling: Polling, but with a delayed response; improves efficiency
Webhooks: When the client gives the server a Callback URL, so the server can post updates in real time
Subscription Webhooks: Informal name for solutions that make setting up webhooks automatic
