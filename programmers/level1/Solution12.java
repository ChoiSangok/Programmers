public class Solution {
	   
    public static String solution(String phone_number) {

        String answer="";
//        String str = phone_number.substring(0,phone_number.length()-4);
        for(int i=0;i<phone_number.length()-4;i++) {
        	answer+="*";
        }
        answer=answer+phone_number.substring(phone_number.length()-4,phone_number.length());


        return answer;
    }
    public static void main(String[] args) {
    	String x="027778888";

    	System.out.println(solution(x));
    }
}
