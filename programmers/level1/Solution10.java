public class Solution {
	   
    public static String solution(String[] seoul) {

    	int num=0;
    	
    	for(int i=1;i<seoul.length;i++) {
    		if(seoul[i].equals("Kim")) {
    			num=i;
    		}
    	}
        return "김서방은 "+ num+"에 있다";
    }

    public static void main(String[] args) {
    	String[] arr= {"Jane", "Kim"};
    	
    	
    	System.out.println(solution(arr));
    }
}
