var W = W || {};

W.view = (function(){
  var $tagger, $body, $img, $imgContainer,
      IMG_TOP, IMG_LEFT, IMG_BOTTOM, IMG_RIGHT

  var init = function(handlers) {
    _setDynamicElements();
    _setConstants();
    _setHandlers(handlers);
  };

  var moveTagger = function(e) {
    // offset to center on cursor
    var leftEdge = e.pageX - 50;
    var topEdge = e.pageY - 50;

    $tagger.css({ left: leftEdge, top: topEdge})
    $dropdown.css({ left: leftEdge, top: topEdge + 100})
  };

  var initTag = function() {
    var $tag = $('<div>')
      .addClass('tag new-tag')
      .css({
        top: $('.tagging-cursor').css('top'),
        left: $('.tagging-cursor').css('left')
      })
    $imgContainer.append($tag)
  };

  var renderDropdown = function(characters) {
    characters.forEach(function(character) {
      var $li = $('<li>');
      $li.addClass('character');
      $li.text(character);
      $dropdown.append($li);
    })
    $dropdown.show()
  };

  var _setDynamicElements = function() {
    $tagger = $('.tagging-cursor');
    $mainImg = $('.img-container img');
    $body = $('body');
    $imgContainer = $('.img-container');
    $dropdown = $('.dropdown');
  };

  var _setHandlers = function(handlers) {
    $mainImg.click(handlers.showDropdown);  
    $dropdown.submit(handlers.createTag);
    $imgContainer.mousemove(handlers.taggerFollow)
  };

  var _setConstants = function() {
    IMG_TOP = $mainImg.offset().top;
    IMG_BOTTOM = $mainImg.offset().top + $mainImg.height();
    IMG_LEFT = $mainImg.offset().left;
    IMG_RIGHT = $mainImg.offset().left + $mainImg.width();
  }

  return {
    init: init,
    moveTagger: moveTagger,
    initTag: initTag,
    renderDropdown: renderDropdown
  }

}())