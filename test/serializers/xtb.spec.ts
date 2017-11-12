/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import {xtbLoadToI18n} from "../../src/serializers/xtb";

export const XTB = `
<translationbundle>
  <translation id="615790887472569365">attributs i18n sur les balises</translation>
  <translation id="3707494640264351337">imbriqué</translation>
  <translation id="5539162898278769904">imbriqué</translation>
  <translation id="3780349238193953556"><ph name="START_ITALIC_TEXT"/>avec des espaces réservés<ph name="CLOSE_ITALIC_TEXT"/></translation>
  <translation id="5415448997399451992"><ph name="START_TAG_DIV"><ex>&lt;div&gt;</ex></ph>avec <ph name="START_TAG_DIV"><ex>&lt;div&gt;</ex></ph>des espaces réservés<ph name="CLOSE_TAG_DIV"><ex>&lt;/div&gt;</ex></ph> imbriqués<ph name="CLOSE_TAG_DIV"><ex>&lt;/div&gt;</ex></ph></translation>
  <translation id="5525133077318024839">sur des balises non traductibles</translation>
  <translation id="8670732454866344690">sur des balises traductibles</translation>
  <translation id="4593805537723189714">{VAR_PLURAL, plural, =0 {zero} =1 {un} =2 {deux} other {<ph name="START_BOLD_TEXT"/>beaucoup<ph name="CLOSE_BOLD_TEXT"/>}}</translation>
  <translation id="4360321700965841752"><ph name="ICU"/></translation>
  <translation id="5460933846928880074">{VAR_SELECT, select, 0 {autre} m {homme} f {femme} }</translation>
  <translation id="1746565782635215"><ph name="ICU"/></translation>
  <translation id="5868084092545682515">{VAR_SELECT, select, m {homme} f {femme}}</translation>
  <translation id="4851788426695310455"><ph name="INTERPOLATION"/></translation>
  <translation id="9013357158046221374">sexe = <ph name="INTERPOLATION"/></translation>
  <translation id="8324617391167353662"><ph name="CUSTOM_NAME"/></translation>
  <translation id="7685649297917455806">dans une section traductible</translation>
  <translation id="2387287228265107305"><ph name="START_HEADING_LEVEL1"/>Balises dans les commentaires html<ph name="CLOSE_HEADING_LEVEL1"/><ph name="START_TAG_DIV"/><ph name="CLOSE_TAG_DIV"/><ph name="START_TAG_DIV_1"/><ph name="ICU"/><ph name="CLOSE_TAG_DIV"></ph></translation>
  <translation id="1491627405349178954">ca <ph name="START_BOLD_TEXT"/>devrait<ph name="CLOSE_BOLD_TEXT"/> marcher</translation>
  <translation id="i18n16">avec un ID explicite</translation>
  <translation id="i18n17">{VAR_PLURAL, plural, =0 {zero} =1 {un} =2 {deux} other {<ph 
  name="START_BOLD_TEXT"><ex>&lt;b&gt;</ex></ph>beaucoup<ph name="CLOSE_BOLD_TEXT"><ex>&lt;/b&gt;</ex></ph>} }</translation>
  <translation id="4085484936881858615">{VAR_PLURAL, plural, =0 {Pas de réponse} =1 {une réponse} other {<ph name="INTERPOLATION"><ex>INTERPOLATION</ex></ph> réponse} }</translation>
  <translation id="4035252431381981115">FOO<ph name="START_LINK"><ex>&lt;a&gt;</ex></ph>BAR<ph name="CLOSE_LINK"><ex>&lt;/a&gt;</ex></ph></translation>
  <translation id="5339604010413301604"><ph name="MAP_NAME"><ex>MAP_NAME</ex></ph></translation>
</translationbundle>`;

describe("Xtb serializer", () => {
  it("should decode xtb", () => {
    expect(xtbLoadToI18n(XTB)).toEqual({
      "615790887472569365": ["attributs i18n sur les balises"],
      "3707494640264351337": ["imbriqué"],
      "5539162898278769904": ["imbriqué"],
      "3780349238193953556": ["START_ITALIC_TEXT", "avec des espaces réservés", "CLOSE_ITALIC_TEXT"],
      "5415448997399451992": [
        "START_TAG_DIV",
        "avec ",
        "START_TAG_DIV",
        "des espaces réservés",
        "CLOSE_TAG_DIV",
        " imbriqués",
        "CLOSE_TAG_DIV"
      ],
      "5525133077318024839": ["sur des balises non traductibles"],
      "8670732454866344690": ["sur des balises traductibles"],
      "4593805537723189714": [
        {
          expression: "VAR_PLURAL",
          type: "plural",
          cases: {
            "=0": ["zero"],
            "=1": ["un"],
            "=2": ["deux"],
            other: ["START_BOLD_TEXT", "beaucoup", "CLOSE_BOLD_TEXT"]
          }
        }
      ],
      "4360321700965841752": ["ICU"],
      "5460933846928880074": [
        {
          expression: "VAR_SELECT",
          type: "select",
          cases: {"0": ["autre"], m: ["homme"], f: ["femme"]}
        }
      ],
      "1746565782635215": ["ICU"],
      "5868084092545682515": [
        {
          expression: "VAR_SELECT",
          type: "select",
          cases: {m: ["homme"], f: ["femme"]}
        }
      ],
      "4851788426695310455": ["INTERPOLATION"],
      "9013357158046221374": ["sexe = ", "INTERPOLATION"],
      "8324617391167353662": ["CUSTOM_NAME"],
      "7685649297917455806": ["dans une section traductible"],
      "2387287228265107305": [
        "START_HEADING_LEVEL1",
        "Balises dans les commentaires html",
        "CLOSE_HEADING_LEVEL1",
        "START_TAG_DIV",
        "CLOSE_TAG_DIV",
        "START_TAG_DIV_1",
        "ICU",
        "CLOSE_TAG_DIV"
      ],
      "1491627405349178954": ["ca ", "START_BOLD_TEXT", "devrait", "CLOSE_BOLD_TEXT", " marcher"],
      i18n16: ["avec un ID explicite"],
      i18n17: [
        {
          expression: "VAR_PLURAL",
          type: "plural",
          cases: {
            "=0": ["zero"],
            "=1": ["un"],
            "=2": ["deux"],
            other: ["START_BOLD_TEXT", "beaucoup", "CLOSE_BOLD_TEXT"]
          }
        }
      ],
      "4085484936881858615": [
        {
          expression: "VAR_PLURAL",
          type: "plural",
          cases: {
            "=0": ["Pas de réponse"],
            "=1": ["une réponse"],
            other: ["INTERPOLATION", " réponse"]
          }
        }
      ],
      "4035252431381981115": ["FOO", "START_LINK", "BAR", "CLOSE_LINK"],
      "5339604010413301604": ["MAP_NAME"]
    });
  });
});
