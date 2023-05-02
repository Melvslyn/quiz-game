import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Which of the following is not a data type in Python',
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
			questionText: 'What is the output of the following code? numbers = [1, 2, 3, 4, 5] print(numbers[1:4])',
			answerOptions: [
				{ answerText: '[1, 2, 3]', isCorrect: false },
				{ answerText: '[2, 3, 4]', isCorrect: true },
				{ answerText: '[2, 3, 4, 5]', isCorrect: false },
				{ answerText: '[1, 2, 4]', isCorrect: false },
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
	];

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
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
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