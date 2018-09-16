/*页面载入完成后，创建复制按钮*/
!function (e, t, a) { 
    /* code */
    var initCopyCode = function(){
      var copyHtml = '';
      copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
      copyHtml += '  <i class="fa fa-globe"></i><span id="sp-copy">点我复制哦～</span>';
      copyHtml += '</button>';
      $(".highlight .code pre").before(copyHtml);
      var result = new ClipboardJS('.btn-copy', {
          target: function(trigger) {
              return trigger.nextElementSibling;
          }
      });
      result.on('success', function(e) {
        console.log(e);
        result.destroy;
        e.clearSelection();
        // document.getElementById("sp-copy").innerHTML = "已复制～";
        // showTooltip(e.trigger, 'Copied!');
    });
    }
    initCopyCode();
  }(window, document);

function showTooltip(elem, msg) {
    elem.setAttribute('class', 'btn-copy tooltipped tooltipped-s');
    elem.setAttribute('aria-label', msg);
}