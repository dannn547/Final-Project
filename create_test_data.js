const XLSX = require('xlsx');
const fs = require('fs');

// 生成测试数据
const data = [];
data.push(['日期', '收盘价']);

let basePrice = 100;
const startDate = new Date(2024, 0, 1); // 2024-01-01

for (let i = 0; i < 100; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const dateStr = `${year}-${month}-${day}`;

    // 随机价格波动
    const price = basePrice + (Math.random() - 0.5) * 20;
    basePrice = price;

    data.push([dateStr, parseFloat(price.toFixed(2))]);
}

// 创建工作簿
const ws = XLSX.utils.aoa_to_sheet(data);
const wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

// 保存文件
XLSX.writeFile(wb, 'test_stock_data.xlsx');
console.log('测试文件已创建: test_stock_data.xlsx');
