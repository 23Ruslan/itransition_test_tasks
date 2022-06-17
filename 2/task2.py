import os
import hashlib

allNames = os.listdir()
list1=[]
for i in range(len(allNames)):
    fileName = allNames[i]
    with open(fileName, 'rb') as f:
        hsh = hashlib.sha3_256()
        while True:
            data = f.read(2048)
            if not data:
                break
            hsh.update(data)
        if fileName != "task2.py" and fileName != "desktop.ini": print(fileName, hsh.hexdigest())
        if fileName != "task2.py" and fileName != "desktop.ini": list1.append(hsh.hexdigest())
print(list1)
list1.sort()
print(list1)
print("".join(list1))