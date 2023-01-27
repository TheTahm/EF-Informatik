# Numtrip finaler Eintrag


# Ziel des Spiels

Numtrip ist ein Denkspiel, mit dem Ziel Zahlen zu kombinieren, bis man die Zahl 128 erreicht. Dies erfolgt, in dem man auf dem Spielfeld einen bestimmten Punkt auswählen kann. Falls der Wert an diesem Punkt mit mindestens einem der anliegenden Feldern übereinstimmt, werden diese zussammen genommen und der Originalwert wird verdoppelt.

# Die grösste Herausforderung

Mein persönliches Problem waren meine Pythonkenntnisse, weshalb ich viele meiner Ideen nicht umsetzen konnte. Ich konnte mir vorstellen wie etwas funktioniert, jedoch hatte ich leider nicht die Syntax Kenntisse um meine Einfälle schliesslich durchzusetzten. Die grösste Herausvorderung für mich war der Anfang. Von Tygerjython auf Python zu wechseln war ein grosser Sprung und mir fehlten sehr viele Begriffe. Mit der Zeit jedoch wurde das Programmieren etwas einfacker und ich entwikelte in der letzten Woche des Projekts sogar Freude am Programmieren.

*Ich habe z.B am Anfang des Projekts über 2 Sunden gebraucht um die Eingabenüberprüfung zu schreiben.*
```py
def Feldauswahl():
    Zauswahl=input("Welche Zeile?")
    Sauswahl=input("Welche Spalte?")
    try:
        Sauswahl=int(Sauswahl)
        Zauswahl=int(Zauswahl)
        Zauswahl<=5
        Sauswahl<=5
        board[Zauswahl-1][Sauswahl-1]= ' '
        spielfeld()
    except:
        if Sauswahl.isnumeric():
            print ("Spaltenzahl zu gorss!")
        else:
            print ("Das ist keine Zahl")
        if Zauswahl.isnumeric():
            print ("Zeilenzahl zu gorss!")
        else:
            print ("Das ist keine Zahl")
        return False
```
*Mittlerweile kann ich eine einfachere und besser verständliche in unter 10 min coden.*
```py
def Süberprüfen(frage):
    valid=True
    while valid:
        try:
            zahl=input(frage)
            zahl = int(zahl)
            zahl = zahl -1
            if zahl<0 or zahl > 4:   #Warum Funktioniert 5 als Zahl bei <5?
                raise
            return zahl
        except:
            print ('Fehlerhafte Eingabe')
```
# Umsetzung des Spieles
## Voraussetzungen fürs Spielen:

Man muss sich das Programm Visual Studio Code herunterladen.

Direkter Link zur Webseite für den Download: https://code.visualstudio.com/

Dann muss man nur noch auf Github meinen Code kopieren und ihn auf Visual Studio Code einfügen.

Direkter Link zu meinem Numtrip Code auf Github:
https://github.com/TheTahm/EF-Informatik/blob/main/docs/numtrip/game2.py

## Top-down-Diagramm:

*Finaler Top-down Entwurf*

![](Blog_images\Top-down2.jpeg)


## Meine lose Definition:

*Die `lose()` Funktion war meine zweitletzte Hürde vor dem Abschluss des Spiels. Ich war sehr stolz als ich sie endlich hinbekommen habe.*

