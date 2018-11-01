import pymysql
db=pymysql.connect('localhost','root','long159','mcgoods')
cursor=db.cursor()
import json
# path = '../static/json/lunbo.json'
path = '../static/json/goodsinfo.json'

#
# a = open(path, 'r', encoding='utf8')
# b = a.read()
# b = json.loads(b)
# a= 0
# # print(b)
# for j in b:
#     a+=1
#     #     try:
#     cursor.execute('insert into App_lunbo  values (%s,%s)',[a,j['img']])
# db.commit()