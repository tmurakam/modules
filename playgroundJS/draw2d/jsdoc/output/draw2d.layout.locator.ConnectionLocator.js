Ext.data.JsonP.draw2d_layout_locator_ConnectionLocator({"extends":"draw2d.layout.locator.Locator","component":false,"meta":{"author":["Andreas Herz"]},"linenr":1,"inheritdoc":null,"inheritable":null,"mixedInto":[],"aliases":{},"singleton":false,"mixins":[],"parentMixins":[],"statics":{"cfg":[],"property":[],"css_var":[],"method":[],"event":[],"css_mixin":[]},"files":[{"href":"ConnectionLocator.html#draw2d-layout-locator-ConnectionLocator","filename":"ConnectionLocator.js"}],"superclasses":["draw2d.layout.locator.Locator"],"members":{"cfg":[],"property":[],"css_var":[],"method":[{"meta":{},"owner":"draw2d.layout.locator.ConnectionLocator","name":"constructor","id":"method-constructor","tagname":"method"},{"meta":{},"owner":"draw2d.layout.locator.Locator","name":"getParent","id":"method-getParent","tagname":"method"},{"meta":{"template":true},"owner":"draw2d.layout.locator.Locator","name":"relocate","id":"method-relocate","tagname":"method"},{"meta":{},"owner":"draw2d.layout.locator.Locator","name":"setParent","id":"method-setParent","tagname":"method"}],"event":[],"css_mixin":[]},"alternateClassNames":[],"override":null,"private":null,"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/draw2d.layout.locator.Locator' rel='draw2d.layout.locator.Locator' class='docClass'>draw2d.layout.locator.Locator</a><div class='subclass '><strong>draw2d.layout.locator.ConnectionLocator</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/draw2d.layout.locator.ManhattanMidpointLocator' rel='draw2d.layout.locator.ManhattanMidpointLocator' class='docClass'>draw2d.layout.locator.ManhattanMidpointLocator</a></div><h4>Files</h4><div class='dependency'><a href='source/ConnectionLocator.html#draw2d-layout-locator-ConnectionLocator' target='_blank'>ConnectionLocator.js</a></div></pre><div class='doc-contents'><p>Repositions a Figure attached to a Connection when the\nConnection is moved. Provides for alignment at the start\n(source), middle, or end (target) of the Connection.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.locator.ConnectionLocator'>draw2d.layout.locator.ConnectionLocator</span><br/><a href='source/ConnectionLocator.html#draw2d-layout-locator-ConnectionLocator-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/draw2d.layout.locator.ConnectionLocator-method-constructor' class='name expandable'>draw2d.layout.locator.ConnectionLocator</a>( <span class='pre'>parentShape</span> ) : <a href=\"#!/api/draw2d.layout.locator.ConnectionLocator\" rel=\"draw2d.layout.locator.ConnectionLocator\" class=\"docClass\">draw2d.layout.locator.ConnectionLocator</a></div><div class='description'><div class='short'>Default constructor for a Locator which can layout a figure in context of a\ngrapiti.Connector ...</div><div class='long'><p>Default constructor for a Locator which can layout a figure in context of a\ngrapiti.Connector</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>parentShape</span> : <a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><div class='sub-desc'><p>the base or parent figure for the locator</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.layout.locator.ConnectionLocator\" rel=\"draw2d.layout.locator.ConnectionLocator\" class=\"docClass\">draw2d.layout.locator.ConnectionLocator</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/draw2d.layout.locator.Locator-method-constructor' rel='draw2d.layout.locator.Locator-method-constructor' class='docClass'>draw2d.layout.locator.Locator.constructor</a></p></div></div></div><div id='method-getParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.locator.Locator' rel='draw2d.layout.locator.Locator' class='defined-in docClass'>draw2d.layout.locator.Locator</a><br/><a href='source/Locator.html#draw2d-layout-locator-Locator-method-getParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.locator.Locator-method-getParent' class='name expandable'>getParent</a>( <span class='pre'></span> ) : <a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a></div><div class='description'><div class='short'>Returns the associated owner of the locator ...</div><div class='long'><p>Returns the associated owner of the locator</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-relocate' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.locator.Locator' rel='draw2d.layout.locator.Locator' class='defined-in docClass'>draw2d.layout.locator.Locator</a><br/><a href='source/Locator.html#draw2d-layout-locator-Locator-method-relocate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.locator.Locator-method-relocate' class='name expandable'>relocate</a>( <span class='pre'>index, figure</span> )<strong class='template signature' >template</strong></div><div class='description'><div class='short'>Controls the location of an Idraw2d.Figure ...</div><div class='long'><p>Controls the location of an I<a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a></p>\n      <div class='signature-box template'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Number<div class='sub-desc'><p>child index of the figure</p>\n</div></li><li><span class='pre'>figure</span> : <a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><div class='sub-desc'><p>the figure to control</p>\n</div></li></ul></div></div></div><div id='method-setParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.locator.Locator' rel='draw2d.layout.locator.Locator' class='defined-in docClass'>draw2d.layout.locator.Locator</a><br/><a href='source/Locator.html#draw2d-layout-locator-Locator-method-setParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.locator.Locator-method-setParent' class='name expandable'>setParent</a>( <span class='pre'>parentShape</span> )</div><div class='description'><div class='short'>Set the associated owner of the locator ...</div><div class='long'><p>Set the associated owner of the locator</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>parentShape</span> : <a href=\"#!/api/draw2d.Figure\" rel=\"draw2d.Figure\" class=\"docClass\">draw2d.Figure</a><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","name":"draw2d.layout.locator.ConnectionLocator","uses":[],"html_meta":{"author":null},"id":"class-draw2d.layout.locator.ConnectionLocator","tagname":"class","enum":null,"subclasses":["draw2d.layout.locator.ManhattanMidpointLocator"],"requires":[]});