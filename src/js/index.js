$('head').append('<script src="https://cdn.emojidex.com/scripts/javascript/emojidex.min.js"></script>');
$('head').append('<link href="https://cdn.emojidex.com/scripts/css/emojidex.min.css" rel="stylesheet" />');

import plugin from 'emojidex-tinymce-plugin';
tinymce.PluginManager.add('emojidex', plugin);
