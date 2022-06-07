function addCart() {
    var cart = document.querySelector("#CartDrawer");
    cart.classList.add("active");
    document.querySelector(".background-body").classList.add("active");
    var newCart = document.createElement("div");
    newCart.classList.add("ajaxcart__row");
    // console.log(newCart);
    // console.log(document.querySelector("#qty").value);
    // console.log(document.querySelector("h1.title-head").innerText);
    
    newCart.innerHTML = `\
    <div class="ajaxcart__product cart_product" data-line="1">\
        <div class="cart_image">\
            <img width="80" height="80"\
                src="${document.querySelector(".swiper-container .swiper-wrapper a img").src}"\
                alt="${document.querySelector("h1.title-head").innerText}"> </img>\
        </div>\
        <div class="grid__item cart_info">\
            <div class="ajaxcart__product-name-wrapper cart_name">\
                <p>${document.querySelector("h1.title-head").innerText}</p>\
                <span class="ajaxcart__product-meta variant-title">500.000đ</span>\
            </div>\
            <div class="grid">\
                <div class="grid__item one-half cart_select cart_item_name">\
                    <label class="cart_quantity">Số lượng</label>\
                    <div class="ajaxcart__qty input-group-btn clearfix">\
                        <button type="button"\
                        onclick="var result = this.parentNode.childNodes[3]; var qty = result.value; if( qty > 1 ) result.value--;\
                            this.parentNode.childNodes[3].value = result.value;"\
                            class="ajaxcart__qty-adjust ajaxcart__qty--minus items-count"\
                            data-id="" data-qty="0" data-line="1" aria-label="-">\
                            -\
                        </button>\
                        <input type="text" name="updates[]"\
                            class="ajaxcart__qty-num number-sidebar" maxlength="3" value=${document.querySelector("#qty").value}\
                            min="0" data-id="" data-line="1" aria-label="quantity"\
                            pattern="[0-9]*"> </input>\
                            <button type="button"\
                                onclick=" var result = this.parentNode.childNodes[3]; var qty = result.value; if( !isNaN(qty)) result.value++;"\
                                class="ajaxcart__qty-adjust ajaxcart__qty--plus items-count"\
                                data-id="" data-line="1" data-qty="2" aria-label="+">\
                                +\
                            </button>\
                    </div>\
                </div>\
                <div class="grid__item one-half text-right cart_prices">\
                    <span class="cart-price">5.000.000₫</span>\
                    <a onclick="deleteCartProduct(this)" class="cart__btn-remove remove-item-cart ajaxifyCart--remove"\
                        href="javascript:;" data-line="1">Xóa</a>\
                </div>\
            </div>\
        </div>\
    </div>`;

    var cartTotal = document.querySelector(".CartSideContainer .ajaxcart__inner");
    cartTotal.appendChild(newCart);    
    
}

function closeCart() {
    var cart = document.querySelector("#CartDrawer");
    cart.classList.remove("active");
    document.querySelector(".background-body").classList.remove("active");
}

function swapTabLink() {
    if (this.classList.contains("current")) {

    }
    else {
        var tab = document.querySelectorAll(".tab-link");
        for (i = 0; i < tab.length; i++) {
            tab[i].classList.remove("current");
        }
        this.classList.add("current");
        // if(tab[0].classList.contains("current")){
        //     tab[0].classList.remove("current");
        //     tab[1].classList.add("current");
        // }
        // else {
        //     tab[0].classList.add("current");
        //     tab[1].classList.remove("current");
        // }
    }
}

function swapTab1() {
    var tab = document.querySelectorAll(".tab-link");
    tab[0].classList.add("current");
    tab[1].classList.remove("current");
    var productTab = document.querySelectorAll(".product-tab .tab-content");
    productTab[0].classList.add("current");
    productTab[1].classList.remove("current");
}

function swapTab2() {
    var tab = document.querySelectorAll(".tab-link");
    tab[1].classList.add("current");
    tab[0].classList.remove("current");
    var productTab = document.querySelectorAll(".product-tab .tab-content");
    productTab[1].classList.add("current");
    productTab[0].classList.remove("current");
}

function changeText() {
    check = document.querySelector(".show-more .btn--view-more");
    if (check.classList.contains("active")) {
        check.classList.remove("active");
        var more = document.querySelector(".more-text");
        more.style.display = "block";
        var less = document.querySelector(".less-text");
        less.style.display = "none";
        var contents = document.querySelectorAll(".product-tab .tab-content");
        for (i = 0; i < contents.length; i++) {
            if (contents[i].classList.contains("current")) {
                // console.log([contents[i]]);
                contents[i].children[0].classList.remove("expanded");
                break;
            }
        }
    }
    else {
        check.classList.add("active");
        var more = document.querySelector(".more-text");
        more.style.display = "none";
        var less = document.querySelector(".less-text");
        less.style.display = "block";
        var contents = document.querySelectorAll(".product-tab .tab-content");
        for (i = 0; i < contents.length; i++) {
            if (contents[i].classList.contains("current")) {
                // console.log([contents[i]]);
                contents[i].children[0].classList.add("expanded");
                break;
            }
        }
    }


    // var contents = document.querySelectorAll(".product-tab .tab-content");
    // for(i = 0; i < contents.length; i++){
    //     if(contents[i].classList.contains("current")){
    //         contents[i].classList.add("expanded");
    //     }
    // }
}

function deleteCartProduct(a) {
    // console.log(a);
    while (!a.parentNode.classList.contains("ajaxcart__row")) {
        a = a.parentNode;
    }
    a.parentNode.classList.add("mustDelete");
    document.querySelector(".ajaxcart__row.mustDelete").remove();
}