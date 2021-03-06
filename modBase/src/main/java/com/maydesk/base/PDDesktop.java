/* This file is part of the MayDesk project.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. 
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.*/
package com.maydesk.base;

import java.util.HashMap;
import java.util.List;

import nextapp.echo.app.ApplicationInstance;
import nextapp.echo.app.Color;
import nextapp.echo.app.Component;
import nextapp.echo.app.ContentPane;
import nextapp.echo.app.Extent;
import nextapp.echo.app.FillImage;
import nextapp.echo.app.Insets;
import nextapp.echo.app.Label;
import nextapp.echo.app.ResourceImageReference;
import nextapp.echo.app.Row;
import nextapp.echo.app.SplitPane;
import nextapp.echo.app.WindowPane;
import nextapp.echo.app.event.ActionEvent;
import nextapp.echo.app.event.ActionListener;
import nextapp.echo.app.layout.SplitPaneLayoutData;
import nextapp.echo.extras.app.MenuBarPane;
import nextapp.echo.extras.app.menu.DefaultMenuModel;
import nextapp.echo.extras.app.menu.DefaultOptionModel;
import nextapp.echo.extras.app.menu.MenuModel;
import nextapp.echo.webcontainer.ContainerContext;

import com.maydesk.base.cmd.ICommand;
import com.maydesk.base.config.IPlugTarget;
import com.maydesk.base.config.MDPluginRegistry;
import com.maydesk.base.config.XMLDesktopConfig;
import com.maydesk.base.config.XmlDesktopItem;
import com.maydesk.base.config.XmlMenu;
import com.maydesk.base.config.XmlMenuItem;
import com.maydesk.base.dao.DaoUser;
import com.maydesk.base.internal.PnlLogin;
import com.maydesk.base.model.MAvatar;
import com.maydesk.base.model.MShortcut;
import com.maydesk.base.util.PDUtil;
import com.maydesk.base.widgets.PDAvatar;
import com.maydesk.base.widgets.PDButton;
import com.maydesk.base.widgets.PDLabel;
import com.maydesk.base.widgets.PDShortcut;

import echopoint.ContainerEx;
import echopoint.Strut;
import echopoint.able.Positionable;

/**
 * This class is the centerpiece of the PDWorkspace framework; it provides the
 * desktop where the menu, windows, tasks etc. are displayed
 * 
 * @author chrismay
 */
public final class PDDesktop extends ContentPane {

	private static final String DESKTOP_INSTANCE = "DESKTOP_INSTANCE"; //$NON-NLS-1$

	public static PDDesktop getInstance() {
		ContainerContext context = (ContainerContext) ApplicationInstance.getActive().getContextProperty(ContainerContext.CONTEXT_PROPERTY_NAME);
		if (context == null) return null;
		PDDesktop desktop = (PDDesktop) context.getSession().getAttribute(DESKTOP_INSTANCE);
		return desktop;
	}

