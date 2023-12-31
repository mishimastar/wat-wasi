import { WASI, WASIOptions } from 'node:wasi';

export type WASIExemplair = WASI & { getImportObject: () => WebAssembly.Imports };

export type ExtendedWASIOptions = WASIOptions & {
    version: 'unstable' | 'preview1';
};

export enum StatusCode {
    UVWASI_ESUCCESS = 0,
    UVWASI_E2BIG = 1,
    UVWASI_EACCES = 2,
    UVWASI_EADDRINUSE = 3,
    UVWASI_EADDRNOTAVAIL = 4,
    UVWASI_EAFNOSUPPORT = 5,
    UVWASI_EAGAIN = 6,
    UVWASI_EALREADY = 7,
    UVWASI_EBADF = 8,
    UVWASI_EBADMSG = 9,
    UVWASI_EBUSY = 10,
    UVWASI_ECANCELED = 11,
    UVWASI_ECHILD = 12,
    UVWASI_ECONNABORTED = 13,
    UVWASI_ECONNREFUSED = 14,
    UVWASI_ECONNRESET = 15,
    UVWASI_EDEADLK = 16,
    UVWASI_EDESTADDRREQ = 17,
    UVWASI_EDOM = 18,
    UVWASI_EDQUOT = 19,
    UVWASI_EEXIST = 20,
    UVWASI_EFAULT = 21,
    UVWASI_EFBIG = 22,
    UVWASI_EHOSTUNREACH = 23,
    UVWASI_EIDRM = 24,
    UVWASI_EILSEQ = 25,
    UVWASI_EINPROGRESS = 26,
    UVWASI_EINTR = 27,
    UVWASI_EINVAL = 28,
    UVWASI_EIO = 29,
    UVWASI_EISCONN = 30,
    UVWASI_EISDIR = 31,
    UVWASI_ELOOP = 32,
    UVWASI_EMFILE = 33,
    UVWASI_EMLINK = 34,
    UVWASI_EMSGSIZE = 35,
    UVWASI_EMULTIHOP = 36,
    UVWASI_ENAMETOOLONG = 37,
    UVWASI_ENETDOWN = 38,
    UVWASI_ENETRESET = 39,
    UVWASI_ENETUNREACH = 40,
    UVWASI_ENFILE = 41,
    UVWASI_ENOBUFS = 42,
    UVWASI_ENODEV = 43,
    UVWASI_ENOENT = 44,
    UVWASI_ENOEXEC = 45,
    UVWASI_ENOLCK = 46,
    UVWASI_ENOLINK = 47,
    UVWASI_ENOMEM = 48,
    UVWASI_ENOMSG = 49,
    UVWASI_ENOPROTOOPT = 50,
    UVWASI_ENOSPC = 51,
    UVWASI_ENOSYS = 52,
    UVWASI_ENOTCONN = 53,
    UVWASI_ENOTDIR = 54,
    UVWASI_ENOTEMPTY = 55,
    UVWASI_ENOTRECOVERABLE = 56,
    UVWASI_ENOTSOCK = 57,
    UVWASI_ENOTSUP = 58,
    UVWASI_ENOTTY = 59,
    UVWASI_ENXIO = 60,
    UVWASI_EOVERFLOW = 61,
    UVWASI_EOWNERDEAD = 62,
    UVWASI_EPERM = 63,
    UVWASI_EPIPE = 64,
    UVWASI_EPROTO = 65,
    UVWASI_EPROTONOSUPPORT = 66,
    UVWASI_EPROTOTYPE = 67,
    UVWASI_ERANGE = 68,
    UVWASI_EROFS = 69,
    UVWASI_ESPIPE = 70,
    UVWASI_ESRCH = 71,
    UVWASI_ESTALE = 72,
    UVWASI_ETIMEDOUT = 73,
    UVWASI_ETXTBSY = 74,
    UVWASI_EXDEV = 75,
    UVWASI_ENOTCAPABLE = 76
}

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
