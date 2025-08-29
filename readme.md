**ANSWERS OF THE QUESTIONS**

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
    getElementById- select only one element by its id. And returns a single element as output.

    getElementsByClassName- select all the element by their class name. And returns a HTML collection. To access them needs indexing.

    querySelector- select all kinds of css-selectors and returns the first matching elements.

    querySelectorAll-select all kinds of css-selector on a specific name and returns all selected element as a static node-list.




2. How do you  **create and insert a new element into the DOM**?
    By using:
                "document.createElement("Element-name")" 
                I can create a new element into the DOM 
    By using:            
            'append("variable-name- which I assign the created element")'
            or 'appendChild("variable-name- which I assign the created element")' 
            or 'prepend("variable-name- which I assign the created element")'
            I can insert created element by using


3. What is **Event Bubbling** and how does it work?
    Event Bubbling is a machanism in the DOM where an event triggared on a nested element,propagates upwards to the root of the documents.
    
    This process continue up the DOM hierarchy until reaches the root, allowing any element with an event listener for that specific event also react to it. 



4. What is **Event Delegation** in JavaScript? Why is it useful?
    Event delegation is a design pattern in JS that support event bubbling to efficiently manage and handle event for multiple child elements with single event listener on a common parent.

    This approach is useful for several reasons. First, it significantly improves performance by reducing the number of event listener which conserves memory and processing power, especially with a large number of elements. Second, it simplifies code maintenance by centralizing event handling logic in one place, resulting in cleaner and more manageable code. Lastly, it provides seamless support for dynamically added or removed elements, as the parent's listener will automatically handle events for any new or existing children without needing manual updates.


5. What is the difference between **preventDefault() and stopPropagation()** methods?
    Main difference betweent them: 
    preventDefault()- prevents the browser's default action for a specific event.

    stopPropagation()- Prevents the event from propagating the DOM tree.




