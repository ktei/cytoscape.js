;(function($$){ 'use strict';
  
  $$.fn.core({
    
    png: function( options ){
      var renderer = this._private.renderer;
      options = options || {};

      return renderer.png( options );      
    },

    jpg: function( options ) {
      var renderer = this._private.renderer;
      options = options || {};

      return renderer.jpg( options );     
    },

    getExportSize: function( options ) {
      var renderer = this._private.renderer;
      options = options || {};

      return renderer.getExportSize( options );  
    }
    
  });
  
})( cytoscape );