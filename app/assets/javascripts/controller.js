var W = W || {};

W.controller = (function(model, view){
  var Tag, Dropdown;

  var init = function() {
    view.init(_handlers);
    model.init(view.getPhotoId());
  };

  var _createTag = function(x, y, characterId, photoId) {
    var tag = model.createTag(x, y, characterId, photoId);
    tag.done(function(tag) {
      console.log(tag)
      view.renderTag(tag);
    })
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