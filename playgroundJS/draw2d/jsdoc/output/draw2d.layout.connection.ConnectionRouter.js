Ext.data.JsonP.draw2d_layout_connection_ConnectionRouter({"extends":null,"component":false,"meta":{"author":["Andreas Herz"]},"linenr":2,"inheritdoc":null,"inheritable":null,"mixedInto":[],"aliases":{},"singleton":false,"mixins":[],"parentMixins":[],"statics":{"cfg":[],"property":[],"css_var":[],"method":[],"event":[],"css_mixin":[]},"files":[{"href":"ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter","filename":"ConnectionRouter.js"}],"superclasses":[],"members":{"cfg":[],"property":[],"css_var":[],"method":[{"meta":{},"owner":"draw2d.layout.connection.ConnectionRouter","name":"constructor","id":"method-constructor","tagname":"method"},{"meta":{},"owner":"draw2d.layout.connection.ConnectionRouter","name":"getEndDirection","id":"method-getEndDirection","tagname":"method"},{"meta":{},"owner":"draw2d.layout.connection.ConnectionRouter","name":"getStartDirection","id":"method-getStartDirection","tagname":"method"},{"meta":{"template":true},"owner":"draw2d.layout.connection.ConnectionRouter","name":"route","id":"method-route","tagname":"method"}],"event":[],"css_mixin":[]},"alternateClassNames":[],"override":null,"private":null,"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/draw2d.layout.connection.DirectRouter' rel='draw2d.layout.connection.DirectRouter' class='docClass'>draw2d.layout.connection.DirectRouter</a></div><div class='dependency'><a href='#!/api/draw2d.layout.connection.ManhattanConnectionRouter' rel='draw2d.layout.connection.ManhattanConnectionRouter' class='docClass'>draw2d.layout.connection.ManhattanConnectionRouter</a></div><h4>Files</h4><div class='dependency'><a href='source/ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter' target='_blank'>ConnectionRouter.js</a></div></pre><div class='doc-contents'><p>Routes a <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a>, possibly using a constraint.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.ConnectionRouter'>draw2d.layout.connection.ConnectionRouter</span><br/><a href='source/ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/draw2d.layout.connection.ConnectionRouter-method-constructor' class='name expandable'>draw2d.layout.connection.ConnectionRouter</a>( <span class='pre'></span> ) : <a href=\"#!/api/draw2d.layout.connection.ConnectionRouter\" rel=\"draw2d.layout.connection.ConnectionRouter\" class=\"docClass\">draw2d.layout.connection.ConnectionRouter</a></div><div class='description'><div class='short'>Creates a new Router object ...</div><div class='long'><p>Creates a new Router object</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.layout.connection.ConnectionRouter\" rel=\"draw2d.layout.connection.ConnectionRouter\" class=\"docClass\">draw2d.layout.connection.ConnectionRouter</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getEndDirection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.ConnectionRouter'>draw2d.layout.connection.ConnectionRouter</span><br/><a href='source/ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter-method-getEndDirection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.ConnectionRouter-method-getEndDirection' class='name expandable'>getEndDirection</a>( <span class='pre'>conn</span> ) : Number</div><div class='description'><div class='short'>Returns the direction for the connection in relation to the given port and it's parent. ...</div><div class='long'><p>Returns the direction for the connection in relation to the given port and it's parent.</p>\n\n<p>\nPossible values:\n<ul>\n  <li>up -&gt; 0</li>\n  <li>right -&gt; 1</li>\n  <li>down -&gt; 2</li>\n  <li>left -&gt; 3</li>\n</ul>\n<p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>conn</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'><p>the connection with the end port to examine</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>the direction</p>\n</div></li></ul></div></div></div><div id='method-getStartDirection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.ConnectionRouter'>draw2d.layout.connection.ConnectionRouter</span><br/><a href='source/ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter-method-getStartDirection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.ConnectionRouter-method-getStartDirection' class='name expandable'>getStartDirection</a>( <span class='pre'>conn</span> ) : Number</div><div class='description'><div class='short'>Returns the direction for the connection in relation to the given port and it's parent. ...</div><div class='long'><p>Returns the <strong>direction</strong> for the connection in relation to the given port and it's parent.</p>\n\n<p>\nPossible values:\n<ul>\n  <li>up -&gt; 0</li>\n  <li>right -&gt; 1</li>\n  <li>down -&gt; 2</li>\n  <li>left -&gt; 3</li>\n</ul>\n<p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>conn</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'><p>the connection with the start port to examine</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>the direction.</p>\n</div></li></ul></div></div></div><div id='method-route' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.ConnectionRouter'>draw2d.layout.connection.ConnectionRouter</span><br/><a href='source/ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter-method-route' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.ConnectionRouter-method-route' class='name expandable'>route</a>( <span class='pre'>connection</span> )<strong class='template signature' >template</strong></div><div class='description'><div class='short'>Routes the Connection. ...</div><div class='long'><p>Routes the Connection.</p>\n      <div class='signature-box template'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>connection</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'><p>The Connection to route</p>\n</div></li></ul></div></div></div></div></div></div></div>","name":"draw2d.layout.connection.ConnectionRouter","uses":[],"html_meta":{"author":null},"id":"class-draw2d.layout.connection.ConnectionRouter","tagname":"class","enum":null,"subclasses":["draw2d.layout.connection.DirectRouter","draw2d.layout.connection.ManhattanConnectionRouter"],"requires":[]});