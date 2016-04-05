
module.exports = {
 app_files: {
    js: [
      'frontend/source/common/*/*.js',
      'frontend/source/common/**/*.js',
      '!frontend/source/common/**/*.spec.js',

      'frontend/source/app/*/*.js',
      'frontend/source/app/*.js',
      'frontend/source/app/*/**/*.js',
      '!frontend/source/app/**/*.spec.js'
    ],
	scss:[
		'frontend/source/app/**/*.scss',
		'frontend/source/scss/**/*.scss',
		'!frontend/source/scss/**/main.scss',
		'!frontend/source/scss/**/main-import.scss',
	],
    jsunit: [ 'frontend/source/app/**/*.spec.js' ],

    atpl: [ 'frontend/source/app/**/*.tpl.html' ],
    ctpl: [ 'frontend/source/common/**/*.tpl.html' ]
 },
  test_files: {
    js: [ 'frontend/source/vendor/bower/angular-mocks/angular-mocks.js' ]
  },

 vendor_files: {
     js_header: [
     ],
     cdn_header: [],

     js_footer: [

        'frontend/source/vendor/bower/lodash/lodash.js',
	   	'frontend/source/vendor/bower/fastclick/lib/fastclick.js',
		'frontend/source/vendor/bower/hammerjs/hammer.js',
		 'frontend/source/vendor/bower/moment/min/moment.min.js',
      'frontend/source/vendor/bower/moment/locale/sv.js',
      'frontend/source/vendor/bower/moment/locale/nb.js',
      'frontend/source/vendor/bower/moment/locale/nn.js',
		
        'frontend/source/vendor/bower/angular/angular.js',
		'frontend/source/vendor/bower/angular-sanitize/angular-sanitize.js',
        'frontend/source/vendor/bower/angular-ui-router/release/angular-ui-router.js',
		'frontend/source/vendor/bower/angular-gestures/gestures.js',
		'frontend/source/vendor/bower/angular-translate/angular-translate.js',
		'frontend/source/vendor/bower/angular-moment/angular-moment.js',
		'frontend/source/vendor/bower/rangy/rangy-core.js',
        'frontend/source/vendor/bower/rangy/rangy-selectionsaverestore.js',
		'frontend/source/vendor/bower/textAngular/dist/textAngular-rangy.min.js',
		'frontend/source/vendor/bower/textAngular/dist/textAngular-sanitize.min.js',
		'frontend/source/vendor/bower/textAngular/dist/textAngular.min.js',
		
		'frontend/source/vendor/bower/angular-local-storage/dist/angular-local-storage.js'
     ],
     cdn_footer: [
     ],

     assets: [
     ]
 },
};
