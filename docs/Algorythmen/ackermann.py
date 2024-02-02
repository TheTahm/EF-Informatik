import random
def ack(m,n):
    if m==0:
        answer = n+1
    else:
        if n==0:
            answer=ack(m-1,1)
        else:
            answer = ack(m-1,ack(m,n-1))
    return answer

m=random.randint(1,4)
n=random.randint(1,4)
print (m, n, ack(m,n))
# Benötigt einen Stack, damit in jedem Frame separate Variablen speicherbar sind. Limit der Rekursionstiefe auf 1000
# import sys
# sys.setrecursionlimit(999999)