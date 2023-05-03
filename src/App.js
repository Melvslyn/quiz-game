import React, { useState } from 'react';

export default function App() {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [questions, setQuestions] = useState([]);

    const categories = ["Python", "Java", "C#", "JavaScript"];

    const pythonQuestions = [        
      {            
        questionText: 'Which of the following is not a data type in Python?',
        answerOptions: [                
          { answerText: 'integer', isCorrect: false }, 
          { answerText: 'float', isCorrect: false },                
          { answerText: 'string', isCorrect: false },                
          { answerText: 'character', isCorrect: true },            
        ],
        },
        {            
          questionText: 'Which keyword is used to create a function in Python?',
          answerOptions: [                
            { answerText: 'func', isCorrect: false }, 
            { answerText: 'function', isCorrect: false },                
            { answerText: 'def', isCorrect: true },                
            { answerText: 'define', isCorrect: false },            
          ],
          },
          {            
            questionText: 'What is the correct way to import the "math" module in Python?',
            answerOptions: [                
              { answerText: 'import Math', isCorrect: true }, 
              { answerText: 'from math import *', isCorrect: false },                
              { answerText: 'include math', isCorrect: false },                
              { answerText: 'from math import math', isCorrect: false },            
            ],
            },
            {            
              questionText: 'Which of the following is not a loop statement in Python?',
              answerOptions: [                
                { answerText: 'for loop', isCorrect: false }, 
                { answerText: 'while loop', isCorrect: false },                
                { answerText: 'do-while loop', isCorrect: true },                
                { answerText: 'range loop', isCorrect: false },            
              ],
              },
              {            
                questionText: 'Which of the following is not a data type in Python?',
                answerOptions: [                
                  { answerText: 'integer', isCorrect: false }, 
                  { answerText: 'float', isCorrect: false },                
                  { answerText: 'string', isCorrect: false },                
                  { answerText: 'character', isCorrect: true },            
                ],
                }
    ];

    const javaQuestions = [
      {            
        questionText: 'Which of the following is not a valid data type in Java?',
        answerOptions: [                
          { answerText: 'int', isCorrect: false },                
          { answerText: 'float', isCorrect: false },                
          { answerText: 'double', isCorrect: false },                
          { answerText: 'decimal', isCorrect: true },            
        ],
        },
        {            
          questionText: 'What is the output of the following code in Java? \n System.out.println(5/2);',
          answerOptions: [                
            { answerText: '2', isCorrect: false },                
            { answerText: '2.5', isCorrect: false },                
            { answerText: '2.0', isCorrect: true },                
            { answerText: '5/2', isCorrect: false },            
          ],
          },
          {            
            questionText: 'What is the output of the following code? \n String name = "John"; \n System.out.println("Hello " + name);',
            answerOptions: [                
              { answerText: 'Hello John', isCorrect: true },                
              { answerText: 'John', isCorrect: false },                
              { answerText: 'Hello', isCorrect: false },                
              { answerText: 'None of the above', isCorrect: false },            
            ],
            },
            {            
              questionText: 'What is the output of the following code? int i = 0; \n while (i < 5) { \n System.out.println(i); \n i++; \n }',
              answerOptions: [                
                { answerText: '0 1 2 3 4', isCorrect: true },                
                { answerText: '1 2 3 4 5', isCorrect: false },                
                { answerText: '0 1 2 3', isCorrect: false },                
                { answerText: 'None of the above', isCorrect: false },            
              ],
              },
              {            
                questionText: 'What is the output of the following code in Java? \n System.out.println(5/2);',
                answerOptions: [                
                  { answerText: '2', isCorrect: false },                
                  { answerText: '2.5', isCorrect: false },                
                  { answerText: '2.0', isCorrect: true },                
                  { answerText: '5/2', isCorrect: false },            
                ],
                }
    ];

    const cSharpQuestions = [        
      {            
        questionText: 'Which of the following is not a valid type in C#?',
        answerOptions: [                
          { answerText: 'int', isCorrect: false },                
          { answerText: 'bool', isCorrect: false },                
          { answerText: 'string', isCorrect: false },                
          { answerText: 'float', isCorrect: true },            
        ],
        },
        {            
          questionText: 'Which of the following is not a valid type in C#?',
          answerOptions: [                
            { answerText: 'int', isCorrect: false },                
            { answerText: 'bool', isCorrect: false },                
            { answerText: 'string', isCorrect: false },                
            { answerText: 'float', isCorrect: true },            
          ],
          },
          {            
            questionText: 'Which of the following is not a valid type in C#?',
            answerOptions: [                
              { answerText: 'int', isCorrect: false },                
              { answerText: 'bool', isCorrect: false },                
              { answerText: 'string', isCorrect: false },                
              { answerText: 'float', isCorrect: true },            
            ],
            },
            {            
              questionText: 'Which of the following is not a valid type in C#?',
              answerOptions: [                
                { answerText: 'int', isCorrect: false },                
                { answerText: 'bool', isCorrect: false },                
                { answerText: 'string', isCorrect: false },                
                { answerText: 'float', isCorrect: true },            
              ],
              },
              {            
                questionText: 'Which of the following is not a valid type in C#?',
                answerOptions: [                
                  { answerText: 'int', isCorrect: false },                
                  { answerText: 'bool', isCorrect: false },                
                  { answerText: 'string', isCorrect: false },                
                  { answerText: 'float', isCorrect: true },            
                ],
                }
    ];
    const javaScriptQuestions = [   
      {
        questionText: 'Example question here!',
        answerOptions: [
          { answerText: 'int', isCorrect: false },
          { answerText: 'int', isCorrect: false },
          { answerText: 'int', isCorrect: false },
          { answerText: 'int', isCorrect: false },
        ],
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
                        <button key={category} onClick={() => handleCategorySelection(category)}>
                            {category}
                        </button>
                    ))}
                </div>
            ) : showScore ? (
                <div className='score-section'>
                    <h2>You scored {score} out of {questions.length}</h2>
                    <button onClick={restartQuiz}>Play Again</button>
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