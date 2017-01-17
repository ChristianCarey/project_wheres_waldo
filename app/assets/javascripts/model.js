var W = W || {};

W.model = function() {

  var init = function(photoId) {
    _fetchCharacters(photoId).done(function(characters) {
      _characters = characters;
    })
  };

  var getCharacters = function() {
    return _characters;
  };

  var createTag = function(x, y, characterId, photoId) {
    var tagData = {
          character_id: characterId,
          photo_id: photoId,
          x: x,
          y: y
        }
    _toggleTagged(characterId);
    return $.ajax({
      method: 'POST',
      data: { "tag": tagData },
      url: '/tags.json',
      error: function(err) {
        console.log(err)
      }
    })
  }

  var _characters, _tags = [];

  var _toggleTagged = function(characterId) {
    var character = _findCharacter(characterId);
    character.tagged = !character.tagged;
  };

  var _fetchCharacters = function(photoId) {
    return $.get('/photos/' + photoId + "/characters.json");
  }

  var _Dropdown = function Dropdown(items, top, left) {
    this.items = items;
    this.top = top;
    this.left = left;
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