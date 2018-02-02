// TODO: emojidex のアドレス
$('head').append('<script src="https://cdn.rawgit.com/emojidex/emojidex-web/add_option/dist/js/emojidex.js"></script>');
$('head').append('<link href="https://cdn.emojidex.com/scripts/css/emojidex.min.css" rel="stylesheet" />');

// TODO: 将来的にはnpmから
import plugin from '../../../emojidex-tinymce-plugin/src/plugin.js';

tinymce.PluginManager.add('emojidex', plugin);
