(module
  (func $fibTemp (param $n i32) (param $fibn1 i32) (param $fibn2 i32) (result i32)
    (if (result i32)
        (i32.eqz (local.get $n))
        (then (local.get $fibn1))
        (else 
            (call $fibTemp
              (i32.sub (local.get $n)(i32.const 1))
              (local.get $fibn2)
              (i32.add (local.get $fibn1) (local.get $fibn2))
            )
        )
    )
  )

  (func $fibonacci (param $index i32) (result i32)
    (call $fibTemp (local.get $index) (i32.const 0) (i32.const 1))
  )

  (export "fibonacci" (func $fibonacci))
)