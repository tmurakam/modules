package com.maydesk.web; 

import com.maydesk.base.util.PDLookAndFeel;

import nextapp.echo.app.Color;

public class MDLookAndFeel extends PDLookAndFeel {

	@Override
	public String getLogo() {
		return "img/CloudDeskLogo.png"; 
	}
	
	@Override
	public String getBackgroundImage() {
		return "img/CloudDeskBackground.jpg"; 
	}
	
	@Override
	public Color getBackgroundClear() {
		return new Color(215, 220, 217);
	}
	
	@Override
	public String getVersionInfo() {
		return "Demo";
	}
	
	@Override
    public String getApplicationName() {
        return "CloudDesk";
    }
}