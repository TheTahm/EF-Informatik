a=0
board = [
        [2, 4, 1, 8, 8],
        [4, 2, 8, 2, 1],
        [4, 4, 8, 4, 2],
        [2, 8, 1, 4, 1],
        [2, 4, 4, 4, 4]
    ]
def Spielfeld():

    for zeile in board:
        for zelle in zeile:
            print(' -', end='') # Das es keinen abstand macht
        print(' ')
        for zelle in zeile:
            print(f'|{zelle}', end='') #f steht für das Format, dass man nicht mit + arbeiten muss.
        print('|')

    for zelle in board[0]:
        print(' -', end='')
    print(' ')      
    for zelle in board[0]:
        global a
        a=a+1
        print('',a, end='')
        
    print(' ')
Spielfeld()

def Zeilenauswahl(raw):
    raw=raw.strip()
    try:
        Zeilenzahl = int(raw)
        if Zeilenzahl>5:
            raise ("Zahl zu gross!")
        return int[Zeilenzahl]
    except:
        return False

def Spaltenauswahl(raw):
    raw=raw.strip()
    try:
        Spaltenzahl = int(raw)
        if Spaltenzahl>5:
            raise ("Zahl zu gross!")
        return int[Spaltenzahl]
    except:
        return False

Zauswahl=input("Welche Zeile?")
Sauswahl=input("Welche Spalte?")

#Zeilenauswahl(Zauswahl)
#Spaltenauswahl(Sauswahl)

Sauswahl=int(Sauswahl)
Zauswahl=int(Zauswahl)
board[Zauswahl][Sauswahl]= ' '
print (board)
Spielfeld()

#Spaltenauswahl=input("Welche Spalte?")
