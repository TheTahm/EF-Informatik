import random
random.seed(2)
numbers = [2, 4, 8]

board = [
        [2, 128, 128, 8, 8],
        [4, 2, 256, 2, 1],
        [4, 4, 8, 4, 2],
        [2, 8, 1, 4, 1],
        [2, 4, 4, 4, 4]
    ]
    
def spielfeld():
    #Zahlen oben = x
    x = 0
    y = 0
    print ('  ', end='')
    for i in board:
        x = x+1
        print (' ', x, end='')
    print (' ')
    print ('  ', end='')
    #Zahlen seite = y
    for zeile in board:
        for zelle in zeile:
            print(' --', end='')
        print(' ',)
        print (' ', end='')
        y = y+1
        print (y, end='')
        for zelle in zeile:
            print(f'| {zelle}', end='')
        print('|')
        print ('  ', end='')
    for zelle in board[0]:
        print(' --', end='')
    print(' ')

def Süberprüfen(frage):
    valid=True
    while valid:
        try:
            zahl=input(frage)
            zahl = int(zahl)
            zahl = zahl -1
            if zahl<-1 or zahl > 5:
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
            if zahl<-1 or zahl > 5:
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
    global not_game_over
    for y in range(5):
        for x in range(5):
            if board[x][y]==512:
                not_game_over=False

def play(x):
    while not_game_over:
        x=x+1
        print (f'Spielzug {x}')
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
        win()
        spielfeld()

def Spiel():
    x=0
    spielfeld()
    play(x)

    print(f'Sie haben in {x} Zügen gewonnen!')
    exit(0)

Spiel()
'''
    Spiel verloren
    nochmal spielen 
    Abstände klären
    '''