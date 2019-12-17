(function(window, document, $) {
    function Game2048(opt) {
        var prefix = opt.prefix, len = opt.len, size = opt.size, margin = opt.margin;
        var view = new view(prefix, len , size, margin);
    }
    window['Game2048'] = Game2048;
}) (window, document, jQuery);

function View(prefix, len, size, margin) {
    this.prefix = prefix;
    this.len = len;
    this.size = size;
    this.margin = margin;
    this.container = $('#' + prefix + '_container');
    var containerSize = len * size * margin * (len + 1);
    this.container.css({width: containerSize , height: containerSize});
    this.nums = {};
}