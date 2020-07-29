package programmers;


public class Solution {
	   
    public static boolean solution(String s) {

        boolean answer = false;
        String[] str = s.split("");
        int p=0;
        int y=0;
  
        for(int i=0;i<s.length();i++) {
        	if(str[i].equals("p")||str[i].equals("P")) {
        		p+=1;
        		
        	} else if(str[i].equals("y")||str[i].equals("Y")) {
        		y+=1;
        		
        	}
        }
        if(p==y) {
        	answer=true;
        }
        return answer;
    }
    public static void main(String[] args) {
    	String x="Hello Java";

    	System.out.println(solution(x));
    }
}
