class Solution {
    public boolean solution(String s) {
    	boolean answer = false;
    	int sw=0;        
    	int[] num = {0,1,2,3,4,5,6,7,8,9};    	
    	if(s.length()==4 || s.length()==6) {
    		answer=true;
    	}   	
    	for(int i=0; i<s.length(); i++) {
    		sw=0;
    		for(int j=0; j<num.length; j++) {
    			if(s.charAt(i)==num[j]+'0') {
    				sw=1;
    			}
    		}
    		if(sw==0) {
    			answer=false;
    			break;
    		}
    	}
    return answer;
    }
    
}v
