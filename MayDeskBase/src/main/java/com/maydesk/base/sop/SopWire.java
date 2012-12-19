package com.maydesk.base.sop;

import lombok.soplets.Beanable;
import lombok.soplets.Sop;

import com.maydesk.base.aspects.Translatable;
import com.maydesk.base.model.MPlug;
import com.maydesk.base.model.MWire;

/**
 * @author chrismay
 */
@Sop(aspects = { Beanable.class, Translatable.class })
public enum SopWire {

	@Soplet(textEN = "Caption", javaType = String.class)
	caption,

	@Soplet(textEN = "Parameter")
	parameter,

	@Soplet(textEN = "Parent wire", javaType = MWire.class)
	parentWire,

	@Soplet(textEN = "Plug", javaType = MPlug.class)
	plug;
}
