## REST
- Representational State Transfer (REST) is an architectural style, or design patter for APIs.
- Simply, you make a request from a client to a server and retrieve data back over the HTTP protocol and the server provides responses to these requests. REST applications are stateless as each client request must pass all of the required information to the server to perform the CRUD actions and the server does not need to store any state of the client.
- The server does not store any state about the client session on the server side. This restriction is called Statelessness. Each request from the client to server must contain all of the information necessary to understand the request, and cannot take advantage of any stored context on the server. Session state is therefore kept entirely on the client. client is responsible for storing and handling all application state related information on client side. It also means that the client is responsible for sending any state information to the server whenever it is needed.
- REST is all about a client-server relationship, where server-side data are made available through representations of data in simple formats, often JSON.
- A REST API is an HTTP API but not all HTTP APIs are REST APIs
- A HTTP API is ANY API that makes use of HTTP as their transfer protocol. This means that even SOAP can be considered a HTTP API, as long as it will use HTTP for transport


## RPC (Remote Procedure Call)
- RPC is a protocol that one program can use to request a service from a program located in another computer on a network without having to understand the network's details
- RPC come into play when we want processes that are residing in different systems connected over a network wants to communicate with each other (one process that is residing in a system wants to communicate to another process which is residing physically in another system and these two systems are connected via a network)
- Because we are dealing with an environment in which the processes are excuting on separate systems, we must use a message based communication scheme to provide remote service.
- Each message is addressed to an RPC daemon listening to a port on the remote system, and each contains an identifier of the function to execute and the parameters to pass to that function.
- The function is then executed as requested, and any ouput is sent back to the requester in a separate message.      