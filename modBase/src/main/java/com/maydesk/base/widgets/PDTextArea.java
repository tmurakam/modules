/* This file is part of the MayDesk project.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. 
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.*/

package com.maydesk.base.widgets;

import nextapp.echo.app.Extent;
import nextapp.echo.app.TextArea;

import com.maydesk.base.util.IChangeSupportableWithAction;
import com.maydesk.base.util.PDBinding;
import com.maydesk.base.util.PDBorderFactory;

/**
 * @author chrismay
 */
public class PDTextArea extends TextArea implements IChangeSupportableWithAction<String> {

	private PDBinding changeSupport;

	public PDTextArea() {
		setBorder(PDBorderFactory.getBorder());
		setWidth(new Extent(310));
	}

	@Override
	public String getValue() {
		return getText();
	}

	@Override
	public void setValue(String text) {
		setText(text);
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
		return "text";
	}

	@Override
	public void setEditable(boolean editable) {
		setEnabled(editable);
	}
}
