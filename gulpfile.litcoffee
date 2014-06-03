Build ui-styles from source into
build/ui-styles.html, all streamlined and ready to be included.

Having both the literate source, and the fully built output allows you to choose
if you want to have a fully `vulcanize` input, or to fully `vulcanize` your
entire project at the end.

    gulp = require 'gulp'
    less = require 'gulp-less'
    rename = require 'gulp-rename'
    express = require 'express'
    util = require 'util'
    handle = (stream)->
      stream.on 'error', ->
        util.log.apply this, arguments
        stream.end()
    src ='./'
    dest = './'

    gulp.task  'style', ->
      gulp.src '*.less', {cwd: src}
        .pipe handle less()
        .pipe gulp.dest dest

    gulp.task 'build', ['style']

    gulp.task 'watch', ->
      app = express()
      app.use(express.static(__dirname))
      app.listen(10000)
      console.log 'http://localhost:10000/demo.html'

      watcher = gulp.watch '**/*.less', ['style']
      watcher.on 'change', ->
        console.log 'rebuildling...'
