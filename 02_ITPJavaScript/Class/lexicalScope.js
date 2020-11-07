//Nusaiba's Counter

let counter = {};

{
    let value = 0;

    counter.increment = () =>
    {
        value++;
    }

    counter.decrement = () =>
    {
        value--;
    }

    counter.resetCount = () =>
    {
        value = 0;
    }

    counter.getCount = () =>
    {
        return value;
    }
}

counter.increment();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getCount());
counter.resetCount();
console.log(counter.getCount());





