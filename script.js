// create object for products ================================================================
var obj = [
    {
        id: 'women' ,
        name : 'ادکلن زنانه',
        price : 7200, 
        img : 'assets/ادکلن زنانه.jpg'
    },
    {
        id: 'men' ,
        name : 'ادکلن مردانه',
        price : 15000, 
        img : 'assets/ادکلن مردانه.jpg'
    },
    {
        id: 'powder' ,
        name : 'کرمپودر مک',
        price : 74000, 
        img : 'assets/کرمپودر مک.jpg'
    },
    {
        id: 'water' ,
        name : 'آبرسان بیو آکوا',
        price : 6900, 
        img : 'assets/آبرسان.jpg'
    },
    {
        id: 'lipMask' ,
        name : 'ماسک لب مک',
        price : 3900, 
        img : 'assets/ماسک لب.jpg'
    },
    {
        id: 'lipGloss' ,
        name : 'رژ لب گلدن رز',
        price : 93000, 
        img : 'assets/گلدن.jpg'
    },
    {
        id: 'gooneh' ,
        name : 'رژ گونه هدی بیوتی',
        price : 110000, 
        img : 'assets/گونه.jpg'
    },
    {
        id: 'pankek' ,
        name : 'پنکک لورئال',
        price : 80000, 
        img : 'assets/پنکک.jpg'
            
    }
]

// add products to dom ======================================================================
var row = document.querySelector('.row')
let i 
for (i = 0; i < obj.length; i++) {         
    row.innerHTML += `
        <div class="box boxes-in-list col-md-3 col-sm-6 rounded-3 ps-md-3 pe-md-3 pt-md-4 pb-md-4 ${obj[i].id}">
            <img src="${obj[i].img}" alt="">
            <h4 class="name mt-4 fw-bold">${obj[i].name}</h4>
            <p class="price">${obj[i].price} هزار تومان</p>
            <button class="btn btn-primary" onclick= "">افزودن به سبد خرید</button>
        </div>
    `
    var boxesInList = document.querySelectorAll('.boxes-in-list')            
}