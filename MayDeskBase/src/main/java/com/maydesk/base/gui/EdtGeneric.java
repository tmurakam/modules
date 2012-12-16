package com.maydesk.base.gui;

import java.lang.reflect.Field;
import java.lang.reflect.Method;

import com.maydesk.base.aspects.Translatable;
import com.maydesk.base.model.MBase;
import com.maydesk.base.model.MDataLink;
import com.maydesk.base.sop.gui.StandardTerms;
import com.maydesk.base.util.IChangeSupportable;
import com.maydesk.base.util.ICrudWithBinding;
import com.maydesk.base.util.PDBinding;
import com.maydesk.base.util.ShowWithEmptyData;
import com.maydesk.base.widgets.PDCombo;
import com.maydesk.base.widgets.PDGrid;
import com.maydesk.base.widgets.PDIntegerSpinner;
import com.maydesk.base.widgets.PDTextField;

import lombok.soplets.Beanable;
import lombok.soplets.SopBean;
import nextapp.echo.app.Component;
import nextapp.echo.app.Extent;


public class EdtGeneric extends PDGrid implements ICrudWithBinding<MBase>, ShowWithEmptyData{

	protected PDBinding binding;
	protected Class<? extends MBase> modelClass;

	public EdtGeneric(Class<? extends MBase> modelClass) {
		this(modelClass, 2);
	}

	public EdtGeneric(Class<? extends MBase> modelClass, int columns) {
		super(columns);
		this.binding = new PDBinding(modelClass);
		this.modelClass = modelClass;
		initGUI();
	}
	
	protected void initGUI() {
		SopBean sopBean = (SopBean)modelClass.getAnnotation(SopBean.class);
		Class<? extends Enum> sopClass = sopBean.sopRef();
		for (Field f : sopClass.getFields()) {
			try {
				Enum<?> soplet =  Enum.valueOf(sopClass, f.getName());
				
				//create label
				if (soplet instanceof Translatable) {
					addLabel(((Translatable)soplet));					
				} else {
					addLabel(f.getName());
				}
								
				if (soplet instanceof Beanable) {
					Class<?> javaType = ((Beanable)soplet).javaType();
					IChangeSupportable component = null;
					if (javaType == Integer.class) {
						component = new PDIntegerSpinner();
					} else if (javaType == Boolean.class) {
						component = new PDCheckBox();
					} else if (javaType.getSimpleName().startsWith("Sop")) {
						Method valuesMethod = javaType.getMethod("values");
						Object[] values = (Object[])valuesMethod.invoke(null);
						component = new PDCombo(values, StandardTerms.EMPTY, false);
						((PDCombo)component).setWidth(new Extent(150));
					} else {
						component = new PDTextField();
					}
					binding.register(component, (Beanable)soplet, false); 
					add((Component)component);
				} else {
					addLabel("(not available)");
				}				
			} catch (Exception e) {
				e.printStackTrace();
			}
		}		
	}

	public Component getFocusComponent() {
	    return null;
    }

	@Override
	public PDBinding getBinding() {
		return binding;
	}

	@Override
	public void readFromModel(MDataLink dataLinks) {
		binding.readDataLink(dataLinks);
	}

	@Override
	public void setDataObject(MBase model) {
		// TODO Auto-generated method stub		
	}
}