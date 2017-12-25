    /* 
     * Crypto库提供各种加密算法 
     */  
      
    var crypto = require('crypto');  
    
  var content = 'password';// 需要被加密的内容  
    
  /* 
   * 函数说明 
   * var hash = crypto.createHash(algorithm); // algorithm: 'md5', 'sha1', 'sha256', 'sha512', 'ripemd160' 
   * hash.update(content，[input_encoding]); // 传入需要加密的内容，input_encoding:'utf8' 
   * var dig = digest([encoding)];// 默认二进制，encoding: 'hex'，'base64'，返回后hash对象就被清空 
   */  
    
  /* 
   * 哈希加密算法，不可逆 
   */  
    
  // md5：把一个任意长度的字节串变换成一定长的大整数，哈希值大小16个字节  
  var md5 = crypto.createHash('md5');  
  md5.update(content);  
  var md5dig = md5.digest('hex');  
  console.log(md5dig);// 输出：5f4dcc3b5aa765d61d8327deb882cf99  
    
  // sha1：将任意长度的二进制字符串映射为固定长度的小型二进制字符串，哈希值大小20个字节。  
  var shasum = crypto.createHash('sha1');  
  shasum.update(content);  
  var shadig = shasum.digest('hex');  
  console.log(shadig);// 输出：5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8  
    
  /* 
   * 密钥加密算法，不可逆 
   */  
    
  // Hmac算法：HMAC运算利用哈希算法，以一个密钥和一个消息为输入，生成一个消息摘要作为输出  
  var secrectKey = 'secrectKey';// 密钥  
  var hmac = crypto.createHmac('sha1', secrectKey);  
  hmac.update(content);  
  var hmacdig = hmac.digest('hex');  
  console.log(hmacdig);// 输出：c56952b778fc09059b9ece64a458323822f77aed  