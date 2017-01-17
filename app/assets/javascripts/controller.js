var W = W || {};

W.controller = (function(model, view){
  var Tag, Dropdown;

  var init = function() {
    model.init();
    view.init(_handlers);
  };

  var _createTag = function(x, y, characterId) {
    var tag = model.createTag(x, y, characterId);
    view.renderTag(tag);
  };

  var _showDropdown = function() {
    var characters = model.getCharacters();
    view.renderDropdown(characters);
    view.listenForNewTag();
  }

  var _handlers = {
    showDropdown: _showDropdown,
    createTag: _createTag,

  };

  return {
    init: init
  }
}(W.model, W.view))