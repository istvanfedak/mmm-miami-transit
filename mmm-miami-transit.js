
// mmm-miami-transit.js
Module.register("mmm-miami-transit", {
  // default module config
  default : {
    text: "mmm-miami-transit!"
  }

  // this method is called when a module is loaded 
  loaded: function(callback) {
    Log.log(this.name + ' is loaded!');
    callback();
  }

  // this method is called when all modules are loaded and the
  // system is ready to boot up
  start: function() {
    this.mySpecialProperty = "So much wow!";
    Log.log(this.name + ' is started!');
  }

  // override the dom generator
  getDom: function() {
    var wrapper = document.createElement("div");
    wrapper.innerHTML = this.config.text;
  }

});
