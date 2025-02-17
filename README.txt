# Fibonacci Sequence

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. It typically starts with 0 and 1.

## Definition

The sequence is defined as follows:
- **F(0) = 0**
- **F(1) = 1**
- **F(n) = F(n - 1) + F(n - 2)**, for **n ≥ 2**

## Example

The first few numbers in the Fibonacci sequence are:
[0,1,1,2,3,5,8,13,21,34]


### implementations
I have created a recursive and a iterative implementation of the Fibonacci sequence.

#### Recursive Implementation

- **Base Cases:** The function returns early for `Num === 1` and `Num === 2` to avoid unnecessary recursion.

- **Recursive Call:** For any `Num > 2`, it first retrieves the Fibonacci sequence up to `Num - 1` by calling itself.

- **Calculating the Next Value:** It then calculates the next Fibonacci number as the sum of the last two elements of the retrieved sequence.

- **Appending the Value:** Finally, it appends this new number to the sequence and returns the updated sequence.


#### incremental_implementation

**Base Cases**
if Num==1 the functions '0' (which corresponds to F(0) =0)
IF Num=2 if returns '1' (which corresponds to F(1)=1)

##Initialization##
two variables are initialized:
- 'prev' is swet to '0'(F(0))
- 'current' is set to '1'(F(1))

- **Iteration:**  
  The function then enters a loop starting at index 2 and continuing until it reaches `Num - 1`. In each iteration:
  - The next Fibonacci number is computed by adding `prev` and `current`.
  - `prev` is updated to the value of `current`, and `current` is updated to the newly computed number.

- **Return Value:**  
  After the loop completes, the function returns the last computed value, which represents the Fibonacci number at the `(Num - 1)`.