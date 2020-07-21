package programmers;

import java.util.Arrays;
import java.util.Scanner;


class Solution {
    public String[] solution(String[] answer, int n) {
    	
        String[] str = new String[answer.length];
        
        for(int i=0;i<answer.length;i++) {
        	str[i] = answer[i].charAt(n)+answer[i];
        }
        
        Arrays.sort(str);
        
		for(int i=0;i<answer.length;i++) {
			str[i].substring(1);
		}
        return str;
    }

	public static void main(String[] args) {	
		String[] answer = 	{"sun", "bed", "car"};
		String[] str = new String[answer.length];
		
		Scanner sc = new Scanner(System.in);

		System.out.println("몇번째 인덱스"); 
		int n=sc.nextInt();

		char ch = 0;

		for(int i=0;i<answer.length;i++) {
			str[i] = answer[i].charAt(n)+answer[i];
		}
		Arrays.sort(str);	
		for(int i=0;i<answer.length;i++) {
			System.out.println(str[i].substring(1));
		}
	}
}
