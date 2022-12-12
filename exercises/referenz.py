matrix = []

zeile = [0, 1, 0]
for i in range(3):
    matrix.append(zeile)

print(matrix)

matrix[1][1] = 0 # nur den Wert in Zeile 1 in der Mitte auf 0 Setzen

print(matrix)
# [1]= zweite zeile [1]= zweite Zahl