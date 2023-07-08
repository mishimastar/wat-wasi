# wat-wasi

## About

I decided to learn WASI, but I faced the fact that for WebAssembly Text `(WAT)` there is no description of the functions that WASI provides.

_(I found nothing for NodeJS runtime)_

I got all the functions names, but the interfaces are not described, as well as what it does.

Therefore, I began to collect knowledge, mainly from the [C resources of the NodeJS](https://github.com/nodejs/node/blob/50477fa35367bb76e5f56ac93d661b01a5578cec/deps/uvwasi/src/uvwasi.c), the meaning of functions from [the docks of Wasmtime runtime](https://github.com/bytecodealliance/wasmtime/blob/c19c729214e2237902eb177609643cb6523b7f2b/crates/wasi/witx/wasi_snapshot_preview1.witx#L11) (it differs from the NodeJS's API for WASI).

I write down knowledge in the form of primitive work with functions in this repo.

---

## Done:

| Function name           |       Status       |                              Description                               |
| :---------------------- | :----------------: | :--------------------------------------------------------------------: |
| args_get                | :heavy_check_mark: |  [Folder](https://github.com/mishimastar/wat-wasi/tree/main/src/args)  |
| args_sizes_get          | :heavy_check_mark: |  [Folder](https://github.com/mishimastar/wat-wasi/tree/main/src/args)  |
| clock_res_get           | :heavy_check_mark: | [Folder](https://github.com/mishimastar/wat-wasi/tree/main/src/clock)  |
| clock_time_get          | :heavy_check_mark: | [Folder](https://github.com/mishimastar/wat-wasi/tree/main/src/clock)  |
| environ_get             | :heavy_check_mark: |  [Folder](https://github.com/mishimastar/wat-wasi/tree/main/src/env)   |
| environ_sizes_get       | :heavy_check_mark: |  [Folder](https://github.com/mishimastar/wat-wasi/tree/main/src/env)   |
| fd_advise               |        :x:         |                                                                        |
| fd_allocate             |        :x:         |                                                                        |
| fd_close                |        :x:         |                                                                        |
| fd_datasync             |        :x:         |                                                                        |
| fd_fdstat_get           |        :x:         |                                                                        |
| fd_fdstat_set_flags     |        :x:         |                                                                        |
| fd_fdstat_set_rights    |        :x:         |                                                                        |
| fd_filestat_get         |        :x:         |                                                                        |
| fd_filestat_set_size    |        :x:         |                                                                        |
| fd_filestat_set_times   |        :x:         |                                                                        |
| fd_pread                |        :x:         |                                                                        |
| fd_prestat_get          |        :x:         |                                                                        |
| fd_prestat_dir_name     |        :x:         |                                                                        |
| fd_pwrite               |        :x:         |                                                                        |
| fd_read                 | :heavy_check_mark: |   [Folder](https://github.com/mishimastar/wat-wasi/tree/main/src/fd)   |
| fd_readdir              |        :x:         |                                                                        |
| fd_renumber             |        :x:         |                                                                        |
| fd_seek                 |        :x:         |                                                                        |
| fd_sync                 |        :x:         |                                                                        |
| fd_tell                 |        :x:         |                                                                        |
| fd_write                | :heavy_check_mark: |   [Folder](https://github.com/mishimastar/wat-wasi/tree/main/src/fd)   |
| path_create_directory   |        :x:         |                                                                        |
| path_filestat_get       |        :x:         |                                                                        |
| path_filestat_set_times |        :x:         |                                                                        |
| path_link               |        :x:         |                                                                        |
| path_open               |        :x:         |                                                                        |
| path_readlink           |        :x:         |                                                                        |
| path_remove_directory   |        :x:         |                                                                        |
| path_rename             |        :x:         |                                                                        |
| path_symlink            |        :x:         |                                                                        |
| path_unlink_file        |        :x:         |                                                                        |
| poll_oneoff             |        :x:         |                                                                        |
| proc_exit               |        :x:         |                                                                        |
| proc_raise              |        :x:         |                                                                        |
| random_get              | :heavy_check_mark: | [Folder](https://github.com/mishimastar/wat-wasi/tree/main/src/random) |
| sched_yield             |        :x:         |                                                                        |
| sock_recv               |        :x:         |                                                                        |
| sock_send               |        :x:         |                                                                        |
| sock_shutdown           |        :x:         |                                                                        |
