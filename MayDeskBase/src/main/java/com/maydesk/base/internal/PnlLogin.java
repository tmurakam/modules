/* 
 * This file is copyright of PROFIDESK (www.profidesk.net)
 * Copyright (C) 2009
 * All rights reserved
 */
package com.maydesk.base.internal;

import nextapp.echo.app.Color;
import nextapp.echo.app.Extent;
import nextapp.echo.app.FillImage;
import nextapp.echo.app.Font;
import nextapp.echo.app.Insets;
import nextapp.echo.app.Label;
import nextapp.echo.app.PasswordField;
import nextapp.echo.app.TextField;
import nextapp.echo.app.event.ActionEvent;
import nextapp.echo.app.event.ActionListener;
import nextapp.echo.extras.app.ContextMenu;
import nextapp.echo.extras.app.TransitionPane;

import com.maydesk.base.PDApplicationInstance;
import com.maydesk.base.PDDesktop;
import com.maydesk.base.PDUserSession;
import com.maydesk.base.gui.user.FrmAvatar;
import com.maydesk.base.gui.user.WzdNewUser;
import com.maydesk.base.gui.user.WzdPasswordForgotten;
import com.maydesk.base.sop.gui.PDBeanTerms;
import com.maydesk.base.sop.gui.StandardTerms;
import com.maydesk.base.util.PDUtil;
import com.maydesk.base.widgets.PDButton;
import com.maydesk.base.widgets.PDGrid;
import com.maydesk.base.widgets.PDLabel;
import com.maydesk.base.widgets.PDStatusLabel;

import echopoint.ContainerEx;
import echopoint.PushButton;
import echopoint.Separator;
import echopoint.Strut;
import echopoint.able.Positionable;

/**
 * @author mail@chrismay.de
 */
public class PnlLogin extends ContainerEx {

	private TextField txtLogin;
	private PasswordField txtPassword;
	private PDStatusLabel lblMessage;
	private boolean flipFlag;
	
	public PnlLogin() {
		setPosition(Positionable.ABSOLUTE);
		setHeight(new Extent(189));
		setBackgroundImage(new FillImage(PDUtil.getImg("img/semitrans6.png")));
		setInsets(new Insets(6));
		initGUILogin();
	}

	private void initGUILogin() {
		PDLabel lblLogin = new PDLabel("LOGIN", PDLabel.STYLE.WHITE_BIG);
		lblLogin.setTop(new Extent(5));
		lblLogin.setLeft(new Extent(75));
		add(lblLogin);
				
		add(new Strut(0, 8));
		
		PDGrid grid = new PDGrid(3); 
		add(grid);
		
		grid.addLabel(PDBeanTerms.Jabber_ID);
		txtLogin = new TextField();
		txtLogin.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent arg0) {
				btnEnterClicked();
			}
		});
		txtLogin.setHeight(new Extent(13));
		txtLogin.setForeground(Color.DARKGRAY);
		grid.addFill(txtLogin);

		grid.addLabel(StandardTerms.Password);
		txtPassword = new PasswordField();
		txtPassword.setForeground(Color.DARKGRAY);
		txtPassword.setMaximumLength(15);
		txtPassword.setHeight(new Extent(13));
		txtPassword.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent arg0) {
				btnEnterClicked();
			}
		});
		grid.addFill(txtPassword);

		grid.addEmpty();
		PushButton btnEnter = new PushButton("Login");
		btnEnter.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent arg0) {
				btnEnterClicked();
			}
		});
		grid.add(btnEnter);
		
		lblMessage = new PDStatusLabel();
		lblMessage.setFont(new Font(Font.VERDANA, Font.BOLD, new Extent(9)));
		lblMessage.setLineWrap(false);
		lblMessage.setForeground(Color.WHITE);
		grid.add(lblMessage);
		
		grid.addFill(new Separator());
		
		//WORK_AROUND this is just for loading the Extras library...
		ContextMenu tnpDummy = new ContextMenu(new Label(""));
		grid.addFill(tnpDummy);
		//grid.addFill(new Label());
		
		grid.addLabel("New to CloudDesk?");
		PDButton btnRegister = new PDButton("REGISTER NOW!", PDButton.STYLE.TRANSPARENT);
		btnRegister.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				btnRegisterClicked();
			}
		});
		grid.addFill(btnRegister);

		grid.addLabel("Lost password?");
		PDButton btnPassword = new PDButton("Recover password", PDButton.STYLE.TRANSPARENT);
		btnPassword.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				btnPasswordClicked();
			}
		});
		grid.addFill(btnPassword);
		
	}

	private void btnRegisterClicked() {
		WzdNewUser wzd = new WzdNewUser();
		PDDesktop.getInstance().addWindow(wzd);	
	}
		
	private void btnPasswordClicked() {
		WzdPasswordForgotten wzd = new WzdPasswordForgotten();
		PDDesktop.getInstance().addWindow(wzd);		
	}

	private void btnEnterClicked() {
		PDUserSession userSession = PDUserSession.getInstance();
		try {
			userSession.doLogin(txtLogin.getText(), txtPassword.getText());
		} catch (Exception e) {	
			e.printStackTrace();
			PDApplicationInstance.getActive().setFocusedComponent(txtPassword);
			txtPassword.setText("");
			lblMessage.setText(e.getMessage() + (flipFlag ? "" : " "));
			flipFlag = !flipFlag;
		}
	}

	public void initialize() {
		String cookie = PDUserSession.getInstance().getCookie(PDUserSession.LOGIN_COOKIE_NAME);
		if (PDUtil.isEmpty(cookie)) {
			PDApplicationInstance.getActive().setFocusedComponent(txtLogin);
		} else {
			txtLogin.setText(cookie);
			PDApplicationInstance.getActive().setFocusedComponent(txtPassword);
		}
    }
}