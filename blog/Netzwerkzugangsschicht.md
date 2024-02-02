Hosts don't know to what they are connected or how far there target is
Speaking to Hoasts in the same Network:
ARP(Address resolution Protocol) to fin out the MAC address from host B
It sends packet with an L2 header where the targetted MAC address is all f's. 
Es sendet dieses packet an jeden im Netzwerkung um denjenigen mit der korrekten IP addresse zu finden
ARP Cache:
Gespeicherte IP mit Mac addressen verbunden
Speaking to Hoasts in a different Network:
Default gateway ist di IP addresse des verbundenen routers. A macht ein ARP um die MAC addresse des routers zu erfahren und das packet loszuschiken. Der router wiederholt das dann, je nachdem direkt zum ziel oder zum nächsten router.
As job ist jedoch erledigt nachdem das packet zum ersten router geschikt wurde. A muss also wenn es mit einem Host eines anderen Netzwerks kommunizieren will, kein ARP mehr machen.

Switches:
Switching is the moving of data within networks
Switches are a L2 device thus only looking at the L2 header
Switches have Ports every hoast is connected to one
Learn:when the switch gets something into a port it saves the Macaddres from the Hoast(MAC Address Table)
Flood: Duplicate and send the frame out to all switch ports (except receiving port)
Forward: Uses MAC Address Table to deliver Frame to the apporpraite switch port(when the right MAC address already excists in the MAC Address Table)
Would also work while the Hoast would try to talk to somebody outside of the network, the router would send the packet to the router.
The switch also has a MAC addres and IP addres to traffic to the switch, then it would function as a normal server in the network.
Unicast Frame: destination of the MAC address is another host
Broadcast Frame: destination MAC address of ffff.ffff.fffff(so to all host int the network)
The switch always flows Boradcast Frames but only flow Unicast frames if it doesn't have the rigth MAC address in its Mac address table.
Multiple Swiches:
Switches maintan inependen MAC address Tables
Switches perform switch actions independently