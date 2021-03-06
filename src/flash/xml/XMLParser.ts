/**
 * Copyright 2014 Mozilla Foundation
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
 */
// Class: XMLParser
module Shumway.AVM2.AS.flash.xml {
  import notImplemented = Shumway.Debug.notImplemented;
  import dummyConstructor = Shumway.Debug.dummyConstructor;
  import asCoerceString = Shumway.AVM2.Runtime.asCoerceString;
  export class XMLParser extends ASNative {
    static initializer: any = null;
    constructor () {
      false && super();
      dummyConstructor("packageInternal flash.xml.XMLParser");
    }
    // Static   JS -> AS Bindings
    // Static   AS -> JS Bindings
    // Instance JS -> AS Bindings
    // Instance AS -> JS Bindings
    startParse(source: string, ignoreWhite: boolean): void {
      source = asCoerceString(source); ignoreWhite = !!ignoreWhite;
      notImplemented("packageInternal flash.xml.XMLParser::startParse"); return;
    }
    getNext(tag: flash.xml.XMLTag): number /*int*/ {
      tag = tag;
      notImplemented("packageInternal flash.xml.XMLParser::getNext"); return;
    }
  }
}
