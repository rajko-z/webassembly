(module
    (func $fibonacci (param $index i32) (result i32) (local $fibn i32)
     (local $fibn1 i32) (local $fibn2 i32) (local $n i32)
        i32.const 0
        local.set $fibn ;; fibn = 0
        i32.const 1
        local.set $fibn1 ;; fibn1 = 1
        i32.const 0
        local.set $fibn2 ;; fibn2 = 0
        local.get $index
        local.set $n ;; n = 1. par. funkcije
        (block (loop ;; n > 0
            local.get $n
            i32.const 0
            i32.eq
            br_if 1 ;; provera uslova za n, 1 kaže da se ide blok iznad
            local.get $fibn1
            local.set $fibn2 ;; fibn2 = fibn1
            local.get $fibn
            local.set $fibn1 ;; fibn1 = fibn

            local.get $fibn1
            local.get $fibn2
            i32.add
            local.set $fibn ;; fibn = fibn1 + fibn2
            ;; n--
            local.get $n
            i32.const 1
            i32.sub
            local.set $n
            br 0   ;; br 0 znaci branch to the top of the stack, llop
        ))
        local.get $fibn
    )
    (export "fibonacci" (func $fibonacci))
)