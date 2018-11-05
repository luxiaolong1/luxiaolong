# import pymysql
# db=pymysql.connect('localhost','root','long159','mcgoods')
# cursor=db.cursor()
# import json
# # path = '../static/json/lunbo.json'
# path = '../static/json/lunbo.json'
#
# a = open(path, 'r', encoding='utf8')
# b = a.read()
# b = json.loads(b)
# c= 0
# # 轮播图
# # print(b)
# for j in b:
#     c+=1
#
#     cursor.execute('insert into App_lunbo  values (%s,%s)',[c,j['img']])
#     db.commit()
#
# #特惠专选 今日精选
# # for j in b:
# #     c += 1
# #     cursor.execute('insert into App_special values (%s,%s,%s,%s,%s,%s)',[c,j['part'],j['bg_img'],j['htwo'],j['spano'],j['menoy']])
# #     db.commit()
# cursor.close()
# db.close()

#
import pymysql
db=pymysql.connect('localhost', 'root', 'long159', 'mcgoods' )
cursor=db.cursor()
import json

path = '../static/json/goodsinfo.json'
aopen = open(path, 'r', encoding='utf8')
bre = aopen.read()
c = 0
bre = json.loads(bre)
a=bre[0]
# print(len(a))
# print(a.values())
lb = ['goodsid',"path1","path2","name","active",'shipment','menoy','oldmenoy','standard','choosecolor','img','imgt','sall','smallimg','aveimg','bigimg','doodsname','introduceimg','type','otherbarnd']
for i in bre:
    listi=[c]
    c+=1
    for j in i.values():
        listi.append(str(j))
    # try:
    cursor.execute('insert into App_goodsinfo values (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,)',listi)
    # except:
    #     print(listi)
# for i in bre:
#     c += 1
#     for j in lb:
#         if type(i[j]) is str or type(i[j]) is int:
#             cursor.execute('insert into App_goodsinfo values (%s,%s)',[c,i[j]])
#         if type(i[j][0]) is not dict:
#             stru = i[j]
#             stre = ''
#             for x in range(len(stru)):
#                 stre  += ('#'+stru[x])
#                 cursor.execute('insert into App_goodsinfo values (%s,%s)',[c,stre])
#         else:
#             dic = i[j][0]
#             strm = ''
#             for y in range(len(dic[0])):
#                 strm += ('#'+dic[0][y])
#             strm += ('#'+dic[1])
#             cursor.execute('insert into App_goodsinfo values (%s,%s)',[c,strm])


    db.commit()
cursor.close()
db.close()
