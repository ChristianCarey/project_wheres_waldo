var W = W || {};

W.controller = (function(model, view){
  var Tag, Dropdown;

  var init = function() {
    _setConstructors();
    view.init(_handlers);
  };

  var _setConstructors = function() {
    Tag = model.Tag;
    Dropdown = model.Dropdown;
  }

  var _createTag = function(e) {
    // TODO .push(tag) into model if successful creation
    // var tag = new Tag(e.pageX, e.pageY);
    view.initTag(e);
  };

  var _taggerFollow = function(e) {
    view.moveTagger(e);
  };

  var _handlers = {
    createTag: _createTag,
    taggerFollow: _taggerFollow
  };

  return {
    init: init
  }
}(W.model, W.view))