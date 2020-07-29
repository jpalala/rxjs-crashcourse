# RXJS crash course

RXJS library is for creating reactive programs by comosing asynchronous and event-based programs. 

It does this by using observable sequences.

Key terms:

- *Observable* a data stream or source. Read and Write.

- *Subscriptions* Observables do not run without a subscription. It's a for-loop that runs over time.

- *Emit* When an observable is triggered by when something subscribes or unsubscribes from it.

- *Operator* These affect the way Observables emit values


These info can be found on https://fireship.io/lessons/rxjs-basic-pro-tips/



```

const observable = Rx.Observable.create( observer => {
    observer.next( 'hello' )
    observer.next( 'world' )
})

observable.subscribe(val => console.log(val))

```

Above is an example of a basic observable is created with the create() method. It emits a value when the observer.next() is called.

It only emits when the observable is subscribed to.

The code above will output `hello` and `world`.


## fromEvent


This creates an observable from mouse clicks.

`fromEvent()` is demonstrated in the basic example in the examples directory.