Ich habe mich vom `flood_fill()` Code inspirieren lassen, da dieser eine ähnliche Funktion hat. Beim `flood_fill()` werden die anliegenden Felder überprüft und dann wird der Befehl für diese Felder wieder aufgerufen. Man nennt dies eine Rekursion, was bedeutet, dass sie sich selber wieder aufruft. Beim `lose()`brauchen wir dies jedoch nicht. Ich habe mir überlegt, dass das Spiel verloren verloren ist wenn kein einziges Feld den gleichen Wert wie eines seiner vier Anliegenden hat. Damit wusste ich, dass ich einfach bei jedem Feld die 4 Anliegenden anschauen musste und danach überprüfen, ob diese gleich sind. Dies mache ich in diesem Teil des Codes:
```py
 if x!=4: # Ich überprüfe ob x schon 4 ist welches bedeuten würde wir wären schon in der Spalte ganz rechts, welches verursachen würde das der Code abstürzen oder nicht richtig funktionieren würde, falls wir versuchen eine Splate weiter rechts anzuschauen welche es nicht gibt.
        if board[x+1][y]!=board[x][y]: #Hier wird geschaut ob das Feld Rechts von Meinem überprüften den gleichen Wert hat. 
            z=z+1 # Der Code rechnet jedes Mal z+1 wenn man ein anliegendes Feld hat welcher nicht den gleichen Wert hat.
else: #Wenn x schon 4 ist gibt es rechts davon kein Feld mit welchem man es multiplizieren kann und kann deswegen z+1 rechen.
    z=z+1
```
Dies wiederhole ich dann für alle 4 anliegenden Felder. Wenn nach der überprüfung `z=4` ist, bedeutet das, dass dieses Feld nicht mit einem anderen zusammengeführt werden kann.

Ich habe mir dann überlegt, dass ich doch zählen könnte wie viele Felder nicht zussammengeführt werden können.
Wenn dies so ist, rechnet es:
```py
if z==4:
    a=a+1
```
`a` ist der Zähler für alle Felder die nicht zusammengeführt werden können. Wir haben in unserem Spiel 25 Felder. Wenn also `a=25` ist, bedeutet das, dass kein einziges Feld mit einem anderen zusammengefügt werden kann, und man das Spiel verloren hat.

```py
def lose():
    global o            #globaler Spielzugzähler
    a=0
    for y in range(5): # y ist die Zeilenzahl
        for x in range(5): # x ist die Spaltenzahl
            z=0         #z muss bei jedem neuen Feld 0 gesetzt werden
            if x!=4:
                if board[x+1][y]!=board[x][y]:     #Überprüft das Feld rechts davon
                    z=z+1
            else:
                z=z+1
            if x!=0:
                if board[x-1][y]!=board[x][y]:     #Überprüft das Feld links davon
                    z=z+1
            else:
                z=z+1
            if y!=4:
                if board[x][y+1]!=board[x][y]:     #Überprüft das Feld darunter
                    z=z+1
            else:
                z=z+1
            if y!=0:
                if board[x][y-1]!=board[x][y]:     #Überprüft das Feld darüber
                    z=z+1
            else:
                z=z+1
            if z==4:
                a=a+1
    if a==25:
        print (f'Sie haben in {o} Zügen veloren!') # printet die Anzahl Spielzüge aus
        o=0     # resettet den Spielzugzähler
        Wiederspielen("Wollen Sie noch einmal spielen (ja oder nein)?") #Nachdem man verloren hat kann man eine neue Runde anfangen oder aufhören
```



# Empfehlung an andere EF Schüler:innen
Fangt früh genug an! Das abgabe Datum kommt schneller als gedacht. Vorallem mit den Weinachtsferien kurz vor der Abgabe vergisst man es gerne und glaubt mir, ich rede aus Erfahrung. Es ist viel schöner Programmieren zu können wenn man dazu Motiviet ist und nicht die ganze Zeit stress hat. Ich musste nämlich von einem fehlerhaften code der die Felder leeren kann in eienr Woche zum fertig Spiel programmieren. **Meine wichtigste Erkenntnis, ist jedoch, probiert aus und schrekt nicht zurück. Ich habe lange Zeit Angst gehabt weiter zu arbeiten, weil ich kaum die Sachen im Unterricht hinbekommen habe. Jetzt musste ich mich aber ein paar Stunden hinsetzen und programmieren und dieses Mal konnte ich es nicht einfach auschieben. Ich war erstaunt wie viel ich hinbekommen habe und wie viel ich dazu gelernt habe. Was mir sehr geholfen hat, war es jedes Problem in die kleinstne einzelteile zu zerkleiren und jedes Problem mit einfachen Commands zu lösen und dann zusammen zu setzen.Mein code ist villeicht nicht der schönste oder der effizientiste, jedoch funktioniert er.**