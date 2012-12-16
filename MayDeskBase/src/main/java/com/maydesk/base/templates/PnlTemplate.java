/* 
 * This file is copyright of PROFIDESK (www.profidesk.net)
 * Copyright (C) 2009
 * All rights reserved
 */
package com.maydesk.base.templates;

import com.maydesk.base.model.MBase;
import com.maydesk.base.model.MUser;
import com.maydesk.base.sop.logical.SopUser;
import com.maydesk.base.util.ICrud;
import com.maydesk.base.util.PDBinding;
import com.maydesk.base.widgets.PDGrid;
import com.maydesk.base.widgets.PDTextField;

import nextapp.echo.app.Component;

public class PnlTemplate extends PDGrid implements ICrud<MUser> {

	private PDBinding binding;

	@SuppressWarnings("unchecked")
    public PnlTemplate(PDBinding binding) {
		super(2);	
		this.binding = binding;
		initGUI();
	}

	protected void initGUI() {
		addLabel(SopUser.firstName);
		add(binding.register(new PDTextField(), SopUser.firstName));
		
		addLabel(SopUser.lastName);
		add(binding.register(new PDTextField(), SopUser.lastName));	
	}
	
	public void readFromModel(MBase model) {
		binding.read(model);
	}

	public Component getFocusComponent() {
	    return null;
    }

	public Class getModelClass() {
	    // TODO Auto-generated method stub
	    return null;
    }
}