MD.MDNewsBox = Core.extend(MD.MDAbstractFigure, {

	getEditor: function() {
		return null;
	},

	$load : function() {
       	Echo.ComponentFactory.registerType("MDNewsBox", this);
	},
   	
	componentType : "MDNewsBox"		
});
 
 
MD.Sync.MDNewsBox = Core.extend(MD.Sync.MDAbstractFigure, {
    
    $load: function() {
        Echo.Render.registerPeer("MDNewsBox", this);
    },

	_width: null,
	_height: null,
	
	renderAdd2: function(canvas, x, y) {
		this._figure = new window.draw2d.SetFigure();
		this._width = this.component.render("width");
		this._height = this.component.render("height");
		this._figure.onClick = Core.method(this, this.onClick);
		this._figure.createSet = Core.method(this, this._createSet);
		this._figure.setDimension(this._width, this._height);
        
        this.installListeners(this._figure);
		canvas.addFigure(this._figure, x, y);
    },
    
    _createSet: function() {
		var paper = this._parent._canvas.paper; 
		var set = paper.set();
		
		var rect = paper.rect(0, 0, this._width, this._height);
		rect.attr({fill:"#fff",stroke:"#fff",r:8,opacity:0.5 });
		set.push(rect);
		
		var lineBreakText = this._lineBreak(this.component.render("text", null));
		if (lineBreakText) {
			var text = paper.text(90, 50, lineBreakText);
			text.attr({'font-size': 18});
			set.push(text);
		}

		var title = this.component.render("title"); 
		var titleText = paper.text(90, 100, title);
		titleText.attr({'font-size': 22, 'font-weight': 'bold'});
		set.push(titleText);


 		var icon = this.component.render("icon", "");
 		if (icon) {
			var image = paper.image(Echo.Sync.ImageReference.getUrl(icon), 165, 60, 30, 60);
			set.push(image);
		}

        return set;
    },
    
    _lineBreak: function(text) {
    	if (!text) return null;
    	var lineCount = Math.floor(Math.sqrt(text.length / 15)) + 1;
	    var words = text.match(/\w+/g);
    	var result = "";
    	var length = 0;
    	var lineLength = 23; //this._width - 10;
	    for (var i = 0; i < words.length; i++) {
	        var newLength = length + words[i].length;
	        if (lineCount > 0 && newLength > lineLength) {
	        	lineCount--;
	        	result += "\n";
	        	length = 0;
	        }
	        result += words[i] + " ";
	        length += words[i].length + 1;
	    }
    	return result;
	}
 });

 
 