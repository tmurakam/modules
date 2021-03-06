/* This file is part of the MayDesk project.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. 
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.*/

package com.maydesk.base.util;

import java.lang.annotation.Annotation;

import lombok.soplets.Beanable;

import com.maydesk.base.aspects.Translatable;

/**
 * @author chrismay
 */
public class SimpleName implements Translatable, Beanable {

	private String name;

	public SimpleName(String name) {
		this.name = name;
	}

	// @Override
	public String name() {
		return name;
	}

	@Override
	public Class<? extends Annotation> annotationType() {
		return null;
	}

	@Override
	public String textDE() {
		return name;
	}

	@Override
	public String textEN() {
		return name;
	}

	@Override
	public String textFR() {
		return name;
	}

	@Override
	public Class javaType() {
		return String.class;
	}

	@Override
	public int length() {
		return 0;
	}
}
