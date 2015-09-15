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

      options.bg = options.bg || '#fff';

      return renderer.jpg( options );     
    },

    getExportSize: function( options ) {
      var renderer = this._private.renderer;
      options = options || {};

      return renderer.getExportSize( options );  
    }

  });

  $$.corefn.jpeg = $$.corefn.jpg;

})( cytoscape );
