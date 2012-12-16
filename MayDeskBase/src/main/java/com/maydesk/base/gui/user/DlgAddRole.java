/* 
 * This file is copyright of PROFIDESK (www.profidesk.net)
 * Copyright (C) 2009
 * All rights reserved
 */
package com.maydesk.base.gui.user;

import static com.maydesk.base.util.SopletsResourceBundle.nls;

import java.util.List;

import com.maydesk.base.gui.PDOkCancelDialog;
import com.maydesk.base.model.MUser;
import com.maydesk.base.model.MUserRole;
import com.maydesk.base.sop.gui.PDBeanTerms;
import com.maydesk.base.util.IRole;
import com.maydesk.base.util.IRoleEditor;
import com.maydesk.base.util.IUserRoleFactory;
import com.maydesk.base.widgets.PDCombo;
import com.maydesk.base.widgets.PDLabel;

import nextapp.echo.app.Column;
import nextapp.echo.app.Component;
import nextapp.echo.app.event.ActionEvent;
import nextapp.echo.app.event.ActionListener;

public class DlgAddRole extends PDOkCancelDialog {

	private static final long serialVersionUID = 1L;
	
	private MUserRole userRole;
	private PDCombo<Enum> cboRole; 	
	private IRoleEditor roleEditor; 	
	private Column roleEditorColumn;
	private IUserRoleFactory userRoleFactory;
	private MUser user;
	
	@SuppressWarnings("unchecked")
	public DlgAddRole(MUser user, String factoryClassName) {
		super(nls(PDBeanTerms.Add_role), 400, 300);
		this.user = user;
		try {
			Class factoryClass = Class.forName(factoryClassName);
			userRoleFactory = (IUserRoleFactory)factoryClass.newInstance();
			initGUI2();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public MUserRole getUserRole() {
		return userRole;
	}
	
	private void initGUI2() {
		List<Enum> roles = userRoleFactory.listRoles();
		pnlMainContainer.add(new PDLabel(PDBeanTerms.Role));
		cboRole = new PDCombo<Enum>();
		for (Enum role : roles) {			
			cboRole.getModel().add(role.toString(), role);
		}
		cboRole.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				showRoleEditor();
			}
		});
		pnlMainContainer.add(cboRole);
		
		roleEditorColumn = new Column();
		pnlMainContainer.add(roleEditorColumn);
	}
	
	private void showRoleEditor() {
		roleEditorColumn.removeAll();
		roleEditor = userRoleFactory.getEditor(user, cboRole.getSelectedItem());
		if (roleEditor != null) {
			roleEditorColumn.add((Component)roleEditor);
		}
	}
	
	@Override 
	protected boolean onOkClicked() {
		if (roleEditor == null) {
			userRole = new MUserRole();
		} else {
			userRole = roleEditor.getUserRole();
		}
		userRole.setRole(cboRole.getSelectedItem());
		userRole.setUserRef(user);
		return true;
	}
}