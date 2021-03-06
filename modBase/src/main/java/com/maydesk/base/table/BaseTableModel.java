/* This file is part of the MayDesk project.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. 
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.*/

package com.maydesk.base.table;

import static nextapp.echo.app.event.TableModelEvent.ALL_COLUMNS;
import static nextapp.echo.app.event.TableModelEvent.DELETE;
import static nextapp.echo.app.event.TableModelEvent.INSERT;

import java.util.ArrayList;
import java.util.List;

import nextapp.echo.app.event.TableModelEvent;
import nextapp.echo.app.table.AbstractTableModel;
import nextapp.echo.app.table.DefaultTableColumnModel;
import nextapp.echo.app.table.TableColumnModel;

/**
 * @author Alejandro Salas <br>
 *         Created on Jun 19, 2012
 */
public abstract class BaseTableModel<T> extends AbstractTableModel {

	protected List<T> itemList = new ArrayList<T>();
	protected DefaultTableColumnModel columnModel;

	protected BaseTableModel() {
		// Empty
	}

	public BaseTableModel(List<T> itemList) {
		this.itemList = itemList;
	}

	@Override
	public int getColumnCount() {
		return columnModel.getColumnCount();
	}

	@Override
	public String getColumnName(int col) {
		return columnModel.getColumn(col).getHeaderValue().toString();
	}

	@Override
	public int getRowCount() {
		return itemList.size();
	}

	public TableColumnModel getColumnModel() {
		if (columnModel == null) {
			initColumnModel();
		}

		return columnModel;
	}

	public void add(T item) {
		itemList.add(item);
		int row = itemList.size() - 1;
		fireTableChanged(new TableModelEvent(this, ALL_COLUMNS, row, row, INSERT));
	}

	public T del(int index) {
		T item = itemList.remove(index);
		int row = itemList.size();
		fireTableChanged(new TableModelEvent(this, ALL_COLUMNS, row, row, DELETE));

		return item;
	}

	public void reset() {
		itemList.clear();
		fireTableDataChanged();
	}

	public void setItemList(List<T> itemList) {
		this.itemList = itemList;
		fireTableDataChanged();
	}

	public T getItem(int row) {
		return itemList.get(row);
	}

	public void setValueAt(Object value, int col, int row) {
		// Read-only by default
	}

	protected abstract void initColumnModel();

	@Override
	public int getTotalColumnCount() {
		return getColumnCount();
	}

	@Override
	public boolean isColumnVisible(int arg0) {
		return true;
	}

}