(module
    (import "wasi_snapshot_preview1" "clock_time_get"
        (func $wasi_clock_time_get (param (;clock_id;) i32 (;precision;) i64 (;time_pointer;) i32) (result (;pointer;) i32))
    )
    (import "wasi_snapshot_preview1" "clock_res_get"
        (func $wasi_clock_res_get (param (;clock_id;) i32 (;resulution_pointer;) i32) (result (;pointer;) i32))
    ) 

    ;; 0          8b i64 system clock value
    ;; 16         8b i64 system clock resolution
    (memory (export "memory") 1)

    (func (export "getTimeNanos") (param $clock_id i32) (param $precision i64) (result i64)
        (call $wasi_clock_time_get (local.get $clock_id) (local.get $precision) (i32.const 0))
        (i64.load)
    )

    (func (export "getTimeResolution") (param $clock_id i32) (result i64)
        (call $wasi_clock_res_get (local.get $clock_id) (i32.const 0))
        (i64.load)
    )
)