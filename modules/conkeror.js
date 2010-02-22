/**
 * (C) Copyright 2007-2008 Jeremy Maitin-Shepard
 * (C) Copyright 2009 John J. Foerch
 *
 * Use, modification, and distribution are subject to the terms specified in the
 * COPYING file.
**/

var start_time = Date.now();

require("keywords.js");
require("labels.js");
require("coroutine.js");
require("debug.js");
require("hook.js");
require("timer.js");
require("pretty-print.js");
require("services.js");

require("string.js");
require("pref.js");
require("env.js");
require("source-code.js");
require("user-variable.js");
require("stylesheet.js");
require("extension.js");
require("array.js");
require("builtin-commands.js");

require("utils.js");
require("interactive.js");
require("minibuffer.js");
require("minibuffer-read.js");
require("minibuffer-read-option.js");
require("minibuffer-completion.js");
require("minibuffer-read-file.js");
require("spawn-process.js");
require("mime.js");
require("keymap.js");
require("input.js");
require("buffer.js");
require("window.js");
require("content-handler.js");
require("download-manager.js");

require("log-routes.js");

require("element.js");

require("buffer.js")
require("content-buffer.js");
require("content-buffer-input.js");
require("quote.js");
require("caret.js");

require("universal-argument.js");
require("commands.js");
require("webjump.js");
require("history.js");
require("scroll.js");

require("save.js");

require("zoom.js");
require("follow-relationship.js");

require("find.js");

require("hints.js");

require("help.js");

require("rc.js");

require("ssl.js");

require("media.js");

require("command-line.js");

require("search-engine.js");

require("permission-manager.js");
require("cookie.js");
require("cache.js");

require("theme.js");


define_variable("cwd", get_home_directory(),
    "Current working directory, also known as your default download "+
    "and shell-command directory.  It will often have a buffer-local "+
    "value.");


/* Re-define load_paths as a user variable. */
define_variable("load_paths", load_paths,
    "Array of URL prefixes searched in order when loading a module.\n"+
    "Each entry must end in a slash, and should begin with file:// or "+
    "chrome://.");
