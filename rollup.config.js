export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/ng2-cable.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng2-cable',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    'rxjs/Observable': 'Rx',
    'rxjs/ReplaySubject': 'Rx',
    'rxjs/add/operator/map': 'Rx.Observable.prototype',
    'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
    'rxjs/add/observable/fromEvent': 'Rx.Observable',
    'rxjs/add/observable/of': 'Rx.Observable',
    'rxjs/Subject': 'rxjs_Subject',
    'actioncable': 'ActionCable'
  },
  external: [
    '@angular/core',
    'rxjs/add/operator/map',
    'rxjs/add/operator/filter',
    'rxjs/Subject',
    'actioncable'
  ]
}
