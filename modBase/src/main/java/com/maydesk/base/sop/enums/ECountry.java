/* This file is part of the MayDesk project.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. 
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.*/

package com.maydesk.base.sop.enums;

/**
 * @author chrismay
 */
public enum ECountry {

	Afghanistan, Albania, Algeria, Andorra, Angola, Anguilla, Antarctica, Antigua_and_Barbuda, Argentina, Armenia, Aruba, Australia, Austria, Azerbaijan, Bahamas, Bahrain, Bangladesh, Barbados, Belarus, Belgium, Belize, Benin, Bermuda, Bhutan, Bolivia, Bosnia_and_Herzegovina, Botswana, Bouvet_Island, Brazil, British_Indian_Ocean_Territory, British_Virgin_Islands, Brunei_Darussalam, Bulgaria, Burkina_Faso, Burundi, Cambodia, Cameroon, Canada, Cape_Verde, Cayman_Islands, Central_African_Republic, Chad, Chile, China, Christmas_Island, Cocos_Islands, Colombia, Comoros, Congo, Cook_Islands, Costa_Rica, Croatia, Cuba, Cyprus, Czech_Republic, Denmark, Djibouti, Dominica, Dominican_Republic, East_Timor, Ecuador, Egypt, El_Salvador, Equatorial_Guinea, Eritrea, Estonia, Ethiopia, Falkland_Islands, Faroe_Islands, Fiji, Finland, France, French_Guiana, French_Polynesia, French_Southern_Territories, Gabon, Gambia, Georgia, Germany, Ghana, Gibraltar, Greece, Greenland, Grenada, Guadeloupe, Guam, Guatemala, Guinea, Guinea_Bissau, Guyana, Haiti, Heard_and_McDonald_Islands, Honduras, Hong_Kong, Hungary, Iceland, India, Indonesia, Iran, Iraq, Ireland, Israel, Italy, Ivory_Coast, Jamaica, Japan, Jordan, Kazakhstan, Kenya, Kiribati, Kuwait, Kyrgyzstan, Laos, Latvia, Lebanon, Lesotho, Liberia, Libya, Liechtenstein, Lithuania, Luxembourg, Macau, Macedonia, Madagascar, Malawi, Malaysia, Maldives, Mali, Malta, Marshall_Islands, Martinique, Mauritania, Mauritius, Mayotte, Mexico, Micronesia, Moldova, Monaco, Mongolia, Montserrat, Morocco, Mozambique, Myanmar, Namibia, Nauru, Nepal, Netherlands, Netherlands_Antilles, Neutral_Zone, New_Caledonia, New_Zealand, Nicaragua, Niger, Nigeria, Niue, Norfolk_Island, North_Korea, Northern_Mariana_Islands, Norway, Oman, Pakistan, Palau, Panama, Papua_New_Guinea, Paraguay, Peru, Philippines, Pitcairn, Poland, Portugal, Puerto_Rico, Qatar, Reunion, Romania, Russian_Federation, Rwanda, Saint_Kitts_and_Nevis, Saint_Lucia, Saint_Vincent_and_the_Grenadines, Samoa, San_Marino, Sao_Tome_and_Principe, Saudi_Arabia, Senegal, Seychelles, Sierra_Leone, Singapore, Slovak_Republic, Slovenia, Solomon_Islands, Somalia, South_Africa, South_Korea, Spain, Sri_Lanka, St_Helena, St_Pierre_and_Miquelon, Sudan, Suriname, Svalbard_and_Jan_Mayen_Islands, Swaziland, Sweden, Switzerland, Syria, Taiwan, Tajikistan, Tanzania, Thailand, Togo, Tokelau, Tonga, Trinidad_and_Tobago, Tunisia, Turkey, Turkmenistan, Turks_and_Caicos_Islands, Tuvalu, Uganda, Ukraine, United_Arab_Emirates, United_Kingdom, United_States, Uruguay, US_Minor_Outlying_Islands, US_Virgin_Islands, Uzbekistan, Vanuatu, Venezuela, Viet_Nam, Wallis_and_Futuna_Islands, Western_Sahara, Yemen, Yugoslavia, Zaire, Zambia, Zimbabwe;

	@Override
	public String toString() {
		return name().replaceAll("_", " ");
	}
}
