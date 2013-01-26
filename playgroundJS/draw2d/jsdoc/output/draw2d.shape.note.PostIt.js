Ext.data.JsonP.draw2d_shape_note_PostIt({"extends":"draw2d.shape.basic.Label","component":false,"meta":{"author":["Andreas Herz"]},"linenr":2,"inheritdoc":null,"inheritable":null,"mixedInto":[],"aliases":{},"singleton":false,"mixins":[],"parentMixins":[],"statics":{"cfg":[],"property":[],"css_var":[],"method":[],"event":[],"css_mixin":[]},"files":[{"href":"PostIt.html#draw2d-shape-note-PostIt","filename":"PostIt.js"}],"superclasses":["draw2d.shape.basic.Label"],"members":{"cfg":[],"property":[],"css_var":[],"method":[{"meta":{},"owner":"draw2d.shape.note.PostIt","name":"constructor","id":"method-constructor","tagname":"method"},{"meta":{"private":true},"owner":"draw2d.shape.basic.Label","name":"applyTransformation","id":"method-applyTransformation","tagname":"method"},{"meta":{"template":true},"owner":"draw2d.shape.basic.Label","name":"createSet","id":"method-createSet","tagname":"method"},{"meta":{},"owner":"draw2d.shape.basic.Label","name":"getFontColor","id":"method-getFontColor","tagname":"method"},{"meta":{},"owner":"draw2d.shape.basic.Label","name":"getHeight","id":"method-getHeight","tagname":"method"},{"meta":{},"owner":"draw2d.shape.basic.Label","name":"getMinHeight","id":"method-getMinHeight","tagname":"method"},{"meta":{},"owner":"draw2d.shape.basic.Label","name":"getMinWidth","id":"method-getMinWidth","tagname":"method"},{"meta":{},"owner":"draw2d.shape.basic.Label","name":"getPersistentAttributes","id":"method-getPersistentAttributes","tagname":"method"},{"meta":{},"owner":"draw2d.shape.basic.Label","name":"getText","id":"method-getText","tagname":"method"},{"meta":{},"owner":"draw2d.shape.basic.Label","name":"getWidth","id":"method-getWidth","tagname":"method"},{"meta":{},"owner":"draw2d.shape.basic.Label","name":"installEditor","id":"method-installEditor","tagname":"method"},{"meta":{},"owner":"draw2d.shape.basic.Label","name":"isResizeable","id":"method-isResizeable","tagname":"method"},{"meta":{"template":true},"owner":"draw2d.shape.basic.Label","name":"onDoubleClick","id":"method-onDoubleClick","tagname":"method"},{"meta":{"template":true},"owner":"draw2d.shape.basic.Label","name":"repaint","id":"method-repaint","tagname":"method"},{"meta":{},"owner":"draw2d.shape.basic.Label","name":"setDimension","id":"method-setDimension","tagname":"method"},{"meta":{},"owner":"draw2d.shape.basic.Label","name":"setFontColor","id":"method-setFontColor","tagname":"method"},{"meta":{},"owner":"draw2d.shape.basic.Label","name":"setFontSize","id":"method-setFontSize","tagname":"method"},{"meta":{},"owner":"draw2d.shape.basic.Label","name":"setPadding","id":"method-setPadding","tagname":"method"},{"meta":{},"owner":"draw2d.shape.basic.Label","name":"setPersistentAttributes","id":"method-setPersistentAttributes","tagname":"method"},{"meta":{},"owner":"draw2d.shape.basic.Label","name":"setText","id":"method-setText","tagname":"method"}],"event":[],"css_mixin":[]},"alternateClassNames":[],"override":null,"private":null,"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/draw2d.shape.basic.Label' rel='draw2d.shape.basic.Label' class='docClass'>draw2d.shape.basic.Label</a><div class='subclass '><strong>draw2d.shape.note.PostIt</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/PostIt.html#draw2d-shape-note-PostIt' target='_blank'>PostIt.js</a></div></pre><div class='doc-contents'><p>Simple Post-it like figure with text. Can be used for annotations or documentation.</p>\n\n<p>See the example:</p>\n\n<pre class='inline-example preview small frame'><code>var shape =  new draw2d.shape.note.PostIt(\"This is a simple sticky note\");\nshape.setColor(\"#000000\");\nshape.setPadding(20);\n\ncanvas.addFigure(shape,40,10);\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.shape.note.PostIt'>draw2d.shape.note.PostIt</span><br/><a href='source/PostIt.html#draw2d-shape-note-PostIt-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/draw2d.shape.note.PostIt-method-constructor' class='name expandable'>draw2d.shape.note.PostIt</a>( <span class='pre'>[text]</span> ) : <a href=\"#!/api/draw2d.shape.note.PostIt\" rel=\"draw2d.shape.note.PostIt\" class=\"docClass\">draw2d.shape.note.PostIt</a></div><div class='description'><div class='short'>Creates a new PostIt element. ...</div><div class='long'><p>Creates a new PostIt element.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : String (optional)<div class='sub-desc'><p>the text to display</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.shape.note.PostIt\" rel=\"draw2d.shape.note.PostIt\" class=\"docClass\">draw2d.shape.note.PostIt</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/draw2d.shape.basic.Label-method-constructor' rel='draw2d.shape.basic.Label-method-constructor' class='docClass'>draw2d.shape.basic.Label.constructor</a></p></div></div></div><div id='method-applyTransformation' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.shape.basic.Label' rel='draw2d.shape.basic.Label' class='defined-in docClass'>draw2d.shape.basic.Label</a><br/><a href='source/Label.html#draw2d-shape-basic-Label-method-applyTransformation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.shape.basic.Label-method-applyTransformation' class='name expandable'>applyTransformation</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-createSet' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.shape.basic.Label' rel='draw2d.shape.basic.Label' class='defined-in docClass'>draw2d.shape.basic.Label</a><br/><a href='source/Label.html#draw2d-shape-basic-Label-method-createSet' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.shape.basic.Label-method-createSet' class='name expandable'>createSet</a>( <span class='pre'></span> )<strong class='template signature' >template</strong></div><div class='description'><div class='short'>Creates the shape object for a text node. ...</div><div class='long'><p>Creates the shape object for a text node.</p>\n      <div class='signature-box template'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n</div></div></div><div id='method-getFontColor' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.shape.basic.Label' rel='draw2d.shape.basic.Label' class='defined-in docClass'>draw2d.shape.basic.Label</a><br/><a href='source/Label.html#draw2d-shape-basic-Label-method-getFontColor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.shape.basic.Label-method-getFontColor' class='name expandable'>getFontColor</a>( <span class='pre'></span> ) : <a href=\"#!/api/draw2d.util.Color\" rel=\"draw2d.util.Color\" class=\"docClass\">draw2d.util.Color</a></div><div class='description'><div class='short'>The current used font color ...</div><div class='long'><p>The current used font color</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.util.Color\" rel=\"draw2d.util.Color\" class=\"docClass\">draw2d.util.Color</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getHeight' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.shape.basic.Label' rel='draw2d.shape.basic.Label' class='defined-in docClass'>draw2d.shape.basic.Label</a><br/><a href='source/Label.html#draw2d-shape-basic-Label-method-getHeight' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.shape.basic.Label-method-getHeight' class='name expandable'>getHeight</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Return the calculated height of the set. ...</div><div class='long'><p>Return the calculated height of the set. This calculates the bounding box of all elements.</p>\n</div></div></div><div id='method-getMinHeight' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.shape.basic.Label' rel='draw2d.shape.basic.Label' class='defined-in docClass'>draw2d.shape.basic.Label</a><br/><a href='source/Label.html#draw2d-shape-basic-Label-method-getMinHeight' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.shape.basic.Label-method-getMinHeight' class='name expandable'>getMinHeight</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>This value is relevant for the interactive resize of the figure. ...</div><div class='long'><p>This value is relevant for the interactive resize of the figure.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>Returns the min. width of this object.</p>\n</div></li></ul></div></div></div><div id='method-getMinWidth' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.shape.basic.Label' rel='draw2d.shape.basic.Label' class='defined-in docClass'>draw2d.shape.basic.Label</a><br/><a href='source/Label.html#draw2d-shape-basic-Label-method-getMinWidth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.shape.basic.Label-method-getMinWidth' class='name expandable'>getMinWidth</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>This value is relevant for the interactive resize of the figure. ...</div><div class='long'><p>This value is relevant for the interactive resize of the figure.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>Returns the min. width of this object.</p>\n</div></li></ul></div></div></div><div id='method-getPersistentAttributes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.shape.basic.Label' rel='draw2d.shape.basic.Label' class='defined-in docClass'>draw2d.shape.basic.Label</a><br/><a href='source/Label.html#draw2d-shape-basic-Label-method-getPersistentAttributes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.shape.basic.Label-method-getPersistentAttributes' class='name expandable'>getPersistentAttributes</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Return an objects with all important attributes for XML or JSON serialization ...</div><div class='long'><p>Return an objects with all important attributes for XML or JSON serialization</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getText' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.shape.basic.Label' rel='draw2d.shape.basic.Label' class='defined-in docClass'>draw2d.shape.basic.Label</a><br/><a href='source/Label.html#draw2d-shape-basic-Label-method-getText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.shape.basic.Label-method-getText' class='name expandable'>getText</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Returns the current text of the label. ...</div><div class='long'><p>Returns the current text of the label.</p>\n</div></div></div><div id='method-getWidth' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.shape.basic.Label' rel='draw2d.shape.basic.Label' class='defined-in docClass'>draw2d.shape.basic.Label</a><br/><a href='source/Label.html#draw2d-shape-basic-Label-method-getWidth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.shape.basic.Label-method-getWidth' class='name expandable'>getWidth</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Return the calculate width of the set. ...</div><div class='long'><p>Return the calculate width of the set. This calculates the bounding box of all elements.</p>\n</div></div></div><div id='method-installEditor' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.shape.basic.Label' rel='draw2d.shape.basic.Label' class='defined-in docClass'>draw2d.shape.basic.Label</a><br/><a href='source/Label.html#draw2d-shape-basic-Label-method-installEditor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.shape.basic.Label-method-installEditor' class='name expandable'>installEditor</a>( <span class='pre'>editor</span> )</div><div class='description'><div class='short'>Set an editor for the label. ...</div><div class='long'><p>Set an editor for the label. This can be a dialog or inplace editor for the\nText.<br>\nThe editor will be activated if you doubleClick on the label.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>editor</span> : <a href=\"#!/api/draw2d.ui.LabelEditor\" rel=\"draw2d.ui.LabelEditor\" class=\"docClass\">draw2d.ui.LabelEditor</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isResizeable' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.shape.basic.Label' rel='draw2d.shape.basic.Label' class='defined-in docClass'>draw2d.shape.basic.Label</a><br/><a href='source/Label.html#draw2d-shape-basic-Label-method-isResizeable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.shape.basic.Label-method-isResizeable' class='name expandable'>isResizeable</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>A Label is not resizeable. ...</div><div class='long'><p>A Label is not resizeable. In this case this method returns always <b>false</b>.</p>\n</div></div></div><div id='method-onDoubleClick' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.shape.basic.Label' rel='draw2d.shape.basic.Label' class='defined-in docClass'>draw2d.shape.basic.Label</a><br/><a href='source/Label.html#draw2d-shape-basic-Label-method-onDoubleClick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.shape.basic.Label-method-onDoubleClick' class='name expandable'>onDoubleClick</a>( <span class='pre'></span> )<strong class='template signature' >template</strong></div><div class='description'><div class='short'>Called when a user dbl clicks on the element ...</div><div class='long'><p>Called when a user dbl clicks on the element</p>\n      <div class='signature-box template'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n</div></div></div><div id='method-repaint' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.shape.basic.Label' rel='draw2d.shape.basic.Label' class='defined-in docClass'>draw2d.shape.basic.Label</a><br/><a href='source/Label.html#draw2d-shape-basic-Label-method-repaint' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.shape.basic.Label-method-repaint' class='name expandable'>repaint</a>( <span class='pre'>attributes</span> )<strong class='template signature' >template</strong></div><div class='description'><div class='short'>Trigger the repaint of the element and transport all style properties to the visual representation. ...</div><div class='long'><p>Trigger the repaint of the element and transport all style properties to the visual representation.<br>\nCalled by the framework.</p>\n      <div class='signature-box template'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>attributes</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setDimension' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.shape.basic.Label' rel='draw2d.shape.basic.Label' class='defined-in docClass'>draw2d.shape.basic.Label</a><br/><a href='source/Label.html#draw2d-shape-basic-Label-method-setDimension' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.shape.basic.Label-method-setDimension' class='name expandable'>setDimension</a>( <span class='pre'>w, h</span> )</div><div class='description'><div class='short'>A Label did have \"autosize\". ...</div><div class='long'><p>A Label did have \"autosize\". Do nothing at all.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>w</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>h</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setFontColor' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.shape.basic.Label' rel='draw2d.shape.basic.Label' class='defined-in docClass'>draw2d.shape.basic.Label</a><br/><a href='source/Label.html#draw2d-shape-basic-Label-method-setFontColor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.shape.basic.Label-method-setFontColor' class='name expandable'>setFontColor</a>( <span class='pre'>color</span> )</div><div class='description'><div class='short'>@mehod\nSet the color of the font. ...</div><div class='long'><p>@mehod\nSet the color of the font.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>color</span> : <a href=\"#!/api/draw2d.util.Color\" rel=\"draw2d.util.Color\" class=\"docClass\">draw2d.util.Color</a>/String<div class='sub-desc'><p>The new color of the line.</p>\n</div></li></ul></div></div></div><div id='method-setFontSize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.shape.basic.Label' rel='draw2d.shape.basic.Label' class='defined-in docClass'>draw2d.shape.basic.Label</a><br/><a href='source/Label.html#draw2d-shape-basic-Label-method-setFontSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.shape.basic.Label-method-setFontSize' class='name expandable'>setFontSize</a>( <span class='pre'>size</span> )</div><div class='description'><div class='short'>Set the new font size in [pt]. ...</div><div class='long'><p>Set the new font size in [pt].</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>size</span> : Number<div class='sub-desc'><p>The new font size in <code>pt</code></p>\n</div></li></ul></div></div></div><div id='method-setPadding' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.shape.basic.Label' rel='draw2d.shape.basic.Label' class='defined-in docClass'>draw2d.shape.basic.Label</a><br/><a href='source/Label.html#draw2d-shape-basic-Label-method-setPadding' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.shape.basic.Label-method-setPadding' class='name expandable'>setPadding</a>( <span class='pre'>padding</span> )</div><div class='description'><div class='short'>Set the padding of the element ...</div><div class='long'><p>Set the padding of the element</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>padding</span> : Number<div class='sub-desc'><p>The new padding</p>\n</div></li></ul></div></div></div><div id='method-setPersistentAttributes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.shape.basic.Label' rel='draw2d.shape.basic.Label' class='defined-in docClass'>draw2d.shape.basic.Label</a><br/><a href='source/Label.html#draw2d-shape-basic-Label-method-setPersistentAttributes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.shape.basic.Label-method-setPersistentAttributes' class='name expandable'>setPersistentAttributes</a>( <span class='pre'>memento</span> )</div><div class='description'><div class='short'>Read all attributes from the serialized properties and transfer them into the shape. ...</div><div class='long'><p>Read all attributes from the serialized properties and transfer them into the shape.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>memento</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setText' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.shape.basic.Label' rel='draw2d.shape.basic.Label' class='defined-in docClass'>draw2d.shape.basic.Label</a><br/><a href='source/Label.html#draw2d-shape-basic-Label-method-setText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.shape.basic.Label-method-setText' class='name expandable'>setText</a>( <span class='pre'>text</span> )</div><div class='description'><div class='short'>Set the text for the label. ...</div><div class='long'><p>Set the text for the label. Use \\n for multiline text.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : String<div class='sub-desc'><p>The new text for the label.</p>\n</div></li></ul></div></div></div></div></div></div></div>","name":"draw2d.shape.note.PostIt","uses":[],"html_meta":{"author":null},"id":"class-draw2d.shape.note.PostIt","tagname":"class","enum":null,"subclasses":[],"requires":[]});