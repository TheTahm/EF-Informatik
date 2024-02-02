**IP Adressen**
4 Zahlen aus aus jeweils 1 Byte also 32 Bit, Zahlen werden durch Punkte getrennt.
Wert zwischen 0-255

Zwei Teile der IP-Adresse:
Netzwerkteil: Vorderer Teil der IP-Adresse ist bei allen Geräten im gleichen Netzwerk gleich.
Hostteil: Hinterer teil der IP-Adresse müssen bei jedem Host im selben Netz anders sein.

Um zu erkennen, wo der Netzwerkteil aufhört und der Hostteil anfängt, braucht man eine Netzmaske. Diese und die IP-Adresse muss man dann in Binär umrechnen und vergleichen. Wo es bei 

Netzwerkteil bis zu welchem Netzwerk es gehen muss und Hossteil erst dann zu welchem host in diesem Netzwerk es hin muss.
Ergänzt man den Netzwerkteil mit lauter 0 zu einer vollen 32 Bit langen IP-Adresse, so erhält man die Netzwerkadresse.
```py
IP-Adresse:           13.162.25.4
Netzmaske:            255.255.254.0
Netzmaske binär:      1111'1111.1111'1111.1111'1110.0000'0000
Anzahl 1:             23
IP-Adress mit Suffix: 13.162.25.4/23
```
