/* This file is part of the MayDesk project.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. 
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.*/

package com.maydesk.base.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * @author chrismay
 */
@Entity
@Table(name = "t_pdw_action")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public abstract class MAction extends MBase {

	private String oldStringValue;
	private String newStringValue;
	private int oldIntValue;
	private int newIntValue;
	private double oldDoubleValue;
	private double newDoubleValue;
	private MUser user;
	private Date datum;

	public abstract void redoAction();

	public abstract void undoAction();

	@ManyToOne
	public MUser getUser() {
		return user;
	}

	public void setUser(MUser user) {
		this.user = user;
	}

	@Column(length = 2000)
	public String getNewStringValue() {
		return newStringValue;
	}

	public void setNewStringValue(String newStringValue) {
		this.newStringValue = newStringValue;
	}

	@Column(length = 2000)
	public String getOldStringValue() {
		return oldStringValue;
	}

	public void setOldStringValue(String oldStringValue) {
		this.oldStringValue = oldStringValue;
	}

	public double getNewDoubleValue() {
		return newDoubleValue;
	}

	public void setNewDoubleValue(double newDoubleValue) {
		this.newDoubleValue = newDoubleValue;
	}

	public int getNewIntValue() {
		return newIntValue;
	}

	public void setNewIntValue(int newIntValue) {
		this.newIntValue = newIntValue;
	}

	public double getOldDoubleValue() {
		return oldDoubleValue;
	}

	public void setOldDoubleValue(double oldDoubleValue) {
		this.oldDoubleValue = oldDoubleValue;
	}

	public int getOldIntValue() {
		return oldIntValue;
	}

	public void setOldIntValue(int oldIntValue) {
		this.oldIntValue = oldIntValue;
	}

	public Date getDatum() {
		return datum;
	}

	public void setDatum(Date datum) {
		this.datum = datum;
	}
}