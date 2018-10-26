#name="xiaoming"
#echo $name
#num=20
#echo $num
#echo "his name is ${name}"


#url="http://www.baidu.com"
#readonly url
#url="http://www.163.com"


#url="http://ww.baidu.com"
#unset url
#echo $url


#name='xiaoming \n \" good'
#echo $name
#name2="zhangsan \t 666 \n"
#echo $name2

#str1="hello"
#str2="world"
#echo $str1 $str2

#echo ${#str1}

#echo ${str1:1:3}

#echo `expr index $str1 o`


arr1=(1 2 3 4 5 6)
echo $arr1

arr2=(
"a"
"b"
"c"
)
echo $arr2
echo ${arr2[@]}
echo ${arr2[1]}

echo ${#arr2[1]}

funWithReturn(){
    echo "输入第一个数字: "
    read aNum
    echo "输入第二个数字: "
    read anotherNum
    return $(($aNum+$anotherNum))
}
funWithReturn
echo  $?
