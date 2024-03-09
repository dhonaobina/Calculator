# Creating Calculator Application 
###### This application takes an input from the user and helps to perform arithmetic and mathematical calculations.
###### Designed a professional Interface of a calculator

## Arithmetics
![image](https://github.com/dhonaobina/Calculator/assets/113093370/5a0d9a5f-61e6-4e5c-a94a-1f9daa61237d)

 
## Languages Used:
 - HTML
 - CSS
 - JavaScript

##### On the triggering Button with Event handler functions
   -  The onmouseover event is triggered when the mouse is moved over the buttons and the first function is invoked.
   -  The onmouseout event is triggered when the mouse is moved away from the buttons and the second function is invoked.
   -  The onclick event is triggered when the buttons are clicked and the third user-defined function is invoked.

## Programming Best Practices:
#### Comments Added
- help to add descriptive text to the source code documents that need not be executed. The web browser does not display the text included within the comment symbols. As a developer, you can add single or multiple line comments to add more information about the logic used in the code for better understanding and clarity. You can also add comments to provide a description of the different types of functionality used in the code. You can place comments anywhere in the code
#### Indentation Added
- another aspect of writing meticulous code. A neatly indented code helps to identify the program sections such as variable declarations, if-else statement blocks, loop blocks, user-defined functions, output statements, etc. An indented code helps the developers to easily read, add, modify, delete, maintain, update, and understand the entire program effectively. In JavaScript, indentation will not affect the program’s output. It is better to use four spaces to indent the various blocks in the code. You should avoid the usage of tabs while indenting the JavaScript code in editors.

#### Naming Coventions Adopted
- a programming language help to decide the way you should name the variables and user-defined functions in a program. In JavaScript, a recommended way to name variables and user-defined functions is to use camelCase. In camelCase, two words are joined together and represented as a single word. The first alphabet of the word is in lowercase and the first alphabet of the second joined word is in uppercase. For example, if you declare a variable “resultvalue” in JavaScript, you need to use camelCase, and name it as “resultValue”.  

#### Debugger Added 
- a programming language help to decide the way you should name the variables and user-defined functions in a program. In JavaScript, a recommended way to name variables and user-defined functions is to use camelCase. In camelCase, two words are joined together and represented as a single word. The first alphabet of the word is in lowercase and the first alphabet of the second joined word is in uppercase. For example, if you declare a variable “resultvalue” in JavaScript, you need to use camelCase, and name it as “resultValue”.

- If there are errors in the program, during the debugging process at runtime, the compiler will stop the execution once encountering the debugger keyword. The compiler will not execute the next statement after the debugger keyword unless the error is fixed. You can open the debugger pane to identify the error.

#### Handling Exceptions
-  handling involves adding provisions to handle exceptional/abnormal conditions in a program. Such conditions, if not handled, forces the program to crash. You need to include exception-handling elements in the program to change the normal flow of program execution. A robust program will take care of all possible exceptions.

- In JavaScript, it is quite common to have various types of errors in programs/scripts. You can handle such errors/exceptions using the try…catch block. The syntax of try…catch block is as follows:

                try
                {
                    <code block to be tested>
                }
                catch(error)
                {
                    <code block to handle errors>
                }

- You can use the try statement to define a code block that needs to be tested for any specific errors in the program. You can use the catch statement to define a code block that needs to be executed if an error is identified in the try code block. The try…catch block must be included in a pair. In other words, the try statement is not valid without a catch statement and vice-versa.

- You can also include a finally statement after the try…catch block in the script. The syntax of the finally statement is as follows:

                finally
                {
                    <code block to be executed irrespective of the exceptions>
                }

- The finally block is executed regardless of the outcome of the try…catch block. It does not matter to the compiler if the exceptions are handled or not. The compiler will go ahead and always execute the finally statement block.

   
  
