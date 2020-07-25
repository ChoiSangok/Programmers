import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Solution {
	   
    public static int[] solution(int []arr, int divisor) {
    	int[] answer= {};
        List<Integer> list = new ArrayList<>();
        
        for(int i=0;i<arr.length;i++) {
        	if(arr[i] % divisor==0) {
        		list.add(arr[i]);	
        		
        	}
        }
        
        if(list.size()==0) {
        	list.add(-1);
        }
        
        answer= new int[list.size()];
        
        Collections.sort(list);


        
        for(int i=0;i<list.size();i++) {
        	answer[i]=list.get(i);
        }
        
        return answer;
    }

    public static void main(String[] args) {
    	int [] arr = {9, 36, 1, 3};
    	int num=3;
    	
    	System.out.println(Arrays.toString(solution(arr,num)));
    	
    }

}
