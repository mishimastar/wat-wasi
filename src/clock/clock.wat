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
    (data (i32.const 48) "0123456789abcdef")
    (data (i32.const 72) "-")
    (data (i32.const 77) "-1")
    (data (i32.const 82) "-be56-0242ac120002")


    (func (export "getTimeNanos") (param $clock_id i32) (param $precision i64) (result i64)
        (call $wasi_clock_time_get (local.get $clock_id) (local.get $precision) (i32.const 0))
        (i64.load)
    )

    (func (export "getTimeResolution") (param $clock_id i32) (result i64)
        (call $wasi_clock_res_get (local.get $clock_id) (i32.const 0))
        (i64.load)
    )

    (func (export "gen1") (param $micro i32)
        (local $ss i64)
        ;; (global.get $nanoseconds)
        (call $wasi_clock_time_get (i32.const 0) (i64.const 1) (i32.const 0))
        (i64.load)
        (i64.div_u (i64.const 100))
        (i64.add (i64.const 122192928000000000))
        (local.set $ss)

        (i32.const 79) 
        (i32.const 80) ;; high
        (i32.const 81) 
        
        (i32.const 73) 
        (i32.const 74) ;; mid
        (i32.const 75) 
        (i32.const 76) 


        (i32.const 64) 
        (i32.const 65)
        (i32.const 66)
        (i32.const 67) ;; low
        (i32.const 68)
        (i32.const 69)
        (i32.const 70)
        (i32.const 71)

        (local.get $ss)
        (i32.wrap_i64 (i64.and (i64.const 15)))
        (i32.load8_u offset=48)
        (i32.store8)

        (local.get $ss)
        (i64.shr_u (i64.const 4))
        (i32.wrap_i64 (i64.and (i64.const 15)))
        (i32.load8_u offset=48)
        (i32.store8)

        (local.get $ss)
        (i64.shr_u (i64.const 8))
        (i32.wrap_i64 (i64.and (i64.const 15)))
        (i32.load8_u offset=48)
        (i32.store8)

        (local.get $ss)
        (i64.shr_u (i64.const 12))
        (i32.wrap_i64 (i64.and (i64.const 15)))
        (i32.load8_u offset=48)
        (i32.store8)

        (local.get $ss)
        (i64.shr_u (i64.const 16))
        (i32.wrap_i64 (i64.and (i64.const 15)))
        (i32.load8_u offset=48)
        (i32.store8)

        (local.get $ss)
        (i64.shr_u (i64.const 20))
        (i32.wrap_i64 (i64.and (i64.const 15)))
        (i32.load8_u offset=48)
        (i32.store8)

        (local.get $ss)
        (i64.shr_u (i64.const 24))
        (i32.wrap_i64 (i64.and (i64.const 15)))
        (i32.load8_u offset=48)
        (i32.store8)

        (local.get $ss)
        (i64.shr_u (i64.const 28))
        (i32.wrap_i64 (i64.and (i64.const 15)))
        (i32.load8_u offset=48)
        (i32.store8)

        (local.get $ss)
        (i64.shr_u (i64.const 32))
        (i32.wrap_i64 (i64.and (i64.const 15)))
        (i32.load8_u offset=48)
        (i32.store8)

        (local.get $ss)
        (i64.shr_u (i64.const 36))
        (i32.wrap_i64 (i64.and (i64.const 15)))
        (i32.load8_u offset=48)
        (i32.store8)

        (local.get $ss)
        (i64.shr_u (i64.const 40))
        (i32.wrap_i64 (i64.and (i64.const 15)))
        (i32.load8_u offset=48)
        (i32.store8)

        (local.get $ss)
        (i64.shr_u (i64.const 44))
        (i32.wrap_i64 (i64.and (i64.const 15)))
        (i32.load8_u offset=48)
        (i32.store8)

        (local.get $ss)
        (i64.shr_u (i64.const 48))
        (i32.wrap_i64 (i64.and (i64.const 15)))
        (i32.load8_u offset=48)
        (i32.store8)

        (local.get $ss)
        (i64.shr_u (i64.const 52))
        (i32.wrap_i64 (i64.and (i64.const 15)))
        (i32.load8_u offset=48)
        (i32.store8)

        (local.get $ss)
        (i64.shr_u (i64.const 56))
        (i32.wrap_i64 (i64.and (i64.const 15)))
        (i32.load8_u offset=48)
        (i32.store8)
    )
)