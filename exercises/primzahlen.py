start = 2
end = 100
prime_zahl=[]
for i in range(start, end+1): 
  if i>1: 
    for j in range(2,i): 
        if(i % j==0): 
            break
    else: 
        prime_zahl.append(i)
print(prime_zahl)