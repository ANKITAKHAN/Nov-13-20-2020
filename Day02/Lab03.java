import java.util.*;
import java.util.stream.*;

public class Lab03 {
    public static void main(String[] args) {
        List<Integer> numbers 
            = Arrays.asList(1, 2, 3, 4, 5, 6, 30, 56, 84, 23, 100);
        
        // Print all the numbers
        numbers.forEach(System.out::println);

        // Print the sum of all numbers
        final int sum = numbers
            .stream()
            .reduce((currentValue, nextValue) -> currentValue + nextValue)
            .get();
        System.out.println("Sum " + sum);
       
        // Print the first odd number
        final int firstOddNumber = numbers
            .stream()
            .filter(it -> it % 2 != 0)
            .findFirst()
            .get();
        System.out.println(firstOddNumber);
        
        // Generate an list of squares of all numbers
        numbers
            .stream()
            .map(it -> it * it)
            .forEach(System.out::println);
        
        // Generate a list of numbers divisible by 5. 
        numbers
            .stream()    
            .filter(it -> it % 5 == 0)
            .forEach(System.out::println);

    }
}