(module
    (import "wasi_snapshot_preview1" "random_get"
        (func $wasi_get_random (param (;pointer;) i32) (param (;len;) i32) (result (;zero???;) i32))
    )

    (memory (export "memory") 1)

    (func (export "getRandom") (param $offset i32) (param $len i32) (result i32)
        (call $wasi_get_random (local.get $offset) (local.get $len))
    )
)