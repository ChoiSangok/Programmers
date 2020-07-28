import java.util.Arrays;
import java.util.Comparator;

public class Solution {
	   
    public static String solution(int[] numbers) {

    	String answer= "";
    	
    	String[] arr=new String[numbers.length];
    	    	
    	
    	for(int i=0;i< numbers.length;i++) {
    		arr[i] = String.valueOf(numbers[i]);
    	}
    	
    	//비교
    	Arrays.sort(arr, new Comparator<String>() {
    		
    		public int compare(String o1,String o2) {
    			return(o2+o1).compareTo(o1+o2);
    		}
    		
    	});
    	
    	if(arr[0].equals("0")) {
    		return "0";
    	}
    	
    	for(int j=0;j<arr.length;j++) {
    		answer+=arr[j];
    	}
 
        return answer;
    }

    public static void main(String[] args) {
    	int[] num1= {3, 30, 34, 5, 9};
    	
    	System.out.println(solution(num1));
    }
}
