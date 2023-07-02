# wat-wasi

## About

I decided to learn WASI, but I faced the fact that for WebAssembly Text `(WAT)` there is no description of the functions that WASI provides.

_(I found nothing for NodeJS runtime)_

I got all the functions names, but the interfaces are not described, as well as what it does.

Therefore, I began to collect knowledge, mainly from the [C resources of the NodeJS](https://github.com/nodejs/node/blob/50477fa35367bb76e5f56ac93d661b01a5578cec/deps/uvwasi/src/uvwasi.c), the meaning of functions from [the docks of Wasmtime runtime](https://github.com/bytecodealliance/wasmtime/blob/c19c729214e2237902eb177609643cb6523b7f2b/crates/wasi/witx/wasi_snapshot_preview1.witx#L11) (it differs from the NodeJS's API for WASI).

I write down knowledge in the form of primitive work with functions in this repo.

---

## Done:

-   args_get ✅
-   args_sizes_get ✅
-   clock_res_get ✅
-   clock_time_get ✅
-   environ_get ✅
-   environ_sizes_get ✅
-   fd_advise ❌
-   fd_allocate ❌
-   fd_close ❌
-   fd_datasync ❌
-   fd_fdstat_get ❌
-   fd_fdstat_set_flags ❌
-   fd_fdstat_set_rights ❌
-   fd_filestat_get ❌
-   fd_filestat_set_size ❌
-   fd_filestat_set_times ❌
-   fd_pread ❌
-   fd_prestat_get ❌
-   fd_prestat_dir_name ❌
-   fd_pwrite ❌
-   fd_read ❌
-   fd_readdir ❌
-   fd_renumber ❌
-   fd_seek ❌
-   fd_sync ❌
-   fd_tell ❌
-   fd_write ❌
-   path_create_directory ❌
-   path_filestat_get ❌
-   path_filestat_set_times ❌
-   path_link ❌
-   path_open ❌
-   path_readlink ❌
-   path_remove_directory ❌
-   path_rename ❌
-   path_symlink ❌
-   path_unlink_file ❌
-   poll_oneoff ❌
-   proc_exit ❌
-   proc_raise ❌
-   random_get ✅
-   sched_yield ❌
-   sock_recv ❌
-   sock_send ❌
-   sock_shutdown ❌
