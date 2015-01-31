Let's look at <b>Remove Setter Method</b> using a simple example. We have a bank account class. The class has an ID field that should be created once and never change again.

However, the class currently has a setter, which we want to eliminate.

The simplest solution would be to integrate the setter code into the constructor.

In effect, we have already done everything for a case as simple as this one. But there are other, more difficult cases.

Excellent. Now for one more case.

Another unpleasant situation arises when there are subclasses initializing private variables of a parent class.

Then, instead of calling a setter, you should call the parent constructor.

When that is impossible, you must call the necessary initialization method although first you should make sure it is available for the subclasses.

Let's start the final testing.

Now refactoring is complete. If you like, you can compare the old and new code.