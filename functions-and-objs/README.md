## Bike Factory

The code defines a Bike Factory, used to create bike objects and track bike status.
A cyclist can have a bike and keep an exercise log.
The logs can be represented by a report.

By modelling this small system, we illustrate several fundamental JS concepts:

1. The factory has private scope, created using an IIFE.
2. The factory keeps track of the created bikes and exposes a method to create new bikes.
3. Both `cyclist` and `bikeFactory` share bike objects, creating mutable shared state. This might be a red flag, but the goal is to illustrate how object references work.
4. Report functions are initially unbound functions that expect objects that hold a log, as in 'duck typing'. It should illustrate how detached functions can be dynamically bound to different contexts and how we can use it to compose behavior inside objects.
