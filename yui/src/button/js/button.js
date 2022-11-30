// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/*
 * @package    atto_menutab
 * @copyright  2020 IT Innovation Lab, York University
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/**
 * @module moodle-atto_menutab-button
 */

/**
 * Atto text editor gftabs plugin.
 *
 * @namespace M.atto_menutab
 * @class button
 * @extends M.editor_atto.EditorPlugin
 */

Y.namespace('M.atto_menutab').Button = Y.Base.create('button', Y.M.editor_atto.EditorPlugin, [], {
    initializer: function () {

        // Check whether we are editing a label within the Glendon course format.
        var form = this.get('host').editor.ancestor('body#page-mod-label-mod.format-menutab');
        // Only add plugin if this is a label wihtin the Glendon course format.
        if (!form) {
            return;
        }

        this.addButton({
            title: 'tab',
            icon: 'i/folder',
            callback: this._changeStyle,
            buttonName: 'tab',
        });
    },

    /**
     * Change the gftabs to the specified style.
     *
     * @method _changeStyle
     * @param {EventFacade} e
     * @param {string} color The new style
     * @private
     */
    _changeStyle: function (e, style) {
        document.execCommand('formatBlock', false, '<h2>');

        // Mark as updated
        this.markUpdated();
    }
});
