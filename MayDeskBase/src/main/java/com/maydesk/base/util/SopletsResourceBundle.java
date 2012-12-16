/*
 * =============================================================================
 *
 * Copyright (c) 2010, The freeNLS team (http://www.freeNLS.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
*/ 
package com.maydesk.base.util;

import java.io.File;
import java.io.FileInputStream;
import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.text.MessageFormat;
import java.util.Locale;
import java.util.Properties;
import java.util.logging.Logger;

import com.maydesk.base.aspects.Translatable;


/**
 * A convenience ResourceBundle, adapted to the freeNLS infrastructur 
 */
public class SopletsResourceBundle {

  /**
   * Converts a term into the current language specific string.
   * 
   * The locale must be defined by calling Locale.setLocale(...), otherwise
   * the system default locale will be used.
   * 
   * @param The NLS term containing the translations. The term must have either a SimpleTerm
   *        annotation, or another annotation as specified in the NLSDomain.type() attribute
   * @param Optional parameters, the placeholders ({0}, {1}, {2}...) will be replaced by these
   *        values is applicable
   * @return The text in the current locale language
   */
  public static String nls(Translatable term, Object... params) {
    if (term == null) {
      return null;
    }
    
    try {
    	
	  String translation = null;
	  if (term instanceof Enum) {
		  PDUtil.getOverride((Enum)term, "textEN");
	  }            
      if (translation == null) {
    	  translation = term.textEN();
      }
      if (translation == null) {
    	  translation = "#" + term;
      } else if (params != null && params.length > 0) {
    	  translation = MessageFormat.format(translation, params);
      }
      return translation;
    } catch (Exception e) {
    	e.printStackTrace();
    	Logger.getLogger(SopletsResourceBundle.class.getCanonicalName()).throwing(term.toString(), "Unexpected error", e);
    	return "@" + term;
    }
  }

//  private static String getTranslation(Locale locale, Annotation annotation, Object... params) throws 
//      SecurityException, NoSuchMethodException, IllegalArgumentException, IllegalAccessException, InvocationTargetException {
//    String lang = locale.getLanguage(); // e.g. "en_US"
//    String methodName = "text" + lang.toUpperCase();
//    Method m = annotation.getClass().getMethod(methodName, new Class[0]);
//    if (m == null && lang.length() > 2) {
//      lang = lang.substring(0, 2); // e.g. "en"
//      methodName = "text" + lang.toUpperCase();
//      m = annotation.getClass().getMethod(methodName, new Class[0]);
//    }
//    // still not found? try with country
//    if (m == null && lang.length() > 2) {
//      lang = locale.getCountry();
//      methodName = "text" + lang.toUpperCase();
//      m = annotation.getClass().getMethod(methodName, new Class[0]);
//    }
//    String translation = (String) m.invoke(annotation, new Object[0]);
//    if (translation != null && params != null && params.length > 0) {
//      translation = MessageFormat.format(translation, params);
//    }
//    return translation;
//  }

}
