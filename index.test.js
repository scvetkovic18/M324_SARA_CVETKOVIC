// index.test.js
import { sum } from './index.js'
import assert from 'node:assert'

describe('sum', () => {
  it('should add 1 + 2 to equal 3', () => {
    assert.equal(sum(1, 2), 3)
  })
})
