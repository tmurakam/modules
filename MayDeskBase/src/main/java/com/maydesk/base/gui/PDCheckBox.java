/* 
 * This file is copyright of PROFIDESK (www.profidesk.net)
 * Copyright (C) 2009
 * All rights reserved
 */
package com.maydesk.base.gui;

import static com.maydesk.base.util.SopletsResourceBundle.nls;
import nextapp.echo.app.CheckBox;
import nextapp.echo.app.Color;
import nextapp.echo.app.Extent;
import nextapp.echo.app.Font;
import nextapp.echo.app.Font.Typeface;

import com.maydesk.base.aspects.Translatable;
import com.maydesk.base.util.IChangeSupportableWithAction;
import com.maydesk.base.util.PDBinding;
import com.maydesk.base.util.PDBorderFactory;

/**
 * @author chrismay
 */
public class PDCheckBox extends CheckBox implements IChangeSupportableWithAction<Boolean> {

	private PDBinding changeSupport;

	public PDCheckBox() {
		initGui();
	}

	public PDCheckBox(Translatable caption, Object... params) {
		initGui();
		setText(nls(caption, params));
	}

	@Deprecated
	public PDCheckBox(String caption) {
		initGui();
		setText(caption);
	}

	protected void initGui() {
		setFont(new Font(new Typeface("Arial"), Font.BOLD, new Extent(12)));
		setForeground(Color.DARKGRAY);
		setDisabledForeground(Color.LIGHTGRAY);
		setBorder(PDBorderFactory.getBorder());
	}

	@Override
	public Boolean getValue() {
		return isSelected();
	}

	@Override
	public void setValue(Boolean value) {
		if (value != null) {
			setSelected(value);
		} else {
			setSelected(false);
		}
	}

	@Override
	public PDBinding getChangeSupport() {
		return changeSupport;
	}

	@Override
	public void setChangeSupport(PDBinding changeSupport) {
		this.changeSupport = changeSupport;
	}

	@Override
	public String getPropertyName() {
		return "selected";
	}

	// @Override
	@Override
	public void setEditable(boolean editable) {
		setEnabled(editable);
	}
}
