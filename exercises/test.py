ZEILEN = 100
SPALTEN = 100
ZAHL = 1

matrix = []

zeile = []
for i in range(SPALTEN):
    zeile.append(ZAHL)

for i in range(ZEILEN):
    matrix.append(zeile)
 

for l in matrix:
    print(l) # => [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]