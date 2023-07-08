(module
    (import "wasi_snapshot_preview1" "fd_write"
        (func $wasi_fd_write (param (;fd;) i32) (param (;iovs_ptr;) i32) (param (;iovs_len;) i32) (param (;nwritten;) i32) (result (;status;) i32))
    )
    (import "wasi_snapshot_preview1" "fd_read"
        (func $wasi_fd_read (param (;fd;) i32) (param (;iovs_ptr;) i32) (param (;iovs_len;) i32) (param (;nwritten;) i32) (result (;status;) i32))
    )


    (memory (export "memory") 1)
    (data (i32.const 16) "0123456789abcdef\n")

    (func $writeIOVector (param $iov_pointer i32) (param $start_ptr i32) (param $len i32) (result (;next_ptr;) i32)
        (i32.store (local.get $iov_pointer) (local.get $start_ptr))
        (i32.store (i32.add (local.get $iov_pointer) (i32.const 4)) (local.get $len))
        (i32.add (local.get $iov_pointer) (i32.const 8))
    )

    (func (export "fdWrite") (param $fd i32) (param $ptr i32) (param $len i32) (result i32)
        (call $wasi_fd_write 
            (local.get $fd) 
            (i32.const 0) 
            (i32.const 1) 
            (call $writeIOVector (i32.const 0) (local.get $ptr) (local.get $len))
        )

    )

    (func (export "fdRead") (param $fd i32) (param $ptr i32) (param $max_len i32) (result i32)
        (call $wasi_fd_read 
            (local.get $fd) 
            (i32.const 32) 
            (i32.const 1) 
            (call $writeIOVector (i32.const 32) (local.get $ptr) (local.get $max_len))
        )
    )

    (func (export "echo") (param $fd i32) (param $ptr i32) (param $max_len i32) (result i32 i32)
        (call $wasi_fd_read 
            (local.get $fd) 
            (i32.const 64) 
            (i32.const 1) 
            (call $writeIOVector (i32.const 64) (local.get $ptr) (local.get $max_len))
        )
        (call $wasi_fd_write 
            (local.get $fd) 
            (i32.const 64) 
            (i32.const 1)
            (i32.const 72)
        )
    )
)