import React, { useState } from 'react';

import pythonImage from './images/python.png';
import javaImage from './images/java.png';
import csharpImage from './images/csharp.png';
import jsImage from './images/js.png';

export default function App() {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [questions, setQuestions] = useState([]);

    const categories = [
      { name: "Python", image: pythonImage },
      { name: "Java", image: javaImage },
      { name: "C#", image: csharpImage },
      { name: "JavaScript", image: jsImage },
    ];

    const pythonQuestions = [        
      {            
        questionText: 'Which of the following is not a data type in Python?',
        answerOptions: [                
          { answerText: 'a. integer', isCorrect: false }, 
          { answerText: 'b. float', isCorrect: false },                
          { answerText: 'c. string', isCorrect: false },                
          { answerText: 'd. character', isCorrect: true },            
        ],
        },
        {            
          questionText: 'Which keyword is used to create a function in Python?',
          answerOptions: [                
            { answerText: 'a. func', isCorrect: false }, 
            { answerText: 'b. function', isCorrect: false },                
            { answerText: 'c. def', isCorrect: true },                
            { answerText: 'f. define', isCorrect: false },            
          ],
          },
          {            
            questionText: 'What is the correct way to import the "math" module in Python?',
            answerOptions: [                
              { answerText: 'a. import Math', isCorrect: true }, 
              { answerText: 'b. from math import *', isCorrect: false },                
              { answerText: 'c. include math', isCorrect: false },                
              { answerText: 'd. from math import math', isCorrect: false },            
            ],
            },
            {            
              questionText: 'Which of the following is not a loop statement in Python?',
              answerOptions: [                
                { answerText: 'a. for loop', isCorrect: false }, 
                { answerText: 'b. while loop', isCorrect: false },                
                { answerText: 'c. do-while loop', isCorrect: true },                
                { answerText: 'd. range loop', isCorrect: false },            
              ],
              },
              {            
                questionText: 'Which of the following is not a data type in Python?',
                answerOptions: [                
                  { answerText: 'a. integer', isCorrect: false }, 
                  { answerText: 'b. float', isCorrect: false },                
                  { answerText: 'c. string', isCorrect: false },                
                  { answerText: 'd. character', isCorrect: true },            
                ],
                }
    ];

    const javaQuestions = [
      {            
        questionText: 'Which of the following is not a valid data type in Java?',
        answerOptions: [                
          { answerText: 'a. int', isCorrect: false },                
          { answerText: 'b. float', isCorrect: false },                
          { answerText: 'c. double', isCorrect: false },                
          { answerText: 'd. decimal', isCorrect: true },            
        ],
        },
        {            
          questionText: 'What is the output of the following code in Java? \n System.out.println(5/2);',
          answerOptions: [                
            { answerText: 'a. 2', isCorrect: false },                
            { answerText: 'b. 2.5', isCorrect: false },                
            { answerText: 'c. 2.0', isCorrect: true },                
            { answerText: 'd. 5/2', isCorrect: false },            
          ],
          },
          {            
            questionText: 'What is the output of the following code? \n String name = "John"; \n System.out.println("Hello " + name);',
            answerOptions: [                
              { answerText: 'a. Hello John', isCorrect: true },                
              { answerText: 'b. John', isCorrect: false },                
              { answerText: 'c. Hello', isCorrect: false },                
              { answerText: 'd. None of the above', isCorrect: false },            
            ],
            },
            {            
              questionText: 'What is the output of the following code? int i = 0; \n while (i < 5) { \n System.out.println(i); \n i++; \n }',
              answerOptions: [                
                { answerText: 'a. 0 1 2 3 4', isCorrect: true },                
                { answerText: 'b. 1 2 3 4 5', isCorrect: false },                
                { answerText: 'c. 0 1 2 3', isCorrect: false },                
                { answerText: 'd. None of the above', isCorrect: false },            
              ],
              },
              {            
                questionText: 'What is the output of the following code in Java? \n System.out.println(5/2);',
                answerOptions: [                
                  { answerText: 'a. 2', isCorrect: false },                
                  { answerText: 'b. 2.5', isCorrect: false },                
                  { answerText: 'c. 2.0', isCorrect: true },                
                  { answerText: 'd. 5/2', isCorrect: false },            
                ],
                }
    ];

    const cSharpQuestions = [        
      {            
        questionText: 'Which of the following is not a valid type in C#?',
        answerOptions: [                
          { answerText: 'a. int', isCorrect: false },                
          { answerText: 'b. bool', isCorrect: false },                
          { answerText: 'c. string', isCorrect: false },                
          { answerText: 'd. float', isCorrect: true },            
        ],
        },
        {            
          questionText: 'Which of the following is not a valid type in C#?',
          answerOptions: [                
            { answerText: 'a. int', isCorrect: false },                
            { answerText: 'b. bool', isCorrect: false },                
            { answerText: 'c. string', isCorrect: false },                
            { answerText: 'd. float', isCorrect: true },            
          ],
          },
          {            
            questionText: 'Which of the following is not a valid type in C#?',
            answerOptions: [                
              { answerText: 'a. int', isCorrect: false },                
              { answerText: 'b. bool', isCorrect: false },                
              { answerText: 'c. string', isCorrect: false },                
              { answerText: 'd. float', isCorrect: true },            
            ],
            },
            {            
              questionText: 'Which of the following is not a valid type in C#?',
              answerOptions: [                
                { answerText: 'a. int', isCorrect: false },                
                { answerText: 'b. bool', isCorrect: false },                
                { answerText: 'c. string', isCorrect: false },                
                { answerText: 'd. float', isCorrect: true },            
              ],
              },
              {            
                questionText: 'Which of the following is not a valid type in C#?',
                answerOptions: [                
                  { answerText: 'a. int', isCorrect: false },                
                  { answerText: 'b. bool', isCorrect: false },                
                  { answerText: 'c. string', isCorrect: false },                
                  { answerText: 'd. float', isCorrect: true },            
                ],
                }
    ];
    const javaScriptQuestions = [   
      {
        questionText: 'What is JavaScript?',
        answerOptions: [
          { answerText: 'a. JavaScript is a scripting language used to make the website interactive', isCorrect: true },
          { answerText: 'b. JavaScript is an assembly language used to make the website interactive', isCorrect: false },
          { answerText: 'c. JavaScript is a compiled language used to make the website interactive', isCorrect: false },
          { answerText: 'd. None of the above', isCorrect: false },
        ],
      },
      {
        questionText: 'Which of the following is correct about JavaScript?',
        answerOptions: [
          { answerText: 'a. JavaScript is an Object-Based language', isCorrect: true },
          { answerText: 'b. JavaScript is Assembly-language', isCorrect: false },
          { answerText: 'c. JavaScript is an Object-Oriented language', isCorrect: false },
          { answerText: 'd. JavaScript is a High-level language', isCorrect: false },
        ]
      },
      {
        questionText: 'Arrays in JavaScript are defined by which of the following statements?',
        answerOptions: [
          { answerText: 'a. It is an ordered list of values', isCorrect: true },
          { answerText: 'b. It is an ordered list of objects', isCorrect: false },
          { answerText: 'c. It is an ordered list of string', isCorrect: false },
          { answerText: 'd. It is an ordered list of functions', isCorrect: false },
        ]
      },
      {
        questionText: 'Will the following JavaScript code work? \n var js = (function(x) {return x*x;}(10));',
        answerOptions: [
          { answerText: 'a. Exception will be thrown', isCorrect: false },
          { answerText: 'b. Memory leak', isCorrect: false },
          { answerText: 'c. Error', isCorrect: false },
          { answerText: 'd. Yes, perfectly', isCorrect: true },
        ]
      },
      {
        questionText: ' Which of the following is not javascript data types?',
        answerOptions: [
          { answerText: 'a. Null type', isCorrect: false },
          { answerText: 'b. Undefined type', isCorrect: false },
          { answerText: 'c. Number type', isCorrect: false },
          { answerText: 'd. All of the above', isCorrect: true },
        ]
      }     
    ]

    const shuffle = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const handleCategorySelection = (category) => {
        setSelectedCategory(category);
        if (category === "Python") {
            setQuestions(shuffle(pythonQuestions));
        } else if (category === "Java") {
            setQuestions(shuffle(javaQuestions));
        } else if (category === "C#") {
            setQuestions(shuffle(cSharpQuestions));
        } else if (category === "JavaScript") {
          setQuestions(shuffle(javaScriptQuestions));
      }
    };

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const restartQuiz = () => {
        setShowScore(false);
        setScore(0);
        setCurrentQuestion(0);
        setSelectedCategory("");
    };
  
    return (
        <div className='app'>
            {!selectedCategory ? (
                <div className='category-selection-section'>
                    <h2>Select a Category to Play</h2>
                    {categories.map((category) => (
                        <button key={category.name} onClick={() => handleCategorySelection(category.name)}>
                            <img src={category.image} alt={category.name} />
                            
                        </button>
                    ))}
                </div>
            ) : showScore ? (
                <div className='score-section'>
                    <h2>You scored {score} out of {questions.length}</h2>
                    <div>
                    <p>The correct answers were:</p>
                    <ol>
                      {questions.map((question, index) => (
                        <li key={index}>
                          {question.answerOptions.find((option) => option.isCorrect).answerText.charAt(0)}
                        </li>
                      ))}
                    </ol>
                    </div>
                    <div>
                    <button onClick={restartQuiz}>Play Again</button>
                    </div>
                </div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}