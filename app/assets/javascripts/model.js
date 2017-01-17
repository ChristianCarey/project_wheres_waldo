var W = W || {};

W.model = function() {

  var init = function(photoId) {
    PHOTO_ID = photoId;
    return $.when(_fetchCharacters(photoId).done(function(characters) {
      _characters = characters;
    }),
    _fetchTags(photoId).done(function(tags) {
      _tags = tags
    }))
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
    var url = '/photos/' + PHOTO_ID + '/tags.json';
        console.log(url)
    _toggleTagged(characterId);
    return $.ajax({
      method: 'POST',
      data: { "tag": tagData },
      url: url,
      error: function(err) {
        console.log(err.responseText);
      },
      success: function(newTag) {
        _tags.push(newTag);
      }
    })
  };

  var deleteTag = function(id) {
    return $.ajax({
      url: '/tags/'  + id,
      type: 'DELETE',
      success: function(tag) {
        _tags = _tags.filter(function(oldTag) {
          return oldTag.id !== tag.id;
        });
        _characters.forEach(function(character) {
          if (character.id === tag.character.id) {
            _toggleTagged(character.id);
           } 
        })
      }
    });
  };

  var getTags = function() {
    return _tags;
  };

  var _characters, _tags = [], PHOTO_ID;

  var _toggleTagged = function(characterId) {
    var character = _findCharacter(characterId);
    character.tagged = !character.tagged;
  };

  var _fetchCharacters = function(photoId) {
    return $.get('/photos/' + photoId + "/characters.json");
  }

  var _fetchTags = function(photoId) {
    return $.get('/photos/' + photoId + '/tags.json')
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
    createTag: createTag,
    getTags: getTags,
    deleteTag: deleteTag
  }


}();