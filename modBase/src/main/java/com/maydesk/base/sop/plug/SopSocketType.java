/* This file is part of the MayDesk project.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. 
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.*/

package com.maydesk.base.sop.plug;

import lombok.soplets.Sop;

import com.maydesk.base.aspects.Translatable;

/**
 * @author chrismay
 */
@Sop(aspects = { Translatable.class })
public enum SopSocketType {

	@Soplet(textEN = "Base")
	base,

	@Soplet(textEN = "Menu Entry")
	menu,

	@Soplet(textEN = "Panel")
	panel,

	@Soplet(textEN = "Action")
	action,

	@Soplet(textEN = "Floating Form")
	form,

	@Soplet(textEN = "Tab")
	tab,

	@Soplet(textEN = "Desktop (internal)")
	desktop,

	@Soplet(textEN = "Login Panel (internal)")
	loginPanel;

	@Override
	public String toString() {
		return textEN();
	}
}
