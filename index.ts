export function FibRecursive(Num: number): number[] {
    if(Num === 0) return [];
    if (Num === 1) return [0];        
    if (Num === 2) return [0, 1];      
    
    let sequence = FibRecursive(Num - 1);
    let nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(nextValue);
    return sequence;
}

 export function FibIterative(Num: number): number {
    
  
    if (Num === 1) return 0;
    if (Num === 2) return 1;
    
    let prev = 0;    
    let current = 1; 
    let result = 0;
    
 
    for (let i = 2; i < Num; i++) {
        result = prev + current; 
        prev = current;
        current = result;
    }
    return result;
}

console.log(FibRecursive(5));  
console.log(FibIterative(5));  
