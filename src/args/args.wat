(module
    (import "wasi_snapshot_preview1" "args_sizes_get"
        (func $wasi_get_args_sizes (param (;pointer_to_counti32;) i32) (param (;pointer_to_sizei32;) i32) (result (;status;) i32))
    )
    (import "wasi_snapshot_preview1" "args_get"
        (func $wasi_get_args (param (;ptr_to_ptrs_i32_array;) i32) (param (;ptr_to_args;) i32) (result (;status;) i32))
    )

    (memory (export "memory") 1)

    (func (export "getArgsSizes") (param $argc i32) (param $argv_buf_size i32) (result (;count;) i32 (;size;) i32)
        (call $wasi_get_args_sizes (local.get $argc) (local.get $argv_buf_size))
        drop
        (i32.load (local.get $argc))
        (i32.load (local.get $argv_buf_size))
    )

    (func (export "getArgs") (param $agrv i32) (param $argv_buf i32)
        (call $wasi_get_args (local.get $agrv) (local.get $argv_buf))
        drop
    )
)