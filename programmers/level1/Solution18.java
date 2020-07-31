public class Solution {
	   
    public static String solution(int num) {
    	String answer="Odd";
    	
    	if(num%2==0) {
    		return "Even";
    	}
        return answer;
    }
    
    public static void main(String[] args) {
    	
    	int num=4;
    	System.out.println(solution(num));
    }
}
