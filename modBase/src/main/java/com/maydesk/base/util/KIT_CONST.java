/* This file is part of the MayDesk project.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. 
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.*/

package com.maydesk.base.util;

/**
 * @author chrismay
 */
public enum KIT_CONST {

	Comma(","),

	Star("*"),

	Space(" "),

	Apostrophe("'"),

	SA(" '"),

	AS("' "),

	CRLF("\n"),

	UNDERSCORE("_"),

	EMPTY(""),

	Colon(":");

	private String text;

	private KIT_CONST(String text) {
		this.text = text;
	}

	@Override
	public String toString() {
		return text;
	}

	/**
	 * short form of toString()
	 */
	public String s() {
		return text;
	}
}
