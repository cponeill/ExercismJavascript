class WordProblem {
	constructor(question) {
		const Operators = {
			'What is ': '',
			'?': '',
			'plus': '+',
			'minus': '-',
			'multiplied by': '*',
			'divided by': '/',
			'raised to the': '**',
			'th power': ''
		}
		let expr = question.replace(
				/What is |\?|plus|minus|multiplied by|divided by|raised to the|th power/g, 
				w => Operators[w])

		this._answer = expr.split(' ').reduce((acc, cur, i, e) => {
			if(i === 0) {
				return Number(cur)
			}
			switch(cur) {
				case '+': return Number(acc) +Number(e[i+1])
				case '-': return acc -e[i+1]
				case '*': return acc *e[i+1]
				case '/': return acc /e[i+1]
				case '**': return Math.pow(acc, e[i+1])
				default:
					return isNaN(cur)? undefined: acc
			}
		})
	}

	answer() {
		if(!this._answer) {
			throw new ArgumentError()
		}

		return this._answer
	}
}

class ArgumentError extends Error {}

module.exports = {
	WordProblem,
	ArgumentError
}
