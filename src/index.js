module.exports = function multiply(first, second) {
let a=[],b=[],PER=0,PERU=0,PERE=0,k,i,RESULT,RES=[],RESU=[],RESE=[];
a=first.match(/\d/g).reverse();// creating full-number massiv item 1
b=second.match(/\d/g).reverse();// creating full-number massiv item 2
	for(k=0;k<b.length;k++){// going through item 1
		PER=0;
		for(i=0;i<a.length;i++){// going through item 2
			if(i==0){
				PERE=0;
			}
			RESULT=a[i]*b[k]+PER+PERE;// result of multyplication
			PERE=0;
			if(RESULT>9){
				if(RES[i+k]){
					RESU[i+k]=RES[i+k]+Number(String(RESULT).match(/\d$/));// finding lower digit
					if(RESU[i+k]>9){
						RES[i+k]=Number(String(RESU[i+k]).match(/\d$/));// finding lower digit
						PERU=Number(String(RESU[i+k]).match(/\d/));// finding higher digit
					}
					else{
						RES[i+k]=RESU[i+k];
					}
				}
				else {			
					RES[i+k]=Number(String(RESULT).match(/\d$/));// finding lower digit
				}
				PER=Number(String(RESULT).match(/\d/))+PERU;// finding higher digit
				PERU=0;
				if(i==a.length-1&&PER){RES.push(PER);}
			}
			else {
				if(RES[i+k]){
					RESE[i+k]=RES[i+k]+RESULT;
					if(RESE[i+k]>9){
						RES[i+k]=Number(String(RESE[i+k]).match(/\d$/));// finding lower digit
						PERE=Number(String(RESE[i+k]).match(/\d/));// finding higher digit
						if(i==a.length-1&&PERE){RES.push(PERE);}
					}
					else{
						RES[i+k]=RESE[i+k];
					}
				}
				else {			
					RES[i+k]=RESULT;
				}
				PER=0;
			}
		}
	}
return RES.reverse().join('');//inversion and joining
}