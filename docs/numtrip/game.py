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

def Feldauswahl():
    Zauswahl=input("Welche Zeile?")
    Sauswahl=input("Welche Spalte?")
    try:
        Sauswahl=int(Sauswahl)
        Zauswahl=int(Zauswahl)
        Zauswahl<=5
        Sauswahl<=5
        board[Zauswahl-1][Sauswahl-1]= ' '
        Spielfeld()
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

Feldauswahl()

#Spaltenauswahl=input("Welche Spalte?")
