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

var sabad = document.querySelector('.sabad')
var container = document.querySelector('.container')
var colll = document.querySelector('.colll')
var listProduct = document.querySelector('.list')
var empty = document.querySelector('.empty')
// add products to dom ======================================================================
var row = document.querySelector('.product-container')
let i 
for (i = 0; i < obj.length; i++) {         
    row.innerHTML += `
        <div class="col-12 col-sm-12 col-md-6 col-lg-3 px-3 ${obj[i].id}">
            <div class="box boxes-in-list py-3 px-2 rounded-3">
                <img src="${obj[i].img}" alt="">
                <h4 class="name mt-4 fw-bold second-color">${obj[i].name}</h4>
                <p class="price">${obj[i].price} هزار تومان</p>
                <button class="btn btn-primary first-bgcolor border-0" onclick= "">افزودن به سبد خرید</button>
            </div>
        </div>
    `
    var boxesInList = document.querySelectorAll('.boxes-in-list')            
}

// click buttons ===========================================================================
var btns = document.querySelectorAll('.btn')
btns.forEach((btn , z) => {
    btn.addEventListener('click' , function(){
        
        //add products to my basket =====================================================
        empty.innerHTML = 'لیست محصولات شما'
        btn.innerHTML = 'محصول افزوده شد'
        listProduct.innerHTML += `
        <div class="row">
            <div class="d-flex justify-content-between align-items-center box-li mb-1 px-3 ${obj[z].id}">
                <span class="name-product">${obj[z].name}</span>
                <span class="price-product">${obj[z].price}</span>
                <span class="count-product d-flex justify-content-center align-items-center">
                    <i class="mdi mdi-menu-right"></i>
                    <span class="nums" > 1 </span> 
                    <i class="mdi mdi-menu-left"></i>
                </span>
                <span class="delete-product mdi mdi-close"></span>
            </div>
        </div>
        `

        //Calculate the total price ======================================================
        var priceProducts = document.querySelectorAll('.price-product')
        var totalProduct1 = document.querySelector('.total-box-asli')
        var sum = 0
        priceProducts.forEach(elem => {
            sum += parseInt(elem.innerHTML)
            totalProduct1.innerHTML = sum
        });

        //No access to the button after adding products ===================================
        boxesInList.forEach(oneBox => {
            if (btn.parentElement.children[1].innerHTML == oneBox.children[1].innerHTML) {
                btn.innerHTML = 'محصول افزوده شد'
                btn.classList.add('disabled')
            }
        });

        // delete products =============================================
        var zarbHa = document.querySelectorAll('.delete-product')
        zarbHa.forEach( zarb =>{
            var totalProduct1 = document.querySelector('.total-box-asli')
            zarb.addEventListener('click' , function(){
                totalProduct1.innerHTML = parseInt(totalProduct1.innerHTML) - parseInt(zarb.parentElement.children[1].innerHTML)
                zarb.parentElement.remove()
                btns.forEach(btn => {
                    if (btn.parentElement.children[1].innerHTML == zarb.parentElement.children[0].innerHTML) {
                        btn.innerHTML = 'افزودن به سبد خرید'
                        btn.classList.remove('disabled')
                    }
                });
            })
        })

        //right arrow =====================================================
        var rights = document.querySelectorAll('.mdi-menu-right')
        rights.forEach((right ,i) => {
            right.addEventListener('click' , function(){
                var jRight = right.parentElement.children[1].innerHTML++
                right.parentElement.parentElement.children[1].innerHTML = (right.parentElement.parentElement.children[1].innerHTML * (jRight+1))/ jRight
                // for sum in total price ==================================================
                let tot = 0
                var priceProducts = document.querySelectorAll('.price-product')
                priceProducts.forEach(elm => {
                    tot += parseInt(elm.innerHTML)
                    totalProduct1.innerHTML = tot
                    console.log(totalProduct1);
                });         
            })
        });

        //left arrow ============================================================
        var lefts = document.querySelectorAll('.mdi-menu-left')
        lefts.forEach((left ,p) => {
            left.addEventListener('click' , function(){
                var jLeft = left.parentElement.children[1].innerHTML--
                left.parentElement.parentElement.children[1].innerHTML = (left.parentElement.parentElement.children[1].innerHTML *  (jLeft-1)) /  jLeft 
                // for tafriq in total price ==================================================
                let tot2 = 0
                var priceProducts = document.querySelectorAll('.price-product')
                priceProducts.forEach(elm => {
                    tot2 += parseInt(elm.innerHTML)
                    totalProduct1.innerHTML = tot2
                    console.log(totalProduct1);

                });                    
            })
        });
    })
});
// js for header =============================================================================
var sabadListContainer = document.querySelector('.sabad-list')
sabad.addEventListener('click' , function(){
    sabadListContainer.classList.toggle('active')
})
var closeList = document.querySelector('.close-list')
closeList.addEventListener('click' , function(){
    sabadListContainer.classList.toggle('active')
})