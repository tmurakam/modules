Ext.data.JsonP.draw2d_io_svg_Writer({"extends":"draw2d.io.Writer","component":false,"meta":{"author":["Andreas Herz"]},"linenr":3,"inheritdoc":null,"inheritable":null,"mixedInto":[],"aliases":{},"singleton":false,"mixins":[],"parentMixins":[],"statics":{"cfg":[],"property":[],"css_var":[],"method":[],"event":[],"css_mixin":[]},"files":[{"href":"Writer3.html#draw2d-io-svg-Writer","filename":"Writer.js"}],"superclasses":["draw2d.io.Writer"],"members":{"cfg":[],"property":[],"css_var":[],"method":[{"meta":{"private":true},"owner":"draw2d.io.Writer","name":"constructor","id":"method-constructor","tagname":"method"},{"meta":{},"owner":"draw2d.io.Writer","name":"formatXml","id":"method-formatXml","tagname":"method"},{"meta":{},"owner":"draw2d.io.svg.Writer","name":"marshal","id":"method-marshal","tagname":"method"}],"event":[],"css_mixin":[]},"alternateClassNames":[],"override":null,"private":null,"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/draw2d.io.Writer' rel='draw2d.io.Writer' class='docClass'>draw2d.io.Writer</a><div class='subclass '><strong>draw2d.io.svg.Writer</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Writer3.html#draw2d-io-svg-Writer' target='_blank'>Writer.js</a></div></pre><div class='doc-contents'><p>Serialize the canvas document into a SVG document.</p>\n\n<pre><code> // Create a SVG writer and convert the canvas into a SVG document.\n //\n var writer = new draw2d.io.svg.Writer();\n var svg = writer.marshal(canvas);\n\n // insert the svg string into a DIV for preview or post\n // it via ajax to the server....\n $(\"#svg\").text(svg);\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.io.Writer' rel='draw2d.io.Writer' class='defined-in docClass'>draw2d.io.Writer</a><br/><a href='source/Writer4.html#draw2d-io-Writer-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/draw2d.io.Writer-method-constructor' class='name expandable'>draw2d.io.svg.Writer</a>( <span class='pre'></span> ) : <a href=\"#!/api/draw2d.io.Writer\" rel=\"draw2d.io.Writer\" class=\"docClass\">draw2d.io.Writer</a><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.io.Writer\" rel=\"draw2d.io.Writer\" class=\"docClass\">draw2d.io.Writer</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-formatXml' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.io.Writer' rel='draw2d.io.Writer' class='defined-in docClass'>draw2d.io.Writer</a><br/><a href='source/Writer4.html#draw2d-io-Writer-method-formatXml' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.io.Writer-method-formatXml' class='name expandable'>formatXml</a>( <span class='pre'>xml</span> ) : String</div><div class='description'><div class='short'>utility method to format a given XML string. ...</div><div class='long'><p>utility method to format a given XML string.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>xml</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-marshal' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.io.svg.Writer'>draw2d.io.svg.Writer</span><br/><a href='source/Writer3.html#draw2d-io-svg-Writer-method-marshal' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.io.svg.Writer-method-marshal' class='name expandable'>marshal</a>( <span class='pre'>canvas</span> ) : String</div><div class='description'><div class='short'>Export the content of the canvas into SVG. ...</div><div class='long'><p>Export the content of the canvas into SVG. The SVG document can be loaded with Inkscape or any other SVG Editor.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>canvas</span> : <a href=\"#!/api/draw2d.Canvas\" rel=\"draw2d.Canvas\" class=\"docClass\">draw2d.Canvas</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>the SVG document</p>\n</div></li></ul><p>Overrides: <a href='#!/api/draw2d.io.Writer-method-marshal' rel='draw2d.io.Writer-method-marshal' class='docClass'>draw2d.io.Writer.marshal</a></p></div></div></div></div></div></div></div>","name":"draw2d.io.svg.Writer","uses":[],"html_meta":{"author":null},"id":"class-draw2d.io.svg.Writer","tagname":"class","enum":null,"subclasses":[],"requires":[]});