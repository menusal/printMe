/**
 * jQuery PrintMe v.1.0
 * 
 * A jquery plugin that prints the given element
 *
 * Copyright 2014, Daniel Arlandis <daniarlandis@gmail.com> www.daniarlandis.es
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 *
 * Date: Mon Feb 10 19:23:00 2014
 * Last modified: Fri Oct 21 22:00:00 2016
 */
jQuery.fn.printMe = function(options){

	// Setup options
	var settings = $.extend({
		// Defaults options.
		path: [],
		title: "",
		head: false,
	}, options );
	
	// Set the properties and run the plugin
	return this.each(function(){
		
		// Store the object
		var $this = $(this);

		var w = window.open();
		w.document.write( "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">" );
		w.document.write( "<html>" );
		w.document.write( "<head>" );
		w.document.write( "<meta charset='utf-8'>" );

		// Add the style sheets
		for(i in settings.path){
			w.document.write('<link rel="stylesheet" href="'+settings.path[i]+'">');
		}
		
		// Close the head
		w.document.write('</head><body>');

		// Add a header when the title not is empty
		if (settings.title != "")
			w.document.write( "<h1>" + settings.title + "<\/h1>" );

		// Add a content to print
		w.document.write( $this.html() );
		w.document.write('<script type="text/javascript">function closeme(){window.close();}setTimeout(closeme,50);window.print();</script></body></html>');
		w.document.close();
	});
}