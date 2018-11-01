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