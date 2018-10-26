val=`expr 1 + 2`
echo "两数之和为 : $val"
a=20
b=30
val=`expr $a + $b`
echo "a + b : $val"

val=`expr $a \* $b`
echo "a * b : $val"

if [ $a -gt $b ]
then
    echo "a大于b"
else
   echo "a小于b"
fi

if(($a>$b))
then
    echo "ture"
else
    echo "false"
fi

printf "%-10s %-8s %-4s\n" 姓名 性别 体重kg  
printf "%-10s %-8s %-4.2f\n" 张三 男 66.1234 
printf "%-10s %-8s %-4.2f\n" 李四 男 48.6543

cd /bin
if test -e ./bash
then
    echo '文件已存在!'
else
    echo '文件不存在!'
fi
echo '输入 1 到 4 之间的数字:'
echo '你输入的数字为:'
read aNum
case $aNum in
    1)  echo '你选择了 1'
    ;;
    2)  echo '你选择了 2'
    ;;
    3)  echo '你选择了 3'
    ;;
    4)  echo '你选择了 4'
    ;;
    *)  echo '你没有输入 1 到 4 之间的数字'
    ;;
esac

for str in 'This is a string'
do
    echo $str
done

int=1
while(( $int<=5 ))
do
    echo $int
    let "int++"
done

demo()
{
	echo 'hello world'
}
demo

arg()
{
	echo $1
	echo $2
	echo $#
	echo $*
	return 123
}
arg 1 2
echo $?

funWithReturn(){
    echo "输入第一个数字: "
    read aNum
    echo "输入第二个数字: "
    read anotherNum
    return $(($aNum+$anotherNum))
}
funWithReturn
echo  $?
