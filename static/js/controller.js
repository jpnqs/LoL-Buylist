function generateList (champ) {

    var list = document.querySelector("#buyList");
    list.innerHTML = "";

    for (var i in lists[champ]) {
        // create item div
        var item = Creator.new({
            tag: "div",
            attributes: {
                className: "item"
            },
            events: {
                click: function (ev) {
                    if (ev.target.nodeName == "DIV") {
                        buyed(ev.target);
                    } else {
                        buyed(ev.target.parentNode);
                    }
                }
            }
        }).appendTo(list);
        // create item name span
        Creator.new({
            tag: "span",
            attributes: {
                innerHTML: i,
                className: "itemName",
            }
        }).appendTo(item);
        // create item price
        Creator.new({
            tag: "span",
            attributes: {
                innerHTML: lists[champ][i]["price"],
                className: "itemCosts"
            }
        }).appendTo(item);
        // create item image
        Creator.new({
            tag: "img",
            attributes: {
                src: lists[champ][i]["img"],
                width: 50,
                height: 50,
                className: "propImage"
            }
        }).appendTo(item);
    }

}

function buyed (el) {
    if (el.className == "item") {
        el.className = "itemBuyed";
    } else {
        el.className = "item";
    }
}

function champChange () {
    var champ = document.querySelector("#champSelect").value;
    generateList(champ);
}

// internal 
function generateChampSelect () {
    var select = document.querySelector("#champSelect");
    for (var champ in lists) {
        Creator.new({
            tag: "option",
            attributes: {
                value: champ,
                innerHTML: champ
            }
        }).appendTo(select);
    }
}

// initialize function
(function () {
    generateChampSelect();
    champChange();
})();

// on load function
window.onload = function () {
    var url = window.location.href.replace(/\%20/g, " ");
    if (url.match(/\#/)) {
        var champ = url.split(/\#/)[1];
        var select = document.querySelector("#champSelect");
        select.value = champ;
        if (select.value != champ) {
            champChange();
        }
    }
}