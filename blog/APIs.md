Eine API (Application Programming Interface) ist eine Reihe von Protokollen und Tools zum Erstellen von Softwareanwendungen. Es ermöglicht die Kommunikation und den Datenaustausch zwischen verschiedenen Servern, sodass diese problemlose zusammenarbeiten können. Es ein Protokoll (HTTP), welches dafür verantworltlich ist, dass zwei Server, genau wissen wie sie miteinander zu reden haben, da es sonst immer Fehler gäbe.

APIs definieren normalerweise eine Reihe von Regeln dafür, wie zwei Softwarekomponenten miteinander interagieren sollen. Mit den Anfragen Get,Post,Put und Delete ist dies möglich.
Get- Fragt Information von einem Server ab.
Post- Fragt an etwas auf einem Server hoch.
Put- Fragt etwas vorhandenes auf dem server zu verändern/ zu updaten.
Delete- Fragt den Server etwas zu löschen.

APIs können für eine Vielzahl von Zwecken verwendet werden, z. B. für den Zugriff auf Daten von einem Remote-Server, für welche wir sie auch in unserem Node-RED benutzt haben. Wir haben hierfür eine eigene API erstellt, die auf unseren Server zugreift, welcher es ermöglicht automatisch Worte in Emojis um zu wandeln.

Um unsere API zu erstellen mussten wir zuerst unseren Server erstellen, welcher dann anschliessen dank unserer API von der Get Methode von einem anderen Server angefragt werden konnte. 
Dies sah dann so aus:
![](Blog_images\node-red.png)

Von einem anderen Server (in unserem Falle Postman) konnte anschliessend eine text Anfrage geschickt werden.

In unserer Funktion stand dann drin, was genau auf diesem Server passieren soll. Dies haben wir dann mit JavaScript programmiert.

```JavaScript
let emoji = msg.payload.text;

emoji = emoji.replace(/hello/g, '👋');
emoji = emoji.replace(/world/g, '🌍');
emoji = emoji.replace(/!/g, '❗️');
emoji = emoji.replace(/darling/g, '👩');

msg.payload = {
    msg: emoji
};

return msg;
```

Der HTTP response Node ist dann schlussendlich dafür verantwortlich unsere Veränderungen die wir durchgeführt haben wieder an den anfragenden Server zurück zu schiken.

Der erste Debugger ist verntworlich dafür, dass wenn eine Anfrage mit einer Method geschikt wird die nicht Get ist nicht der ganze Server abstürtzt sondern einfach eine Fehlermeldung rauskommt. Der zweite ist dann noch dort falls bei unserer Funktion etwas schief gehen sollte. 

Auf Node-RED eine eigene API erstellen war sehr spannend, auch ein Mal hinter die Kulissen eines Servers zu sehen,haben mir viele neue interessannte Kenntnisse gebracht. Ausserdem finde ich all diese Witzebots sehr witzig. Diese steigern mein interesse bei diesem Thema auch, obwohl es manchmal ein bisschen kompliziert ist alles direkt zu verstehen.

**Cookies**
i)Cookies sind kleine Textdateien welche die Websiten auf dem Computer eines Benutzers speichern wenn man diese besucht. in diesen Dateien stehen Informationen über die Aktivität des Benutzers auf der Website wie z. B. seine Einstellungen und Anmeldeinformationen.

ii)Dies benutzen wir dann fürs Login. Wenn sich beispielsweise ein Benutzer bei einer Website anmeldet und diese dann verlässt und später wieder zurückkehrt, benutzt die Webseite die Cookies. Die Cookies sind also beim Login da, um sich die Anmeldedaten zu merken, damit man sich nicht erneut anmelden muss.

iii) Wir verschlüsseln das Passwort nicht. Wenn man jetzt den Server hacken würde hätte man dann zugang zu den Passwörtern aller benutzer. Man könnte es z.B. haschen, sodass der hacker nur die haschwerte und nicht das richtige passwort sieht.