import test from 'ava'

import miment from '../src/miment'

test('firstDay api', t => {
  const m = miment('2008-02-21 12:34:56')
  t.deepEqual(m.firstDay().format(), '2008-02-01 00:00:00')
})
