// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
};

/** User packages configuration. */
const packages: any = {
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/material-test',
  'app/header',
  'app/sites',
  'app/raw-html',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

const materialPkgs: string[] = [
    'button',
    'card',
    'checkbox',
    'core',
    'grid-list',
    'icon',
    'input',
    'list',
    'menu',
    'progress-bar',
    'progress-circle',
    'radio',
    'sidenav',
    'slide-toggle',
    'tabs',
    'toolbar'
];

materialPkgs.forEach((pkg) => {
  cliSystemConfigPackages[`@angular2-material/${pkg}`] = { format: 'cjs', defaultExtenstion: 'js', main: `${pkg}.js`};
});


/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js',
    '@angular2-material': 'vendor/@angular2-material',
    'marked': 'vendor/marked/lib/marked.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
