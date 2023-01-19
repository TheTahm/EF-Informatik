a=0
board = [
        [2, 4, 1, 8, 8],
        [4, 2, 8, 2, 1],
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

spielfeld()
def Süberprüfen(S):
    try:
        zahl = int(S)
        zahl = zahl -1
        if zahl > 5:
            raise
        return zahl
    except:
        print ('Fehlerhafte Eingabe')
        zahl = input('Welches Spalte 1-5?')
        zahl = Züberprüfen(zahl)

def Züberprüfen(Z):
    try:
        zahl = int(Z)
        zahl = zahl -1
        if zahl > 5:
            raise
        return zahl
    except:
        print ('Fehlerhafte Eingabe')
        zahl = input('Welches Zeile 1-5?')
        zahl = Züberprüfen(zahl)

def Feldauswahl():
    global Zauswahl
    global Sauswahl
    try:
        Sauswahl=int(Sauswahl)
        Zauswahl=int(Zauswahl)
        if not Zauswahl<=5:
            raise 'neee nicht mit mir'
        if not Sauswahl<=5:
            raise
        Sauswahl=Sauswahl-1
        Zauswahl=Zauswahl-1
        flood_fill(Sauswahl,Zauswahl,board[Zauswahl][Sauswahl],' ')
        fill(Sauswahl,Zauswahl,)
        spielfeld()
    except:
        print("Ungültige Eingabe!")
        Zauswahl=input("Welche Zeile?")
        Sauswahl=input("Welche Spalte?")
        Feldauswahl()

def flood_fill(x ,y, old, new):
    if x < 0 or x >= len(board[0]) or y < 0 or y >= len(board):
        return
    if board[y][x] != old:
        return
    board[y][x] = new
    flood_fill(x+1, y, old, new)
    flood_fill(x-1, y, old, new)
    flood_fill(x, y+1, old, new)
    flood_fill(x, y-1, old, new)

def fill(x,y,old):
    if x < 0 or x >= len(board[0]) or y < 0 or y >= len(board):
        return
    if board[y][x] != old:
        return
    board[y][x] = old*2


while True:
    Zauswahl=input("Welche Zeile 1-5?")
    Sauswahl=input("Welche Spalte 1-5?")
    Zauswahl=Züberprüfen(Zauswahl)
    Sauswahl=Süberprüfen(Sauswahl)
