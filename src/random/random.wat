(module
    (import "wasi_snapshot_preview1" "random_get"
        (func $wasi_get_random (param (;pointer;) i32) (param (;len;) i32) (result (;zero???;) i32))
    )
    ;; 0          8b i64 system clock value
    ;; 16         8b i64 system clock resolution
    (memory (export "memory") 1)

    (func (export "getRandom") (param $offset i32) (param $len i32) (result i32)
        (call $wasi_get_random (local.get $offset) (local.get $len))
    )

    ;; (func (export "getTimeResolution") (param $clock_id i32) (result i64)
    ;;     (call $wasi_clock_res_get (local.get $clock_id) (i32.const 0))
    ;;     (i64.load)
    ;; )
)