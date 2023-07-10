for i in range(101,201):
    rev = 0
    temp = i
    while i != 0:
        rev = i%10 + rev*10
        i = i//10
    sum = 1+ (rev%9 -1)
    if(temp == rev and sum == 7):
        print(rev)