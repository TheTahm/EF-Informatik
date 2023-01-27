import random

numbers = [2, 4, 8]
board = []

def board_auffüllen():
    global board
    board = [     # Füllt das Board mit zufälligen Werten.Werte=(2,4,8)  
        [random.choice(numbers),random.choice(numbers), random.choice(numbers), random.choice(numbers), random.choice(numbers)],
        [random.choice(numbers),random.choice(numbers), random.choice(numbers), random.choice(numbers), random.choice(numbers)],
        [random.choice(numbers),random.choice(numbers), random.choice(numbers), random.choice(numbers), random.choice(numbers)],
        [random.choice(numbers),random.choice(numbers), random.choice(numbers), random.choice(numbers), random.choice(numbers)],
        [random.choice(numbers),random.choice(numbers), random.choice(numbers), random.choice(numbers), random.choice(numbers)]
    ]

def spielfeld():    # Druckt das Spielfeld aus
    #Zahlen oben = x
    x = 0
    y = 0
    print (' ', end='')
    for i in board:
        x = x+1
        print ('  ', x, end='') # printet die Zahlen 1-5 obe
    print (' ')
    print ('  ', end='')
    #Zahlen seite = y
    for zeile in board:
        for zelle in zeile:
            print(' ---', end='')
        print(' ',)
        print (' ', end='')
        y = y+1
        print (y, end='')   # printet die Zahlen 1-5 auf der Seite
        for zelle in zeile:
            if zelle<10:
                print(f'|  {zelle}', end='')
            elif zelle<100:
                print(f'| {zelle}', end='')
            else:
                print(f'|{zelle}', end='')
        print('|')
        print ('  ', end='')
    for zelle in board[0]:
        print(' ---', end='')
    print(' ')

def Süberprüfen(frage): # überprüft die Spaltenauswahl
    valid=True
    while valid:        # Widerholt es bis eine richtige Eingabe geschiet
        try:
            zahl=input(frage)
            zahl = int(zahl)
            zahl = zahl -1          #Muss -1 grechnet werden, damit man 1-5 eingeben kann und nicht 0-4
            if zahl<0 or zahl > 4:   #Bei grösser als 4 Zählt 4 auch dazu
                raise
            return zahl     #Gibt die Zahl zurück und stoppt die Überprüfung
        except:
            print ('Fehlerhafte Eingabe')      #Es wird automatisch wiederholt

def Züberprüfen(frage): # überprüft die Zeilenauswahl
    valid=True
    while valid:
        try:
            zahl=input(frage)
            zahl = int(zahl)
            zahl = zahl -1
            if zahl<0 or zahl > 4: # Bei kleiner als 0 zählz 0 nicht dazu
                raise 
            return zahl
        except:
            print ('Fehlerhafte Eingabe')

def flood_fill(x ,y, old, new): # leert alle anliegenden Felder mit dem Glecihen Wert vom Ausgwehälten
    if x < 0 or x >= len(board[0]) or y < 0 or y >= len(board): # schaut ob das Feld noch im Spielfeld ist
        return      # falls nicht, wird es abgebrochen
    if board[x][y] != old:      # schaut ob die Zahl des ausgewählten Felds nicht mit dem Feld übereinstimmt.
        return
    board[x][y] = new   # Ersetzt das Feld wenn es den Wert wenn er Gleich ist wie das originale hat zu ' '
    flood_fill(x+1, y, old, new) # Wiederholt die Funktion für ein Feld weiter unten
    flood_fill(x-1, y, old, new) # darüber
    flood_fill(x, y+1, old, new) # rechts
    flood_fill(x, y-1, old, new) # links

def fill():     # Zählt wie viele leere Felder es gibt
    y=0
    x=4
    e=0
    for i in range(5):
        if y >= 5:
            return
        for i in range(5):
            if (board[x][y]) == ' ': # Geht durch jedes Feld durch
                e = e+1 # Zählt jedes leere Feld
            x = x-1
        y = y+1
        x = 4
    return e    # gibt die Anzahl leerer Felder zurück

def Verdoppelung(Feld): # Verdoppelt den Originalwert
    if Feld > 1:    # falls die Anzahl leerer Felder grösser als 1 ist, bedeutet das, dass mein Wert verdoppelt werden muss
        board[Zauswahl][Sauswahl] = Wert*2 
    else:
        board[Zauswahl][Sauswahl] = Wert # Falls nicht, hatte kein anliegendes Feld den gleichen Wert

def Auffüllen():    # Verschiebt die leeren Zellen nach unten und füllt leere Felder am Schluss wieder auf
    y=0
    x=4
    for i in range(25): # man muss dies 25 Mal auffüllen, damit jedes Feld angeschaut wird
        if y>=5:
            y=0
        Zeilen=4
        for i in range (4): # dies nur vier Mal, denn sonst würde man die oberste zeile mit einer Zeile darüber vergleichen wo wir nichts haben
            if (board[x][y])==' ': # überprüft ob das jetzige Feld leer ist, falls ja kopiert es den Wert vom obigen
                x=x-1
                board[Zeilen][y]=board[x][y]
                board[x][y]=' ' #das obige Feld wird leer gesetzt
            Zeilen=Zeilen-1
            x=Zeilen
        if board[x][y]==' ':   #falls es am schluss noch leere Felder gibt, werden diese mit zufälligen Zahlen aufgefüllt
            board[x][y] = random.choice(numbers)
        y=y+1
        x=4

