if (!Core.get(window, ["MD", "Sync"])) {
	Core.set(window, ["MD", "Sync"], {});
}
 
MD.MDCanvasToolbar = Core.extend(Echo.Component, {

	$load : function() {
       	Echo.ComponentFactory.registerType("MDCanvasToolbar", this);
	},
	
	componentType: "MDCanvasToolbar"
});

 
MD.Sync.MDCanvasToolbar = Core.extend(Echo.Render.ComponentSync, {
    
    $load: function() {
        Echo.Render.registerPeer("MDCanvasToolbar", this);
    },
    
    _node: null,
    
    renderAdd: function(update, parentElement) {

    	//the tool row
    	this._node = document.createElement("div");
    	this._node.style.position = "absolute";	
       	this._node.style.left = "-34px";
       	this._node.style.top = "30px";
       	this._node.style.width = "24px";
		this._node.style.height ="100px";
		this._node.style.padding ="3px";
		this._node.style.background ="#222";
		this._node.style["-webkit-transition"] = "opacity 2s" 
		Echo.Sync.Border.render("1px dotted #eeeeee", this._node);
		parentElement.appendChild(this._node);
    	
		for (var i = 0; i < this.component.getComponentCount(); i++) {   
			Echo.Render.renderComponentAdd(update, this.component.getComponent(i), this._node);
			var spacer = document.createElement("div");
			spacer.style.height ="3px";
			this._node.appendChild(spacer);
		}
    },
    
	/** @see Echo.Render.ComponentSync#renderDispose */
    renderDispose: function(update) {
        this._node = null;
    },
    
    /** @see Echo.Render.ComponentSync#renderUpdate */
    renderUpdate: function(update) {
	    var visible = this.component.render("visible", true);
    	this._node.style.opacity = visible ? 1 : 0; 
        return false; // only update Child elements
    }       
});
