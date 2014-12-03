Package.describe({
    name : 'fancybox-full',
    summary : "Responsive media / lightbox repackaged for meteor; full package, including jquery.mousewheel-3 and fancybox.helpers. License: http://creativecommons.org/licenses/by-nc/3.0/ (plz see http://www.fancyapps.com/fancybox/#license); forked from https://github.com/matteodem/meteor-fancybox/ (by https://github.com/matteodem) and https://github.com/fancyapps/fancyBox (by Janis Skarnelis - janis@fancyapps.com)",
    version: '2.1.5',
    git: 'https://github.com/Sebl29/meteor-fancybox'
});

Package.on_use(function(api) {
    api.use('jquery', 'client');
    api.add_files([
        'lib/1-lib/jquery.mousewheel-3.0.6.pack.js',
        'lib/core/jquery.fancybox.css',
        'lib/core/jquery.fancybox.pack.js',
        'lib/core/fancybox_loading.gif',
        'lib/core/fancybox_loading@2x.gif',
        'lib/core/fancybox_overlay.png',
        'lib/core/fancybox_sprite.png',
        'lib/core/fancybox_sprite@2x.png',
        'lib/core/blank.gif',
        'lib/helpers/fancybox_buttons.png',
        'lib/helpers/jquery.fancybox-buttons.css',
        'lib/helpers/jquery.fancybox-buttons.js',
        'lib/helpers/jquery.fancybox-media.js',
        'lib/helpers/jquery.fancybox-thumbs.css',
        'lib/helpers/jquery.fancybox-thumbs.js',
		'path-override.css'],
        'client');
});
