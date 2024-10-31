# Infinum WordPress Coding Standards

[![Packagist downloads](https://img.shields.io/packagist/dt/infinum/coding-standards-wp.svg?style=for-the-badge)](https://packagist.org/packages/infinum/coding-standards-wp)
[![Travis Build Status](https://img.shields.io/travis/:user/:repo.svg?style=for-the-badge)](https://travis-ci.org/infinum/coding-standards-wp)
[![GitHub tag](https://img.shields.io/github/tag/infinum/coding-standards-wp.svg?style=for-the-badge)](https://github.com/infinum/coding-standards-wp)
[![GitHub stars](https://img.shields.io/github/stars/infinum/coding-standards-wp.svg?style=for-the-badge&label=Stars)](https://github.com/infinum/coding-standards-wp/)
[![License](https://img.shields.io/github/license/infinum/coding-standards-wp.svg?style=for-the-badge)](https://github.com/infinum/coding-standards-wp)

This package contains [Infinum WordPress Coding Standards](https://handbook.infinum.co/books/wordpress) for [PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer/). The intention of this package is to have a unified code across the WordPress projects we do at Infinum, and to help with the code review.

## Installation

### Composer

Composer install is simple. Just run

`composer require infinum/coding-standards-wp`

or add to your `composer.json`

```json
"require-dev": {
  "infinum/coding-standards-wp": "*"
}
```

Then, run the following command to run the standards checks in your project:

```bash
vendor/bin/phpcs --standard=Infinum .
```

Or use Composer

```bash
composer check-cs .
```

The final `.` here specifies the files/folders you want to test - this is typically the current directory (`.`), but you can also selectively check files or directories by specifying them instead.

### Standalone installation

Install the WPCS following the instructions [here](https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards#standalone). Then download the Infinum's coding standards and put the `Infinum` folder in the `wpcs` folder.

## Working in IDE

### Sublime Text 3

To make the sniff work in Sublime Text 3, you need to have sublime linter set up, and add [phpcs linter](https://github.com/SublimeLinter/SublimeLinter-phpcs).

Then in your settings you need to reference the path to the coding standards. It should look something like this

```json
"paths": {
    "linux": [],
    "osx": [
        "${project}/vendor/bin/",
        "/Users/user_name/wpcs/vendor/bin"
    ],
    "windows": []
},
```

The path depends on where you've installed your standards. Then in the linters user settings you'll need to add in the `linters` key

```json
"phpcs": {
    "@disable": false,
    "args": [],
    "excludes": [],
    "standard": "Infinum"
},
```

Or set the `standard` to point to the phpcs.xml.dist in your root folder (**preferred method**)

```json
"phpcs": {
    "@disable": false,
    "args": [],
    "excludes": [],
    "standard": "$folder/phpcs.xml.dist"
},
```

#### Note about global installation

In your `wpcs` folder, when adding Infinum folder. You can clone this repository there, be sure to comment out the `<config name="installed_paths" value="vendor/wp-coding-standards/wpcs"/>` part, so that your sniffer won't go looking for that folder.

### Visual Studio Code

To set up phpcs in your VSCode, use [vscode-phpcs](https://github.com/ikappas/vscode-phpcs/) extension. Once installed in the user settings set

```json
"phpcs.enable": true,
"phpcs.standard": "Infinum",
```

This will look in your project's vendor folder for the Infinum's WordPress Coding Standards, and run the sniffs on every save. You can see the issues in the Problems tab at the bottom.

### Atom

To set up phpcs in the Atom editor, you need to install a couple of packages. First install the base linter package for Atom: [linter](https://atom.io/packages/linter). Upon completion you will be prompted to install its dependency [linter-ui-default](https://atom.io/packages/linter-ui-default). After that install [linter-phpcs](https://atom.io/packages/linter-phpcs).

In `linter-phpcs` package settings you can set the path to previously installed `phpcs` or allow the package to search for `phpcs` executable inside your project. Also, you must set the name of the standard: `"Infinum"` or path to the `ruleset.xml` of Infinum's WordPress Coding Standards. We recommend you to disable searching for configuration files because that can cause some other standards to be used instead.

In config.cson linter-phpcs settings can look like this:

```coffee
# If you want to use phpcs executable available in project
"linter-phpcs":
  autoConfigSearch: false
  codeStandardOrConfigFile: "Infinum"
  disableWhenNoConfigFile: true

# If you want to use specific phpcs executable
"linter-phpcs":
  autoConfigSearch: false
  autoExecutableSearch: false
  codeStandardOrConfigFile: "Infinum"
  disableWhenNoConfigFile: true
  executablePath: "/Users/user_name/wpcs/vendor/bin/phpcs" #For Mac users
  executablePath: "path_to_composer/vendor/bin/phpcs.bat" # For Windows users

# If you want to use specific standard
"linter-phpcs":
  autoConfigSearch: false
  codeStandardOrConfigFile: "vendor/infinum/coding-standards-wp/Infinum/ruleset.xml"
  disableWhenNoConfigFile: true
```

## Credits

Infinum WordPress Coding Standards are maintained and sponsored by
[Infinum](https://www.infinum.co).

<img src="https://infinum.co/infinum.png" width="264">

## License

Infinum WordPress Coding Standards are Copyright © 2018 Infinum. This is free software, and may be redistributed under the terms specified in the LICENSE file.
