function generateList (champ) {

    var list = document.querySelector("#buyList");
    list.innerHTML = "";

    for (var i in lists[champ]) {
        var item = document.createElement("div");
        var span = document.createElement("span");
        span.innerHTML = i;
        span.className = "itemName";
        item.appendChild(span);
        span = document.createElement("span");
        span.innerHTML = lists[champ][i]["price"];
        span.className = "itemCosts";
        item.appendChild(span);
        item.className = "item";
        item.addEventListener("click", function (ev) {
            if (ev.target.nodeName == "DIV") {
                buyed(ev.target);
            } else {
                buyed(ev.target.parentNode);
            }
        });
        var img = new Image();
        img.src = lists[champ][i]["img"];
        img.width = 50;
        img.height = 50;
        img.className = "propImage";
        item.appendChild(img);
        list.appendChild(item);
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
        var option = document.createElement("option");
        option.value = champ;
        option.innerHTML = champ;
        select.appendChild(option);
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