import $ from 'jquery';
import emojidex from '../../node_modules/emojidex/dist/js/emojidex.js';
import plugin from '../../../emojidex-tinymce-plugin/src/plugin.js'; // TODO:

tinymce.PluginManager.add('emojidex', plugin);
