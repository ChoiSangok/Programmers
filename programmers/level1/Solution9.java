package programmers;

public class Solution {
	   
    public static long solution(int a, int b) {
        long answer = 0;      
        int x=Math.min(a, b);
        int y=Math.max(a, b);

        if(a==b) {
        	answer=a;
        }
        else if(a > b || a < b) {
        	for(int i=x; i<=y;i++) {
        		answer+=i;
        	}
        }
        return answer;
    }

    public static void main(String[] args) {
    	int num1=3;
    	int num2=5;
    	
    	System.out.println(solution(num1,num2));
    }
}
