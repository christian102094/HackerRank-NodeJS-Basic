func isBalanced(s string) string {
	// Write your code here
	// closing := []string{"]", ")", "}"}
	pairs := map[string]string{
		"]": "[",
		"}": "{",
		")": "(",
	}
	stack := []string{}
	var popped string

	for _, v := range s {
		// fmt.Println(string(v))
		if opening, ok := pairs[string(v)]; ok {
			l := len(stack)
			if l >= 1 {
				stack, popped = stack[:l-1], stack[l-1]
			}
			// fmt.Printf("is closing %v, %v\n", stack, popped)
			if popped != opening {
				return "NO"
			}
		} else {
			stack = append(stack, string(v))
			// fmt.Printf("adding to stack %v\n", stack)
		}
	}

	if len(stack) == 0 {
		return "YES"
	} else {
		return "NO"
	}
}