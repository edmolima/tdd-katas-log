import { fizzBuzz } from './fizzBuzz'

describe('FizzBuzz', () => {
  it('should replace fizz whenever there is a number that is divisible by 3', () => {
    const given = 3
    const expectedValue = [1, 2, 'fizz']

    const actual = fizzBuzz(given)

    expect(actual).toEqual(expectedValue)
  })
  it('should replace buzz whenever there is a number that is divisible by 5', () => {
    const given = 5
    const expectedValue = [1, 2, 'fizz', 4, 'buzz']

    const actual = fizzBuzz(given)

    expect(actual).toEqual(expectedValue)
  })

  it('should replace fizzbuzz whenever there is a number that is divisible by 3 and 5', () => {
    const given = 15
    const expectedValue = [
      1,
      2,
      'fizz',
      4,
      'buzz',
      'fizz',
      7,
      8,
      'fizz',
      'buzz',
      11,
      'fizz',
      13,
      14,
      'fizzbuzz'
    ]

    const actual = fizzBuzz(given)

    expect(actual).toEqual(expectedValue)
  })
})
