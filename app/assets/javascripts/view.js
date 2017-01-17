var W = W || {};

W.view = (function(){
  var $tagger, $body, $img, $imgContainer,
      IMG_TOP, IMG_LEFT, IMG_BOTTOM, IMG_RIGHT,
      _handlers

  var init = function(handlers) {
    _handlers = handlers
    _setDynamicElements();
    _setConstants();
    _setSearchHandlers();
  };

  var moveTagger = function(x, y) {
    // offset to center on cursor
    var leftEdge = x - 50;
    var topEdge = y - 50;

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
    $dropdown.show();
  };

  var listenForNewTag = function() {
    _freezeTagger();
    _attachCancelListener();
  }

  var _freezeTagger = function() {
    $imgContainer.off('mousemove');
    $dropdown.submit(_handlers.createTag);
  };

  var _attachCancelListener = function() {
    $mainImg.off('click');
    $mainImg.click(function(e) {
      moveTagger(e.pageX, e.pageY)
      _setSearchHandlers()
    })
  };

  var _unfreezeTagger = function() {
    $imgContainer.mousemove(_handlers.taggerFollow);
  };

  var _hideDropdown = function() {
    $dropdown.hide();
    $('.character').remove();
  };

  var _setDynamicElements = function() {
    $tagger = $('.tagging-cursor');
    $mainImg = $('.img-container img');
    $body = $('body');
    $imgContainer = $('.img-container');
    $dropdown = $('.dropdown');
  };

  var _setSearchHandlers = function() {
    _unfreezeTagger();
    _hideDropdown();
    $mainImg.off('click');
    $mainImg.click(_handlers.showDropdown);  
    $imgContainer.mousemove(function(e){
      moveTagger(e.pageX, e.pageY)
    })
  };

  var _setFrozenHandlers = function() {
    _freezeTagger();
    _attachCancelListener();
  }

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
    renderDropdown: renderDropdown,
    listenForNewTag: listenForNewTag
  }

}())