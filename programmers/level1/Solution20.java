package programmers;

public class Solution {
	   
    public static long solution(long x) {
    	
    	long answer=0;
    	long num2= (long) Math.sqrt(x);
    	if(num2 * num2 ==x) {
    		answer= (num2+1)*(num2+1);
    	} else {
    		answer=-1;
    	}

        return answer;
    }
    
    public static void main(String[] args) {
    	
    	long num1 =-3;
    	System.out.println(solution(num1));
    }
}
