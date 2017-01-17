var W = W || {};

W.model = function() {

  var init = function() {
    _characters = [
      { id: 0, name: 'waldo' },
      { id: 1, name: 'wenda' },
      { id: 2, name: 'odlaw' },
      { id: 3, name: 'woof' },
      { id: 4, name: 'wizard whitebeard' },
    ];
  };

  var getCharacters = function() {
    return _characters;
  };

  var createTag = function(x, y, id) {
    var tag = new _Tag(x, y, id)
    // _saveTag(tag);
    _tags.push(tag);
    return tag;
  }

  var _characters, _tags = [];

  var _Dropdown = function Dropdown(items, top, left) {
    this.items = items;
    this.top = top;
    this.left = left;
  };

  var _Tag = function Tag(x, y, id) {
    this.x = x;
    this.y = y;
    this.characterId = id;
    this.getCharacter = function() {
      return _findCharacter(id);
    }
  };

  var _findCharacter = function(id) {
    return _characters.filter(function(character) {
      return character.id === id;
    })[0];
  };

  return {
    getCharacters: getCharacters,
    init: init,
    createTag: createTag
  }

}();