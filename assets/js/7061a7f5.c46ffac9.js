"use strict";(self.webpackChunkef_website_template=self.webpackChunkef_website_template||[]).push([[935],{3543:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/Datenstruktur","metadata":{"permalink":"/EF-Informatik/Datenstruktur","editUrl":"https://github.com/TheTahm/EF-Informatik/tree/main/blog/Datenstruktur.md","source":"@site/blog/Datenstruktur.md","title":"Datenstruktur","description":"Wir haben eine 3D Liste die mit normalen Zahlen gef\xfcllt ist. Wir haben das Spielfeld welches aus Zeilen und Spalten besteht, in welchem jedes Element einen definierten Zahlenwert hat.","date":"2023-01-27T14:29:31.000Z","formattedDate":"27. Januar 2023","tags":[],"readingTime":0.15,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"nextItem":{"title":"**Numtrip finaler Eintrag**","permalink":"/EF-Informatik/Numtrip_finaler_Blogeintrag"}},"content":"**Wir haben eine 3D Liste die mit normalen Zahlen gef\xfcllt ist. Wir haben das Spielfeld welches aus Zeilen und Spalten besteht, in welchem jedes Element einen definierten Zahlenwert hat.**\\n\\n\\n![](Blog_images\\\\Struktur.jpeg)"},{"id":"/Numtrip_finaler_Blogeintrag","metadata":{"permalink":"/EF-Informatik/Numtrip_finaler_Blogeintrag","editUrl":"https://github.com/TheTahm/EF-Informatik/tree/main/blog/Numtrip_finaler_Blogeintrag.md","source":"@site/blog/Numtrip_finaler_Blogeintrag.md","title":"**Numtrip finaler Eintrag**","description":"Numtrip ist ein Denkspiel, mit dem Ziel Zahlen zu kombinieren, bis man die Zahl 128 erreicht. Dies erfolgt, in dem man auf dem Spielfeld einen bestimmten Punkt ausw\xe4hlen kann. Falls der Wert an diesem Punkt mit mindestens einem der anliegenden Feldern \xfcbereinstimmt, werden diese zussammen genommen und der Originalwert wird verdoppelt.","date":"2023-01-27T14:29:31.000Z","formattedDate":"27. Januar 2023","tags":[],"readingTime":4.7,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"Datenstruktur","permalink":"/EF-Informatik/Datenstruktur"},"nextItem":{"title":"top-down-entwurf","permalink":"/EF-Informatik/top-down-entwurf"}},"content":"# Ziel des Spiels\\n\\nNumtrip ist ein Denkspiel, mit dem Ziel Zahlen zu kombinieren, bis man die Zahl 128 erreicht. Dies erfolgt, in dem man auf dem Spielfeld einen bestimmten Punkt ausw\xe4hlen kann. Falls der Wert an diesem Punkt mit mindestens einem der anliegenden Feldern \xfcbereinstimmt, werden diese zussammen genommen und der Originalwert wird verdoppelt.\\n\\n# Die gr\xf6sste Herausforderung\\n\\nMein pers\xf6nliches Problem waren meine Pythonkenntnisse, weshalb ich viele meiner Ideen nicht umsetzen konnte. Ich konnte mir vorstellen wie etwas funktioniert, jedoch hatte ich leider nicht die Syntax Kenntisse um meine Einf\xe4lle schliesslich durchzusetzten. Die gr\xf6sste Herausvorderung f\xfcr mich war der Anfang. Von Tygerjython auf Python zu wechseln war ein grosser Sprung und mir fehlten sehr viele Begriffe. Mit der Zeit jedoch wurde das Programmieren etwas einfacker und ich entwikelte in der letzten Woche des Projekts sogar Freude am Programmieren.\\n\\n*Ich habe z.B am Anfang des Projekts \xfcber 2 Sunden gebraucht um die Eingaben\xfcberpr\xfcfung zu schreiben.*\\n```py\\ndef Feldauswahl():\\n    Zauswahl=input(\\"Welche Zeile?\\")\\n    Sauswahl=input(\\"Welche Spalte?\\")\\n    try:\\n        Sauswahl=int(Sauswahl)\\n        Zauswahl=int(Zauswahl)\\n        Zauswahl<=5\\n        Sauswahl<=5\\n        board[Zauswahl-1][Sauswahl-1]= \' \'\\n        spielfeld()\\n    except:\\n        if Sauswahl.isnumeric():\\n            print (\\"Spaltenzahl zu gorss!\\")\\n        else:\\n            print (\\"Das ist keine Zahl\\")\\n        if Zauswahl.isnumeric():\\n            print (\\"Zeilenzahl zu gorss!\\")\\n        else:\\n            print (\\"Das ist keine Zahl\\")\\n        return False\\n```\\n*Mittlerweile kann ich eine einfachere und besser verst\xe4ndliche in unter 10 min coden.*\\n```py\\ndef S\xfcberpr\xfcfen(frage):\\n    valid=True\\n    while valid:\\n        try:\\n            zahl=input(frage)\\n            zahl = int(zahl)\\n            zahl = zahl -1\\n            if zahl<0 or zahl > 4:   #Warum Funktioniert 5 als Zahl bei <5?\\n                raise\\n            return zahl\\n        except:\\n            print (\'Fehlerhafte Eingabe\')\\n```\\n# Umsetzung des Spieles\\n## Voraussetzungen f\xfcrs Spielen:\\n\\nMan muss sich das Programm Visual Studio Code herunterladen.\\n\\nDirekter Link zur Webseite f\xfcr den Download: https://code.visualstudio.com/\\n\\nDann muss man nur noch auf Github meinen Code kopieren und ihn auf Visual Studio Code einf\xfcgen.\\n\\nDirekter Link zu meinem Numtrip Code auf Github:\\nhttps://github.com/TheTahm/EF-Informatik/blob/main/docs/numtrip/game2.py\\n\\n## Top-down-Diagramm:\\n\\n*Finaler Top-down Entwurf*\\n\\n![](Blog_images\\\\Top-down2.jpeg)\\n\\n\\n## Meine lose Definition:\\n\\n*Die `lose()` Funktion war meine zweitletzte H\xfcrde vor dem Abschluss des Spiels. Ich war sehr stolz als ich sie endlich hinbekommen habe.*\\n\\nIch habe mich vom `flood_fill()` Code inspirieren lassen, da dieser eine \xe4hnliche Funktion hat. Beim `flood_fill()` werden die anliegenden Felder \xfcberpr\xfcft und dann wird der Befehl f\xfcr diese Felder wieder aufgerufen. Man nennt dies eine Rekursion, was bedeutet, dass sie sich selber wieder aufruft. Beim `lose()`brauchen wir dies jedoch nicht. Ich habe mir \xfcberlegt, dass das Spiel verloren verloren ist wenn kein einziges Feld den gleichen Wert wie eines seiner vier Anliegenden hat. Damit wusste ich, dass ich einfach bei jedem Feld die 4 Anliegenden anschauen musste und danach \xfcberpr\xfcfen, ob diese gleich sind. Dies mache ich in diesem Teil des Codes:\\n```py\\n if x!=4: # Ich \xfcberpr\xfcfe ob x schon 4 ist welches bedeuten w\xfcrde wir w\xe4ren schon in der Spalte ganz rechts, welches verursachen w\xfcrde das der Code abst\xfcrzen oder nicht richtig funktionieren w\xfcrde, falls wir versuchen eine Splate weiter rechts anzuschauen welche es nicht gibt.\\n        if board[x+1][y]!=board[x][y]: #Hier wird geschaut ob das Feld Rechts von Meinem \xfcberpr\xfcften den gleichen Wert hat. \\n            z=z+1 # Der Code rechnet jedes Mal z+1 wenn man ein anliegendes Feld hat welcher nicht den gleichen Wert hat.\\nelse: #Wenn x schon 4 ist gibt es rechts davon kein Feld mit welchem man es multiplizieren kann und kann deswegen z+1 rechen.\\n    z=z+1\\n```\\nDies wiederhole ich dann f\xfcr alle 4 anliegenden Felder. Wenn nach der \xfcberpr\xfcfung `z=4` ist, bedeutet das, dass dieses Feld nicht mit einem anderen zusammengef\xfchrt werden kann.\\n\\nIch habe mir dann \xfcberlegt, dass ich doch z\xe4hlen k\xf6nnte wie viele Felder nicht zussammengef\xfchrt werden k\xf6nnen.\\nWenn dies so ist, rechnet es:\\n```py\\nif z==4:\\n    a=a+1\\n```\\n`a` ist der Z\xe4hler f\xfcr alle Felder die nicht zusammengef\xfchrt werden k\xf6nnen. Wir haben in unserem Spiel 25 Felder. Wenn also `a=25` ist, bedeutet das, dass kein einziges Feld mit einem anderen zusammengef\xfcgt werden kann, und man das Spiel verloren hat.\\n\\n```py\\ndef lose():\\n    global o            #globaler Spielzugz\xe4hler\\n    a=0\\n    for y in range(5): # y ist die Zeilenzahl\\n        for x in range(5): # x ist die Spaltenzahl\\n            z=0         #z muss bei jedem neuen Feld 0 gesetzt werden\\n            if x!=4:\\n                if board[x+1][y]!=board[x][y]:     #\xdcberpr\xfcft das Feld rechts davon\\n                    z=z+1\\n            else:\\n                z=z+1\\n            if x!=0:\\n                if board[x-1][y]!=board[x][y]:     #\xdcberpr\xfcft das Feld links davon\\n                    z=z+1\\n            else:\\n                z=z+1\\n            if y!=4:\\n                if board[x][y+1]!=board[x][y]:     #\xdcberpr\xfcft das Feld darunter\\n                    z=z+1\\n            else:\\n                z=z+1\\n            if y!=0:\\n                if board[x][y-1]!=board[x][y]:     #\xdcberpr\xfcft das Feld dar\xfcber\\n                    z=z+1\\n            else:\\n                z=z+1\\n            if z==4:\\n                a=a+1\\n    if a==25:\\n        print (f\'Sie haben in {o} Z\xfcgen veloren!\') # printet die Anzahl Spielz\xfcge aus\\n        o=0     # resettet den Spielzugz\xe4hler\\n        Wiederspielen(\\"Wollen Sie noch einmal spielen (ja oder nein)?\\") #Nachdem man verloren hat kann man eine neue Runde anfangen oder aufh\xf6ren\\n```\\n\\n\\n\\n# Empfehlung an andere EF Sch\xfcler:innen\\nFangt fr\xfch genug an! Das abgabe Datum kommt schneller als gedacht. Vorallem mit den Weinachtsferien kurz vor der Abgabe vergisst man es gerne und glaubt mir, ich rede aus Erfahrung. Es ist viel sch\xf6ner Programmieren zu k\xf6nnen wenn man dazu Motiviet ist und nicht die ganze Zeit stress hat. Ich musste n\xe4mlich von einem fehlerhaften code der die Felder leeren kann in eienr Woche zum fertig Spiel programmieren. **Meine wichtigste Erkenntnis, ist jedoch, probiert aus und schrekt nicht zur\xfcck. Ich habe lange Zeit Angst gehabt weiter zu arbeiten, weil ich kaum die Sachen im Unterricht hinbekommen habe. Jetzt musste ich mich aber ein paar Stunden hinsetzen und programmieren und dieses Mal konnte ich es nicht einfach auschieben. Ich war erstaunt wie viel ich hinbekommen habe und wie viel ich dazu gelernt habe. Was mir sehr geholfen hat, war es jedes Problem in die kleinstne einzelteile zu zerkleiren und jedes Problem mit einfachen Commands zu l\xf6sen und dann zusammen zu setzen.Mein code ist villeicht nicht der sch\xf6nste oder der effizientiste, jedoch funktioniert er.**"},{"id":"/top-down-entwurf","metadata":{"permalink":"/EF-Informatik/top-down-entwurf","editUrl":"https://github.com/TheTahm/EF-Informatik/tree/main/blog/top-down-entwurf.md","source":"@site/blog/top-down-entwurf.md","title":"top-down-entwurf","description":"Wir haben zwei Zweige erstellt. Einen f\xfcr das Visuelle z.B. Zahlen zentrieren und einen Zweig f\xfcr die versteckten programm Sachen, wie z. B. ob die Eingabe g\xfcltig ist odr nicht.","date":"2023-01-27T14:29:31.000Z","formattedDate":"27. Januar 2023","tags":[],"readingTime":0.285,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"**Numtrip finaler Eintrag**","permalink":"/EF-Informatik/Numtrip_finaler_Blogeintrag"},"nextItem":{"title":"Numntrip","permalink":"/EF-Informatik/2022/12/02/blog"}},"content":"Wir haben zwei Zweige erstellt. Einen f\xfcr das Visuelle z.B. Zahlen zentrieren und einen Zweig f\xfcr die versteckten programm Sachen, wie z. B. ob die Eingabe g\xfcltig ist odr nicht.\\n\\n**Am momentanen Standpunkt, haben wir die Funktionen um ein Element aus der Liste auszuw\xe4hlen und zu leeren.**\\n\\nWir werden noch ein Feldauff\xfcllen- und Punktesystem einf\xfcgen m\xfcssen.\\n\\n![](Blog_images\\\\Top-down.jpg)"},{"id":"/2022/12/02/blog","metadata":{"permalink":"/EF-Informatik/2022/12/02/blog","editUrl":"https://github.com/TheTahm/EF-Informatik/tree/main/blog/2022-12-02-blog.md","source":"@site/blog/2022-12-02-blog.md","title":"Numntrip","description":"Heute habe ich an meinem Numtrip weiter gearbeitet und es aufgesch\xf6nert. Ich habe damit angefangen mit Linus \xfcber unsere codes dr\xfcber zu gehen und nach m\xf6glichen Fehlern zu suchen.","date":"2022-12-02T00:00:00.000Z","formattedDate":"2. Dezember 2022","tags":[],"readingTime":0.62,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"top-down-entwurf","permalink":"/EF-Informatik/top-down-entwurf"},"nextItem":{"title":"Wiedereinstieg in Phyton","permalink":"/EF-Informatik/2022/08/26/blog"}},"content":"Heute habe ich an meinem Numtrip weiter gearbeitet und es aufgesch\xf6nert. Ich habe damit angefangen mit Linus \xfcber unsere codes dr\xfcber zu gehen und nach m\xf6glichen Fehlern zu suchen. \\n\\nWir haben immer und immer wieder fehler gefunden und hatten mindestens 45 min bis wir alles erledigt hatten und hoffen, dass jetzt alles funktioniert.\\n```py\\ndef Feldauswahl():\\n    Zauswahl=input(\\"Welche Zeile?\\")\\n    Sauswahl=input(\\"Welche Spalte?\\")\\n    try:\\n        Sauswahl=int(Sauswahl)\\n        Zauswahl=int(Zauswahl)\\n        Zauswahl<=5\\n        Sauswahl<=5\\n        board[Zauswahl-1][Sauswahl-1]= \' \'\\n        spielfeld()\\n    except:\\n        if Sauswahl.isnumeric():\\n            print (\\"Spaltenzahl zu gorss!\\")\\n        else:\\n            print (\\"Das ist keine Zahl\\")\\n        if Zauswahl.isnumeric():\\n            print (\\"Zeilenzahl zu gorss!\\")\\n        else:\\n            print (\\"Das ist keine Zahl\\")\\n        return False\\n```\\nDie restliche Zeit, habe ich noch versucht die nebenstehenden Felder mit einer *Rekursion* zu l\xf6sen was auch einigermassen klappt. Es funktiooniert jedoch bis jetzt noch nicht \xfcberall."},{"id":"/2022/08/26/blog","metadata":{"permalink":"/EF-Informatik/2022/08/26/blog","editUrl":"https://github.com/TheTahm/EF-Informatik/tree/main/blog/2022-08-26-blog.md","source":"@site/blog/2022-08-26-blog.md","title":"Wiedereinstieg in Phyton","description":"Es hat sehr viel spass gemacht wieder einmal mit Phyton zu arbeiten. Die gr\xf6ssten probleme hatten wir mit Aufgabe 1.","date":"2022-08-26T00:00:00.000Z","formattedDate":"26. August 2022","tags":[],"readingTime":0.335,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"Numntrip","permalink":"/EF-Informatik/2022/12/02/blog"}},"content":"Es hat sehr viel spass gemacht wieder einmal mit Phyton zu arbeiten. Die gr\xf6ssten probleme hatten wir mit ***Aufgabe 1***. \\nWeil ohne das Zusatzblatt l\xe4sst sich schwierig darauf arbeiten. Jedoch musste ich auch ein paar begriffe \xe4ndern und neu lernen die z.B. auf Tigerjhyton anders sind. \\nWie der repeat Command:\\n\\n```py\\nfor i in range(5)\\n    forwad(10)\\n    right(45)\\n```\\nund der fill Command:\\n\\n```py\\nfillcolor(\'red\')\\nbegin_fill()\\nend_fill()\\n```"}]}')}}]);