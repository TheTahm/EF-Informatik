"use strict";(self.webpackChunkef_website_template=self.webpackChunkef_website_template||[]).push([[935],{3543:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/Datenstruktur","metadata":{"permalink":"/EF-Informatik/Datenstruktur","editUrl":"https://github.com/TheTahm/EF-Informatik/tree/main/blog/Datenstruktur.md","source":"@site/blog/Datenstruktur.md","title":"Datenstruktur","description":"","date":"2023-01-26T16:17:11.000Z","formattedDate":"26. Januar 2023","tags":[],"readingTime":0,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"nextItem":{"title":"Numntrip","permalink":"/EF-Informatik/2022/12/02/blog"}},"content":""},{"id":"/2022/12/02/blog","metadata":{"permalink":"/EF-Informatik/2022/12/02/blog","editUrl":"https://github.com/TheTahm/EF-Informatik/tree/main/blog/2022-12-02-blog.md","source":"@site/blog/2022-12-02-blog.md","title":"Numntrip","description":"Ich habe meine Seele verloren.","date":"2022-12-02T00:00:00.000Z","formattedDate":"2. Dezember 2022","tags":[],"readingTime":0.65,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"Datenstruktur","permalink":"/EF-Informatik/Datenstruktur"},"nextItem":{"title":"Wiedereinstieg in Phyton","permalink":"/EF-Informatik/2022/08/26/blog"}},"content":"## Ich habe meine Seele verloren.\\n\\nHeute habe ich an meinem Numtrip weiter gearbeitet und es aufgesch\xf6nert. Ich habe damit angefangen mit Linus \xfcber unsere codes dr\xfcber zu gehen und nach m\xf6glichen Fehlern zu suchen. \\n\\nWir haben immer und immer wieder fehler gefunden und hatten mindestens 45 min bis wir alles erledigt hatten und hoffen, dass jetzt alles funktioniert.\\n```py\\ndef Feldauswahl():\\n    Zauswahl=input(\\"Welche Zeile?\\")\\n    Sauswahl=input(\\"Welche Spalte?\\")\\n    try:\\n        Sauswahl=int(Sauswahl)\\n        Zauswahl=int(Zauswahl)\\n        Zauswahl<=5\\n        Sauswahl<=5\\n        board[Zauswahl-1][Sauswahl-1]= \' \'\\n        spielfeld()\\n    except:\\n        if Sauswahl.isnumeric():\\n            print (\\"Spaltenzahl zu gorss!\\")\\n        else:\\n            print (\\"Das ist keine Zahl\\")\\n        if Zauswahl.isnumeric():\\n            print (\\"Zeilenzahl zu gorss!\\")\\n        else:\\n            print (\\"Das ist keine Zahl\\")\\n        return False\\n```\\nDie restliche Zeit, habe ich noch versucht die nebenstehenden Felder mit einer *Rekursion* zu l\xf6sen was auch einigermassen klappt. Es funktiooniert jedoch bis jetzt noch nicht \xfcberall."},{"id":"/2022/08/26/blog","metadata":{"permalink":"/EF-Informatik/2022/08/26/blog","editUrl":"https://github.com/TheTahm/EF-Informatik/tree/main/blog/2022-08-26-blog.md","source":"@site/blog/2022-08-26-blog.md","title":"Wiedereinstieg in Phyton","description":"Es hat sehr viel spass gemacht wieder einmal mit Phyton zu arbeiten. Die gr\xf6ssten probleme hatten wir mit Aufgabe 1.","date":"2022-08-26T00:00:00.000Z","formattedDate":"26. August 2022","tags":[],"readingTime":0.335,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"Numntrip","permalink":"/EF-Informatik/2022/12/02/blog"}},"content":"Es hat sehr viel spass gemacht wieder einmal mit Phyton zu arbeiten. Die gr\xf6ssten probleme hatten wir mit ***Aufgabe 1***. \\nWeil ohne das Zusatzblatt l\xe4sst sich schwierig darauf arbeiten. Jedoch musste ich auch ein paar begriffe \xe4ndern und neu lernen die z.B. auf Tigerjhyton anders sind. \\nWie der repeat Command:\\n\\n```py\\nfor i in range(5)\\n    forwad(10)\\n    right(45)\\n```\\nund der fill Command:\\n\\n```py\\nfillcolor(\'red\')\\nbegin_fill()\\nend_fill()\\n```"}]}')}}]);