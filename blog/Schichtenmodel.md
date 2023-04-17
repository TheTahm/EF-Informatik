Um eine Nachricht zu übertragen braucht es Übertragungsmedien.
Dies müssen signale in z.B verschiedene Spannungsniveuas übertragen, die eine  1 oder 0 bedeuten.
Share data true a wire
Networking has it's "language rules" 
the 7 different layers of rules are known as the osi model
Every layer has a specific function and they all need to be fufilled.
1.Layer Physical Layer
Something, that can transport bits from computer to computer(Cabels)
Physical nicht beachten wifi zählt auch 
repeater werden auch als layer 1 technologie bezeichnet da sie sozusagen nur eine verbindung velängern

Layer 2 Data Link
They interact with the Physical layer
Hop to Hop delivery
The goal of them is to take the information form one Network Interface Card to the other(one hop)
Mac addresses
48 bits represented as 12 hexdigits
every NIC has a unique MAC address
Switches also count as Layer 2 technology
Switches connect different wires and so help the accomplish the goal from hop to hop
Often communication between hosts require multiple hops from host to router to router to host
Layer 3 Network End to End
To ensure, that my message arrives at the right end point we use IP addresses
Routers count as L3 Technologies due to haveing an IP adress(anything with IP)
Mac addressen sind für die kleinen hops verantwortlich und die IP adressen für das endziel
ARP Address Resolution Protocol 
Verbindet L3 und L2 addressen

L4 Transport Service to Service
Man bekommt oft mehrer information wenn man gleichzeiteig verschiedene sachen ausführt wir z.B. discord und wow offen haben. 
L4 verteilt die Daten korrekt(Service to Service)
Dafür werden Ports benutzt
0-65535-TCP-favors reliability
0-65535-UDP-favors efficiency
Jedes programm bekommt eine Port addresse die im Header enthalten ist.
Servers listen for requests to pre-defined Ports
Clients select random Port for each connection
respone traffic will arrive on this port
Erfmöglicht es mehrere Tabs offen zu haben, jeder tab hat eine eigenen Port

Layer 5,6,7-Session,Presentation,Application
unterschied zwischen den LAyern recht unklar eswegen werden sie manchmal als ein einzer betrachtet
Sending=Encapsulation wenn man etwas verschikt geht es durch alle schichten durch um die informationen aus 1 un 0 auf das Übertragungsmdeium zu bekommen
Layer 4 + Data is called a Segment
Layer 3 + Data(L4 is also inside but L3 can't differnecate all are 1 and 0's) is called Packet
Layer 2 + Data is called Frame
De-Encapsulation=Receiveing geht durch alle schichten durch um die 1 und 0 schlussendlich zu verstehen(informationen kommen an den richtigen Ort)
Jeder Layer überprüft ob die addressen stimmen, falls ja wird die addresse gelöscht und sie wird ein Layer weitergegeben
L2 schaut nur bis in den L2 header also nicht bis zum L3
Neither if these are stict rules- exceptionsd exist
OSI Model is simply a model
Only Concepts what is required for data to flow through the internet