def win():  # überprüft ob man gewonnen hat
    global o # Zählt die Spielzüge
    for y in range(5):
        for x in range(5):
            if board[x][y]==128: # geht durch das ganze Feld durch um zu schauen, ob man den erforderten Wert erreicht hat
                print (f'Sie haben in {o} Zügen gewonnen!')
                o=0 # Spielzähler wird zurückgesetzt
                Wiederspielen("Wollen Sie noch einmal spielen (ja oder nein)?") # Ermöglicht es noch eine Runde zu spielen oder aufzuhüren

def lose():
    global o            #globaler Spielzugzähler
    a=0
    for y in range(5): # y ist die Zeilenzahl
        for x in range(5): # x ist die Spaltenzahl
            z=0         #z muss bei jedem neuen Feld 0 gesetzt werden
            if x!=4:
                if board[x+1][y]!=board[x][y]:     #Überprüft das Feld darunter
                    z=z+1                           
            else:
                z=z+1
            if x!=0:
                if board[x-1][y]!=board[x][y]:     #Überprüft das Feld darüber
                    z=z+1
            else:
                z=z+1
            if y!=4:
                if board[x][y+1]!=board[x][y]:     #Überprüft das Feld rechts davon
                    z=z+1
            else:
                z=z+1
            if y!=0:
                if board[x][y-1]!=board[x][y]:     #Überprüft das Feld links davon
                    z=z+1
            else:
                z=z+1
            if z==4:
                a=a+1
    if a==25:
        print (f'Sie haben in {o} Zügen veloren!') # printet die Anzahl Spielzüge aus
        o=0     # resettet den Spielzugzähler
        Wiederspielen("Wollen Sie noch einmal spielen (ja/nein)?") #Nachdem man verloren hat kann man eine neue Runde anfangen oder aufhören

def Wiederspielen(frage):   # Ermöglicht es eine neue Runde anzufangen oder aufzuhören 
    loop=input(frage)       # fragt ob man weiterspielen will
    loop=loop.lower()       # ermöglicht es die antwort gross zu schreiben, und es wird trozdem gezählt
    loop=loop.strip()       # entfernt mögliche leerzeichen etc. vor und nam dem string
    if loop=="ja":      # falls man weiterspielen will, wird das board neu zufällig ausgefüllt und angezeigt
        board_auffüllen()
        spielfeld()
    elif loop=="nein": # falls nicht, hört der ganze code auf
        exit(0) 
    else:           # falls die Eingabe falsch ist, wird sie erneut abgefragt
        print("Falsche Eingabe")
        Wiederspielen("Wollen Sie noch einmal spielen (ja/nein)?")

def Spielen(frage): # ist dazu da um zu entscheiden ob man spielen will, funktioniert gleich wie Wiederspielen, einfach dass die druchgegebene Frage anders ist
    loop=input(frage)
    loop=loop.lower()
    loop=loop.strip()
    if loop=="ja":
        board_auffüllen()
        spielfeld()
    elif loop=="nein":
        exit(0)
    else:
        print("Falsche Eingabe")
        Spielen("Wollen Sie noch einmal spielen (ja/nein)?")

Spielen("Wollen Sie Spielen?(ja/nein)") # fragt ob man spielen will
not_game_over=True  # solange, dass dies True ist, wird das Spiel weitergespielt
o=0 # definiert den Spielzugzähler
while not_game_over:
    o=o+1 # der Spielzugzähler, wird nach jedem zyklus +1 gerechnet 
    print (f'Spielzug {o}') # Gibt die Anzahl $spielzüge an, die man schon gepsielt hat
    Zauswahl=Züberprüfen("Welche Zeile 1-5?") # Zauswahl, ist überprüfte Zahl der eingabe des Benutzers für die Zeile
    Sauswahl=Süberprüfen("Welche Spalte 1-5?") # Sauswahl, für die Spalten
    Wert=board[Zauswahl][Sauswahl] # kopiert den Wert des ausgewählten Feldes, befor es gelöscht wird
    flood_fill(Zauswahl,Sauswahl,board[Zauswahl][Sauswahl],' ') # leert anligende Felder mit dem gleichen Wert
    Verdoppelung(fill()) # Verdoppelt den original Wert
    Auffüllen() # Füllt das Feld erneut auf
    spielfeld() # Zeigt das neue Spielfeld an
    win() # überprüft ob man gewonnen hat, falls ja auch ob man noch einmal spielen will
    lose()  # überprüft ob man verloren hat, falls ja auch ob man noch einmal spielen will

exit(0)