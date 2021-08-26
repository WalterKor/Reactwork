package BackJoon.Day1;

import java.io.*;
import java.util.Scanner;

public class Test2839 {
    public static void main(String[] args) throws IOException {
        //첫째 줄에 N이 주어진다. (3 ≤ N ≤ 5000)
        /*
        1. 5로 깔끔하게 나눠지는 경우
        2. 5a + 3b로 나눠지는경우
        3. 3으로 깔끔하게 나눠지는경우
        */
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int number = Integer.parseInt(br.readLine());
        int cnt = 0;

        while (true){
            if(number % 5 ==0){
                cnt += number/5;
                break;
            }
            number -=3;
            cnt++;
            if(number<0){
                cnt = -1;
                break;
            }
        }
        bw.write(cnt + "\n");
        br.close();
        bw.flush();
        bw.close();
    }
}
