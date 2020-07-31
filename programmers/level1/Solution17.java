public class Solution {
	   
    public static int solution(int x) {
    	int answer = 0;
    	
    	for(int i=1;i<=x;i++) {
    		if(x%i==0) {
    			answer=answer+i;
    			
    		}
    	}
        return answer;
        
    }
    
    public static void main(String[] args) {
    	int num=14;
    	

    	System.out.println(solution(num));
    }
}
