

def horizontal(zahl):
    for i in range(zahl):
        print("*", end='')
    print(' ')

def vertikal(zahl,zahl_2):
    for i in range(zahl_2):
        print('*'+' ' * (zahl-2) + '*')

def rechteck(zahl,zahl_2):
    horizontal(zahl)
    vertikal(zahl,zahl_2)
    horizontal(zahl)

rechteck(10, 5)