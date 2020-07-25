import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Solution {
	   
    public static int[] solution(int []arr) {
        List<Integer> list = new ArrayList<>();
        
        for(int i=0;i<arr.length-1;i++) {
           if(arr[i]!=arr[i+1]) {
              list.add(arr[i]);  
           }

        }

        list.add(arr[arr.length-1]);
        
        int [] answer =new int[list.size()];
        
        for(int i=0;i<list.size();i++) {
           answer[i]=list.get(i);
        }
        return answer;
    }

	
	
    public static void main(String[] args) {
    	int [] arr = {4,7,8,8,9,9};
    	
    	System.out.println(Arrays.toString(solution(arr)));
    	
    }

}
