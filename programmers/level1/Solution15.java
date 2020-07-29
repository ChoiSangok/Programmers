import java.util.Arrays;

public class Solution {
	   
    public static long[] solution(long x, int n) {

        long[] answer = new long[n];
        
        for(int i=0;i<answer.length;i++) {
        	
        	answer[i]=x*(i+1);
        }
        return answer;
    }
    public static void main(String[] args) {
    	int x=-3;
    	int n=3;

    	System.out.println(Arrays.toString(solution(x,n)));
    }
}
