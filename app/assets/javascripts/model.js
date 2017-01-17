var W = W || {};

W.model = function() {

  var init = function() {
    _characters = ['waldo', 'other waldo', 'walder', 'walter', 'wally'];
  };

  var getCharacters = function() {
    return _characters;
  };

  var _characters;

  var _Dropdown = function Dropdown(items, top, left) {
    this.items = items;
    this.top = top;
    this.left = left;
  };

  var _Tag = function Tag(top, left) {
    this.top = top;
    this.left = left;
    this.active = true;
    this.person = undefined;
  };

  return {
    getCharacters: getCharacters,
    init: init
  }

}();