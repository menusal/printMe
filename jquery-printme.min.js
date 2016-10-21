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
 * Last modified: Sat Dec 12 22:00:00 2015
 */
jQuery.fn.printMe=function(a){var b=$.extend({path:[],title:"",head:!1},a);return this.each(function(){var a=$(this),c=window.open();c.document.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">'),c.document.write("<html>"),c.document.write("<head>"),c.document.write("<meta charset='utf-8'>");for(i in b.path)c.document.write('<link rel="stylesheet" href="'+b.path[i]+'">');c.document.write("</head><body>"),""!=b.title&&c.document.write("<h1>"+b.title+"</h1>"),c.document.write(a.html()),c.document.write('<script type="text/javascript">function closeme(){window.close();}setTimeout(closeme,50);window.print();</script></body></html>'),c.document.close()})};