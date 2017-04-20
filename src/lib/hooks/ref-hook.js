class RefHook {
  constructor (callback) {
    this.callback = callback;
  }
  hook (node) {
    this.callback(node);
  }
  unhook () {
    this.callback(null);
  }
}

module.exports = RefHook;