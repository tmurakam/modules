package com.maydesk.base.model;

import javax.persistence.Entity;

import lombok.soplets.SopBean;

import com.maydesk.base.sop.SopWire;

@Entity
@SopBean(sopRef=SopWire.class)
public class MWire extends MBase {
	
}