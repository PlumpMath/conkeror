/**
 * (C) Copyright 2008 David Glasser
 * (C) Copyright 2008 Will Farrington
 * (C) Copyright 2008 Jeremy Maitin-Shepard
 * (C) Copyright 2009-2010 John J. Foerch
 *
 * Use, modification, and distribution are subject to the terms specified in the
 * COPYING file.
**/

in_module(null);

require("content-buffer.js");

define_keymap("gmail_keymap", $display_name = "gmail");

// Jumping
define_key(gmail_keymap, "g", null, $fallthrough);
define_key(gmail_keymap, "i", null, $fallthrough);
define_key(gmail_keymap, "t", null, $fallthrough);
define_key(gmail_keymap, "d", null, $fallthrough);
define_key(gmail_keymap, "a", null, $fallthrough);
define_key(gmail_keymap, "b", null, $fallthrough);

// Threadlist
define_key(gmail_keymap, "*", null, $fallthrough);

// Navigation
define_key(gmail_keymap, "u", null, $fallthrough);
define_key(gmail_keymap, "j", null, $fallthrough);
define_key(gmail_keymap, "k", null, $fallthrough);
define_key(gmail_keymap, "o", null, $fallthrough);
define_key(gmail_keymap, "n", null, $fallthrough);
define_key(gmail_keymap, "p", null, $fallthrough);

// Application
define_key(gmail_keymap, "c", null, $fallthrough);
define_key(gmail_keymap, "C", null, $fallthrough);
define_key(gmail_keymap, "/", null, $fallthrough);
define_key(gmail_keymap, "q", null, $fallthrough);
define_key(gmail_keymap, "?", null, $fallthrough);

// Actions
define_key(gmail_keymap, "s", null, $fallthrough);
define_key(gmail_keymap, "e", null, $fallthrough);
define_key(gmail_keymap, "x", null, $fallthrough);
define_key(gmail_keymap, "y", null, $fallthrough);
define_key(gmail_keymap, "!", null, $fallthrough);
define_key(gmail_keymap, "m", null, $fallthrough);
define_key(gmail_keymap, "#", null, $fallthrough);
define_key(gmail_keymap, "r", null, $fallthrough);
define_key(gmail_keymap, "f", null, $fallthrough);
define_key(gmail_keymap, "N", null, $fallthrough);
define_key(gmail_keymap, ".", null, $fallthrough);
define_key(gmail_keymap, "I", null, $fallthrough);
define_key(gmail_keymap, "U", null, $fallthrough);
define_key(gmail_keymap, "]", null, $fallthrough);
define_key(gmail_keymap, "[", null, $fallthrough);
define_key(gmail_keymap, "l", null, $fallthrough);
define_key(gmail_keymap, "return", null, $fallthrough);
define_key(gmail_keymap, "tab", null, $fallthrough);


var gmail_modality = {
    normal: gmail_keymap
};

function gmail_focus_primary_frame (buffer) {
    var frames = buffer.top_frame.frames;
    if (frames.length >= 4)
        buffer.top_frame.frames[3].focus();
}

define_page_mode("gmail-mode",
    build_url_regexp($domain = "mail.google",
                     $path = new RegExp('(?!support)')),
    function enable (buffer) {
        add_hook.call(buffer, "buffer_dom_content_loaded_hook",
                      gmail_focus_primary_frame);
        add_hook.call(buffer, "unfocus_hook", gmail_focus_primary_frame);
        buffer.content_modalities.push(gmail_modality);
    },
    function disable (buffer) {
        remove_hook.call(buffer, "buffer_dom_content_loaded_hook",
                         gmail_focus_primary_frame);
        remove_hook.call(buffer, "unfocus_hook", gmail_focus_primary_frame);
        var i = buffer.content_modalities.indexOf(gmail_modality);
        if (i > -1)
            buffer.content_modalities.splice(i, 1);
    },
    $display_name = "GMail");

page_mode_activate(gmail_mode);

provide("gmail");
