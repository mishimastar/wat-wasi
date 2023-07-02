import { WASI, WASIOptions } from 'node:wasi';

export type WASIExemplair = WASI & { getImportObject: () => WebAssembly.Imports };

export type ExtendedWASIOptions = WASIOptions & {
    version: 'unstable' | 'preview1';
};

export const CreateWASI = (options?: ExtendedWASIOptions): WASIExemplair => new WASI(options) as WASIExemplair;

// preview1
// WASI {
//     args_get: [Function: bound args_get],
//     args_sizes_get: [Function: bound args_sizes_get],
//     clock_res_get: [Function: bound clock_res_get],
//     clock_time_get: [Function: bound clock_time_get],
//     environ_get: [Function: bound environ_get],
//     environ_sizes_get: [Function: bound environ_sizes_get],
//     fd_advise: [Function: bound fd_advise],
//     fd_allocate: [Function: bound fd_allocate],
//     fd_close: [Function: bound fd_close],
//     fd_datasync: [Function: bound fd_datasync],
//     fd_fdstat_get: [Function: bound fd_fdstat_get],
//     fd_fdstat_set_flags: [Function: bound fd_fdstat_set_flags],
//     fd_fdstat_set_rights: [Function: bound fd_fdstat_set_rights],
//     fd_filestat_get: [Function: bound fd_filestat_get],
//     fd_filestat_set_size: [Function: bound fd_filestat_set_size],
//     fd_filestat_set_times: [Function: bound fd_filestat_set_times],
//     fd_pread: [Function: bound fd_pread],
//     fd_prestat_get: [Function: bound fd_prestat_get],
//     fd_prestat_dir_name: [Function: bound fd_prestat_dir_name],
//     fd_pwrite: [Function: bound fd_pwrite],
//     fd_read: [Function: bound fd_read],
//     fd_readdir: [Function: bound fd_readdir],
//     fd_renumber: [Function: bound fd_renumber],
//     fd_seek: [Function: bound fd_seek],
//     fd_sync: [Function: bound fd_sync],
//     fd_tell: [Function: bound fd_tell],
//     fd_write: [Function: bound fd_write],
//     path_create_directory: [Function: bound path_create_directory],
//     path_filestat_get: [Function: bound path_filestat_get],
//     path_filestat_set_times: [Function: bound path_filestat_set_times],
//     path_link: [Function: bound path_link],
//     path_open: [Function: bound path_open],
//     path_readlink: [Function: bound path_readlink],
//     path_remove_directory: [Function: bound path_remove_directory],
//     path_rename: [Function: bound path_rename],
//     path_symlink: [Function: bound path_symlink],
//     path_unlink_file: [Function: bound path_unlink_file],
//     poll_oneoff: [Function: bound poll_oneoff],
//     proc_exit: [Function: bound proc_exit],
//     proc_raise: [Function: bound proc_raise],
//     random_get: [Function: bound random_get],
//     sched_yield: [Function: bound sched_yield],
//     sock_recv: [Function: bound sock_recv],
//     sock_send: [Function: bound sock_send],
//     sock_shutdown: [Function: bound sock_shutdown]
//   }

//   unstable
//   WASI {
//     args_get: [Function: bound args_get],
//     args_sizes_get: [Function: bound args_sizes_get],
//     clock_res_get: [Function: bound clock_res_get],
//     clock_time_get: [Function: bound clock_time_get],
//     environ_get: [Function: bound environ_get],
//     environ_sizes_get: [Function: bound environ_sizes_get],
//     fd_advise: [Function: bound fd_advise],
//     fd_allocate: [Function: bound fd_allocate],
//     fd_close: [Function: bound fd_close],
//     fd_datasync: [Function: bound fd_datasync],
//     fd_fdstat_get: [Function: bound fd_fdstat_get],
//     fd_fdstat_set_flags: [Function: bound fd_fdstat_set_flags],
//     fd_fdstat_set_rights: [Function: bound fd_fdstat_set_rights],
//     fd_filestat_get: [Function: bound fd_filestat_get],
//     fd_filestat_set_size: [Function: bound fd_filestat_set_size],
//     fd_filestat_set_times: [Function: bound fd_filestat_set_times],
//     fd_pread: [Function: bound fd_pread],
//     fd_prestat_get: [Function: bound fd_prestat_get],
//     fd_prestat_dir_name: [Function: bound fd_prestat_dir_name],
//     fd_pwrite: [Function: bound fd_pwrite],
//     fd_read: [Function: bound fd_read],
//     fd_readdir: [Function: bound fd_readdir],
//     fd_renumber: [Function: bound fd_renumber],
//     fd_seek: [Function: bound fd_seek],
//     fd_sync: [Function: bound fd_sync],
//     fd_tell: [Function: bound fd_tell],
//     fd_write: [Function: bound fd_write],
//     path_create_directory: [Function: bound path_create_directory],
//     path_filestat_get: [Function: bound path_filestat_get],
//     path_filestat_set_times: [Function: bound path_filestat_set_times],
//     path_link: [Function: bound path_link],
//     path_open: [Function: bound path_open],
//     path_readlink: [Function: bound path_readlink],
//     path_remove_directory: [Function: bound path_remove_directory],
//     path_rename: [Function: bound path_rename],
//     path_symlink: [Function: bound path_symlink],
//     path_unlink_file: [Function: bound path_unlink_file],
//     poll_oneoff: [Function: bound poll_oneoff],
//     proc_exit: [Function: bound proc_exit],
//     proc_raise: [Function: bound proc_raise],
//     random_get: [Function: bound random_get],
//     sched_yield: [Function: bound sched_yield],
//     sock_recv: [Function: bound sock_recv],
//     sock_send: [Function: bound sock_send],
//     sock_shutdown: [Function: bound sock_shutdown]
//   }
