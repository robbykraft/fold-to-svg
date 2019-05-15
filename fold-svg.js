/* (c) Robby Kraft, MIT License */
(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.fold_svg=b()})(this,function(){"use strict";var C=Math.PI,D=Math.sin,E=Math.cos,F=Math.sqrt,G=Math.pow,H=Math.abs;function a(a){var c=[];return a.replace(J,function(a,d,e){var f=d.toLowerCase();for(e=b(e),"m"===f&&2<e.length&&(c.push([d].concat(e.splice(0,2))),f="l",d="m"===d?"l":"L");0<=e.length;){if(e.length===I[f])return e.unshift(d),c.push(e);if(e.length<I[f])throw new Error("malformed path data");c.push([d].concat(e.splice(0,I[f])))}}),c}function b(a){var b=a.match(K);return b?b.map(Number):[]}function c(a,b,c,e,f,g,h,i){return new d(a,b,c,e,f,g,h,i)}function d(a,b,c,d,g,l,m,n){this.a={x:a,y:b},this.b={x:c,y:d},this.c={x:g,y:l},this.d={x:m,y:n},null!==m&&m!==void 0&&null!==n&&n!==void 0?(this.getArcLength=k,this.getPoint=i,this.getDerivative=f):(this.getArcLength=j,this.getPoint=h,this.getDerivative=e),this.init()}function e(a,b,c){return{x:2*(1-c)*(a[1]-a[0])+2*c*(a[2]-a[1]),y:2*(1-c)*(b[1]-b[0])+2*c*(b[2]-b[1])}}function f(a,b,c){var d=h([3*(a[1]-a[0]),3*(a[2]-a[1]),3*(a[3]-a[2])],[3*(b[1]-b[0]),3*(b[2]-b[1]),3*(b[3]-b[2])],c);return d}function g(a,b,c,d,e){for(var f=1,g=a/b,h=(a-c(d,e,g))/b,i=0;.001<f;){var j=c(d,e,g+h),k=c(d,e,g-h),l=H(a-j)/b,m=H(a-k)/b;if(l<f?(f=l,g+=h):m<f?(f=m,g-=h):h/=2,i++,500<i)break}return g}function h(a,b,c){var d=(1-c)*(1-c)*a[0]+2*(1-c)*c*a[1]+c*c*a[2],e=(1-c)*(1-c)*b[0]+2*(1-c)*c*b[1]+c*c*b[2];return{x:d,y:e}}function i(a,b,c){var d=(1-c)*(1-c)*(1-c)*a[0]+3*(1-c)*(1-c)*c*a[1]+3*(1-c)*c*c*a[2]+c*c*c*a[3],e=(1-c)*(1-c)*(1-c)*b[0]+3*(1-c)*(1-c)*c*b[1]+3*(1-c)*c*c*b[2]+c*c*c*b[3];return{x:d,y:e}}function j(a,c,d){d===void 0&&(d=1);var e=a[0]-2*a[1]+a[2],f=c[0]-2*c[1]+c[2],g=2*a[1]-2*a[0],h=2*c[1]-2*c[0],i=4*(e*e+f*f);if(0===i)return d*F(G(a[2]-a[0],2)+G(c[2]-c[0],2));var j=4*(e*g+f*h)/(2*i),b=d+j,l=(g*g+h*h)/i-j*j,k=0<b*b+l?F(b*b+l):0,m=0<j*j+l?F(j*j+l):0,n=0===j+F(j*j+l)?0:l*Math.log(H((b+k)/(j+m)));return F(i)/2*(b*k-j*m+n)}function l(a,b){return N[a][b]}function m(a,b,c){var d,e,f,g=c.length-1;if(0==g)return 0;if(0===a){for(e=0,f=0;f<=g;f++)e+=l(g,f)*G(1-b,g-f)*G(b,f)*c[f];return e}for(d=Array(g),f=0;f<g;f++)d[f]=g*(c[f+1]-c[f]);return m(a-1,b,d)}function n(a,b,c){var d=m(1,c,a),e=m(1,c,b);return F(d*d+e*e)}function k(a,b,c){var d,e,f,g;c===void 0&&(c=1);for(d=c/2,e=0,f=0;f<20;f++)g=d*L[20][f]+d,e+=M[20][f]*n(a,b,g);return d*e}function o(a,b,c,d,e,f,g,h,i){return new p(a,b,c,d,e,f,g,h,i)}function p(a,b,c,d,e,f,g,h,i){this.x0=a,this.y0=b,this.rx=c,this.ry=d,this.xAxisRotate=e,this.LargeArcFlag=f,this.SweepFlag=g,this.x1=h,this.y1=i;var j=r(300,function(j){return q({x:a,y:b},c,d,e,f,g,{x:h,y:i},j)});this.length=j.arcLength}function q(a,b,c,d,e,f,g,h){b=H(b),c=H(c),d=s(d,360);var i=u(d);if(a.x===g.x&&a.y===g.y)return a;if(0===b||0===c)return this.pointOnLine(a,g,h);var j=(a.x-g.x)/2,k=(a.y-g.y)/2,l={x:E(i)*j+D(i)*k,y:-D(i)*j+E(i)*k},m=G(l.x,2)/G(b,2)+G(l.y,2)/G(c,2);1<m&&(b=F(m)*b,c=F(m)*c);var n=G(b,2)*G(c,2)-G(b,2)*G(l.y,2)-G(c,2)*G(l.x,2),o=G(b,2)*G(l.y,2)+G(c,2)*G(l.x,2),p=n/o;p=0>p?0:p;var q=(e===f?-1:1)*F(p),r={x:q*(b*l.y/c),y:q*(-(c*l.x)/b)},t={x:E(i)*r.x-D(i)*r.y+(a.x+g.x)/2,y:D(i)*r.x+E(i)*r.y+(a.y+g.y)/2},v={x:(l.x-r.x)/b,y:(l.y-r.y)/c},w=x({x:1,y:0},v),y={x:(-l.x-r.x)/b,y:(-l.y-r.y)/c},z=x(v,y);!f&&0<z?z-=2*C:f&&0>z&&(z+=2*C),z%=2*C;var A=w+z*h,B=b*E(A),I=c*D(A),J={x:E(i)*B-D(i)*I+t.x,y:D(i)*B+E(i)*I+t.y};return J.ellipticalArcStartAngle=w,J.ellipticalArcEndAngle=w+z,J.ellipticalArcAngle=A,J.ellipticalArcCenter=t,J.resultantRx=b,J.resultantRy=c,J}function r(a,b){a=a?a:500;for(var c,d,e=0,f=[],g=[],h=b(0),j=0;j<a;j++)d=w(j*(1/a),0,1),c=b(d),e+=v(h,c),g.push([h,c]),f.push({t:d,arcLength:e}),h=c;return c=b(1),g.push([h,c]),e+=v(h,c),f.push({t:1,arcLength:e}),{arcLength:e,arcLengthMap:f,approximationLines:g}}function s(a,b){return(a%b+b)%b}function u(a){return a*(C/180)}function v(a,b){return F(G(b.x-a.x,2)+G(b.y-a.y,2))}function w(a,b,c){return Math.min(Math.max(a,b),c)}function x(a,b){var c=a.x*b.x+a.y*b.y,d=F((G(a.x,2)+G(a.y,2))*(G(b.x,2)+G(b.y,2))),e=0>a.x*b.y-a.y*b.x?-1:1,f=e*Math.acos(c/d);return f}function y(a,b,c,d){return new z(a,b,c,d)}function z(a,b,c,d){this.x0=a,this.x1=b,this.y0=c,this.y1=d}function A(b){function d(b){if(!b)return null;for(var h,j,k=a(b),l=[0,0],m=[0,0],n=0;n<k.length;n++)"M"===k[n][0]?(l=[k[n][1],k[n][2]],j=[l[0],l[1]],g.push(null)):"m"===k[n][0]?(l=[k[n][1]+l[0],k[n][2]+l[1]],j=[l[0],l[1]],g.push(null)):"L"===k[n][0]?(e+=F(G(l[0]-k[n][1],2)+G(l[1]-k[n][2],2)),g.push(new y(l[0],k[n][1],l[1],k[n][2])),l=[k[n][1],k[n][2]]):"l"===k[n][0]?(e+=F(G(k[n][1],2)+G(k[n][2],2)),g.push(new y(l[0],k[n][1]+l[0],l[1],k[n][2]+l[1])),l=[k[n][1]+l[0],k[n][2]+l[1]]):"H"===k[n][0]?(e+=H(l[0]-k[n][1]),g.push(new y(l[0],k[n][1],l[1],l[1])),l[0]=k[n][1]):"h"===k[n][0]?(e+=H(k[n][1]),g.push(new y(l[0],l[0]+k[n][1],l[1],l[1])),l[0]=k[n][1]+l[0]):"V"===k[n][0]?(e+=H(l[1]-k[n][1]),g.push(new y(l[0],l[0],l[1],k[n][1])),l[1]=k[n][1]):"v"===k[n][0]?(e+=H(k[n][1]),g.push(new y(l[0],l[0],l[1],l[1]+k[n][1])),l[1]=k[n][1]+l[1]):"z"===k[n][0]||"Z"===k[n][0]?(e+=F(G(j[0]-l[0],2)+G(j[1]-l[1],2)),g.push(new y(l[0],j[0],l[1],j[1])),l=[j[0],j[1]]):"C"===k[n][0]?(h=new c(l[0],l[1],k[n][1],k[n][2],k[n][3],k[n][4],k[n][5],k[n][6]),e+=h.getTotalLength(),l=[k[n][5],k[n][6]],g.push(h)):"c"===k[n][0]?(h=new c(l[0],l[1],l[0]+k[n][1],l[1]+k[n][2],l[0]+k[n][3],l[1]+k[n][4],l[0]+k[n][5],l[1]+k[n][6]),0<h.getTotalLength()?(e+=h.getTotalLength(),g.push(h),l=[k[n][5]+l[0],k[n][6]+l[1]]):g.push(new y(l[0],l[0],l[1],l[1]))):"S"===k[n][0]?(h=0<n&&-1<["C","c","S","s"].indexOf(k[n-1][0])?new c(l[0],l[1],2*l[0]-k[n-1][k[n-1].length-4],2*l[1]-k[n-1][k[n-1].length-3],k[n][1],k[n][2],k[n][3],k[n][4]):new c(l[0],l[1],l[0],l[1],k[n][1],k[n][2],k[n][3],k[n][4]),e+=h.getTotalLength(),l=[k[n][3],k[n][4]],g.push(h)):"s"===k[n][0]?(h=0<n&&-1<["C","c","S","s"].indexOf(k[n-1][0])?new c(l[0],l[1],l[0]+h.d.x-h.c.x,l[1]+h.d.y-h.c.y,l[0]+k[n][1],l[1]+k[n][2],l[0]+k[n][3],l[1]+k[n][4]):new c(l[0],l[1],l[0],l[1],l[0]+k[n][1],l[1]+k[n][2],l[0]+k[n][3],l[1]+k[n][4]),e+=h.getTotalLength(),l=[k[n][3]+l[0],k[n][4]+l[1]],g.push(h)):"Q"===k[n][0]?(h=l[0]==k[n][1]&&l[1]==k[n][2]?new y(k[n][1],k[n][3],k[n][2],k[n][4]):new c(l[0],l[1],k[n][1],k[n][2],k[n][3],k[n][4]),e+=h.getTotalLength(),g.push(h),l=[k[n][3],k[n][4]],m=[k[n][1],k[n][2]]):"q"===k[n][0]?(h=0==k[n][1]&&0==k[n][2]?new y(l[0]+k[n][1],l[0]+k[n][3],l[1]+k[n][2],l[1]+k[n][4]):new c(l[0],l[1],l[0]+k[n][1],l[1]+k[n][2],l[0]+k[n][3],l[1]+k[n][4]),e+=h.getTotalLength(),m=[l[0]+k[n][1],l[1]+k[n][2]],l=[k[n][3]+l[0],k[n][4]+l[1]],g.push(h)):"T"===k[n][0]?(h=0<n&&-1<["Q","q","T","t"].indexOf(k[n-1][0])?new c(l[0],l[1],2*l[0]-m[0],2*l[1]-m[1],k[n][1],k[n][2]):new y(l[0],k[n][1],l[1],k[n][2]),g.push(h),e+=h.getTotalLength(),m=[2*l[0]-m[0],2*l[1]-m[1]],l=[k[n][1],k[n][2]]):"t"===k[n][0]?(h=0<n&&-1<["Q","q","T","t"].indexOf(k[n-1][0])?new c(l[0],l[1],2*l[0]-m[0],2*l[1]-m[1],l[0]+k[n][1],l[1]+k[n][2]):new y(l[0],l[0]+k[n][1],l[1],l[1]+k[n][2]),e+=h.getTotalLength(),m=[2*l[0]-m[0],2*l[1]-m[1]],l=[k[n][1]+l[0],k[n][2]+l[0]],g.push(h)):"A"===k[n][0]?(h=new o(l[0],l[1],k[n][1],k[n][2],k[n][3],k[n][4],k[n][5],k[n][6],k[n][7]),e+=h.getTotalLength(),l=[k[n][6],k[n][7]],g.push(h)):"a"===k[n][0]&&(h=new o(l[0],l[1],k[n][1],k[n][2],k[n][3],k[n][4],k[n][5],l[0]+k[n][6],l[1]+k[n][7]),e+=h.getTotalLength(),l=[l[0]+k[n][6],l[1]+k[n][7]],g.push(h)),f.push(e);return d}var e=0,f=[],g=[];d.getTotalLength=function(){return e},d.getPointAtLength=function(a){var b=h(a);return g[b.i].getPointAtLength(b.fraction)},d.getTangentAtLength=function(a){var b=h(a);return g[b.i].getTangentAtLength(b.fraction)},d.getPropertiesAtLength=function(a){var b=h(a);return g[b.i].getPropertiesAtLength(b.fraction)},d.getParts=function(){for(var a=[],b=0;b<g.length;b++)if(null!=g[b]){var c={};c.start=g[b].getPointAtLength(0),c.end=g[b].getPointAtLength(f[b]-f[b-1]),c.length=f[b]-f[b-1],function(a){c.getPointAtLength=function(b){return a.getPointAtLength(b)},c.getTangentAtLength=function(b){return a.getTangentAtLength(b)},c.getPropertiesAtLength=function(b){return a.getPropertiesAtLength(b)}}(g[b]),a.push(c)}return a};var h=function(a){0>a?a=0:a>e&&(a=e);for(var b=f.length-1;f[b]>=a&&0<f[b];)b--;return b++,{fraction:a-f[b-1],i:b}};return d(b)}function B(a,b){var c=a.replace(/>\s{0,}</g,"><").replace(/</g,"~::~<").replace(/\s*xmlns\:/g,"~::~xmlns:").split("~::~"),d=c.length,e=!1,f=0,g="",h=null!=b&&"string"==typeof b?b:"\t",i=["\n"];for(let c=0;100>c;c++)i.push(i[c]+h);for(let h=0;h<d;h++)-1<c[h].search(/<!/)?(g+=i[f]+c[h],e=!0,(-1<c[h].search(/-->/)||-1<c[h].search(/\]>/)||-1<c[h].search(/!DOCTYPE/))&&(e=!1)):-1<c[h].search(/-->/)||-1<c[h].search(/\]>/)?(g+=c[h],e=!1):/^<\w/.exec(c[h-1])&&/^<\/\w/.exec(c[h])&&/^<[\w:\-\.\,]+/.exec(c[h-1])==/^<\/[\w:\-\.\,]+/.exec(c[h])[0].replace("/","")?(g+=c[h],e||f--):-1<c[h].search(/<\w/)&&-1==c[h].search(/<\//)&&-1==c[h].search(/\/>/)?g=e?g+=c[h]:g+=i[f++]+c[h]:-1<c[h].search(/<\w/)&&-1<c[h].search(/<\//)?g=e?g+=c[h]:g+=i[f]+c[h]:-1<c[h].search(/<\//)?g=e?g+=c[h]:g+=i[--f]+c[h]:-1<c[h].search(/\/>/)?g=e?g+=c[h]:g+=i[f]+c[h]:-1<c[h].search(/<\?/)?g+=i[f]+c[h]:-1<c[h].search(/xmlns\:/)||-1<c[h].search(/xmlns\=/)?(console.log("xmlns at level",f),g+=i[f]+c[h]):g+=c[h];return"\n"==g[0]?g.slice(1):g}var I={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},J=/([astvzqmhlc])([^astvzqmhlc]*)/ig,K=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;d.prototype={constructor:d,init:function(){this.length=this.getArcLength([this.a.x,this.b.x,this.c.x,this.d.x],[this.a.y,this.b.y,this.c.y,this.d.y])},getTotalLength:function(){return this.length},getPointAtLength:function(a){var b=g(a,this.length,this.getArcLength,[this.a.x,this.b.x,this.c.x,this.d.x],[this.a.y,this.b.y,this.c.y,this.d.y]);return this.getPoint([this.a.x,this.b.x,this.c.x,this.d.x],[this.a.y,this.b.y,this.c.y,this.d.y],b)},getTangentAtLength:function(a){var b,c=g(a,this.length,this.getArcLength,[this.a.x,this.b.x,this.c.x,this.d.x],[this.a.y,this.b.y,this.c.y,this.d.y]),d=this.getDerivative([this.a.x,this.b.x,this.c.x,this.d.x],[this.a.y,this.b.y,this.c.y,this.d.y],c),e=F(d.x*d.x+d.y*d.y);return b=0<e?{x:d.x/e,y:d.y/e}:{x:0,y:0},b},getPropertiesAtLength:function(a){var b,c=g(a,this.length,this.getArcLength,[this.a.x,this.b.x,this.c.x,this.d.x],[this.a.y,this.b.y,this.c.y,this.d.y]),d=this.getDerivative([this.a.x,this.b.x,this.c.x,this.d.x],[this.a.y,this.b.y,this.c.y,this.d.y],c),e=F(d.x*d.x+d.y*d.y);b=0<e?{x:d.x/e,y:d.y/e}:{x:0,y:0};var f=this.getPoint([this.a.x,this.b.x,this.c.x,this.d.x],[this.a.y,this.b.y,this.c.y,this.d.y],c);return{x:f.x,y:f.y,tangentX:b.x,tangentY:b.y}}};var L=[[],[],[-.5773502691896257,.5773502691896257],[0,-.7745966692414834,.7745966692414834],[-.33998104358485626,.33998104358485626,-.8611363115940526,.8611363115940526],[0,-.5384693101056831,.5384693101056831,-.906179845938664,.906179845938664],[.6612093864662645,-.6612093864662645,-.2386191860831969,.2386191860831969,-.932469514203152,.932469514203152],[0,.4058451513773972,-.4058451513773972,-.7415311855993945,.7415311855993945,-.9491079123427585,.9491079123427585],[-.1834346424956498,.1834346424956498,-.525532409916329,.525532409916329,-.7966664774136267,.7966664774136267,-.9602898564975363,.9602898564975363],[0,-.8360311073266358,.8360311073266358,-.9681602395076261,.9681602395076261,-.3242534234038089,.3242534234038089,-.6133714327005904,.6133714327005904],[-.14887433898163122,.14887433898163122,-.4333953941292472,.4333953941292472,-.6794095682990244,.6794095682990244,-.8650633666889845,.8650633666889845,-.9739065285171717,.9739065285171717],[0,-.26954315595234496,.26954315595234496,-.5190961292068118,.5190961292068118,-.7301520055740494,.7301520055740494,-.8870625997680953,.8870625997680953,-.978228658146057,.978228658146057],[-.1252334085114689,.1252334085114689,-.3678314989981802,.3678314989981802,-.5873179542866175,.5873179542866175,-.7699026741943047,.7699026741943047,-.9041172563704749,.9041172563704749,-.9815606342467192,.9815606342467192],[0,-.2304583159551348,.2304583159551348,-.44849275103644687,.44849275103644687,-.6423493394403402,.6423493394403402,-.8015780907333099,.8015780907333099,-.9175983992229779,.9175983992229779,-.9841830547185881,.9841830547185881],[-.10805494870734367,.10805494870734367,-.31911236892788974,.31911236892788974,-.5152486363581541,.5152486363581541,-.6872929048116855,.6872929048116855,-.827201315069765,.827201315069765,-.9284348836635735,.9284348836635735,-.9862838086968123,.9862838086968123],[0,-.20119409399743451,.20119409399743451,-.3941513470775634,.3941513470775634,-.5709721726085388,.5709721726085388,-.7244177313601701,.7244177313601701,-.8482065834104272,.8482065834104272,-.937273392400706,.937273392400706,-.9879925180204854,.9879925180204854],[-.09501250983763744,.09501250983763744,-.2816035507792589,.2816035507792589,-.45801677765722737,.45801677765722737,-.6178762444026438,.6178762444026438,-.755404408355003,.755404408355003,-.8656312023878318,.8656312023878318,-.9445750230732326,.9445750230732326,-.9894009349916499,.9894009349916499],[0,-.17848418149584785,.17848418149584785,-.3512317634538763,.3512317634538763,-.5126905370864769,.5126905370864769,-.6576711592166907,.6576711592166907,-.7815140038968014,.7815140038968014,-.8802391537269859,.8802391537269859,-.9506755217687678,.9506755217687678,-.9905754753144174,.9905754753144174],[-.0847750130417353,.0847750130417353,-.2518862256915055,.2518862256915055,-.41175116146284263,.41175116146284263,-.5597708310739475,.5597708310739475,-.6916870430603532,.6916870430603532,-.8037049589725231,.8037049589725231,-.8926024664975557,.8926024664975557,-.9558239495713977,.9558239495713977,-.9915651684209309,.9915651684209309],[0,-.16035864564022537,.16035864564022537,-.31656409996362983,.31656409996362983,-.46457074137596094,.46457074137596094,-.600545304661681,.600545304661681,-.7209661773352294,.7209661773352294,-.8227146565371428,.8227146565371428,-.9031559036148179,.9031559036148179,-.96020815213483,.96020815213483,-.9924068438435844,.9924068438435844],[-.07652652113349734,.07652652113349734,-.22778585114164507,.22778585114164507,-.37370608871541955,.37370608871541955,-.5108670019508271,.5108670019508271,-.636053680726515,.636053680726515,-.7463319064601508,.7463319064601508,-.8391169718222188,.8391169718222188,-.912234428251326,.912234428251326,-.9639719272779138,.9639719272779138,-.9931285991850949,.9931285991850949],[0,-.1455618541608951,.1455618541608951,-.2880213168024011,.2880213168024011,-.4243421202074388,.4243421202074388,-.5516188358872198,.5516188358872198,-.6671388041974123,.6671388041974123,-.7684399634756779,.7684399634756779,-.8533633645833173,.8533633645833173,-.9200993341504008,.9200993341504008,-.9672268385663063,.9672268385663063,-.9937521706203895,.9937521706203895],[-.06973927331972223,.06973927331972223,-.20786042668822127,.20786042668822127,-.34193582089208424,.34193582089208424,-.469355837986757,.469355837986757,-.5876404035069116,.5876404035069116,-.6944872631866827,.6944872631866827,-.7878168059792081,.7878168059792081,-.8658125777203002,.8658125777203002,-.926956772187174,.926956772187174,-.9700604978354287,.9700604978354287,-.9942945854823992,.9942945854823992],[0,-.1332568242984661,.1332568242984661,-.26413568097034495,.26413568097034495,-.3903010380302908,.3903010380302908,-.5095014778460075,.5095014778460075,-.6196098757636461,.6196098757636461,-.7186613631319502,.7186613631319502,-.8048884016188399,.8048884016188399,-.8767523582704416,.8767523582704416,-.9329710868260161,.9329710868260161,-.9725424712181152,.9725424712181152,-.9947693349975522,.9947693349975522],[-.06405689286260563,.06405689286260563,-.1911188674736163,.1911188674736163,-.3150426796961634,.3150426796961634,-.4337935076260451,.4337935076260451,-.5454214713888396,.5454214713888396,-.6480936519369755,.6480936519369755,-.7401241915785544,.7401241915785544,-.820001985973903,.820001985973903,-.8864155270044011,.8864155270044011,-.9382745520027328,.9382745520027328,-.9747285559713095,.9747285559713095,-.9951872199970213,.9951872199970213]],M=[[],[],[1,1],[.8888888888888888,.5555555555555556,.5555555555555556],[.6521451548625461,.6521451548625461,.34785484513745385,.34785484513745385],[.5688888888888889,.47862867049936647,.47862867049936647,.23692688505618908,.23692688505618908],[.3607615730481386,.3607615730481386,.46791393457269104,.46791393457269104,.17132449237917036,.17132449237917036],[.4179591836734694,.3818300505051189,.3818300505051189,.27970539148927664,.27970539148927664,.1294849661688697,.1294849661688697],[.362683783378362,.362683783378362,.31370664587788727,.31370664587788727,.22238103445337448,.22238103445337448,.10122853629037626,.10122853629037626],[.3302393550012598,.1806481606948574,.1806481606948574,.08127438836157441,.08127438836157441,.31234707704000286,.31234707704000286,.26061069640293544,.26061069640293544],[.29552422471475287,.29552422471475287,.26926671930999635,.26926671930999635,.21908636251598204,.21908636251598204,.1494513491505806,.1494513491505806,.06667134430868814,.06667134430868814],[.2729250867779006,.26280454451024665,.26280454451024665,.23319376459199048,.23319376459199048,.18629021092773426,.18629021092773426,.1255803694649046,.1255803694649046,.05566856711617366,.05566856711617366],[.24914704581340277,.24914704581340277,.2334925365383548,.2334925365383548,.20316742672306592,.20316742672306592,.16007832854334622,.16007832854334622,.10693932599531843,.10693932599531843,.04717533638651183,.04717533638651183],[.2325515532308739,.22628318026289723,.22628318026289723,.2078160475368885,.2078160475368885,.17814598076194574,.17814598076194574,.13887351021978725,.13887351021978725,.09212149983772845,.09212149983772845,.04048400476531588,.04048400476531588],[.2152638534631578,.2152638534631578,.2051984637212956,.2051984637212956,.18553839747793782,.18553839747793782,.15720316715819355,.15720316715819355,.12151857068790319,.12151857068790319,.08015808715976021,.08015808715976021,.03511946033175186,.03511946033175186],[.2025782419255613,.19843148532711158,.19843148532711158,.1861610000155622,.1861610000155622,.16626920581699392,.16626920581699392,.13957067792615432,.13957067792615432,.10715922046717194,.10715922046717194,.07036604748810812,.07036604748810812,.03075324199611727,.03075324199611727],[.1894506104550685,.1894506104550685,.18260341504492358,.18260341504492358,.16915651939500254,.16915651939500254,.14959598881657674,.14959598881657674,.12462897125553388,.12462897125553388,.09515851168249279,.09515851168249279,.062253523938647894,.062253523938647894,.027152459411754096,.027152459411754096],[.17944647035620653,.17656270536699264,.17656270536699264,.16800410215645004,.16800410215645004,.15404576107681028,.15404576107681028,.13513636846852548,.13513636846852548,.11188384719340397,.11188384719340397,.08503614831717918,.08503614831717918,.0554595293739872,.0554595293739872,.02414830286854793,.02414830286854793],[.1691423829631436,.1691423829631436,.16427648374583273,.16427648374583273,.15468467512626524,.15468467512626524,.14064291467065065,.14064291467065065,.12255520671147846,.12255520671147846,.10094204410628717,.10094204410628717,.07642573025488905,.07642573025488905,.0497145488949698,.0497145488949698,.02161601352648331,.02161601352648331],[.1610544498487837,.15896884339395434,.15896884339395434,.15276604206585967,.15276604206585967,.1426067021736066,.1426067021736066,.12875396253933621,.12875396253933621,.11156664554733399,.11156664554733399,.09149002162245,.09149002162245,.06904454273764123,.06904454273764123,.0448142267656996,.0448142267656996,.019461788229726478,.019461788229726478],[.15275338713072584,.15275338713072584,.14917298647260374,.14917298647260374,.14209610931838204,.14209610931838204,.13168863844917664,.13168863844917664,.11819453196151841,.11819453196151841,.10193011981724044,.10193011981724044,.08327674157670475,.08327674157670475,.06267204833410907,.06267204833410907,.04060142980038694,.04060142980038694,.017614007139152118,.017614007139152118],[.14608113364969041,.14452440398997005,.14452440398997005,.13988739479107315,.13988739479107315,.13226893863333747,.13226893863333747,.12183141605372853,.12183141605372853,.10879729916714838,.10879729916714838,.09344442345603386,.09344442345603386,.0761001136283793,.0761001136283793,.057134425426857205,.057134425426857205,.036953789770852494,.036953789770852494,.016017228257774335,.016017228257774335],[.13925187285563198,.13925187285563198,.13654149834601517,.13654149834601517,.13117350478706238,.13117350478706238,.12325237681051242,.12325237681051242,.11293229608053922,.11293229608053922,.10041414444288096,.10041414444288096,.08594160621706773,.08594160621706773,.06979646842452049,.06979646842452049,.052293335152683286,.052293335152683286,.03377490158481415,.03377490158481415,.0146279952982722,.0146279952982722],[.13365457218610619,.1324620394046966,.1324620394046966,.12890572218808216,.12890572218808216,.12304908430672953,.12304908430672953,.11499664022241136,.11499664022241136,.10489209146454141,.10489209146454141,.09291576606003515,.09291576606003515,.07928141177671895,.07928141177671895,.06423242140852585,.06423242140852585,.04803767173108467,.04803767173108467,.030988005856979445,.030988005856979445,.013411859487141771,.013411859487141771],[.12793819534675216,.12793819534675216,.1258374563468283,.1258374563468283,.12167047292780339,.12167047292780339,.1155056680537256,.1155056680537256,.10744427011596563,.10744427011596563,.09761865210411388,.09761865210411388,.08619016153195327,.08619016153195327,.0733464814110803,.0733464814110803,.05929858491543678,.05929858491543678,.04427743881741981,.04427743881741981,.028531388628933663,.028531388628933663,.0123412297999872,.0123412297999872]],N=[[1],[1,1],[1,2,1],[1,3,3,1]];p.prototype={constructor:p,init:function(){},getTotalLength:function(){return this.length},getPointAtLength:function(a){0>a?a=0:a>this.length&&(a=this.length);var b=q({x:this.x0,y:this.y0},this.rx,this.ry,this.xAxisRotate,this.LargeArcFlag,this.SweepFlag,{x:this.x1,y:this.y1},a/this.length);return{x:b.x,y:b.y}},getTangentAtLength:function(a){0>a?a=0:a>this.length&&(a=this.length);var b=q({x:this.x0,y:this.y0},this.rx,this.ry,this.xAxisRotate,this.LargeArcFlag,this.SweepFlag,{x:this.x1,y:this.y1},a/this.length);return{x:b.x,y:b.y}},getPropertiesAtLength:function(a){var b=this.getTangentAtLength(a),c=this.getPointAtLength(a);return{x:c.x,y:c.y,tangentX:b.x,tangentY:b.y}}},z.prototype.getTotalLength=function(){return F(G(this.x0-this.x1,2)+G(this.y0-this.y1,2))},z.prototype.getPointAtLength=function(a){var b=a/F(G(this.x0-this.x1,2)+G(this.y0-this.y1,2)),c=(this.x1-this.x0)*b,d=(this.y1-this.y0)*b;return{x:this.x0+c,y:this.y0+d}},z.prototype.getTangentAtLength=function(){var a=F((this.x1-this.x0)*(this.x1-this.x0)+(this.y1-this.y0)*(this.y1-this.y0));return{x:(this.x1-this.x0)/a,y:(this.y1-this.y0)/a}},z.prototype.getPropertiesAtLength=function(a){var b=this.getPointAtLength(a),c=this.getTangentAtLength();return{x:b.x,y:b.y,tangentX:c.x,tangentY:c.y}};const O=64,P=128,Q={value:0},R=function(a,b){let c=b.map(b=>{for(var c=0;c<a.attributes.length;c++)if(a.attributes[c].nodeName===b)return c});return c.map(b=>b===void 0?Q:a.attributes[b]).map(a=>a.value===void 0?a.baseVal.value:a.value)},S=function(a){return a.split(" ").filter(a=>""!==a).map(a=>a.split(",").map(a=>parseFloat(a)))},T=function(a){let b="";for(var c=0;c<a.attributes.length;c++)if("points"===a.attributes[c].nodeName){b=a.attributes[c].value;break}return S(b).map((b,c,d)=>[d[c][0],d[c][1],d[(c+1)%d.length][0],d[(c+1)%d.length][1]])},U={line:function(a){return[R(a,["x1","y1","x2","y2"])]},rect:function(a){let b=R(a,["x","y","width","height"]),c=parseFloat(b[0]),d=parseFloat(b[1]),e=parseFloat(b[2]),f=parseFloat(b[3]);return[[c,d,c+e,d],[c+e,d,c+e,d+f],[c+e,d+f,c,d+f],[c,d+f,c,d]]},circle:function(a){let b=R(a,["cx","cy","r"]),c=parseFloat(b[0]),d=parseFloat(b[1]),e=parseFloat(b[2]);return Array.from(Array(O)).map((a,b)=>[c+e*E(2*(b/O*C)),d+e*D(2*(b/O*C))]).map((a,b,c)=>[c[b][0],c[b][1],c[(b+1)%c.length][0],c[(b+1)%c.length][1]])},ellipse:function(a){let b=R(a,["cx","cy","rx","ry"]),c=parseFloat(b[0]),d=parseFloat(b[1]),e=parseFloat(b[2]),f=parseFloat(b[3]);return Array.from(Array(O)).map((a,b)=>[c+e*E(2*(b/O*C)),d+f*D(2*(b/O*C))]).map((a,b,c)=>[c[b][0],c[b][1],c[(b+1)%c.length][0],c[(b+1)%c.length][1]])},polygon:T,polyline:function(a){let b=T(a);return b.pop(),b},path:function(a){let b=a.getAttribute("d"),c=A(b),d=c.getTotalLength(),e="Z"===b[b.length-1]||"z"===b[b.length-1],f=e?d/P:d/(P-1),g=Array.from(Array(P)).map((a,b)=>c.getPointAtLength(b*f)).map(a=>[a.x,a.y]),h=g.map((b,c,d)=>[d[c][0],d[c][1],d[(c+1)%d.length][0],d[(c+1)%d.length][1]]);return e||h.pop(),h}};let V="undefined"==typeof window||null===window?void 0:window.DOMParser;("undefined"==typeof V||null===V)&&(V=require("xmldom").DOMParser);let W="undefined"==typeof window||null===window?void 0:window.XMLSerializer;("undefined"==typeof W||null===W)&&(W=require("xmldom").XMLSerializer);let X="undefined"==typeof window||null===window?void 0:window.document;("undefined"==typeof X||null===X)&&(X=new V().parseFromString("<!DOCTYPE html><title>a</title>","text/html"));const Y=Object.keys(U),Z={line:["x1","y1","x2","y2"],rect:["x","y","width","height"],circle:["cx","cy","r"],ellipse:["cx","cy","rx","ry"],polygon:["points"],polyline:["points"],path:["d"]},$=function(a){return"string"==typeof a?new V().parseFromString(a,"text/xml").documentElement:a},_=function(a){return"g"===a.tagName||"svg"===a.tagName?null==a.childNodes?[]:Array.from(a.childNodes).map(a=>_(a)).reduce((c,a)=>c.concat(a),[]):[a]},aa=function(b){return Array.from(b.attributes).filter(c=>-1===Z[b.tagName].indexOf(c.name))},ba=function(a){let b=$(a);return _(b).filter(a=>-1!==Y.indexOf(a.tagName)).map(a=>U[a.tagName](a).map(b=>{let c={x1:b[0],y1:b[1],x2:b[2],y2:b[3]};return aa(a).forEach(b=>c[b.nodeName]=b.value),c})).reduce((c,a)=>c.concat(a),[])},ca=function(a){let b=a.edges_vertices.filter((b,c)=>"B"==a.edges_assignment[c]||"b"==a.edges_assignment[c]).map(a=>a.slice());if(0===b.length)return[];let c=Array.from(Array(a.vertices_coords.length)).map(()=>[]);b.forEach((a,b)=>a.forEach(a=>c[a].push(b)));let d=0,e=b[d].shift(),f=b[d].shift(),g=[e];for(;g[0]!==f;){g.push(f);let a=c[f],e=c[f].indexOf(d);if(-1===e)return;c[f].splice(e,1);let h=c[f].map((a,b)=>({key:a,i:b})).filter(a=>a.key!==d).shift();if(null==h)return;c[f].splice(h.i,1),d=h.key;let i=b[d].indexOf(f);if(-1===i)return;b[d].splice(i,1),f=b[d].shift()}return g},da=function(a){if(!1=="vertices_coords"in a||0>=a.vertices_coords.length)return[0,0,0,0];let b=a.vertices_coords[0].length,c=Array.from(Array(b)).map(()=>1/0),d=Array.from(Array(b)).map(()=>-Infinity);a.vertices_coords.forEach(a=>a.forEach((a,b)=>{a<c[b]&&(c[b]=a),a>d[b]&&(d[b]=a)}));let e=c[0],f=c[1],g=d[0]-c[0],i=d[1]-c[1];return isNaN(e)||isNaN(f)||isNaN(g)||isNaN(i)?[0,0,0,0]:[e,f,g,i]},ea=function(a){let b=a.faces_vertices.length,c=Array.from(Array(b)).map(()=>[]),d={};return a.faces_vertices.forEach((a,b)=>{if(void 0===a)return;let e=a.length;a.forEach((a,f,g)=>{let h=g[(f+1)%e];h<a&&([a,h]=[h,a]);let i=a+" "+h;if(i in d){let a=d[i];c[b].push(a),c[a].push(b)}else d[i]=b})}),c},fa=function(a){return a.map(a=>a[0]*a[3]-a[1]*a[2]).map(a=>0<=a)},ga=function(a,b=0){let c=[];return c[b]=!0,ha(a,b).forEach((a,b)=>a.forEach(a=>c[a.face]=0==b%2)),c},ha=function(a,b=0){let c=ea(a);if(0>=c.length)return[];var d=[b],e=[[{face:b,parent:void 0,edge:void 0,level:0}]];do e[e.length]=e[e.length-1].map(b=>{let e=c[b.face].filter(a=>-1===d.indexOf(a));return d=d.concat(e),e.map(c=>({face:c,parent:b.face,edge:a.faces_vertices[c].filter(c=>-1!==a.faces_vertices[b.face].indexOf(c)).sort((c,a)=>c-a)}))}).reduce((a,b)=>a.concat(b),[]);while(0<e[e.length-1].length);return 0<e.length&&0==e[e.length-1].length&&e.pop(),e},ia=function(a,b){function c(a,b,d){if(-1!==e.visited_frames.indexOf(b)){throw"FOLD file_frames encountered a cycle. stopping."}return e.visited_frames.push(b),d=[b].concat(d),0===b?d:a.file_frames[b-1].frame_inherit&&null!=a.file_frames[b-1].frame_parent?c(a,a.file_frames[b-1].frame_parent,d):d}if(!1=="file_frames"in a||a.file_frames.length<b)return a;const d=["frame_parent","frame_inherit"];var e={visited_frames:[]};return c(a,b,[]).map(b=>{if(0===b){let b=a.file_frames;a.file_frames=null;let c=JSON.parse(JSON.stringify(a));return a.file_frames=b,delete c.file_frames,d.forEach(a=>delete c[a]),c}let c=JSON.parse(JSON.stringify(a.file_frames[b-1]));return d.forEach(a=>delete c[a]),c}).reduce((a,b)=>Object.assign(a,b),{})};var ja={black:"#000000",silver:"#c0c0c0",gray:"#808080",white:"#ffffff",maroon:"#800000",red:"#ff0000",purple:"#800080",fuchsia:"#ff00ff",green:"#008000",lime:"#00ff00",olive:"#808000",yellow:"#ffff00",navy:"#000080",blue:"#0000ff",teal:"#008080",aqua:"#00ffff",orange:"#ffa500",aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",blanchedalmond:"#ffebcd",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",oldlace:"#fdf5e6",olivedrab:"#6b8e23",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",whitesmoke:"#f5f5f5",yellowgreen:"#9acd32"};const ka=Object.keys(ja),la=function(a){let b={file_spec:1.1,file_creator:"Rabbit Ear",file_classes:["singleModel"],frame_title:"",frame_classes:["creasePattern"],frame_attributes:["2D"],vertices_coords:[],vertices_vertices:[],vertices_faces:[],edges_vertices:[],edges_faces:[],edges_assignment:[],edges_foldAngle:[],edges_length:[],faces_vertices:[],faces_edges:[]},c=b.vertices_coords.length,d=ba(a);return b.vertices_coords=d.map(a=>[[a.x1,a.y1],[a.x2,a.y2]]).reduce((c,a)=>c.concat(a),[]),b},ma=function(a){let b=[0,0,0,1];"#"===a[0]?b=na(a):-1!==ka.indexOf(a)&&(b=na(ja[a]));const d=.05;return b[0]<d&&b[1]<d&&b[2]<d?"F":b[0]>b[1]&&b[0]-b[2]>d?"V":b[2]>b[1]&&b[2]-b[0]>d?"M":"F"},na=function(c){let d=0,e=0,f=0,h=255;return 4==c.length?(d="0x"+c[1]+c[1],e="0x"+c[2]+c[2],f="0x"+c[3]+c[3]):7==c.length?(d="0x"+c[1]+c[2],e="0x"+c[3]+c[4],f="0x"+c[5]+c[6]):5==c.length?(d="0x"+c[1]+c[1],e="0x"+c[2]+c[2],f="0x"+c[3]+c[3],h="0x"+c[4]+c[4]):9==c.length&&(d="0x"+c[1]+c[2],e="0x"+c[3]+c[4],f="0x"+c[5]+c[6],h="0x"+c[7]+c[8]),[+(d/255),+(e/255),+(f/255),+(h/255)]};let oa="undefined"==typeof window||null===window?void 0:window.DOMParser;("undefined"==typeof oa||null===oa)&&(oa=require("xmldom").DOMParser);let pa="undefined"==typeof window||null===window?void 0:window.document;("undefined"==typeof pa||null===pa)&&(pa=new oa().parseFromString("<!DOCTYPE html><title>a</title>","text/html"));const qa="http://www.w3.org/2000/svg",ra=function(){let a=pa.createElementNS(qa,"svg");return a.setAttribute("version","1.1"),a.setAttribute("xmlns","http://www.w3.org/2000/svg"),a},sa=function(){let a=pa.createElementNS(qa,"g");return a},ta=function(){let a=pa.createElementNS(qa,"style");return a.setAttribute("type","text/css"),a},ua=function(a,b,c,d){let e=pa.createElementNS(qa,"line");return e.setAttributeNS(null,"x1",a),e.setAttributeNS(null,"y1",b),e.setAttributeNS(null,"x2",c),e.setAttributeNS(null,"y2",d),e},va=function(a,b,c){let d=pa.createElementNS(qa,"circle");return d.setAttributeNS(null,"cx",a),d.setAttributeNS(null,"cy",b),d.setAttributeNS(null,"r",c),d},wa=function(a){let b=pa.createElementNS(qa,"polygon");return xa(b,a),b},xa=function(a,b){if(null!=b&&b.constructor===Array){let c=b.map(a=>a.constructor===Array?a:[a.x,a.y]).reduce((a,b)=>a+b[0]+","+b[1]+" ","");a.setAttributeNS(null,"points",c)}},ya=function(a,b,c,e,f,g=0){let h=e/1-e,d=[b-h-g,c-h-g,e+2*h+2*g,f+2*h+2*g].join(" ");a.setAttributeNS(null,"viewBox",d)};let za="undefined"==typeof window||null===window?void 0:window.DOMParser;("undefined"==typeof za||null===za)&&(za=require("xmldom").DOMParser);let Aa="undefined"==typeof window||null===window?void 0:window.XMLSerializer;("undefined"==typeof Aa||null===Aa)&&(Aa=require("xmldom").XMLSerializer);const Ba={B:"boundary",b:"boundary",M:"mountain",m:"mountain",V:"valley",v:"valley",F:"mark",f:"mark",U:"mark",u:"mark"},Ca={vertices:"vertices",edges:"creases",faces:"faces",boundaries:"boundaries"},Da=function(a,b){let c=ra(),d=`
svg * {
  stroke-width:var(--crease-width);
  stroke-linecap:round;
  stroke:black;
}
polygon {fill:none; stroke:none; stroke-linejoin:bevel;}
.boundary {fill:white; stroke:black;}
.mark {stroke:#AAA;}
.mountain {stroke:#00F;}
.valley{
  stroke:#F00;
  stroke-dasharray:calc(var(--crease-width)*2) calc(var(--crease-width)*2);
}
.foldedForm .boundary {fill:none;stroke:none;}
.foldedForm .faces polygon { stroke:#000; }
.foldedForm .faces .front { fill:#DDD; }
.foldedForm .faces .back { fill:#FFF; }
.foldedForm .creases line { stroke:none; }`,e=a,f=!0,g={boundaries:!0,faces:!0,edges:!0,vertices:!1},h="500px",i="500px";null!=b&&(null!=b.width&&(h=b.width),null!=b.height&&(i=b.height),null!=b.style&&(f=b.style),null!=b.stylesheet&&(d=b.stylesheet),null!=b.frame&&(e=ia(a,b.frame)));let j=(null==e.file_classes?[]:e.file_classes).join(" "),k=null==e.frame_classes?"":e.frame_classes,l=[j,k].filter(a=>""!==a).join(" ");c.setAttribute("class",l),c.setAttribute("width",h),c.setAttribute("height",i);let m=ta();c.appendChild(m),Object.keys(g).filter(a=>!1===g[a]).forEach(a=>delete g[a]),Object.keys(g).forEach(a=>{g[a]=sa(),g[a].setAttribute("class",Ca[a]),c.appendChild(g[a])}),Object.keys(g).forEach(a=>Oa[a](e).forEach(b=>g[a].appendChild(b)));let n=da(e);ya(c,...n);let o=n[2]>n[3]?n[3]:n[2],p=f?`\nsvg { --crease-width: ${.005*o}; }\n${d}`:`\nsvg { --crease-width: ${.005*o}; }\n`;var q=new za().parseFromString("<xml></xml>","application/xml"),r=q.createCDATASection(p);m.appendChild(r);let s=new Aa().serializeToString(c),t=B(s);return t},Ea=function(a){if(!1=="edges_vertices"in a||!1=="vertices_coords"in a)return[];let b=ca(a).map(b=>a.vertices_coords[b]),c=wa(b);return c.setAttribute("class","boundary"),[c]},Fa=function(a,b){if(!1=="vertices_coords"in a)return[];let c=b&&b.radius?b.radius:.01,d=a.vertices_coords.map(a=>va(a[0],a[1],c));return d.forEach((a,b)=>a.setAttribute("id",""+b)),d},Ga=function(a){if(!1=="edges_vertices"in a||!1=="vertices_coords"in a)return[];let b=a.edges_vertices.map(b=>b.map(b=>a.vertices_coords[b])).map(a=>ua(a[0][0],a[0][1],a[1][0],a[1][1]));return b.forEach((a,b)=>a.setAttribute("id",""+b)),Na(a).forEach((c,a)=>b[a].setAttribute("class",c)),b},Ha=function(a){if(!0=="faces_vertices"in a)return Ia(a);return!0=="faces_edges"in a?Ja(a):[]},Ia=function(a){if(!1=="faces_vertices"in a||!1=="vertices_coords"in a)return[];let b=a.faces_vertices.map(b=>b.map(b=>a.vertices_coords[b])).map(a=>wa(a));return b.forEach((a,b)=>a.setAttribute("id",""+b)),Ka(a,b)},Ja=function(a){if(!1=="faces_edges"in a||!1=="edges_vertices"in a||!1=="vertices_coords"in a)return[];let b=a.faces_edges.map(b=>b.map(b=>a.edges_vertices[b]).map((a,b,c)=>{let d=c[(b+1)%c.length];return a[1]===d[0]||a[1]===d[1]?a[0]:a[1]}).map(b=>a.vertices_coords[b])).map(a=>wa(a));return b.forEach((a,b)=>a.setAttribute("id",""+b)),Ka(a,b)},Ka=function(a,b){let c=null!=a["faces_re:layer"]&&a["faces_re:layer"].length===a.faces_vertices.length;return c&&La(a).forEach((a,c)=>b[c].setAttribute("class",a)),c?Ma(a["faces_re:layer"]).map(a=>b[a]):b},La=function(a){let b=a["faces_re:coloring"];return null==b&&(b="faces_re:matrix"in a?fa(a["faces_re:matrix"]):ga(a,0)),b.map(a=>a?"front":"back")},Ma=function(a){return a.map((a,b)=>({layer:a,i:b})).sort((c,a)=>c.layer-a.layer).map(a=>a.i)},Na=function(a){return null==a.edges_vertices||null==a.edges_assignment||a.edges_vertices.length!==a.edges_assignment.length?[]:a.edges_assignment.map(b=>Ba[b])},Oa={vertices:Fa,edges:Ga,faces:Ha,boundaries:Ea};let Pa="undefined"==typeof window||null===window?void 0:window.DOMParser;("undefined"==typeof Pa||null===Pa)&&(Pa=require("xmldom").DOMParser);let Qa="undefined"==typeof window||null===window?void 0:window.XMLSerializer;("undefined"==typeof Qa||null===Qa)&&(Qa=require("xmldom").XMLSerializer);return{core:{svgBoundaries:Ea,svgVertices:Fa,svgEdges:Ga,svgFacesVertices:Ia,svgFacesEdges:Ja},toSVG:function(a,b){if("object"==typeof a&&null!==a)return Da(a,b);if("string"==typeof a||a instanceof String)try{let c=JSON.parse(a);return Da(c,b)}catch(a){throw a}},toFOLD:function(a,b){if("string"==typeof a){let c=new Pa().parseFromString(a,"text/xml").documentElement;return la(c,b)}return la(a,b)}}});
