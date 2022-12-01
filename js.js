// 获取数值
// let num = document.querySelectorAll('.table_td')
let num = document.querySelectorAll('.table_td')
let str = document.querySelectorAll('#Str')
let text = document.querySelector('.center_bottom')
// console.log(nums);
// let nums = Number(num)

// 数字键
function getNamer() {
    for (let i = 0; i <= num.length; i++) {
        num[i].addEventListener('click', function () {

            if (num[i].value !== str[i].values) {
                text.value = num[i].text
                console.log(12);


            } else {
                text.value += num[i].text

            }

        })

    }
}
getNamer()


