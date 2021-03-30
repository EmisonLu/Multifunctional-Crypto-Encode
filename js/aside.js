var aside_str =
  '           <div class="aside-wrap" layout="column">' +
  '<div class="navi-wrap scroll-y scroll-hide" flex="">' +
  '<nav ui-nav="" class="navi clearfix" style="font-size: 115%"> ' +
  '<ul class="nav"> ' +
  "<br> " +
  "<br> " +
  '<li> <a target="_self" href="home.html" class="auto"><span ' +
  'class="nav-icon"></span><span>Home</span></a></li> ' +
  '<li> <a target="_self" href="" class="auto"><span class="pull-right text-muted"> ' +
  '<i class="fontello icon-fw fontello-angle-right text"></i> ' +
  '<i class="fontello icon-fw fontello-angle-down text-active"></i> ' +
  '</span><span class="nav-icon"></span><span>RSA</span></a> ' +
  '<ul class="nav nav-sub dk"> ' +
  '<li> <a target="_self" href="RSA_key_Generate.html" class="auto"><span ' +
  'class="nav-icon"></span><span>Generate key pair</span></a></li> ' +
  '<li> <a target="_self" href="RSA_Encrypt.html" class="auto"><span ' +
  'class="nav-icon"></span><span>Encrypt</span></a></li> ' +
  '<li> <a target="_self" href="RSA_Decrypt.html" class="auto"><span ' +
  'class="nav-icon"></span><span>Decrypt</span></a></li> ' +
  "</ul> " +
  "</li> " +
  '<li> <a target="_self" href="" class="auto"><span class="pull-right text-muted"> ' +
  '<i class="fontello icon-fw fontello-angle-right text"></i> ' +
  '<i class="fontello icon-fw fontello-angle-down text-active"></i> ' +
  '</span><span class="nav-icon"></span><span>AES</span></a> ' +
  '<ul class="nav nav-sub dk"> ' +
  '<!-- <li> <a target="_self" href="RSA_key_Generate.html" class="auto"><span ' +
  'class="nav-icon"></span><span>Generate key pair</span></a></li> --> ' +
  '<li> <a target="_self" href="AES_Encrypt.html" class="auto"><span ' +
  'class="nav-icon"></span><span>Encrypt</span></a></li> ' +
  '<li> <a target="_self" href="AES_Decrypt.html" class="auto"><span ' +
  'class="nav-icon"></span><span>Decrypt</span></a></li> ' +
  "</ul> " +
  "</li> " +
  '<li> <a target="_self" href="" class="auto"><span class="pull-right text-muted"> ' +
  '<i class="fontello icon-fw fontello-angle-right text"></i> ' +
  '<i class="fontello icon-fw fontello-angle-down text-active"></i> ' +
  '</span><span class="nav-icon"></span><span>DES</span></a> ' +
  '<ul class="nav nav-sub dk"> ' +
  '<!-- <li> <a target="_self" href="RSA_key_Generate.html" class="auto"><span ' +
  'class="nav-icon"></span><span>Generate key pair</span></a></li> --> ' +
  '<li> <a target="_self" href="DES_Encrypt.html" class="auto"><span ' +
  'class="nav-icon"></span><span>Encrypt</span></a></li> ' +
  '<li> <a target="_self" href="DES_Decrypt.html" class="auto"><span ' +
  'class="nav-icon"></span><span>Decrypt</span></a></li> ' +
  "</ul> " +
  "</li> " +
  '<li> <a target="_self" href="" class="auto"><span class="pull-right text-muted"> ' +
  '<i class="fontello icon-fw fontello-angle-right text"></i> ' +
  '<i class="fontello icon-fw fontello-angle-down text-active"></i> ' +
  '</span><span class="nav-icon"></span><span>3DES</span></a> ' +
  '<ul class="nav nav-sub dk"> ' +
  '<!-- <li> <a target="_self" href="RSA_key_Generate.html" class="auto"><span ' +
  'class="nav-icon"></span><span>Generate key pair</span></a></li> --> ' +
  '<li> <a target="_self" href="3DES_Encrypt.html" class="auto"><span ' +
  'class="nav-icon"></span><span>Encrypt</span></a></li> ' +
  '<li> <a target="_self" href="3DES_Decrypt.html" class="auto"><span ' +
  'class="nav-icon"></span><span>Decrypt</span></a></li> ' +
  "</ul> " +
  "</li> " +
  '<li> <a target="_self" href="" class="auto"><span class="pull-right text-muted"> ' +
  '<i class="fontello icon-fw fontello-angle-right text"></i> ' +
  '<i class="fontello icon-fw fontello-angle-down text-active"></i> ' +
  '</span><span class="nav-icon"></span><span>HASH</span></a> ' +
  '<ul class="nav nav-sub dk"> ' +
  '<li> <a target="_self" href="SHA1.html" class="auto"><span ' +
  'class="nav-icon"></span><span>SHA1</span></a></li> ' +
  '<li> <a target="_self" href="SHA256.html" class="auto"><span ' +
  'class="nav-icon"></span><span>SHA256</span></a></li> ' +
  '<li> <a target="_self" href="SHA384.html" class="auto"><span ' +
  'class="nav-icon"></span><span>SHA384</span></a></li> ' +
  '<li> <a target="_self" href="SHA512.html" class="auto"><span ' +
  'class="nav-icon"></span><span>SHA512</span></a></li> ' +
  '<li> <a target="_self" href="MD5.html" class="auto"><span ' +
  'class="nav-icon"></span><span>MD5</span></a></li> ' +
  '<li> <a target="_self" href="HMAC.html" class="auto"><span ' +
  'class="nav-icon"></span><span>HMAC</span></a></li> ' +
  "</ul> " +
  "</li> " +
  '<li> <a target="_self" href="JSON.html" class="auto"><span ' +
  'class="nav-icon"></span><span>JSON</span></a></li> ' +
  '<li> <a target="_self" href="Encode_Decode.html" class="auto"><span ' +
  'class="nav-icon"></span><span>Encode/Decode</span></a></li> ' +
  '<li> <a target="_self" href="Base_Conversion.html" class="auto"><span ' +
  'class="nav-icon"></span><span>Base Conversion</span></a></li> ' +
  "</nav> " +
  "</div> " +
  "</div>";

  var aside = document.getElementById('aside');
  aside.innerHTML = aside_str;