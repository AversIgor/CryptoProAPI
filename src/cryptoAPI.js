(function e(t,_,C){function r(i,E){if(!_[i]){if(!t[i]){var A=typeof require=="function"&&require;if(!E&&A)return A(i,!0);if(n)return n(i,!0);var O=new Error("Cannot find module '"+i+"'");throw O.code="MODULE_NOT_FOUND",O}var I=_[i]={exports:{}};t[i][0].call(I.exports,function(e){var _=t[i][1][e];return r(_?_:e)},I,I.exports,e,t,_,C)}return _[i].exports}var n=typeof require=="function"&&require;for(var i=0;i<C.length;i++)r(C[i]);return r})({1:[function(e,t,_){var C={};C.StoreLocation={CAPICOM_MEMORY_STORE:0,CAPICOM_LOCAL_MACHINE_STORE:1,CAPICOM_CURRENT_USER_STORE:2,CAPICOM_ACTIVE_DIRECTORY_USER_STORE:3,CAPICOM_SMART_CARD_USER_STORE:4};C.StoreOpenMode={CAPICOM_STORE_OPEN_READ_ONLY:0,CAPICOM_STORE_OPEN_READ_WRITE:1,CAPICOM_STORE_OPEN_MAXIMUM_ALLOWED:2,CAPICOM_STORE_OPEN_EXISTING_ONLY:128,CAPICOM_STORE_OPEN_INCLUDE_ARCHIVED:256};C.CertFindType={CAPICOM_CERTIFICATE_FIND_SHA1_HASH:0,CAPICOM_CERTIFICATE_FIND_SUBJECT_NAME:1,CAPICOM_CERTIFICATE_FIND_ISSUER_NAME:2,CAPICOM_CERTIFICATE_FIND_ROOT_NAME:3,CAPICOM_CERTIFICATE_FIND_TEMPLATE_NAME:4,CAPICOM_CERTIFICATE_FIND_EXTENSION:5,CAPICOM_CERTIFICATE_FIND_EXTENDED_PROPERTY:6,CAPICOM_CERTIFICATE_FIND_APPLICATION_POLICY:7,CAPICOM_CERTIFICATE_FIND_CERTIFICATE_POLICY:8,CAPICOM_CERTIFICATE_FIND_TIME_VALID:9,CAPICOM_CERTIFICATE_FIND_TIME_NOT_YET_VALID:10,CAPICOM_CERTIFICATE_FIND_TIME_EXPIRED:11,CAPICOM_CERTIFICATE_FIND_KEY_USAGE:12};C.Time={AUTHENTICATED_ATTRIBUTE_SIGNING_TIME:0};C.Check={CHECK_NONE:0,CHECK_TRUSTED_ROOT:1,CHECK_TIME_VALIDITY:2,CHECK_SIGNATURE_VALIDITY:4,CHECK_ONLINE_REVOCATION_STATUS:8,CHECK_OFFLINE_REVOCATION_STATUS:16,TRUST_IS_NOT_TIME_VALID:1,TRUST_IS_NOT_TIME_NESTED:2,TRUST_IS_REVOKED:4,TRUST_IS_NOT_SIGNATURE_VALID:8,TRUST_IS_NOT_VALID_FOR_USAGE:16,TRUST_IS_UNTRUSTED_ROOT:32,TRUST_REVOCATION_STATUS_UNKNOWN:64,TRUST_IS_CYCLIC:128,TRUST_IS_PARTIAL_CHAIN:65536,TRUST_CTL_IS_NOT_TIME_VALID:131072,TRUST_CTL_IS_NOT_SIGNATURE_VALID:262144,TRUST_CTL_IS_NOT_VALID_FOR_USAGE:524288};C.PropId={CAPICOM_PROPID_UNKNOWN:0,CAPICOM_PROPID_KEY_PROV_HANDLE:1,CAPICOM_PROPID_KEY_PROV_INFO:2,CAPICOM_PROPID_SHA1_HASH:3,CAPICOM_PROPID_HASH_PROP:3,CAPICOM_PROPID_MD5_HASH:4,CAPICOM_PROPID_KEY_CONTEXT:5,CAPICOM_PROPID_KEY_SPEC:6,CAPICOM_PROPID_IE30_RESERVED:7,CAPICOM_PROPID_PUBKEY_HASH_RESERVED:8,CAPICOM_PROPID_ENHKEY_USAGE:9,CAPICOM_PROPID_CTL_USAGE:9,CAPICOM_PROPID_NEXT_UPDATE_LOCATION:10,CAPICOM_PROPID_FRIENDLY_NAME:11,CAPICOM_PROPID_PVK_FILE:12,CAPICOM_PROPID_DESCRIPTION:13,CAPICOM_PROPID_ACCESS_STATE:14,CAPICOM_PROPID_SIGNATURE_HASH:15,CAPICOM_PROPID_SMART_CARD_DATA:16,CAPICOM_PROPID_EFS:17,CAPICOM_PROPID_FORTEZZA_DATA:18,CAPICOM_PROPID_ARCHIVED:19,CAPICOM_PROPID_KEY_IDENTIFIER:20,CAPICOM_PROPID_AUTO_ENROLL:21,CAPICOM_PROPID_PUBKEY_ALG_PARA:22,CAPICOM_PROPID_CROSS_CERT_DIST_POINTS:23,CAPICOM_PROPID_ISSUER_PUBLIC_KEY_MD5_HASH:24,CAPICOM_PROPID_SUBJECT_PUBLIC_KEY_MD5_HASH:25,CAPICOM_PROPID_ENROLLMENT:26,CAPICOM_PROPID_DATE_STAMP:27,CAPICOM_PROPID_ISSUER_SERIAL_NUMBER_MD5_HASH:28,CAPICOM_PROPID_SUBJECT_NAME_MD5_HASH:29,CAPICOM_PROPID_EXTENDED_ERROR_INFO:30,CAPICOM_PROPID_RENEWAL:64,CAPICOM_PROPID_ARCHIVED_KEY_HASH:65,CAPICOM_PROPID_FIRST_RESERVED:66,CAPICOM_PROPID_LAST_RESERVED:32767,CAPICOM_PROPID_FIRST_USER:32768,CAPICOM_PROPID_LAST_USER:65535};C.SignatureType={CADESCOM_XML_SIGNATURE_TYPE_ENVELOPED:0,CADESCOM_XML_SIGNATURE_TYPE_ENVELOPING:1,CADESCOM_XML_SIGNATURE_TYPE_TEMPLATE:2};C.HashAlgorithm={CADESCOM_HASH_ALGORITHM_CP_GOST_3411:100,CADESCOM_HASH_ALGORITHM_MD2:1,CADESCOM_HASH_ALGORITHM_MD4:2,CADESCOM_HASH_ALGORITHM_MD5:3,CADESCOM_HASH_ALGORITHM_SHA_256:4,CADESCOM_HASH_ALGORITHM_SHA_384:5,CADESCOM_HASH_ALGORITHM_SHA_512:6,CADESCOM_HASH_ALGORITHM_SHA1:0};C.CadesType={CADESCOM_CADES_DEFAULT:0,CADESCOM_CADES_BES:1,CADESCOM_CADES_X_LONG_TYPE_1:93};C.ContentEncoding={CADESCOM_BASE64_TO_BINARY:1,CADESCOM_STRING_TO_UCS2LE:0};C.StoreNames={CAPICOM_MY_STORE:"My"};C.Chain={CAPICOM_CERTIFICATE_INCLUDE_CHAIN_EXCEPT_ROOT:0,CAPICOM_CERTIFICATE_INCLUDE_WHOLE_CHAIN:1,CAPICOM_CERTIFICATE_INCLUDE_END_ENTITY_ONLY:2};C.GostXmlDSigUrls={XmlDsigGost3410Url:"urn:ietf:params:xml:ns:cpxmlsec:algorithms:gostr34102001-gostr3411",XmlDsigGost3411Url:"urn:ietf:params:xml:ns:cpxmlsec:algorithms:gostr3411",XmlDsigGost3410UrlObsolete:"http://www.w3.org/2001/04/xmldsig-more#gostr34102001-gostr3411",XmlDsigGost3411UrlObsolete:"http://www.w3.org/2001/04/xmldsig-more#gostr3411"};if(typeof define==="function"&&typeof define.amd!=="undefined"){define("CryptoConstant",C)}if(typeof t!=="undefined"&&typeof t.exports!=="undefined"){t.exports=C}else{window.CryptoConstant=C}},{}],2:[function(e,t,_){var C={noCertificate:"В хранилище нет ни одного сертификата",noHashCertificate:"Не удалось найти сертификат в хранилище по Hash",noCertificatesStore:"В хранилище не найдено ни одного сертификата",cantCreateSignature:"Не получилось создать, подпись в формате Pkcs7 из за ошибки:",cantCreateSignatureXML:"Не получилось создать, подпись в формате XML из за ошибки:",cantCreateSignatureHash:"Не получилось создать, подпись Hash значения из за ошибки:",noPlugin:"Не установлен браузер плагин или Крипто Про CSP",verifyPkcs7:"Верификация подписи формата Pkcs7 не прошла из-из ошибки",verifyXML:"Верификация подписи формата XML не прошла из-из ошибки",verifyHash:"Верификация подписи Hash не прошла из-из ошибки:",noNativeBridge:"Не найдена функция call_ru_cryptopro_npcades_10_native_bridge. Для корректной работы подключите файл nativeBridge.js"};if(typeof define==="function"&&typeof define.amd!=="undefined"){define("CryptoMessage",C)}if(typeof t!=="undefined"&&typeof t.exports!=="undefined"){t.exports=C}else{window.CryptoMessage=C}},{}],3:[function(e,t,_){var C=e("./CryptoConstant");var r=e("./CryptoMessage");(function(e,t,_){"use strict";if(Object.keys(e).length){return}function C(e){var t=e.message;if(!t){t=e}else if(e.number){t+=" ("+e.number+")"}console.log(t)}var r=false,n;n={isIE:navigator.userAgent.match(/msie/i)||navigator.userAgent.match(/Trident\/./i),isApple:navigator.userAgent.match(/ipod/i)||navigator.userAgent.match(/ipad/i)||navigator.userAgent.match(/iphone/i),init:function(){var e=document.createElement("object");e.id="cadesplugin";e.type="application/x-cades";e.className="hiddenObject";document.body.appendChild(e);if(!this.checkPlugin()){C(_.noPlugin)}},checkPlugin:function(){try{var e=this.createObject("CAdESCOM.About");r=true;return e}catch(t){}return false},createObject:function(e){if(this.isApple){if(call_ru_cryptopro_npcades_10_native_bridge&&typeof call_ru_cryptopro_npcades_10_native_bridge==="function"){return call_ru_cryptopro_npcades_10_native_bridge("CreateObject",[e])}else{C(_.noNativeBridge)}}if(!this.isIE){var t=document.getElementById("cadesplugin");return t.CreateObject(e)}return new ActiveXObject(e)},convertDate:function(e){if(!this.isIE){return e}return e.getVarDate()},reverse:function(e){var t="",_;for(_=e.length-1;_>=0;_--){t+=e.charAt(_)}return t},base64Encode:function(e){e=JSON.stringify(e);e=unescape(encodeURIComponent(e));var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var _="",C=0,r=e.length,n,i,E;while(C<r){n=e.charCodeAt(C++)&255;if(C==r){_+=t.charAt(n>>2);_+=t.charAt((n&3)<<4);_+="==";break}i=e.charCodeAt(C++);if(C==r){_+=t.charAt(n>>2);_+=t.charAt((n&3)<<4|(i&240)>>4);_+=t.charAt((i&15)<<2);_+="=";break}E=e.charCodeAt(C++);_+=t.charAt(n>>2);_+=t.charAt((n&3)<<4|(i&240)>>4);_+=t.charAt((i&15)<<2|(E&192)>>6);_+=t.charAt(E&63)}return _},isArray:function(e){return Object.prototype.toString.call(e)==="[object Array]"}};n.init();e.getByHash=function(i){if(!(this instanceof e.getByHash)){return new e.getByHash(i)}var E,A;if(!r)return;E=n.createObject("CAPICOM.store");try{E.Open(t.StoreLocation.CAPICOM_CURRENT_USER_STORE,t.StoreNames.CAPICOM_MY_STORE,t.StoreOpenMode.CAPICOM_STORE_OPEN_MAXIMUM_ALLOWED);A=E.Certificates;if(A.Count===0){C(_.noCertificate)}else{A=A.Find(t.CertFindType.CAPICOM_CERTIFICATE_FIND_SHA1_HASH,i);if(A.Count>0)this.cetificate=A.Item(1);else C(_.noHashCertificate)}}catch(O){if(O.number!==-2138568446)C("Ошибка при получении сертификата: "+O);this.cetificate=null}finally{E.Close();E=A=null}};e.getByHash.prototype={get:function(){return this.cetificate},getExtendedKeyUsage:function(){var e=this.cetificate,t=e.ExtendedKeyUsage().EKUs.Count,_=[];if(t>0){while(t>0){_.push(e.ExtendedKeyUsage().EKUs.Item(t).OID);t--}}return _},hasKeyUsageOID:function(e){if(n.isArray(e)){var t=this.getExtendedKeyUsage();var _={},C=e.length-1;while(C>-1){_[e[C]]=!!~t.indexOf(e[C]);C--}return _}else{return!!~this.getExtendedKeyUsage().indexOf(e)}},isKeyValid:function(){return!!this.cetificate.IsValid().Result},getOwner:function(){var e=this.cetificate.SubjectName.split(", "),t={"CN=":"Владелец","S=":"Регион/Город","STREET=":"Адрес","O=":"Компания","OU=":"Тип должности","T=":"Должность","ОГРН=":"ОГРН","СНИЛС=":"СНИЛС","ИНН=":"ИНН","E=":"Email","L=":"Город"};e=e.map(function(e){var _=e.substring(0,e.indexOf("=")+1);if(t[_])return e.replace(_,t[_]+": ")}).filter(function(e){return!!e});return e.join("\n")},getIssuer:function(){var e=this.cetificate.SubjectName.split(", "),t={"CN=":"Удостоверяющий центр","S=":"Регион/Город","STREET=":"Адрес","O=":"Компания","OU=":"Тип","T=":"Должность","ОГРН=":"ОГРН","СНИЛС=":"СНИЛС","ИНН=":"ИНН","E=":"Email","L=":"Город"};e=e.map(function(e){var _=e.substring(0,e.indexOf("=")+1);if(t[_])return e.replace(_,t[_]+": ")}).filter(function(e){return!!e});return e.join("\n")},getAlgorithm:function(){return{Algorithm:this.cetificate.PublicKey().Algorithm.FriendlyName,OID:this.cetificate.PublicKey().Algorithm.Value}}};e.getList=function(){var e,i;if(!r)return;e=n.createObject("CAPICOM.store");try{e.Open(t.StoreLocation.CAPICOM_CURRENT_USER_STORE,t.StoreNames.CAPICOM_MY_STORE,t.StoreOpenMode.CAPICOM_STORE_OPEN_MAXIMUM_ALLOWED);i=e.Certificates;if(i.Count===0){C(_.noCertificate)}else{var E,A=[],O;i=i.Find(t.CertFindType.CAPICOM_CERTIFICATE_FIND_EXTENDED_PROPERTY,t.PropId.CAPICOM_PROPID_KEY_PROV_INFO).Find(t.CertFindType.CAPICOM_CERTIFICATE_FIND_TIME_VALID);O=i.Count;if(O>0){while(O>0){E=i.Item(O);A.push({thumbprint:E.Thumbprint,inform:E.GetInfo(0),validTo:E.ValidToDate,validFrom:E.ValidFromDate});O--}}else{C(_.noCertificatesStore)}}}catch(I){if(I.number!==-2138568446)C("Ошибка при получении сертификата: "+I);return}finally{e.Close();e=i=null}return A};e.SignPkcs7=function(e,r,i){var E,A,O,I=new Date,a=!!i;E=n.createObject("CAdESCOM.CPSigner");A=n.createObject("CAdESCOM.CadesSignedData");O=n.createObject("CADESCOM.CPAttribute");O.Name=t.Time.AUTHENTICATED_ATTRIBUTE_SIGNING_TIME;O.Value=n.convertDate(I);E.Certificate=this.getByHash(e).get();E.AuthenticatedAttributes2.Add(O);E.Options=t.Chain.CAPICOM_CERTIFICATE_INCLUDE_WHOLE_CHAIN;A.ContentEncoding=t.ContentEncoding.CADESCOM_BASE64_TO_BINARY;A.Content=n.base64Encode(r);try{var S=A.SignCades(E,t.CadesType.CADESCOM_CADES_BES,a)}catch(T){C(_.cantCreateSignature+" "+T);return}finally{E=A=O=null}return S};e.SignXML=function(e,r){var i,E;i=n.createObject("CAdESCOM.CPSigner");E=n.createObject("CAdESCOM.SignedXML");i.Certificate=this.getByHash(e).get();E.Content=r;E.SignatureType=t.SignatureType.CADESCOM_XML_SIGNATURE_TYPE_ENVELOPED;E.SignatureMethod=t.GostXmlDSigUrls.XmlDsigGost3410Url;E.DigestMethod=t.GostXmlDSigUrls.XmlDsigGost3411Url;try{var A=E.Sign(i)}catch(O){C(_.cantCreateSignatureXML+" "+O);return}finally{i=E=null}return A};e.getHash=function(e,_){var C,r;C=n.createObject("CAdESCOM.HashedData");C.Algorithm=t.HashAlgorithm.CADESCOM_HASH_ALGORITHM_CP_GOST_3411;if(_!==undefined&&_===true){C.DataEncoding=t.ContentEncoding.CADESCOM_BASE64_TO_BINARY;e=n.base64Encode(e)}C.Hash(e);r=C.Value;C=null;return r};e.SignHash=function(e,r,i){var E,A,O;if(i===true){var I=n.createObject("CAdESCOM.CPSigner");A=n.createObject("CAdESCOM.CadesSignedData");I.Certificate=this.getByHash(e).get()}else{A=n.createObject("CAdESCOM.RawSignature");var a=this.getByHash(e).get()}E=n.createObject("CAdESCOM.HashedData");E.Algorithm=t.HashAlgorithm.CADESCOM_HASH_ALGORITHM_CP_GOST_3411;E.SetHashValue(r);try{if(i===true)O=A.SignHash(E,I,t.ContentEncoding.CADESCOM_BASE64_TO_BINARY);else O=A.SignHash(E,a)}catch(S){C(_.cantCreateSignatureHash+" "+S);return}E=A=null;return O};e.VerifyHash=function(e,r,i,E){var A,O,I;A=n.createObject("CAdESCOM.HashedData");I=this.getByHash(e).get();if(E===true)O=n.createObject("CAdESCOM.CadesSignedData");else O=n.createObject("CAdESCOM.RawSignature");A.Algorithm=t.HashAlgorithm.CADESCOM_HASH_ALGORITHM_CP_GOST_3411;A.SetHashValue(r);try{if(E===true)O.VerifyHash(A,i,t.ContentEncoding.CADESCOM_BASE64_TO_BINARY);else O.VerifyHash(A,I,i)}catch(a){C(_.verifyHash+" "+a);return}finally{A=I=O=null}return true};e.VerifyPkcs7=function(e,r){var i,E=!!r;i=n.createObject("CAdESCOM.CadesSignedData");try{i.VerifyCades(e,t.CadesType.CADESCOM_CADES_BES,E)}catch(A){C(_.verifyPkcs7+" "+A);return}finally{i=null}return true};e.VerifyXML=function(e){var t=n.createObject("CAdESCOM.SignedXML");try{t.Verify(e)}catch(r){C(_.verifyXML+" "+r);return}finally{t=null}return true};window.CryptoPro=e})(window["CryptoPro"]||{},C,r)},{"./CryptoConstant":1,"./CryptoMessage":2}]},{},[3]);