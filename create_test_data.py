import xlsxwriter
from datetime import datetime, timedelta
import random

# 创建测试数据
workbook = xlsxwriter.Workbook('test_stock_data.xlsx')
worksheet = workbook.add_worksheet()

# 写入表头
worksheet.write(0, 0, '日期')
worksheet.write(0, 1, '收盘价')

# 生成100天的测试数据
start_date = datetime(2024, 1, 1)
base_price = 100

for i in range(100):
    date = start_date + timedelta(days=i)
    # 随机价格波动
    price = base_price + random.uniform(-10, 10)
    base_price = price

    worksheet.write(i + 1, 0, date.strftime('%Y-%m-%d'))
    worksheet.write(i + 1, 1, round(price, 2))

workbook.close()
print("测试文件已创建: test_stock_data.xlsx")
