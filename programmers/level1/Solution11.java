public class Solution {
	   
    public static String solution(int n) {

    	String answer ="";
    	
    	for(int i=1;i<=n;i++) {
    		if(i%2==0) {
    			answer+="박";
    		}else {
    			answer+="수";
    		}	
        }
        return answer;
    }

    public static void main(String[] args) {
    	int num= 5;
    	
    	System.out.println(solution(num));
    }
}
