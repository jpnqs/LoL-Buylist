var Creator = {
    new: function ({tag, attributes, events}) {
        var el = document.createElement(tag);
        
        this.assign(el, attributes);
        this.events(el, events);

        el.appendTo = function (el) {
            if (typeof el == "string") {
                el = document.getElementById(el);        
            }
            el.appendChild(this);
            return this;
        }

        return el;
    },
    assign: function (el, attribs) {

        for (var a in attribs) {
            var val = attribs[a];
            if (a == "style") {
                for (var style in val) {        
                    el.style[style] = val[style];
                }
            } else {
                el[a] = val;
            }
        }

        return el;
    },
    events: function (el, events) {
        for (var e in events) {
            el.addEventListener(e, function (ev) {
                events[e](ev);
            });
        }
        return el;
    }
}