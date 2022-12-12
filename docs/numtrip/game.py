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
Zauswahl=input("Welche Zeile?")
Sauswahl=input("Welche Spalte?")

def Feldauswahl():
    global Zauswahl
    global Sauswahl
    try:
        Sauswahl=int(Sauswahl)
        Zauswahl=int(Zauswahl)
        Zauswahl<=5
        Sauswahl<=5
        Sauswahl=Sauswahl-1
        Zauswahl=Zauswahl-1
        flood_fill(Sauswahl,Zauswahl,board[Zauswahl][Sauswahl],' ')
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

Feldauswahl()