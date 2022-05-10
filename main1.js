let number;
tong = 1;
while(number != -1){
    number = parseFloat(prompt('Nhập vào số :'))
    tong = tong + number;
}
document.write(`Tổng các số vừa nhập là ${tong}`)