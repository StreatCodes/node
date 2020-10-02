const t = require('tap')
const start = require('../../lib/start.js')
t.isa(start, Function)
t.equal(start.completion, require('../../lib/utils/completion/none.js'), 'empty completion')
t.equal(start.usage, 'npm start [-- <args>]')
