var W = W || {};

W.controller = (function(model, view){
  var Tag, Dropdown;

  var init = function() {
    view.init(_handlers);
    model.init(view.getPhotoId())
      .then(function() {
        view.renderBatchTags(model.getTags())
      })
  };

  var _createTag = function(x, y, characterId, photoId) {
    var tag = model.createTag(x, y, characterId, photoId);
    tag.done(function(tag) {
      console.log(tag)
      view.renderTag(tag);
    })
  };

  var _deleteTag = function(id) {
    var tag = model.deleteTag(id)
      .done(function(tag){
        view.removeTag(tag);
      });
  };

  var _showDropdown = function() {
    var characters = model.getCharacters();
    view.renderDropdown(characters);
    view.listenForNewTag();
  }

  var _handlers = {
    showDropdown: _showDropdown,
    createTag: _createTag,
    deleteTag: _deleteTag

  };

  return {
    init: init
  }
}(W.model, W.view))