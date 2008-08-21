/**
 * (C) Copyright 2007 John J. Foerch
 * (C) Copyright 2007-2008 Jeremy Maitin-Shepard
 *
 * Use, modification, and distribution are subject to the terms specified in the
 * COPYING file.
**/

require("bindings/default/content-buffer/normal.js");
require("element.js");

define_key(content_buffer_normal_keymap, "i", null,
           $hook = browser_object_class_selector("images"));

define_key(content_buffer_normal_keymap, "n", null,
           $hook = browser_object_class_selector("links"));

define_key(content_buffer_normal_keymap, "m", null,
           $hook = browser_object_class_selector("frames"));

define_key(content_buffer_normal_keymap, "e", null,
           $hook = browser_object_class_selector("media"));

define_key(content_buffer_normal_keymap, "S-8 e", null,
           $hook = browser_object_class_selector("media"));

define_key(content_buffer_normal_keymap, "S-8 i", null,
           $hook = browser_object_class_selector("images"));

define_key(content_buffer_normal_keymap, "S-8 n", null,
           $hook = browser_object_class_selector("links"));

define_key(content_buffer_normal_keymap, "S-8 m", null,
           $hook = browser_object_class_selector("frames"));

define_key(content_buffer_normal_keymap, "S-8 M", null,
           $hook = browser_object_class_selector("mathml"));

define_key(content_buffer_normal_keymap, "S-8 u", null,
           $hook = browser_object_class_selector("url"));

function bind_element_operations(keymap) {
    define_key(keymap, "f", "follow", $category = "Browser object");
    define_key(keymap, ";", "focus", $category = "Browser object");
    define_key(keymap, "t", "follow-top", $category = "Browser object");
    define_key(keymap, "s", "save", $category = "Browser object");
    define_key(keymap, "c", "copy", $category = "Browser object");
    define_key(keymap, "back_slash", "view-source", $category = "Browser object");
    define_key(keymap, "x", "shell-command-on-file", $category = "Browser object");
    define_key(keymap, "X", "shell-command-on-url", $category = "Browser object");
    define_key(keymap, "b", "bookmark", $category = "Browser object");
    define_key(keymap, "v", "view-as-mime-type", $category = "Browser object");
}

bind_element_operations(content_buffer_normal_keymap);
