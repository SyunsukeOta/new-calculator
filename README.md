# new-calculator
![image](https://user-images.githubusercontent.com/26402438/77137853-ed871f80-6ab2-11ea-8b99-3e0feec43ee4.png)

curr 最新の数字
prev 一つ前の数字
equa
calc 演算子の番号
message ディスプレイに表示させる数字、文字
## num(n)
equa==1->curr=0,equa=0
curr=curr*10+n
message=String(curr)

## cal(c)
calc!=0->viewAns()
changeNum(c)
calc=c

## ans
curr!=0&&prev!=0->viewAns()
equa=1

## reset
curr=0
prev=0
calc=0
message='0'
equa=0

## changeNum(c)
prev=curr
curr=0
switch(c) {
  message:1->'+',2->'-',3->'x',4->'÷'
}

## viewAns
curr=changeCal()
prev=0
calc=0
message=curr

## changeCal
switch(calc) {
  return prev(1:+,2:-,3:*,4:/)curr
}