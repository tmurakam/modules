Ext.data.JsonP.draw2d_layout_connection_FanConnectionRouter({"extends":"draw2d.layout.connection.DirectRouter","component":false,"meta":{"author":["Andreas Herz"]},"linenr":1,"inheritdoc":null,"inheritable":true,"mixedInto":[],"aliases":{},"singleton":false,"mixins":[],"parentMixins":[],"statics":{"cfg":[],"property":[],"css_var":[],"method":[],"event":[],"css_mixin":[]},"files":[{"href":"FanConnectionRouter.html#draw2d-layout-connection-FanConnectionRouter","filename":"FanConnectionRouter.js"}],"superclasses":["draw2d.layout.connection.ConnectionRouter","draw2d.layout.connection.DirectRouter"],"members":{"cfg":[],"property":[],"css_var":[],"method":[{"meta":{},"owner":"draw2d.layout.connection.FanConnectionRouter","name":"constructor","id":"method-constructor","tagname":"method"},{"meta":{},"owner":"draw2d.layout.connection.ConnectionRouter","name":"getEndDirection","id":"method-getEndDirection","tagname":"method"},{"meta":{},"owner":"draw2d.layout.connection.ConnectionRouter","name":"getStartDirection","id":"method-getStartDirection","tagname":"method"},{"meta":{},"owner":"draw2d.layout.connection.DirectRouter","name":"invalidate","id":"method-invalidate","tagname":"method"},{"meta":{},"owner":"draw2d.layout.connection.FanConnectionRouter","name":"route","id":"method-route","tagname":"method"}],"event":[],"css_mixin":[]},"alternateClassNames":[],"override":null,"private":null,"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/draw2d.layout.connection.ConnectionRouter' rel='draw2d.layout.connection.ConnectionRouter' class='docClass'>draw2d.layout.connection.ConnectionRouter</a><div class='subclass '><a href='#!/api/draw2d.layout.connection.DirectRouter' rel='draw2d.layout.connection.DirectRouter' class='docClass'>draw2d.layout.connection.DirectRouter</a><div class='subclass '><strong>draw2d.layout.connection.FanConnectionRouter</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/FanConnectionRouter.html#draw2d-layout-connection-FanConnectionRouter' target='_blank'>FanConnectionRouter.js</a></div></pre><div class='doc-contents'><p>Automatic router that spreads its  <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">Connections</a> in a fan-like fashion upon collision.</p>\n\n<p>See the example:</p>\n\n<pre class='inline-example preview small frame'><code>// Override the default connection type. This is used during drag&amp;drop operations of ports.\n//\ndraw2d.Connection.createConnection=function(sourcePort, targetPort){\n   // return my special kind of connection\n   var con = new draw2d.Connection();\n   con.setRouter(new draw2d.layout.connection.FanConnectionRouter());\n   return con;\n};\n\n// create and add two nodes which contains Ports (In and OUT)\n//\nvar start = new draw2d.shape.node.Start();\nvar end   = new draw2d.shape.node.End();\n\n// ...add it to the canvas \ncanvas.addFigure( start, 50,50);\ncanvas.addFigure( end, 230,80);\n\n// first Connection\n//\nvar c = draw2d.Connection.createConnection();\nc.setSource(start.getOutputPort(0));\nc.setTarget(end.getInputPort(0));\ncanvas.addFigure(c);\n\n// second Connection\n//\nc = draw2d.Connection.createConnection();\nc.setSource(start.getOutputPort(0));\nc.setTarget(end.getInputPort(0));\ncanvas.addFigure(c);\n\n// third Connection\n//\nc = draw2d.Connection.createConnection();\nc.setSource(start.getOutputPort(0));\nc.setTarget(end.getInputPort(0));\ncanvas.addFigure(c);\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.FanConnectionRouter'>draw2d.layout.connection.FanConnectionRouter</span><br/><a href='source/FanConnectionRouter.html#draw2d-layout-connection-FanConnectionRouter-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/draw2d.layout.connection.FanConnectionRouter-method-constructor' class='name expandable'>draw2d.layout.connection.FanConnectionRouter</a>( <span class='pre'></span> ) : <a href=\"#!/api/draw2d.layout.connection.FanConnectionRouter\" rel=\"draw2d.layout.connection.FanConnectionRouter\" class=\"docClass\">draw2d.layout.connection.FanConnectionRouter</a></div><div class='description'><div class='short'>Creates a new Router object. ...</div><div class='long'><p>Creates a new Router object.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/draw2d.layout.connection.FanConnectionRouter\" rel=\"draw2d.layout.connection.FanConnectionRouter\" class=\"docClass\">draw2d.layout.connection.FanConnectionRouter</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/draw2d.layout.connection.DirectRouter-method-constructor' rel='draw2d.layout.connection.DirectRouter-method-constructor' class='docClass'>draw2d.layout.connection.DirectRouter.constructor</a></p></div></div></div><div id='method-getEndDirection' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.connection.ConnectionRouter' rel='draw2d.layout.connection.ConnectionRouter' class='defined-in docClass'>draw2d.layout.connection.ConnectionRouter</a><br/><a href='source/ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter-method-getEndDirection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.ConnectionRouter-method-getEndDirection' class='name expandable'>getEndDirection</a>( <span class='pre'>conn</span> ) : Number</div><div class='description'><div class='short'>Returns the direction for the connection in relation to the given port and it's parent. ...</div><div class='long'><p>Returns the direction for the connection in relation to the given port and it's parent.</p>\n\n<p>\nPossible values:\n<ul>\n  <li>up -&gt; 0</li>\n  <li>right -&gt; 1</li>\n  <li>down -&gt; 2</li>\n  <li>left -&gt; 3</li>\n</ul>\n<p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>conn</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'><p>the connection with the end port to examine</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>the direction</p>\n</div></li></ul></div></div></div><div id='method-getStartDirection' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.connection.ConnectionRouter' rel='draw2d.layout.connection.ConnectionRouter' class='defined-in docClass'>draw2d.layout.connection.ConnectionRouter</a><br/><a href='source/ConnectionRouter.html#draw2d-layout-connection-ConnectionRouter-method-getStartDirection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.ConnectionRouter-method-getStartDirection' class='name expandable'>getStartDirection</a>( <span class='pre'>conn</span> ) : Number</div><div class='description'><div class='short'>Returns the direction for the connection in relation to the given port and it's parent. ...</div><div class='long'><p>Returns the <strong>direction</strong> for the connection in relation to the given port and it's parent.</p>\n\n<p>\nPossible values:\n<ul>\n  <li>up -&gt; 0</li>\n  <li>right -&gt; 1</li>\n  <li>down -&gt; 2</li>\n  <li>left -&gt; 3</li>\n</ul>\n<p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>conn</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'><p>the connection with the start port to examine</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>the direction.</p>\n</div></li></ul></div></div></div><div id='method-invalidate' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/draw2d.layout.connection.DirectRouter' rel='draw2d.layout.connection.DirectRouter' class='defined-in docClass'>draw2d.layout.connection.DirectRouter</a><br/><a href='source/DirectRouter.html#draw2d-layout-connection-DirectRouter-method-invalidate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.DirectRouter-method-invalidate' class='name expandable'>invalidate</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Invalidates the given Connection ...</div><div class='long'><p>Invalidates the given Connection</p>\n</div></div></div><div id='method-route' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='draw2d.layout.connection.FanConnectionRouter'>draw2d.layout.connection.FanConnectionRouter</span><br/><a href='source/FanConnectionRouter.html#draw2d-layout-connection-FanConnectionRouter-method-route' target='_blank' class='view-source'>view source</a></div><a href='#!/api/draw2d.layout.connection.FanConnectionRouter-method-route' class='name expandable'>route</a>( <span class='pre'>conn</span> )</div><div class='description'><div class='short'>Layout the hands over connection in a manhattan like layout ...</div><div class='long'><p>Layout the hands over connection in a manhattan like layout</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>conn</span> : <a href=\"#!/api/draw2d.Connection\" rel=\"draw2d.Connection\" class=\"docClass\">draw2d.Connection</a><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/draw2d.layout.connection.DirectRouter-method-route' rel='draw2d.layout.connection.DirectRouter-method-route' class='docClass'>draw2d.layout.connection.DirectRouter.route</a></p></div></div></div></div></div></div></div>","name":"draw2d.layout.connection.FanConnectionRouter","uses":[],"html_meta":{"author":null},"id":"class-draw2d.layout.connection.FanConnectionRouter","tagname":"class","enum":null,"subclasses":[],"requires":[]});