import math
def prng(x):
	return int(str(x*x)[:2])
name = input("Please enter fullname:\n[####] ")
name = name.upper()
number = 50
time =  math.ceil(number/len(name))
rs=[]
print("Length name: %d" %time)
for i in name:
	rs.append(prng(ord(i)))
for i in range(1,time):
	for j in reversed(range(1,len(name)+1)):
		rs.append(rs[i*len(name)-j])
rs = rs[:number]
rs = sorted(rs)
print(rs)