	private HashMap<String, PDAvatar> allAvatars = new HashMap<String, PDAvatar>();
	private ContainerEx contentPane;
	private MenuBarPane menuBar;
	private HashMap<String, XmlMenuItem> menuItems = new HashMap<String, XmlMenuItem>();
	private Row rowFooterLeft;
	private Row rowFooterRight;
	private ContainerEx rowMenu;
	private Row rowTopRight;
	private SplitPane splitFooterLeftRight;
	private SplitPane splitFooterMain;
	private SplitPane splitHeaderMain;	

	
	public PDDesktop() {
		ContainerContext context = (ContainerContext) ApplicationInstance.getActive().getContextProperty(ContainerContext.CONTEXT_PROPERTY_NAME);
		context.getSession().setAttribute(DESKTOP_INSTANCE, this);
		PDUserSession.getInstance().addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent arg0) {
				userChanged();
			}
		});
	}

	public void addAvatar(final MAvatar mAvatar) {
		final PDAvatar avatar = new PDAvatar(mAvatar);
		allAvatars.put(avatar.getModel().getPerson().getJabberId(), avatar);
		PDUserSession.getInstance().addToRoster(mAvatar.getPerson());
		contentPane.add(avatar.getMenuedComponent());
	}

	public void addShortcut(final MShortcut mShortcut) {
		final PDShortcut shortcut = new PDShortcut(mShortcut);
		contentPane.add(shortcut);
	}

	public void addWindow(final Component c) {
		if (c instanceof WindowPane) {
			add(c);
		} else {
			contentPane.add(c);
		}
	}

	private void appendSubMenus(DefaultMenuModel parentMenuModel, List<XmlMenu> subMenuEntries) {
		for (XmlMenu xmlMenu : subMenuEntries) {
			DefaultMenuModel menu = new DefaultMenuModel("", xmlMenu.getTextEN());
			parentMenuModel.addItem(menu);
			appendSubMenus(menu, xmlMenu.getMenuEntries());
			for (XmlMenuItem item : xmlMenu.getMenuItems()) {
				String id = "Item_" + menuItems.size();
				DefaultOptionModel optionModel = new DefaultOptionModel(id, item.getTextEN(), null);
				menu.addItem(optionModel);
				menuItems.put(id, item);
			}
		}		
	}

	public PDAvatar findAvatarByJabberId(String jabberId) {
		return allAvatars.get(jabberId);
	}
	
	public void initDesktop() {
		String img = "img/MayDeskBackground.jpg";
		setBackgroundImage(new FillImage(new ResourceImageReference(img)));

		try {
			splitFooterMain = new SplitPane(SplitPane.ORIENTATION_VERTICAL_BOTTOM_TOP);
			splitFooterMain.setSeparatorPosition(new Extent(25));
			super.add(splitFooterMain);

			splitFooterLeftRight = new SplitPane(SplitPane.ORIENTATION_HORIZONTAL_RIGHT_LEFT);
			splitFooterLeftRight.setSeparatorPosition(new Extent(220));
			SplitPaneLayoutData spld = new SplitPaneLayoutData();
			spld.setBackgroundImage(new FillImage(PDUtil.getImg("img/semitrans6.png")));
			splitFooterLeftRight.setLayoutData(spld);
			splitFooterMain.add(splitFooterLeftRight);

			rowFooterLeft = new Row();
			rowFooterRight = new Row();
			splitFooterLeftRight.add(rowFooterRight);
			splitFooterLeftRight.add(rowFooterLeft);

			// **********************************************************************************
			splitHeaderMain = new SplitPane(SplitPane.ORIENTATION_VERTICAL_TOP_BOTTOM);
			splitHeaderMain.setSeparatorPosition(new Extent(25));
			splitFooterMain.add(splitHeaderMain);

			SplitPane splitHeader = new SplitPane(SplitPane.ORIENTATION_HORIZONTAL_RIGHT_LEFT);
			splitHeader.setSeparatorPosition(new Extent(380));
			spld = new SplitPaneLayoutData();
			spld.setBackgroundImage(new FillImage(PDUtil.getImg("img/semitrans6.png")));
			splitHeader.setLayoutData(spld);
			splitHeaderMain.add(splitHeader);

			rowTopRight = new Row();
			rowTopRight.setCellSpacing(new Extent(12));
			spld.setInsets(new Insets(5, 2, 0, 0));
			rowTopRight.setLayoutData(spld);
			splitHeader.add(rowTopRight);

			contentPane = new ContainerEx() {
				@Override
				public boolean isValidChild(Component child) {
					return true;
				}
			};

			contentPane.setHeight(new Extent(100, Extent.PERCENT));
			splitHeaderMain.add(contentPane);

			rowMenu = new ContainerEx();
			rowMenu.setLayoutStyle(ContainerEx.ROW_LAYOUT);			
			rowMenu.setTop(new Extent(3));
			splitHeader.add(rowMenu);
			rowMenu.add(new Strut(6, 0));

			userChanged();
		} catch (Throwable e) {
			e.printStackTrace();
		}
	}

	private void loadItems(Component parent, List<XmlDesktopItem> items) {
		for (XmlDesktopItem item : items) {
			try {
				Class clazz = Class.forName(item.getClassName());
				IPlugTarget itemInstance = (IPlugTarget)clazz.newInstance();
				itemInstance.initWire(item);
				parent.add((Component)itemInstance);
			} catch (Exception e) {
				e.printStackTrace();
			}			
		}
	}

	private void loadMenu(XMLDesktopConfig configuration) {
		if (configuration.getMenu() == null) return;
		
		MenuBarPane menuBarPane = new MenuBarPane();
		menuBarPane.setForeground(Color.WHITE);
		DefaultMenuModel menuBarModel = new DefaultMenuModel();
		menuBarPane.setModel(menuBarModel);
		rowMenu.add(menuBarPane);
		
		appendSubMenus(menuBarModel, configuration.getMenu().getMenuEntries());
		menuBarPane.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent ae) {
				XmlMenuItem item = menuItems.get(ae.getActionCommand());
				ICommand command = (ICommand)PDUtil.getSopletEntry(item.getCommandClass(), item.getCommandId());
				command.doCommand();
			}
		});
	}

	private void loadShortcuts() {
		List<MShortcut> shortcuts = DaoUser.findShortcuts(PDUserSession.getInstance().getUser());
		for (MShortcut shortcut : shortcuts) {
			addShortcut(shortcut);
		}
		List<MAvatar> avatars = DaoUser.findAvatars(PDUserSession.getInstance().getUser());
		for (MAvatar avatar : avatars) {
			addAvatar(avatar);
		}
	}

	public void showSaving() {
		// lblStatus.setLineWrap(!lblStatus.isLineWrap());
	}

	public void userChanged() {
		contentPane.removeAll();

		MDPluginRegistry registry = MDPluginRegistry.getInstance();
		XMLDesktopConfig configuration = registry.getConfiguration();
		loadItems(contentPane, configuration.getDesktopEntries());
		loadItems(rowFooterLeft, configuration.getFooterItemsLeft());
		loadItems(rowFooterRight, configuration.getFooterItemsRight());
		loadMenu(configuration);

		if (PDUserSession.getInstance().isLoggedIn()) {
			splitHeaderMain.setSeparatorPosition(new Extent(25));
			splitFooterMain.setSeparatorPosition(new Extent(25));
			loadShortcuts();
		} else {
			splitHeaderMain.setSeparatorPosition(new Extent(0));
			splitFooterMain.setSeparatorPosition(new Extent(0));
		}
	}

	public void removeItem(Component comp) {
		contentPane.remove(comp);
	}
}