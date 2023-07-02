(module
    (import "wasi_snapshot_preview1" "environ_sizes_get"
        (func $wasi_get_envs_sizes (param (;pointer_to_counti32;) i32) (param (;pointer_to_sizei32;) i32) (result (;status;) i32))
    )
    (import "wasi_snapshot_preview1" "environ_get"
        (func $wasi_get_env (param (;ptr_to_ptrs_i32_array;) i32) (param (;ptr_to_args;) i32) (result (;status;) i32))
    )

    (memory (export "memory") 1)

    (func (export "getEnvSizes") (param $env i32) (param $env_buf_size i32) (result (;count;) i32 (;size;) i32)
        (call $wasi_get_envs_sizes (local.get $env) (local.get $env_buf_size))
        drop
        (i32.load (local.get $env))
        (i32.load (local.get $env_buf_size))
    )

    (func (export "getEnv") (param $agrv i32) (param $argv_buf i32)
        (call $wasi_get_env (local.get $agrv) (local.get $argv_buf))
        drop
    )
)