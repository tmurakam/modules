if (!Core.get(window, ["MD", "Sync"])) {
        Core.set(window, ["MD", "Sync"], {});
}
 
MD.MDContext = Core.extend(Echo.Component, {
	$load : function() {
       	Echo.ComponentFactory.registerType("MDContext", this);
	},
		
	componentType : "MDContext",
	editorRow: null,
	
    $virtual: {
		doMouseUp: function(actionType) {
           	this.fireEvent({
           		type: "mouseUp", 
           		source: this, 
           		actionCommand: this.get("actionCommand")
           	});
		}
    },
    
    setEditor: function(figure) {
		this.editorRow.removeAll();
		var editor = figure.component.getEditor();
		if (editor) {
			this.editorRow.add(editor);					
		}
	    Echo.Render.processUpdates(this.peer.client);
    }    
});
 
 
MD.Sync.MDContext = Core.extend(PD.Sync.PDDesktopItem, {

	$static: {
		ExpandAnimation: Core.extend(Extras.Sync.Animation, {
		
			_context2: null,						
		
			$construct: function(context) {
				this._context2 = context;
				this.runTime = 800;
			},
			init: function() { 
				this._context2._container.style.visibility = "visible";
				this._context2._expanded = !this._context2._expanded;
				if (this._context2._expanded) {
					this._context2._container.style.width = "0px";
					this._context2._container.style.height = "20px";				
					this._context2._titleBar.style.left = "2px";
				}				
			},
			
			step: function(progress) {			
				var height = this._context2._height - 20;
				var width = this._context2._width;
				
				var p1 = progress * 2;
				var p2 = p1 - 1;
				if (this._context2._expanded) {
					//increasing
					if (p1 < 1) {
						width = width * p1;
						height = 20;
					} else {
						height = 20 + height * p2;
					}								
				} else {
					//decreasing
					if (p1 < 1) {
						height = 20 + height * (1 - p1);
					} else {
						width = width * (1 - p2);
						height = 20;
					}								
				} 
				this._context2._container.style.width = width + "px";
				this._context2._container.style.height = height + "px";
				
			},
			complete: function(abort) {			
				if (this._context2._expanded) {
					this._context2._container.style.visibility = "visible";
				} else {
					this._context2._container.style.visibility = "hidden";
					this._context2._titleBar.style.left = "-32px";
				}				
			}
		})
	},
    
    $load: function() {
        Echo.Render.registerPeer("MDContext", this);
    },
    
    _container: null,
    _icon: null,
	_expanded: false,
	_titleBar: null,
	_mainNode: null,
    
    /** @see Echo.Render.ComponentSync#renderAdd */
    renderAddImpl: function(update, parentElement) {
        this._containerElement = parentElement;
        var icon = this.component.render("icon");
	   	this._width = Echo.Sync.Extent.toPixels(this.component.render("width")); 
		this._height = Echo.Sync.Extent.toPixels(this.component.render("height"));

        this._mainNode = document.createElement("div");
        this._mainNode.style.position = "absolute";	
		parentElement.appendChild(this._mainNode);

		//the main node
        this._node = document.createElement("div");
        this._node.id = this.component.renderId;
		this._node.style.position = "absolute";	
		this._node.style.width = "80px";
		this._node.style.height ="20px";
		this._node.style.zIndex = 2;
		this._node.style.cursor = "pointer";
		this._mainNode.appendChild(this._node);
		
		//the icon
		this._imgNode = document.createElement("img");
        Echo.Sync.ImageReference.renderImg(icon, this._imgNode);
   		this._mainNode.appendChild(this._imgNode);

		//the title text
	    this._titleBar = document.createElement("div");
	   	this._titleBar.style.position = "absolute";
	    this._titleBar.style.top = "22px";
		this._titleBar.style.left = "2px";
	    this._titleBar.style.height = "20px";
		this._titleBar.style.width = "300px";
	    this._titleBar.style.fontSize = "9px";
	    this._titleBar.style.color = "#00ffff";
	    this._titleBar.appendChild(document.createTextNode(this._title));
	    this._mainNode.appendChild(this._titleBar);
		
		//the container
        this._container = document.createElement("div");
		this._container.style.position = "absolute";
       	this._container.style.left = "0px";
		this._container.style.top = "20px";
		this._container.style.overflow = "hidden";  //scroll";
		this._container.style.zIndex = 2;
		Echo.Sync.Border.render("1px dotted #eeeeee", this._container);
		this._mainNode.appendChild(this._container);

		//add child to container
		var canvas = this.component.getComponent(0);
		Echo.Render.renderComponentAdd(update, canvas, this._container);
        	
		var toolbar = this.component.getComponent(1);
		toolbar.set("canvas", canvas);
		Echo.Render.renderComponentAdd(update, toolbar, this._mainNode);
        
		//the container
    	var editorDiv = document.createElement("div");
		editorDiv.style.position = "absolute";
       	editorDiv.style.left = "100px";
		editorDiv.style.top = "-5px";
		editorDiv.style.width = "200px";
		editorDiv.style.height = "20px";
		editorDiv.style.background = "#555";
		Echo.Sync.Border.render("1px dotted #eeeeee", editorDiv);
		this._mainNode.appendChild(editorDiv);
		
		this.component.editorRow = this.component.getComponent(2);
		Echo.Render.renderComponentAdd(update, this.component.editorRow, editorDiv);
        
        //XXX remove - just for testing...
        var expander = new MD.Sync.MDContext.ExpandAnimation(this);
		//expander.start();  
    },

	onDoubleClick: function() {
		//work-around...
		var componentCount = this.component.getComponentCount();
        for (var i = 0; i < componentCount; i++) {     
        	if (this.component.getComponent(i).peer.lazyLoadable) {
				this.component.getComponent(i).peer.doLazyLoad();
			}
        }	
        
		var expander = new MD.Sync.MDContext.ExpandAnimation(this);
		expander.start();  
	},
    
    /** @see Echo.Render.ComponentSync#renderDispose */
    renderDispose: function(update) {
        this._containerElement = null;
        this._node = null;
        this._imgNode = null;
        this._container = null;
    },
    
    /** @see Echo.Render.ComponentSync#renderUpdate */
    renderUpdate: function(update) {
        return true;
    },
    
    /** see ... */
	redraw: function() {
	 	this._mainNode.style.left = this._positionX + "px";
		this._mainNode.style.top = this._positionY + "px";
	}, 
	
	/** @see MD.Sync.MDDesktopItem#onMouseOver */
    onMouseOver: function(mouseOver) {
		//not implemented
	}   
});
