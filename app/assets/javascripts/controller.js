var W = W || {};

W.controller = (function(model, view){
  var Tag, Dropdown;

  var init = function() {
    model.init();
    view.init(_handlers);
  };

  var _createTag = function() {
    // TODO .push(tag) into model if successful creation
    // var tag = new Tag(e.pageX, e.pageY);
    // var tag = model.createTag(x,y); view would find x and y from e
    // view.initTag(tag);
    view.initTag(e);
  };

  var _taggerFollow = function(e) {
    view.moveTagger(e);
  };

  var _showDropdown = function() {
    var characters = model.getCharacters();
    view.renderDropdown(characters);
  }

  var _handlers = {
    showDropdown: _showDropdown,
    createTag: _createTag,
    taggerFollow: _taggerFollow
  };

  return {
    init: init
  }
}(W.model, W.view))