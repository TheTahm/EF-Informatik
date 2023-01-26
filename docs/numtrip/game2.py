import random

numbers = [2, 4, 8]
board = []

def board_auffüllen():
    global board
    board = [
        [random.choice(numbers),random.choice(numbers), random.choice(numbers), random.choice(numbers), random.choice(numbers)],
        [random.choice(numbers),random.choice(numbers), random.choice(numbers), random.choice(numbers), random.choice(numbers)],
        [random.choice(numbers),random.choice(numbers), random.choice(numbers), random.choice(numbers), random.choice(numbers)],
        [random.choice(numbers),random.choice(numbers), random.choice(numbers), random.choice(numbers), random.choice(numbers)],
        [random.choice(numbers),random.choice(numbers), random.choice(numbers), random.choice(numbers), random.choice(numbers)]
    ]

def spielfeld():
    #Zahlen oben = x
    x = 0
    y = 0
    print (' ', end='')
    for i in board:
        x = x+1
        print ('  ', x, end='')
    print (' ')
    print ('  ', end='')
    #Zahlen seite = y
    for zeile in board:
        for zelle in zeile:
            print(' ---', end='')
        print(' ',)
        print (' ', end='')
        y = y+1
        print (y, end='')
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

def Züberprüfen(frage):
    valid=True
    while valid:
        try:
            zahl=input(frage)
            zahl = int(zahl)
            zahl = zahl -1
            if zahl<0 or zahl > 4: #Warum Funktioniert 5 als Zahl bei <5?
                raise 
            return zahl
        except:
            print ('Fehlerhafte Eingabe')

def flood_fill(x ,y, old, new):
    if x < 0 or x >= len(board[0]) or y < 0 or y >= len(board):
        return
    if board[x][y] != old:
        return
    board[x][y] = new
    flood_fill(x+1, y, old, new)
    flood_fill(x-1, y, old, new)
    flood_fill(x, y+1, old, new)
    flood_fill(x, y-1, old, new)

def fill(c, d, e):
    global Feld
    for i in range(5):
        if d >= 5:
            return
        for i in range(5):
            if (board[c][d]) == ' ':
                e = e+1
                Feld = e
            c = c-1
        d = d+1
        c = 4

def Auffüllen(a,b):
    for i in range(25):
        if b>=5:
            b=0
        Zeilen=4
        for i in range (5):
            if (board[a][b])==' ':
                a=a-1
                board[Zeilen][b]=board[a][b]
                board[a][b]=' '
            Zeilen=Zeilen-1
            a=Zeilen
        if board[a][b]==' ':
            board[a][b] = random.choice(numbers)
        b=b+1
        a=4

def win():
    global o
    for y in range(5):
        for x in range(5):
            if board[x][y]==128:
                print (f'Sie haben in {o} Zügen gewonnen!')
                o=0
                Wiederspielen("Wollen Sie noch einmal spielen (ja oder nein)?")

def lose():
    global o            #globaler Spielzugzähler
    a=0
    for y in range(5): # y ist die Zeilenzahl
        for x in range(5): # x ist die Spaltenzahl
            z=0         #z muss bei jedem neuen Feld 0 gesetzt werden
            if x!=4:
                if board[x+1][y]!=board[x][y]:
                    z=z+1
            else:
                z=z+1
            if x!=0:
                if board[x-1][y]!=board[x][y]:
                    z=z+1
            else:
                z=z+1
            if y!=4:
                if board[x][y+1]!=board[x][y]:
                    z=z+1
            else:
                z=z+1
            if y!=0:
                if board[x][y-1]!=board[x][y]:
                    z=z+1
            else:
                z=z+1
            if z==4:
                a=a+1
    if a==25:
        print (f'Sie haben in {o} Zügen veloren!') # printed die Anzahl Spielzüge aus
        o=0     # resettet den Spielzugzähler
        Wiederspielen("Wollen Sie noch einmal spielen (ja oder nein)?") #Nachdem man verloren hat kann man eine neue Runde anfangen oder aufhören

def Wiederspielen(frage):
    global not_game_over
    loop=input(frage)
    loop=loop.lower()
    loop=loop.strip()
    if loop=="ja":
        not_game_over=True
        board_auffüllen()
        spielfeld()
    elif loop=="nein":
        exit(0)
    else:
        print("Falsche Eingabe")
        Wiederspielen("Wollen Sie noch einmal spielen (ja oder nein)?")

board_auffüllen()
spielfeld()
not_game_over=True
o=0
while not_game_over:
    o=o+1
    print (f'Spielzug {o}')
    Zauswahl=Züberprüfen("Welche Zeile 1-5?")
    Sauswahl=Süberprüfen("Welche Spalte 1-5?")
    Wert=board[Zauswahl][Sauswahl]
    flood_fill(Zauswahl,Sauswahl,board[Zauswahl][Sauswahl],' ')
    Spalte=0
    Zeile=4
    Feld=0
    fill(Zeile,Spalte,Feld)
    if Feld > 1:
        board[Zauswahl][Sauswahl] = Wert*2
    else:
        board[Zauswahl][Sauswahl] = Wert
    Auffüllen(Zeile,Spalte)
    spielfeld()
    win()
    lose()

exit(0)