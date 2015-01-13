// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('angular-gist-embed.config', [])
    .value('angular-gist-embed.config', {
        debug: true
    });

// Modules
angular.module('angular-gist-embed.directives', []);
angular.module('angular-gist-embed.services', []);
angular.module('angular-gist-embed',
    [
        'angular-gist-embed.config',
        'angular-gist-embed.directives',
        'angular-gist-embed.services'
    ]);
