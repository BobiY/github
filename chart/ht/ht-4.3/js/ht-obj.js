!function(P,p,F){"use strict";var d="ht",A=P[d],m=null,V=Math,W=V.abs,u=V.max,x=Number.MAX_VALUE,I=A.Default,G=I.getInternal(),$=I.clone,e=G.vec3TransformMat4,o=G.appendArray,B=function(){var l=/v( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/,J=/vt( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/,y=/vn( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/,O=/f( +\d+)( +\d+)( +\d+)( +\d+)?/,N=/f( +(\d+)\/(\d+))( +(\d+)\/(\d+))( +(\d+)\/(\d+))( +(\d+)\/(\d+))?/,P=/f( +(\d+)\/(\d+)\/(\d+))( +(\d+)\/(\d+)\/(\d+))( +(\d+)\/(\d+)\/(\d+))( +(\d+)\/(\d+)\/(\d+))?/,Y=/f( +(\d+)\/\/(\d+))( +(\d+)\/\/(\d+))( +(\d+)\/\/(\d+))( +(\d+)\/\/(\d+))?/,h=function(m,q){return q=parseInt(q),q>=0?m[q-1]:m[q+m.length]},a=function(c,v,M,f,m,O){if(c.vs){var V=h(v,f),z=h(v,m),r=h(v,O),s=M.matrix,Q=c.vs;if(M.flipFace){var P=z;z=r,r=P}s?(o(Q,e($(V),s)),o(Q,e($(z),s)),o(Q,e($(r),s))):(o(Q,V),o(Q,z),o(Q,r))}},B=function(W,G,j,X,y,s){if(W.vs){var U=h(G,X),H=h(G,y),q=h(G,s),e=j.flipY;if(j.flipFace){var $=H;H=q,q=$}W.uv.push(U[0],e?1-U[1]:U[1],H[0],e?1-H[1]:H[1],q[0],e?1-q[1]:q[1])}},M=function(B,S,E,i,X,F){if(B.vs){var L=h(S,i),U=h(S,X),G=h(S,F),W=E.normalMatrix,m=B.ns;if(E.flipFace){var V=U;U=G,G=V}W?(o(m,e($(L),W)),o(m,e($(U),W)),o(m,e($(G),W))):(o(m,L),o(m,U),o(m,G))}},t=function($,T,V,y,u,p,f,m){var J=y&&y.length&&m;p[3]===F?(a($,T,u,p[0],p[1],p[2]),f&&B($,V,u,f[0],f[1],f[2]),J&&M($,y,u,m[0],m[1],m[2])):(a($,T,u,p[0],p[1],p[3]),a($,T,u,p[1],p[2],p[3]),f&&(B($,V,u,f[0],f[1],f[3]),B($,V,u,f[1],f[2],f[3])),J&&(M($,y,u,m[0],m[1],m[3]),M($,y,u,m[1],m[2],m[3])))},r=function(z,g,N,y){var Z,R,X,n,b,A,K,F=x,$=x,P=x,V=-x,p=-x,Q=-x;for(Z in z)for(A=z[Z].vs,K=A.length,R=0;K>R;R+=3)X=A[R+0],n=A[R+1],b=A[R+2],F>X&&(F=X),$>n&&($=n),P>b&&(P=b),X>V&&(V=X),n>p&&(p=n),b>Q&&(Q=b);if(N){var J=F+(V-F)/2,h=$+(p-$)/2,l=P+(Q-P)/2;for(Z in z)for(A=z[Z].vs,K=A.length,R=0;K>R;R+=3)A[R+0]-=J,A[R+1]-=h,A[R+2]-=l}var j,H,k;N?(j=V-F,H=p-$,k=Q-P):(j=2*u(W(F),W(V)),H=2*u(W($),W(p)),k=2*u(W(P),W(Q))),y.rawS3=[j,H,k];for(Z in z){if(A=z[Z].vs,g)for(K=A.length,R=0;K>R;R+=3)j&&(A[R+0]/=j),H&&(A[R+1]/=H),k&&(A[R+2]/=k);z[Z].rawS3=y.rawS3}};return function(V,Z,j){if(!V)return m;G.isString(Z)&&(Z=z(Z)),j||(j={}),j.flipY==m&&(j.flipY=!0),(j.s3||j.r3||j.t3||j.mat)&&(j.matrix=G.createWorldMatrix(j.mat,j.s3,j.r3,j.rotationMode,j.t3));var E,A,W,e,U,n,h=[],D=[],X=j.ignoreNormal?m:[],M=j.reverseFlipMtls,L={vs:[],uv:[],ns:X?[]:m},f={htdefault:L},T=V.split("\n"),g=0;for(X&&j.matrix&&(j.normalMatrix=G.createNormalMatrix(j.matrix));g<T.length;g++)if(A=T[g].trim(),0!==A.length&&"#"!==A.charAt(0))if(W=l.exec(A))h.push([parseFloat(W[1]),parseFloat(W[2]),parseFloat(W[3])]);else if(W=J.exec(A))D.push([parseFloat(W[1]),parseFloat(W[2])]);else if(X&&(W=y.exec(A)))j.flipFace?X.push([parseFloat(-W[1]),parseFloat(-W[2]),parseFloat(-W[3])]):X.push([parseFloat(W[1]),parseFloat(W[2]),parseFloat(W[3])]);else if(W=O.exec(A))t(L,h,D,X,j,[W[1],W[2],W[3],W[4]]);else if(W=N.exec(A))t(L,h,D,X,j,[W[2],W[5],W[8],W[11]],[W[3],W[6],W[9],W[12]]);else if(W=P.exec(A))t(L,h,D,X,j,[W[2],W[6],W[10],W[14]],[W[3],W[7],W[11],W[15]],[W[4],W[8],W[12],W[16]]);else if(W=Y.exec(A))t(L,h,D,X,j,[W[2],W[5],W[8],W[11]],m,[W[3],W[6],W[9],W[12]]);else if(/^usemtl /.test(A)&&(e=A.substring(7).trim(),!(L=f[e]))){if(L={name:e,vs:[],uv:[],ns:X?[]:m},j.ignoreMtls&&j.ignoreMtls.indexOf(e)>=0&&delete L.vs,(j.reverseFlip||"*"===M||M&&M.indexOf(e)>=0)&&(L.reverseFlip=!0),Z&&(U=Z[e],U&&(j.ignoreColor||(L.color=U.kd),!j.ignoreTransparent&&U.d>0&&U.d<1&&(L.transparent=!0,L.opacity=U.d),!j.ignoreImage&&(n=U.map_kd)))){for(n=n.split(" "),E=0;E<n.length;E++)"-o"===n[E]?(L.uvOffset=[parseFloat(n[E+1]),parseFloat(n[E+2])],E+=2):"-s"===n[E]&&(L.uvScale=[parseFloat(n[E+1]),parseFloat(n[E+2])],E+=2);L.image=(j.prefix||"")+n[n.length-1]}f[e]=L}var S=[];for(var F in f){var x=f[F].vs;x&&0!==x.length||S.push(F)}S.forEach(function(b){delete f[b]}),r(f,j.cube,j.center,j);var _=j.shape3d;if(_){var $=[];for(var e in f){var L=f[e];$.rawS3=L.rawS3,$.push(L)}I.setShape3dModel(_,$)}return f}}(),z=function(k){var Q={};if(k)for(var c,R,m,E,I,h,S=k.split("\n"),i=/\s+/,u=0;u<S.length;u++)R=S[u].trim(),0!==R.length&&"#"!==R.charAt(0)&&(m=R.indexOf(" "),E=(m?R.substring(0,m):R).toLowerCase(),I=(m?R.substring(m+1):"").trim(),"newmtl"===E?Q[I]=c={name:I}:c&&("ka"===E||"kd"===E||"ks"===E?(h=I.split(i,3),c[E]=[parseFloat(h[0]),parseFloat(h[1]),parseFloat(h[2]),1]):c[E]="ns"===E||"d"===E?parseFloat(I):I));return Q},c=function(_,q,F){if(_){var J=new XMLHttpRequest;J.onload=function(M){F(M.target.responseText)},J.onerror=function(){F(null)},J.open("GET",_,q),J.send(null)}else F(null)};G.addMethod(I,{loadObj:function(F,d,Q){Q=Q||{};var N=!Q.sync;c(d,N,function(r){c(F,N,function(L){var N,Z=Q.shape3d,D=B(L,r,Q);if(D)if(Z)N=I.getShape3dModel(Z);else{N=[];for(var v in D){var t=D[v];N.rawS3=t.rawS3,N.push(t)}}Q.finishFunc&&Q.finishFunc(D,N,N.rawS3)})})},parseObj:function(w,v,u){return B(w,v,u)}})}(this,Object);