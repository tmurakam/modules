/* 
 * This file is copyright of PROFIDESK (www.profidesk.net)
 * Copyright (C) 2009
 * All rights reserved
 */
package com.maydesk.base.util;

import nextapp.echo.app.Color;

import com.maydesk.base.sop.enums.EImage16;

/**
 * @author chrismay
 */
public abstract class PDLookAndFeel implements ILookAndFeel {

	public static final Color HIGHLIGHT_COLOR = new Color(255, 243, 194);
	public static final Color BACKGROUND_COLOR = new Color(114, 136, 173);
	public static final Color LIGHT_BACKGROUND_COLOR = new Color(244, 250, 250);
	public static final Color ROLLOVER_COLOR = new Color(94, 116, 153);
	public static final Color DISABLED_BACKGROUND = new Color(245, 245, 245);
	public static final Color DISABLED_FOREGROUND = new Color(60, 60, 60);
	public static final Color EXP_SECTION_BACKROUND = new Color(180, 210, 225);

	@Override
	public Color getBackgroundClear() {
		return LIGHT_BACKGROUND_COLOR;
	}

	@Override
	public Color getBackgroundDark() {
		return BACKGROUND_COLOR;
	}

	@Override
	public Color getBackgroundDark2() {
		return ROLLOVER_COLOR;
	}

	@Override
	public Color getHighlight() {
		return HIGHLIGHT_COLOR;
	}

	@Override
	public IImage getFooterFillImage() {
		return EImage16.footerBackground;
	}

	public IImage getFooterLogo() {
		return EImage16.profideskFooter2;
	}

	@Override
	public IImage getProfideskIcon() {
		return EImage16.profideskFooter2;
	}

	@Override
	public Color getForeground() {
		return Color.WHITE;
	}

	public String getBackgroundImage() {
		return "img/CloudDeskBackground.jpg";
	}
}
