var W = W || {};
W.model = W.model || {};

W.model.Tag = function(top, left) {
  this.top = top;
  this.left = left;
  this.active = true;
  this.person = undefined;
}