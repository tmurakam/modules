package com.maydesk.context.widget;

import java.util.ArrayList;
import java.util.List;

import nextapp.echo.app.Component;
import nextapp.echo.app.event.ActionEvent;
import nextapp.echo.app.event.ActionListener;

import com.maydesk.base.config.IPlugTarget;
import com.maydesk.base.config.XmlBaseEntry;
import com.maydesk.base.config.XmlDesktopItem;

public class Webcam2 extends Component implements IPlugTarget {
	
	public static final String PROPERTY_IS_SENDER = "isSender";
	public static final String PROPERTY_VALUE = "value";
	public static final String ACTION_SEND_MESSAGE = "sendMessage";
	
	private List<ActionListener> startListeners = new ArrayList<ActionListener>();

	public Webcam2() {
		WebVideoConversation.getInstance().setWebcamLocal(this);
	}

	public String getValue() {
		return (String)get(PROPERTY_VALUE);
	}	
	
	@Override
	public void processInput(String inputName, Object inputValue) {
		if (ACTION_SEND_MESSAGE.equals(inputName)) {
			System.out.println("receiving " + inputValue);			
			ActionEvent e = new ActionEvent(this,  inputValue + "");
			for (ActionListener actionListener : startListeners) {
				actionListener.actionPerformed(e);
			}
		} else if (PROPERTY_VALUE.equals(inputName)) {
			set(PROPERTY_VALUE, inputValue);
		}
	}
	
	public void addStartListener(ActionListener actionListener) {
		startListeners.add(actionListener);
	}

	public void setValue(String value) {
		set(PROPERTY_VALUE, value);		
	}

	@Override
	public void initWire(XmlBaseEntry parentWire) {
		boolean isSender = "true".equals(((XmlDesktopItem)parentWire).getValue());
		set(PROPERTY_IS_SENDER, isSender);
	}
}

